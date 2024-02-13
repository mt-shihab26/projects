import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

import Link from "next/link";

const Home = async () => {
    const { userId } = auth();
    const isAuth = !!userId;
    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-2 bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="flex gap-3">
                <h1 className="text-5xl font-semibold">Chat with any PDF</h1>
                <UserButton afterSignOutUrl="/" />
            </div>
            <div>{isAuth && <Button>Go to Chats</Button>}</div>
            <p className="max-w-xl text-center text-lg text-slate-600">
                Join millions of students, researchers and professionals to instantly answer
                questions and understand research with AI
            </p>
            <div className="mt-2">
                {isAuth ? (
                    <div>Hello</div>
                ) : (
                    <Link href="/login">
                        <Button>
                            Login to get Started!
                            <LogIn className="ml-2 h-4 w-4 " />
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Home;
