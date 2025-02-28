import { createClient } from "@/app/_lib/supabase/server";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string | null) {
  if (imageUrl !== null) {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  }
}

export async function getPitches(query: string | undefined) {
  const supabase = await createClient();
  //  1, check if the data the user is trying to mutate is his
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You need to be signed in to get this data!");
  }

  // 4. Getting data

  let supabaseQuery = supabase.from("pitches").select("*");

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `author_name.ilike.%${query}%,title.ilike.%${query}%,category.ilike.%${query}%`
    );
  }

  const { data: pitches, error } = await supabaseQuery;

  if (error) throw new Error(error.message);

  return pitches;
}

export async function getPitchById(pitchId: string) {
  const supabase = await createClient();
  //Step 1 - Checking if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be signed it to get this data!");
  }

  // Step 4 - Getting data
  const { data: pitch, error } = await supabase
    .from("pitches")
    .select("*")
    .eq("id", pitchId);

  if (error) throw new Error(error.message);

  return pitch;
}

export async function getPitchByCategory({
  pitchCategory,
  pitchId,
}: {
  pitchCategory: string | null;
  pitchId: string;
}) {
  //  step 1, check if user is signed in.
  const supabase = await createClient();

  // step 4. Getting data,
  let supabaseQuery = supabase.from("pitches").select("*");

  if (pitchCategory) {
    supabaseQuery = supabaseQuery
      .eq("category", pitchCategory)
      .neq("id", pitchId);
  }

  const { data: startups, error } = await supabaseQuery;

  if (error) throw new Error(error.message);

  return startups;
}

export async function convertImageToBase64(imageUrl: string | null) {
  if (imageUrl) {
    try {
      const res = await fetch(imageUrl);
      const buffer = await res.arrayBuffer();
      const { base64 } = await getPlaiceholder(Buffer.from(buffer));
      return base64;
    } catch (error) {
      console.error("Error generating base64:", error);
      return null;
    }
  }
}

export async function getAuthorsStartupOnly() {
  const supabase = await createClient();
  //  check if user is signed in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You need to be signed in to get this data!");
  }

  // Getting users data

  const { data, error } = await supabase
    .from("pitches")
    .select("*")
    .eq("userId", user?.id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
