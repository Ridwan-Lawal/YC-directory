import CreateForm from "@/app/_components/create/CreateForm";
import Header from "@/app/_components/create/Header";
import React, { Suspense } from "react";

type metadata = {
  title: string;
};

export const metadata: metadata = {
  title: "Create pitch",
};

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <CreateForm />
      </Suspense>
    </div>
  );
}
