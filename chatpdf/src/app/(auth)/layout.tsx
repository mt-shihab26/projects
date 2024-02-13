import type { ReactNode } from "react";

const AuthLayout = (p: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
            {p.children}
        </div>
    );
};

export default AuthLayout;
