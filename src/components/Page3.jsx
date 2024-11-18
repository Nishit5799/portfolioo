import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Page3 = () => {
  const containerRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const skills = [
    "html.webp",
    "css.webp",
    "js.webp",
    "react.webp",
    "gsap.webp",
    "three.webp",
    "git.webp",
    "node.webp",
    "mongo.webp",
  ];

  // Check for screen width to decide when to disable GSAP animation
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // 'sm' breakpoint is typically 640px
    };

    handleResize(); // Set initial state based on current window size
    window.addEventListener("resize", handleResize); // Update state on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      // GSAP animation for the sliding effect when not in small screen
      gsap.fromTo(
        containerRef.current,
        {
          x: 0, // Start with the first image fully visible
        },
        {
          x: "-34%", // Move left by 30% after animation
          duration: 6, // Duration of one complete animation
          repeat: -1, // Repeat infinitely
          yoyo: true, // Reverse the animation every other cycle
          ease: "linear", // Smooth continuous movement
        }
      );
    }
  }, [isSmallScreen]); // Only trigger GSAP animation when screen is not small

  return (
    <div className="w-full sm:h-[100vh] h-screen bg-black/40 px-10 sm:py-[10vw] py-20">
      <h1 className="sm:text-[5vw] font-jelly w-[80vw] text-[15vw]  sm:w-[100vw] text-yellow-500 text-center">
        Skills
      </h1>
      <div
        ref={containerRef}
        className={`w-full py-10 flex items-center justify-center gap-10 whitespace-nowrap overflow-hidden ${
          isSmallScreen ? "flex-wrap" : ""
        }`}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`sm:w-[14vw] sm:h-[14vw]  px-2 py-2 overflow-hidden object-cover object-center rounded-lg  sm:bg-white/30 bg-white ${
              isSmallScreen ? "w-[17vw] h-[17vw]" : ""
            }`}
          >
            <Image
              src={`/${skill}`}
              height={1000}
              width={1000}
              alt="skillimg"
              className="flex items-center justify-center w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
