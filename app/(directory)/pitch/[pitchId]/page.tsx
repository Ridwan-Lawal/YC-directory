import React, { Suspense } from "react";

import { getPitchById } from "@/app/_lib/data-service";
import PitchDetails from "@/app/_components/pitchDetails/PitchDetails";
import Header from "@/app/_components/pitchDetails/Header";

type Params = {
  params: {
    pitchId: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const query = await params;
  const pitch = await getPitchById(query?.pitchId);

  return { title: pitch?.at(0)?.title };
}

export default async function Page({ params }: Params) {
  const query = await params;
  const pitch = await getPitchById(query?.pitchId);

  return (
    <div>
      <Header pitchDetails={pitch[0]} />

      <Suspense fallback={<div>Loading...</div>} key={query?.pitchId}>
        <PitchDetails pitchId={query?.pitchId} />
      </Suspense>
    </div>
  );
}
