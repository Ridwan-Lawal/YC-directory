"use client";

import MDEditor from "@uiw/react-md-editor";
import React from "react";

export default function MarkdownPreview({
  pitchNote,
}: {
  pitchNote: string | null;
}) {
  return <MDEditor.Markdown source={pitchNote ? pitchNote : ""} />;
}
