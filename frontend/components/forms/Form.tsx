import { FormEvent, ChangeEvent } from "react"
import { Input } from "@/components/forms"
import { Spinner } from "@/components/common"

interface Config {
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
        linkText: string;
        linkUrl: string;
    }
    required?: boolean
}

interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, btnText, onChange, onSubmit }: Props) {
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            {config.map((input) => (
                <Input
                    key={input.labelId}
                    labelId={input.labelId}
                    type={input.type}
                    onChange={onChange}
                    value={input.value}
                    link={input.link}
                    required={input.required}
                >
                    {input.labelText}
                </Input>
            ))}

            <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isLoading ? <Spinner sm /> : `${btnText}`}
                </button>
            </div>

        </form>
    )
}