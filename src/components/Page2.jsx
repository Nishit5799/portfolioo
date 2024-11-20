import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Page2 = () => {
  const headRef = useRef();

  // GSAP logic using useGSAP
  useGSAP(() => {
    const letters = gsap.utils.toArray(".letter"); // Select all individual letters

    gsap.fromTo(
      letters,
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
  const splitHeading = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="w-[100vw] page2 h-[100vh] flex flex-col items-center justify-center px-10 sm:py-10 py-20 bg-black/30">
      <h1
        ref={headRef}
        className="sm:text-[5vw] h-full font-jelly w-full text-[13vw] text-yellow-500 text-center"
      >
        {splitHeading("About me ?")}
      </h1>
      <h2
        className="sm:text-[2.2vw] h-full sm:w-[50%] w-[95%] font-jelly text-[5.1vw]   text-yellow-500 text-center font-outline rounded-2xl
        sm:text-outline text-outline2"
      >
        A self-taught frontend developer with a passion for coding and
        problem-solving, who spent two years mastering web development
        independently. During this time, he relied solely on his curiosity and
        determination, never using external platforms, and built his skills from
        the ground up. His journey reflects resilience and a deep understanding
        of creating intuitive, user-friendly websites from scratch.
      </h2>
    </div>
  );
};

export default Page2;
