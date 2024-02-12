import { NextResponse, type NextRequest } from "next/server";
import analytics from "./util/analytics";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/") {
        try {
            analytics.track("home", { path: "/" });
        } catch (e: unknown) {
            console.error(e);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
};
