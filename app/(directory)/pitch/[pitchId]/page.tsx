import React from "react";

type Params = {
  params: {
    pitchId: string;
  };
};

export function generateMetadata({ params }: Params) {
  console.log(params);
}

export default async function Page({ params }: Params) {
  const query = await params;
  console.log(query);
  return <div>Page</div>;
}
