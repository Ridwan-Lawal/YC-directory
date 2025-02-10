import PitchCard from "@/app/_components/pitches/PitchCard";
import Header from "@/app/_ui/Header";
import React from "react";

export default function Page() {
  return (
    <div className="pb-12">
      <Header />

      {/* Pitches */}
      <div>
        <PitchCard />
      </div>
    </div>
  );
}
