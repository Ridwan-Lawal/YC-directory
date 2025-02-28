import AuthorStartups from "@/app/_components/profile/AuthorStartups";
import ProfileCard from "@/app/_components/profile/ProfileCard";

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
      <Suspense fallback={<div>Loading..</div>}>
        <ProfileCard />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AuthorStartups />
      </Suspense>
    </div>
  );
}
