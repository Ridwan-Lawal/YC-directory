import React from "react";
import PitchCard from "@/app/_components/pitches/PitchCard";
import { getPitches } from "@/app/_lib/data-service";
import { Pitch } from "@/app/_lib/supabase/server";

export default async function PitchesBlock({ query }: { query: string }) {
  const pitches: Pitch[] = await getPitches(query);

  return (
    <div className="grid items-center  gap-7 sml:grid-cols-2 sm:max-w-[700px] lg:max-w-[1280px] mx-auto lg:grid-cols-3 xl:grid-cols-4 ">
      {pitches?.map((pitch) => (
        <PitchCard key={pitch?.id} pitch={pitch} />
      ))}
    </div>
  );
}
