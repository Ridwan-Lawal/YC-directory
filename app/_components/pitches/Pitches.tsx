import PitchCard from "@/app/_components/pitches/PitchCard";
import React from "react";

export default function pitches() {
  return (
    <div className="mt-12 px-8">
      <div className="space-y-[36px] max-w-[1280px] mx-auto">
        <h3 className="text-[24px] md:text-[26px] font-semibold leading-[35.19px] tracking-[-3%] ">
          Recommended startups
        </h3>
        <div className="grid items-center  gap-[28px] sm:grid-cols-2 sm:max-w-[700px] lg:max-w-[1280px] mx-auto lg:grid-cols-3 xl:grid-cols-4">
          <PitchCard />
          <PitchCard />
          <PitchCard />
          <PitchCard />
        </div>
      </div>
    </div>
  );
}
