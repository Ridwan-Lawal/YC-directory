import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function PitchCardSkeleton() {
  return Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
    <Skeleton key={num} className="pitch-card flex-none group rounded-3xl">
      {/* date, views */}
      <div className="flex items-center justify-between">
        <Skeleton className="pitch-card-text-1 bg-color-primary-fade rounded-[70px] p-2 md:p-2.5  group-hover:bg-white transition-colors duration-300 ease-in h-[50px] w-[101px]" />

        <Skeleton className="h-4 w-r" />
      </div>

      {/* pitch owner */}
      <div className="flex items-center justify-between mt-3.5">
        <div className="flex flex-col gap-2">
          {/* pitch owner name */}
          <Skeleton className="pitch-card-text-1 h-[19px] w-[101px]" />

          {/* pitch name */}
          <Skeleton className="font-semibold text-[22px] md:text-[26px] h-[30px] w-[110px]" />
        </div>

        {/* pitch owner avatar */}
        <Skeleton className="size-10 rounded-full" />
      </div>

      {/* pitch description */}
      <div className="flex flex-col gap-3 mt-4">
        <Skeleton className="w-[250px] h-[23px]" />
        <Skeleton className="w-[250px] h-[23px]" />
      </div>
      {/* pitch image */}
      <Skeleton className="relative w-full h-[240px] rounded-[10px] overflow-hidden mx-auto mt-5" />

      {/* level and details */}
      <div className="flex items-center justify-between mt-5">
        <Skeleton className="pitch-card-text-1 w-[75px] h-[19px]" />

        <Skeleton className="w-[92px] h-[39px]" />
      </div>
    </Skeleton>
  ));
}
