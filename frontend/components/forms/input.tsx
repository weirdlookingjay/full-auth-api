import Link from "next/link";
import { ChangeEvent } from "react";

interface Props {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    }
    required?: boolean
}

export default function Input({ labelId, type, onChange, value, children, link, required = false }: Props) {
    return (
        <div>
            <div className="flex justify-between align-ceter">
                <label htmlFor={labelId} className="block text-sm/6 font-medium text-gray-900">
                    {children}
                </label>
                {link && (
                    <div className="text-sm">
                        <Link href={link.linkUrl} className="font-semibold text-indigo-600 hover:text-indigo-500">
                            {link.linkText}
                        </Link>
                    </div>
                )}
            </div>
            <div className="mt-2">
                <input
                    id={labelId}
                    name={labelId}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    );
}