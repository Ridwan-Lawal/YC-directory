import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProfileCardSkeleton() {
  return (
    <Skeleton className="bg-color-primary border-[5px] border-black rounded-[30px] flex flex-col items-center gap-3 px-5 pb-6 ">
      {/* name card */}
      <Skeleton className="bg-black w-full rounded-[20px] relative -top-7 -rotate-1 h-8">
        <Skeleton className="py-2 px-9 rounded-[20px] border-[5px] border-black bg-white rotate-1 h-[40px] ">
          <Skeleton className="text-[21px] font-extrabold text-center uppercase" />
        </Skeleton>
      </Skeleton>
      <Skeleton className="flex flex-col gap-4">
        {/* avatar */}

        <Skeleton className="p-2 rounded-full bg-white border-[3px] border-black relative  overflow-hidden w-fit ">
          <Skeleton className="relative border border-green-800 h-[220px] w-[220px] overflow-hidden rounded-full">
            {" "}
            <Skeleton />
          </Skeleton>
        </Skeleton>

        {/* name and title */}
        <Skeleton className="font-extrabold text-[26px] md:text-[28px] text-white text-center h-8" />
      </Skeleton>
    </Skeleton>
  );
}
