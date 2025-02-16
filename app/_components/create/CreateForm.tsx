"use client";

import React, { useActionState, useEffect } from "react";
import FormInput from "@/app/_components/create/FormInput";
import sendIcon from "@/public/sendIcon.svg";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import { submitPitchAction } from "@/app/_lib/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const [pitch, setPitch] = useState("");
  const [state, formAction, isSubmitting] = useActionState(
    submitPitchAction,
    null
  );
  const router = useRouter();

  const { errors, inputs } = state ?? {};

  useEffect(() => {
    if (state === null) return;
    if (state?.success) {
      toast.success(state?.message);
      router.push("/");
      setPitch("");
    } else if (state?.success === false) {
      toast.error(state?.message);
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="create max-w-[711px] px-8 mx-auto flex flex-col gap-8 mt-12 md:mt-16 pb-20"
    >
      {/* ============ Title ============ */}
      <FormInput label="Title" error={errors?.title?.at(0)}>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={inputs?.title as string}
          placeholder="Title of your startup"
          autoComplete="startup-title"
          aria-label="Title of your startup"
          aria-required={true}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          aria-describedby={errors?.title?.at(0)}
          aria-invalid={errors?.title?.at(0) ? true : false}
          className=""
        />
      </FormInput>

      {/* ================= Description ============== */}

      <FormInput label="Description" error={errors?.description?.at(0)}>
        <textarea
          name="description"
          id="description"
          placeholder="Short description of your startup idea"
          autoComplete="startup-description"
          rows={5}
          aria-label="Startup 
                description"
          defaultValue={inputs?.description as string}
          aria-required={true}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          aria-describedby={errors?.description?.at(0)}
          aria-invalid={errors?.description?.at(0) ? true : false}
          className=""
        />
      </FormInput>

      {/* ============= category ======== */}

      <FormInput label="Category" error={errors?.category?.at(0)}>
        <input
          type="text"
          name="category"
          id="category"
          defaultValue={inputs?.category as string}
          placeholder="Choose a category (e.g., Tech, Health, Education, e.t.c.)"
          autoComplete="startup-category"
          aria-label="Category of your startup"
          aria-required={true}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          aria-describedby={errors?.category?.at(0)}
          aria-invalid={errors?.category?.at(0) ? true : false}
          className=""
        />
      </FormInput>

      {/* ===================== Image / video =======*/}

      <FormInput label="image/video link" error={errors?.["media_link"]?.at(0)}>
        <input
          type="text"
          name="media_link"
          id="media_link"
          placeholder="Paste a link to your demo or promotional media."
          defaultValue={inputs?.["media_link"] as string}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          autoComplete="startup-media-link"
          aria-label="Your startup media link"
          aria-required={true}
          aria-invalid={errors?.["media_link"]?.at(0) ? true : false}
          aria-describedby={errors?.["media_link"]?.at(0)}
          className=""
        />
      </FormInput>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label className="font-bold text-black uppercase">Pitch</label>
          <p className="error-msg">{errors?.pitch?.at(0)}</p>
        </div>

        <div className="">
          <MDEditor
            value={pitch}
            aria-disabled={isSubmitting}
            onChange={(value) => setPitch(value as string)}
            preview="edit"
            id="pitch"
            defaultValue={inputs?.pitch as string}
            height={300}
            style={{
              border: "2px solid black",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            textareaProps={{
              placeholder:
                "Briefly describe your idea and what problem it solves",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
            autoCapitalize="none"
          />
        </div>
      </div>

      <input type="hidden" name="pitch" value={pitch} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn bg-color-primary border-[3px] border-black hover:bg-color-logout transition-all duration-300"
      >
        {isSubmitting ? (
          <span>Submitting pitch...</span>
        ) : (
          <span>submit your pitch</span>
        )}
        <Image src={sendIcon} alt="send" quality={100} />
      </button>
    </form>
  );
}
