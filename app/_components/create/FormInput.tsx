import React, { JSX } from "react";

interface FormInputProps {
  children: JSX.Element;
  label: string;
  error?: string;
}

export default function FormInput({ children, label, error }: FormInputProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor={children?.props?.name}
          className="font-bold text-black uppercase"
        >
          {label}
        </label>

        <p className="error-msg ">{error}</p>
      </div>

      {children}
    </fieldset>
  );
}
