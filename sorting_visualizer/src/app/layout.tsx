import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { SortingAlgorithmProvider } from "@/contexts/sorting_algorithm";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "Sorting Visualizer",
};

const Providers = (p: { children: ReactNode }) => {
    return <SortingAlgorithmProvider>{p.children}</SortingAlgorithmProvider>;
};

const Layout = (p: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{p.children}</Providers>
            </body>
        </html>
    );
};

export { metadata };
export default Layout;
