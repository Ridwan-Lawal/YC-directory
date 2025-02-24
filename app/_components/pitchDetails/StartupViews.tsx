"use client";

import { increaseViewAction } from "@/app/_lib/actions";
import { createClient } from "@/app/_lib/supabase/client";
import React, { useEffect, useState } from "react";

interface StartupViewsProp {
  pitchId: string;
  currentViews: number;
}

export default function StartupViews({
  pitchId,
  currentViews,
}: StartupViewsProp) {
  const [views, setViews] = useState(currentViews);

  useEffect(() => {
    async function updateViews() {
      await increaseViewAction({ pitchId, currentViews });
    }

    updateViews();
  }, [pitchId]);

  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel("views changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "pitches",
        },
        (payload) => {
          console.log(payload?.new?.views);
          setViews(payload?.new?.views as number);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <p className="bg-color-primary-fade py-1.5 px-6 rounded-[70px] gap-[10px] md:text-lg font-medium flex items-center bottom-8 text-sm right-8 fixed  ">
      {views} <span> Views</span>
    </p>
  );
}
