import PitchesBlock from "@/app/_components/pitches/PitchesBlock";
import PitchCardSkeleton from "@/app/_ui/PitchCardSkeleton";
import React, { Suspense } from "react";

export default function pitches({ query }: { query: string }) {
  return (
    <div className="mt-12 px-8 space-y-8">
      <div className="space-y-[36px] max-w-[1280px] mx-auto">
        <h3 className="text-[24px] md:text-[26px] font-semibold leading-[35.19px] tracking-[-3%] ">
          Recommended startups
        </h3>
      </div>
      <Suspense
        fallback={
          <div className="grid items-center  gap-7 sml:grid-cols-2 sm:max-w-[700px] lg:max-w-[1280px] mx-auto lg:grid-cols-3 xl:grid-cols-4">
            <PitchCardSkeleton />{" "}
          </div>
        }
        key={query}
      >
        <PitchesBlock query={query} />
      </Suspense>
    </div>
  );
}

// filter pitches
