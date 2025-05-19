"use client"

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useVerify } from "@/hooks";

const Page = () => {
    useVerify();
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    const isLoading = useAppSelector(state => state.auth.isLoading);
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && isAuthenticated === false) {
            router.push("/auth/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return null; // or a loading spinner
    }

    if (isAuthenticated === false) {
        return null;
    }

    return (
        <main>
            <h1>Dashboard Page</h1>
        </main>
    );
};

export default Page