"use client"

import { useResetPasswordConfirm } from "@/hooks"
import { Form } from "@/components/forms"

interface Props {
    uid: string
    token: string
}

export default function PasswordResetConfirmForm({ uid, token }: Props) {
    const {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit
    } = useResetPasswordConfirm(uid, token);

    const config = [
        {
            labelId: "new_password",
            type: "password",
            value: new_password,
            labelText: "New Password",
            required: true
        },
        {
            labelId: "re_new_password",
            type: "password",
            value: re_new_password,
            labelText: "Conform new Password",
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