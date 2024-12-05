import React from "react";
import { AnimatedPinDemo } from "./Page13_Skills";

const Page13 = () => {
  const skills = [
    { image: "/html.webp", title: "HTML" },
    { image: "/css.webp", title: "CSS" },
    { image: "/js.webp", title: "JAVASCRIPT" },
    { image: "/react.webp", title: "REACT" },
    { image: "/gsap.webp", title: "GSAP" },
    { image: "/three.webp", title: "THREE" },
    { image: "/mongo.webp", title: "MONGODB" },
    { image: "/node.webp", title: "NODE" },
  ];
  return (
    <>
      <div className="sm:mt-[45vw] mt-[90vh] w-full  mx-auto opacity-0">
        <h1 className="w-full h-fit text-center rounded-3xl sm:text-[5.5vw] text-[13.5vw] mb-20 sm:mb-0 font-jelly  text-white text-outline-black ">
          My skills!
        </h1>
      </div>

      <div className="sm:w-[90%] sm:mx-auto w-full h-screen sm:h-fit opacity-0 -mt-[5vh] sm:-mt-0  flex flex-wrap sm:flex-wrap sm:gap-0   sm:items-center sm:justify-center">
        {skills.map((skill, i) => {
          return (
            <AnimatedPinDemo
              title={skill.title}
              skillImage={skill.image}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default Page13;
