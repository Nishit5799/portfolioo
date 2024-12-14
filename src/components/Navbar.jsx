import React, { useState } from "react";
import { PiLightbulbLight } from "react-icons/pi";
import { PiLightbulbFill } from "react-icons/pi";

const Navbar = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <div className="w-full h-[7vh] fixed z-[1]">
      <div className="w-full h-full flex items-center justify-end relative">
        <PiLightbulbLight
          size={30}
          className={`w-10 h-10 sm:mx-20 mx-4 rounded-full p-1 absolute bg-white mt-[5vh] cursor-pointer transition-opacity duration-300 ease-in-out ${
            isLightOn ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleLight}
        />
        <PiLightbulbFill
          size={30}
          className={`w-10 h-10 sm:mx-20 mx-4 rounded-full p-1 absolute bg-white mt-[5vh] cursor-pointer transition-opacity duration-300 ease-in-out ${
            isLightOn ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleLight}
        />
      </div>
    </div>
  );
};

export default Navbar;
