import React from "react";
const Page2 = () => {
  return (
    <div className="w-[100vw] h-[100vh]  flex flex-col items-center justify-around px-10 sm:py-10 py-20 bg-black/10">
      <h1 className="sm:text-[5vw] h-full font-jelly w-full text-[15vw]  text-yellow-500 text-center ">
        About me?
      </h1>
      <h2 className="sm:text-[2.5vw] h-full sm:w-[60%] w-[90%]  font-jelly text-[5.6vw] text-black sm:text-yellow-500 bg-white/40 sm:bg-black/20  text-center font-outline rounded-lg ">
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
