"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const PitchVal = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be 3 characters or more" })
    .max(50, { message: "Title cannot exceed a 100 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be more than 10 characters!" })
    .max(1000, { message: "Description cannot exceed a 1000 characters" }),
  category: z
    .string()
    .min(2, { message: "Category must be 2 characters or more" })
    .max(50, { message: "Categories cannot exceed 50 characters" }),
  media_link: z
    .string({ message: "This is not a valid url" })
    .url("This is not a valid URL!"),
  pitch: z
    .string()
    .min(20, { message: "Your pitch must be 20 or more characters" })
    .max(5000, {
      message: "Your pitch cannot exceed the 5000 characters threshold",
    }),
});

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

export async function submitPitchAction(
  prevState: object | null,
  formData: FormData
) {
  // 1, User trying to call is a logged in user

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You need to be logged in to call this action!",
    };
  }

  // 3 Build the data and ensure the input are safe
  const pitchData = Object.fromEntries(formData.entries());

  const {
    data: pitchValData,
    success: pitchValSuccess,
    error: pitchValError,
  } = PitchVal.safeParse(pitchData) ?? {};

  if (!pitchValSuccess) {
    return {
      errors: pitchValError.flatten().fieldErrors,
      inputs: pitchData,
    };
  }

  // Perform mutation

  const { error } = await supabase
    .from("pitches")
    .insert([
      {
        ...pitchValData,
        userId: user?.id,
        views: 0,
        author_name: user?.user_metadata?.full_name,
        author_avatar: user?.user_metadata?.avatar_url,
      },
    ])
    .select();

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Pitch successfully submitted",
  };
}

// Increasing views
export async function increaseViewAction({
  pitchId,
  currentViews,
}: {
  pitchId: string;
  currentViews: number;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You need to be signed in to view this post!",
    };
  }

  const { error } = await supabase
    .from("pitches")
    .update({ views: currentViews + 1 })
    .eq("id", pitchId)
    .select();

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/pitch");
}
