import PitchCard from "@/app/_components/pitches/PitchCard";
import { getPitchByCategory } from "@/app/_lib/data-service";
import React from "react";

interface SimilarStartups {
  pitchCategory: string | null;
  pitchId: string;
}

export default async function SimilarStartups({
  pitchCategory,
  pitchId,
}: SimilarStartups) {
  const startups = await getPitchByCategory({ pitchCategory, pitchId });
  return (
    <div className="flex justify-start border overflow-auto gap-8 py-5 no-scrollbar">
      {startups?.map((startup) => (
        <PitchCard key={startup?.id} cardType="similar" pitch={startup} />
      ))}
    </div>
  );
}

/*
- So now, I am trying to get startups with a similar category as the pitch i am viewing. But, when i do so, i am also getting the current pitch that i am viewing in the similar startup. So i am going to try to filter with the category and id {pitchCategory, pitchId}, so i it should return startups whose category is equal to the category recieved, and not equal to the pitch recieved.




*/
