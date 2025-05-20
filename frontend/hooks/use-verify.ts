import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useVerifyMutation } from "@/redux/features/authApiSlice";

// Helper to check if JWT cookie exists
function hasJwtCookie() {
  // Use document.cookie for client-side check
  // Adjust 'access' to your actual cookie name if different
  return typeof document !== "undefined" && document.cookie.split("; ").some(row => row.startsWith("access="));
}

export default function useVerify() {
  const [verify, { isLoading, isError }] = useVerifyMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (hasJwtCookie()) {
      verify()
        .unwrap()
        .then(() => {
          dispatch(setAuth());
        })
        .finally(() => {
          dispatch(finishInitialLoad());
        });
    } else {
      // No cookie: skip verify, set as not authenticated
      dispatch(finishInitialLoad());
    }
  }, [dispatch, verify]);

  return { isLoading, isError };
}
