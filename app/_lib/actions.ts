"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";

export async function signinAction() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    return {
      success: true,
      message: error.message,
    };
  }

  if (data.url) {
    redirect(data.url);
  }

  return {
    success: true,
    message: "Welcome back to YC",
  };
}
