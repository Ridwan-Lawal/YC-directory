import { Database } from "@/app/_lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export type Pitch = Database["public"]["Tables"]["pitches"]["Row"];
export type PitchInsert = Database["public"]["Tables"]["pitches"]["Insert"];
