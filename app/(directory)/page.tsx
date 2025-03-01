import Header from "@/app/_ui/Header";
import Pitches from "@/app/_components/pitches/Pitches";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const filters = await searchParams;

  return (
    <div className="pb-12">
      <Header />
      <Pitches query={filters?.query} />
    </div>
  );
}
