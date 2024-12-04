"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo({ title, skillImage }) {
  return (
    <div className=" flex items-center justify-center h-[10vw] sm:h-[18vw] sm:w-fit mt-[26vw] sm:mt-0   w-[29%] mx-auto  sm:flex sm:items-center sm:justify-center ">
      <PinContainer
        title={
          <span className="text-2xl inline-block w-20 h-[1vw] text-center sm:text-4xl font-choco font-bold text-white">
            {title}
          </span>
        }
        href="#"
      >
        <div className="flex items-center justify-center sm:p-4 p-0 tracking-tight text-slate-100/50  sm:w-[10vw] sm:h-[10vw] h-[31vw] w-[20vw] ">
          <Image src={skillImage} height={1000} width={1000} />
        </div>
      </PinContainer>
    </div>
  );
}
