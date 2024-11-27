"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <>
      <h1 className="w-full sm:text-[7vw] text-[14vw] text-center text-white font-jelly">
        So, About Me?
      </h1>
      <CardContainer className="inter-var h-full w-full">
        <CardBody className=" relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-none  sm:w-[100vw] w-full h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            className="sm:w-[10%] sm:h-fit w-[40%]  mx-auto mt-4"
          >
            <Image
              src="/img.avif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="bg-black/40 rounded-3xl sm:w-[50%] w-full sm:h-[47vh] h-[41vh] mx-auto">
            <CardItem
              as="h1"
              translateZ="60"
              className="text-white sm:text-[3.3vw] text-[10vw] text-center w-[50%]  mt-10  mx-auto  dark:text-neutral-300 font-choco"
            >
              Nishit Lugun
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white sm:text-[1.7vw] text-[5.7vw] text-center sm:w-[70%] w-[95%]   mx-auto  dark:text-neutral-300 font-choco"
            >
              A self-taught frontend developer with a passion for coding and
              problem-solving, who spent two years mastering web development
              independently. During this time, he relied solely on his curiosity
              and determination, never using external platforms, and built his
              skills from the ground up. His journey reflects resilience and a
              deep understanding of creating intuitive, user-friendly websites
              from scratch.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
