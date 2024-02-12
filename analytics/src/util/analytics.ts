import redis from "@/lib/redis";
import { format, subDays } from "date-fns";

const get_date = (sub: number = 0) => {
    const dateXDaysAgo = subDays(new Date(), sub);
    return format(dateXDaysAgo, "dd/MM/yyyy");
};

type TRetrieve = {
    date: string;
    events: { [x: string]: number }[];
};

const retention = 60 * 60 * 24 * 7;

const analytics = {
    track: async (namespace: string, event: object = {}) => {
        const key = `analytics::${namespace}::${get_date(2)}`;
        await redis.hincrby(key, JSON.stringify(event), 1);
        await redis.expire(key, retention);
    },
    retrieve: async (namespace: string, date: string): Promise<TRetrieve> => {
        const response: Record<string, string> | null = await redis.hgetall(
            `analytics::${namespace}::${date}`,
        );
        return {
            date,
            events: Object.entries(response || []).map(([key, value]) => ({
                [key]: Number(value),
            })),
        };
    },
    retrieve_days: async (namespace: string, last_n_days: number) => {
        const promises: Promise<TRetrieve>[] = [];
        for (let i = 0; i < last_n_days; i++) {
            promises.push(analytics.retrieve(namespace, get_date(i)));
        }
        return await Promise.all(promises);
    },
};

export default analytics;
