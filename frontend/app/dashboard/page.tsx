"use client"

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { List } from "@/components/common";

const Page = () => {
    const { data: user } = useRetrieveUserQuery();
    const config = [
        {
            label: 'First Name',
            value: user?.first_name
        },
        {
            label: 'Last Name',
            value: user?.last_name
        },
        {
            label: 'Email',
            value: user?.email
        },
    ]

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
                <List config={config} />
            </main>
        </>
    );
};

export default Page