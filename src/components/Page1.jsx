import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const Page1 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const page1HeadingRef = useRef(null);

  // Using useGSAP to replace useEffect
  useGSAP(() => {
    const letters = page1HeadingRef.current.querySelectorAll("span");

    // Animate each letter
    gsap.from(letters, {
      y: 30, // Start from y = 30
      opacity: 0, // Start with opacity 0
      rotation: 45, // Add some rotation
      ease: "bounce.out", // Use bounce easing
      stagger: 0.1, // Delay between letters
      duration: 0.5, // Animation duration for each letter
    });
  }, []);
  useGSAP(() => {
    const letters = page1HeadingRef.current.querySelectorAll("span");
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

  const headingText = "Welcome To, Nishit's Portfolio!";

  return (
    <div className="w-[100vw] page1 h-screen  bg-black/30  font-jelly flex items-center justify-center sm:text-outline text-outline2">
      <h1
        ref={page1HeadingRef}
        className="sm:text-[7vw] text-yellow-500 text-[13vw] text-center sm:w-[50%] w-[100%]"
      >
        {headingText.split("").map((char, index) => {
          if (index === 11) {
            // Add a line break after "Welcome To,"
            return (
              <React.Fragment key={index}>
                <span className="inline-block">{char}</span>
                <br />
              </React.Fragment>
            );
          }
          return (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Page1;
