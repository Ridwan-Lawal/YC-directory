import React from "react";
import { Eye } from "lucide-react";
import Image from "next/image";
import { getBase64 } from "@/app/_lib/data-service";
import { Pitch } from "@/app/_lib/supabase/server";
import { getPitchCreatedTime } from "@/app/_lib/helper";
import Link from "next/link";
import editorIcon from "@/public/Vector.svg";

interface PitchCardProps {
  pitch: Pitch;
  cardType?: string;
}

export default async function PitchCard({ pitch, cardType }: PitchCardProps) {
  const baseAvatarImageUrl = await getBase64(pitch?.author_avatar);

  const basePitchImageUrl = await getBase64(pitch?.media_link);

  return (
    <div className="pitch-card flex-none group">
      {/* date, views */}
      <div className="flex items-center justify-between">
        <p className="pitch-card-text-1 bg-color-primary-fade rounded-[70px] p-2 md:p-2.5 w-fit group-hover:bg-white transition-colors duration-300 ease-in">
          {getPitchCreatedTime(pitch?.created_at)}
        </p>

        {cardType === "similar" ? (
          <Image src={editorIcon} alt="editor" quality={100} />
        ) : (
          <div className="flex items-center gap-1">
            <Eye className="text-color-primary size-5 md:size-6" />
            <p className="pitch-card-text-1">{pitch?.views}</p>
          </div>
        )}
      </div>

      {/* pitch owner */}
      <div className="flex items-center justify-between mt-3.5">
        <div>
          {/* pitch owner name */}
          <p className="pitch-card-text-1">{pitch?.author_name}</p>

          {/* pitch name */}
          <h4 className="font-semibold text-[22px] md:text-[26px] ">
            {pitch?.title}
          </h4>
        </div>

        {/* pitch owner avatar */}
        <div className="relative size-10 border rounded-full overflow-hidden">
          <Image
            src={pitch?.author_avatar as string}
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
      <p className="text-sm md:text-base text-[#333333] mt-2 border h-[80px] ">
        {pitch?.description?.split(" ").slice(0, 15).join(" ") + "..."}
      </p>

      {/* pitch image */}
      <div className="relative w-full h-[164px] rounded-[10px] overflow-hidden mx-auto mt-5">
        <Image
          src={pitch?.media_link as string}
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
        <p className="pitch-card-text-1">{pitch?.category}</p>

        <Link href={`/pitch/${pitch?.id}`}>
          <button className="pitch-card-details-btn">Details</button>
        </Link>
      </div>
    </div>
  );
}
