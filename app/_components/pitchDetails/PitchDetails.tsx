import { getPitchById } from "@/app/_lib/data-service";
import React from "react";

export default async function PitchDetails({ pitchId }: { pitchId: string }) {
  const pitch = await getPitchById(pitchId);
  return <div>PitchDetails</div>;
}
