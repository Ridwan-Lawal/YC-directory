import React from "react";
import { getAuthorsStartupOnly } from "@/app/_lib/data-service";
import PitchCard from "@/app/_components/pitches/PitchCard";

export default async function AuthorStartups() {
  const authorStartups = await getAuthorsStartupOnly();
  return (
    <div className="border border-green-800  gap-6 sm:justify-start grid sm:grid-cols-2 xl:grid-cols-3">
      {authorStartups?.map((startup) => (
        <PitchCard key={startup?.id} pitch={startup} />
      ))}
    </div>
  );
}
