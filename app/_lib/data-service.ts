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

export async function getPitches() {
  const supabase = await createClient();
  //  1, check if the data the user is trying to mutate is his
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You need to be signed in to get this data!");
  }

  // 4. Getting data

  const { data: pitches, error } = await supabase.from("pitches").select(`*`);

  if (error) throw new Error(error.message);

  return pitches;
}
