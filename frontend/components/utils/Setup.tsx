"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useVerify from "@/hooks/use-verify";

export default function Setup() {
    useVerify(); // run global auth check
    return <ToastContainer />;
}