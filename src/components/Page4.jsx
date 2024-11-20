import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";

const Page4 = () => {
  const headRef2 = useRef();

  // GSAP logic using useGSAP
  useGSAP(() => {
    const letters3 = gsap.utils.toArray(".letter2"); // Select all individual letters

    gsap.fromTo(
      letters3,
      { y: -10, rotationY: -30 }, // Initial position and rotation
      {
        y: 10, // Final bouncing position
        rotationY: 30, // Rotate along Y-axis
        duration: 1, // Time for one bounce
        ease: "power1.inOut", // Smooth ease
        repeat: -1, // Infinite loop
        yoyo: true, // Reverses animation
        stagger: 0.1, // Animates letters sequentially
      }
    );
  });

  // Split heading into individual spans
  const splitHeading3 = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter2 inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
  return (
    <div className="w-[100vw] page4 h-[100vh] flex flex-col items-center justify-center px-10 sm:py-4 py-0 bg-black/30">
      <h1
        ref={headRef2}
        className="sm:text-[5vw] h-full font-jelly w-full text-[13vw] text-yellow-500 text-center"
      >
        {splitHeading3("My Projects !")}
      </h1>

      <div className="w-full min-h-[50vh] flex flex-col gap-10">
        <div className="w-full h-[10vh] bg-black/40 text-white flex justify-around items-center font-jelly">
          <div className="heading ">
            <h1 className="sm:text-[3vw] text-[6vw]">ToyStore</h1>
          </div>
          <div className="heading">
            <h3 className="sm:text-[2vw] text-[4vw]">Nextjs, ThreeJs</h3>
          </div>
          <div>
            <Link href={"https://toystore-two.vercel.app/"}>
              <h3 className="sm:text-[1vw] text-[3vw]">Check it out </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
