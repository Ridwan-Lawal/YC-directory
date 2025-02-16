import PitchesBlock from "@/app/_components/pitches/PitchesBlock";
import React, { Suspense } from "react";

export default async function pitches({ query }: { query: string }) {
  return (
    <div className="mt-12 px-8">
      <div className="space-y-[36px] max-w-[1280px] mx-auto">
        <h3 className="text-[24px] md:text-[26px] font-semibold leading-[35.19px] tracking-[-3%] ">
          Recommended startups
        </h3>
        <Suspense fallback={<div>Loading... </div>}>
          <PitchesBlock />
        </Suspense>
      </div>
    </div>
  );
}

// using the query to filter the pitches
