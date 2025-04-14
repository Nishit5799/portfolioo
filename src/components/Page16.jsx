import React from "react";

const Page16 = ({ scrollToTop }) => {
  return (
    <div className="w-full relative h-[136vh] sm:h-screen sm:top-[40vh]   text-white text-center">
      <h1 className="font-jelly sm:text-[6vw] text-[17vw]">THANK YOU!</h1>
      <h1
        className="font-jelly absolute sm:top-[30%] sm:left-[38%] top-[20%] left-[20%] sm:text-[2vw] text-[5vw] cursor-pointer"
        onClick={scrollToTop} // Trigger the scrollToTop function
      >
        Click here to go back to top
      </h1>
    </div>
  );
};

export default Page16;
