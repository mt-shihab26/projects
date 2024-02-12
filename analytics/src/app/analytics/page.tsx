import analytics from "@/util/analytics";

const Analytics = async () => {
    const x = await analytics.retrieve_days("home", 7);
    return <div>{JSON.stringify(x, null, 2)}</div>;
};

export default Analytics;
