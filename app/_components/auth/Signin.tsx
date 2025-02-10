"use client";

import { signinAction } from "@/app/_lib/actions";
import { Github } from "lucide-react";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initialState: { success: boolean | null; message: string } = {
  success: null,
  message: "",
};

export default function Signin() {
  const [state, formAction, isPending] = useActionState(
    signinAction,
    initialState
  );

  useEffect(() => {
    if (state?.success === null || state?.success !== undefined) return;
    if (state?.success) {
      toast.success("Welcome back to YC!");
    } else if (state?.success === false) {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="w-full">
      <button className="btn btn-auth" disabled={isPending}>
        <Github /> {isPending ? "Signing in..." : "Sign in with Github"}
      </button>
    </form>
  );
}
