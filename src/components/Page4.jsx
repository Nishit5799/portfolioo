import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Page4_Projects from "./Page4_Projects";

const Page4 = () => {
  const project = [
    {
      heading: "Arcane Gaming",

      link: "https://arcane-gaming-site.vercel.app/",
    },
    {
      heading: "Toy Store",

      link: "https://toystore-two.vercel.app/",
    },
  ];
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
    <div className="w-[100vw] page4 h-[100vh] flex flex-col items-center justify-between sm:px-10 sm:py-4 px-6 py-0  bg-black/30">
      <h1
        ref={headRef2}
        className="sm:text-[5vw] h-full font-jelly w-full text-[13vw] text-yellow-500 text-center"
      >
        {splitHeading3("My Projects !")}
      </h1>

      <div className="w-full min-h-[50vh] flex flex-col sm:gap-10 gap-2">
        {project.map((proj, i) => {
          return (
            <Page4_Projects
              key={i}
              heading={proj.heading}
              index={i}
              link={proj.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page4;
