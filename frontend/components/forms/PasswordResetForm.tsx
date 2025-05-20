"use client"

import { useResetPassword } from "@/hooks"
import { Form } from "@/components/forms"

export default function PasswordResetForm() {
    const {
        email,
        isLoading,
        onChange,
        onSubmit
    } = useResetPassword();

    const config = [
        {
            labelId: "email",
            type: "email",       
            value: email,
            labelText: "Email address",
            required: true
        }
    ]
    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText="Request password reset"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}