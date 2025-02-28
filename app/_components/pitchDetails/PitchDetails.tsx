import MarkdownPreview from "@/app/_components/create/MarkdownPreview";
import SimilarStartups from "@/app/_components/pitchDetails/SimilarStartups";
import StartupViews from "@/app/_components/pitchDetails/StartupViews";
import { convertImageToBase64, getPitchById } from "@/app/_lib/data-service";
import Image from "next/image";
import React, { Suspense } from "react";

export default async function PitchDetails({ pitchId }: { pitchId: string }) {
  const pitch = await getPitchById(pitchId);

  const {
    author_name,
    author_avatar,
    pitch: pitchNote,
    category,
    media_link,
    views,
  } = pitch[0];

  const [media_link_blur_url, author_avatar_blur_url] = await Promise.all([
    convertImageToBase64(media_link),
    convertImageToBase64(author_avatar),
  ]);

  return (
    <div className="max-w-[1050px] px-8 border border-red-700 py-10 md:py-14 mx-auto ">
      {/* pitch image */}
      <div className="relative w-full h-[350px] border border-blue-600 rounded-[15px] md:rounded-[20px] md:h-[500px] overflow-hidden">
        <Image
          src={media_link as string}
          alt="media-link"
          className="object-cover  "
          fill
          placeholder={media_link_blur_url ? "blur" : "empty"}
          blurDataURL={media_link_blur_url as string | undefined}
          quality={100}
          priority={true}
        />
      </div>

      <div className="max-w-[629px] mx-auto">
        {/* author name and avatar &&  category */}
        <div className="flex items-start justify-between mt-8">
          <div className="flex items-center gap-3">
            {/* avatar */}
            <div className="relative size-14 md:size-16 rounded-full overflow-hidden border">
              <Image
                src={author_avatar as string}
                alt="author-avatar"
                fill
                className="object-cover"
                placeholder={author_avatar_blur_url ? "blur" : "empty"}
                blurDataURL={author_avatar_blur_url as string | undefined}
              />
            </div>

            <div className="flex flex-col gap-[1px]">
              <h3 className="text-black font-extrabold text-[21px] leading-tight md:text-[23px] ">
                {author_name}
              </h3>
              <p className="text-black font-medium md:text-lg border">
                @{author_name?.split(" ").join("")}
              </p>
            </div>
          </div>

          {/*  */}
          <p className="bg-color-primary-fade py-2 px-4 rounded-[70px] gap-[10px] md:text-lg ">
            {category}
          </p>
        </div>

        {/* Pitch details */}
        <div className="flex flex-col gap-4 mt-9 border border-b pb-12">
          <h3 className="font-bold text-[26px] md:text-3xl border">
            Pitch details
          </h3>

          <MarkdownPreview pitchNote={pitchNote} />
        </div>

        {/* views */}
        <div></div>

        {/* similar startups */}
        <div className="flex flex-col gap-5 mt-12">
          <h3 className="font-bold text-[26px] md:text-3xl border ">
            Similar startups
          </h3>

          {/* startups with the same category */}
          <Suspense fallback={<div>Loading...</div>}>
            <SimilarStartups pitchCategory={category} pitchId={pitchId} />
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading </div>}>
          <StartupViews pitchId={pitchId} currentViews={views ?? 0} />
        </Suspense>
      </div>
    </div>
  );
}
