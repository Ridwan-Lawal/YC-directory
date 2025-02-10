"use client";

import React from "react";

interface Error {
  error: Error & { message?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Error) {
  return (
    <div>
      <p>{error?.message}</p>
      <button onClick={reset}> Go home</button>
    </div>
  );
}
