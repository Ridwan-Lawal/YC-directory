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
          setViews(payload?.new?.views as number);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <p className="views ">
      {views} <span> Views</span>
    </p>
  );
}
