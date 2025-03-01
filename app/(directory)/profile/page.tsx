import AuthorStartups from "@/app/_components/profile/AuthorStartups";
import ProfileCard from "@/app/_components/profile/ProfileCard";
import PitchCardSkeleton from "@/app/_ui/PitchCardSkeleton";
import ProfileCardSkeleton from "@/app/_ui/ProfileCardSkeleton";

import React, { Suspense } from "react";
type metadata = {
  title: string;
};

export const metadata: metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start px-6 lg:px-10 max-w-[700px] mx-auto lg:max-w-[1440px] mt-12">
      <Suspense fallback={<ProfileCardSkeleton />}>
        <ProfileCard />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <PitchCardSkeleton />
          </div>
        }
      >
        <AuthorStartups />
      </Suspense>
    </div>
  );
}
