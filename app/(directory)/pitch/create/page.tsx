import FormInput from "@/app/_components/create/FormInput";
import Header from "@/app/_components/create/Header";
import React from "react";

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
      <form className="create">
        {/* ============ Title ============ */}
        <FormInput label="Title" error="My name is ridwan">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of your startup"
            autoComplete="startup-title"
            aria-label="Title of your startup"
            aria-required={true}
            // aria-describedby=""
            // aria-invalid=''
            className=""
          />
        </FormInput>

        {/* ================= Description ============== */}

        <FormInput label="Description" error="My name is ridwan">
          <textarea
            name="description"
            id="description"
            placeholder="Short description of your startup idea"
            autoComplete="startup-description"
            rows={5}
            aria-label="Startup 
            description"
            aria-required={true}
            // aria-describedby=""
            // aria-invalid=''
            className=""
          />
        </FormInput>

        {/* ============= category ======== */}

        <FormInput label="Category" error="My name is ridwan">
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Choose a category (e.g., Tech, Health, Education, e.t.c.)"
            autoComplete="startup-category"
            aria-label="Category of your startup"
            aria-required={true}
            // aria-describedby=""
            // aria-invalid=''
            className=""
          />
        </FormInput>

        {/* ===================== Image / video =======*/}

        <FormInput label="image/video link" error="My name is ridwan">
          <input
            type="text"
            name="media-link"
            id="media-link"
            placeholder="Paste a link to your demo or promotional media."
            autoComplete="startup-title"
            aria-label="Title of your startup"
            aria-required={true}
            // aria-describedby=""
            // aria-invalid=''
            className=""
          />
        </FormInput>
      </form>
    </div>
  );
}
