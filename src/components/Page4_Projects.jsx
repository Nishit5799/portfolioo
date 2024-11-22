import Link from "next/link";
import React from "react";

const Page4_Projects = ({ heading, link }) => {
  return (
    <div className="w-full project h-[10vh] relative  text-yellow-500 sm:rounded-full rounded-lg  flex justify-around items-center font-jelly overflow-hidden group">
      <div className="overlay z-[-1] w-[220vh] h-full absolute sm:top-0 sm:left-[-2.5%] origin-left bg-white/40 -rotate-90 transition-transform duration-700 sm:duration-500 ease-in-out group-hover:rotate-0"></div>
      <div className="heading sm:w-[50%] w-[50%]">
        <h1 className="sm:text-[3vw] ">{heading}</h1>
      </div>

      <div className="sm:text-[1vw] text-[3vw] cursor-pointer ">
        <Link href={`${link}`}>
          <h3 className="">Check it out</h3>
        </Link>
      </div>
    </div>
  );
};

export default Page4_Projects;
