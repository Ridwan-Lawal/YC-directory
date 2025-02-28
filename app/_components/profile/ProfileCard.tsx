import { getBase64 } from "@/app/_lib/data-service";
import { createClient } from "@/app/_lib/supabase/server";
import Image from "next/image";
import React from "react";

export default async function ProfileCard() {
  const supabase = await createClient();
  const userData = await supabase.auth.getUser();

  const {
    data: { user },
  } = userData ?? {};

  const avatarBaseUrl = await getBase64(user?.user_metadata?.avatar_url);

  return (
    <div className="bg-color-primary border-[5px] border-black rounded-[30px] flex flex-col items-center gap-3 px-5 pb-6 ">
      {/* name card */}
      <div className="bg-black w-full rounded-[20px] relative -top-7 -rotate-1">
        <div className="py-2 px-9 rounded-[20px] border-[5px] border-black bg-white rotate-1 ">
          <p className="text-[21px] font-extrabold text-center uppercase">
            {user?.user_metadata?.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* avatar */}

        <div className="p-2 rounded-full bg-white border-[3px] border-black relative  overflow-hidden w-fit ">
          <div className="relative border border-green-800 h-[220px] w-[220px] overflow-hidden rounded-full">
            {" "}
            <Image
              src={user?.user_metadata?.avatar_url}
              alt="avatar"
              fill
              className="object-cover"
              placeholder={avatarBaseUrl ? "blur" : "empty"}
              blurDataURL={avatarBaseUrl}
            />
          </div>
        </div>

        {/* name and title */}
        <h4 className="font-extrabold text-[26px] md:text-[28px] text-white text-center">
          @{user?.user_metadata?.user_name}
        </h4>
      </div>
    </div>
  );
}
