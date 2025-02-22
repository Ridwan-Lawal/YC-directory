import React from "react";

export default function PitchDate() {
  return (
    <div className="h-[45px]  rounded-[5px] py-2.5  px-5 bg-[#fbe843] relative">
      <div className="h-3 w-3 bg-black triangle absolute  top-1.5 left-2" />
      <p className="uppercase font-bold md:text-[17px] leading-[24px] tracking-[6%] text-black">
        october 5, 2024
      </p>
      <div className="h-3 w-3 bg-black triangle absolute  bottom-1.5 right-2 triangle-2" />
    </div>
  );
}
