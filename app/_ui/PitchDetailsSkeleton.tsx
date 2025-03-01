import { Skeleton } from "@/components/ui/skeleton";

export default function PitchDetailsSkeleton() {
  return (
    <div className="max-w-[1050px] px-8  py-10 md:py-14 mx-auto ">
      {/* pitch image */}
      <Skeleton className="relative w-full h-[350px]  rounded-[15px] md:rounded-[20px] md:h-[500px] overflow-hidden" />

      <div className="max-w-[629px] mx-auto">
        {/* author name and avatar &&  category */}
        <div className="flex items-start justify-between mt-8">
          <div className="flex items-center gap-3">
            {/* avatar */}
            <Skeleton className="relative size-14 md:size-16 rounded-full overflow-hidden " />

            <div className="flex flex-col gap-[1px]">
              <Skeleton className="text-black font-extrabold text-[21px] leading-tight md:text-[23px] h-[30px] w-[280px]" />

              <Skeleton className="text-black font-medium md:text-lg  w-[139px] h-[30px]" />
            </div>
          </div>

          {/*  */}
          <Skeleton className="bg-color-primary-fade py-2 px-4 rounded-[70px] gap-[10px] md:text-lg h-[40px] w-[160px]" />
        </div>

        {/* Pitch details */}
        <div className="flex flex-col gap-4 mt-9  border-b pb-12">
          <h3 className="font-bold text-[26px] md:text-3xl ">Pitch details</h3>

          <div className="flex flex-col gap-4">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
              <Skeleton className="h-[250px] max-w-[700px] w-full" key={num} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
