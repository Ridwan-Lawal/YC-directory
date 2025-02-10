import React from "react";
import { Eye } from "lucide-react";
import Image from "next/image";
import { getBase64 } from "@/app/_lib/data-service";

export default async function PitchCard() {
  const baseAvatarImageUrl = await getBase64(
    "https://waogsjzgfpckyxxbugfn.supabase.co/storage/v1/object/avatar/47845dcb-f2ee-4b0b-a8ee-3852d264f525-image-6.png"
  );

  const basePitchImageUrl = await getBase64(
    "https://waogsjzgfpckyxxbugfn.supabase.co/storage/v1/object/avatar/47845dcb-f2ee-4b0b-a8ee-3852d264f525-image-6.png"
  );

  return (
    <div className="pitch-card   group">
      {/* date, views */}
      <div className="flex items-center justify-between">
        <p className="pitch-card-text-1 bg-color-primary-fade rounded-[70px] p-2 md:p-2.5 w-fit group-hover:bg-white transition-colors duration-300 ease-in">
          20 May, 2023
        </p>

        <div className="flex items-center gap-1">
          <Eye className="text-color-primary size-5 md:size-6" />
          <p className="pitch-card-text-1">232</p>
        </div>
      </div>

      {/* pitch owner */}
      <div className="flex items-center justify-between mt-3.5">
        <div>
          {/* pitch owner name */}
          <p className="pitch-card-text-1">Steven Smith</p>

          {/* pitch name */}
          <h4 className="font-semibold text-[22px] md:text-[26px] ">
            EcoTrack
          </h4>
        </div>

        {/* pitch owner avatar */}
        <div className="relative size-10 border rounded-full overflow-hidden">
          <Image
            src={`https://waogsjzgfpckyxxbugfn.supabase.co/storage/v1/object/avatar/47845dcb-f2ee-4b0b-a8ee-3852d264f525-image-6.png
`}
            alt="avatar"
            fill
            className="object-cover"
            quality={100}
            placeholder={baseAvatarImageUrl ? "blur" : "empty"}
            blurDataURL={baseAvatarImageUrl}
          />
        </div>
      </div>

      {/* pitch description */}
      <p className="text-sm md:text-base text-[#333333] mt-2">
        {"A mobile app that helps users track and reduce their carbo and best ins..."
          .split(" ")
          .slice(0, 15)
          .join(" ") + "..."}
      </p>

      {/* pitch image */}
      <div className="relative w-full h-[164px] rounded-[10px] overflow-hidden mx-auto mt-5">
        <Image
          src={`https://waogsjzgfpckyxxbugfn.supabase.co/storage/v1/object/avatar/47845dcb-f2ee-4b0b-a8ee-3852d264f525-image-6.png
`}
          alt="pitch image"
          quality={100}
          fill
          className="object-cover"
          blurDataURL={basePitchImageUrl}
          placeholder={basePitchImageUrl ? "blur" : "empty"}
        />
      </div>

      {/* level and details */}
      <div className="flex items-center justify-between mt-5">
        <p className="pitch-card-text-1">Senior level</p>

        <button className="pitch-card-details-btn">Details</button>
      </div>
    </div>
  );
}
