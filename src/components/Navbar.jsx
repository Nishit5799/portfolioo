// import React, { useState } from "react";
// import { PiLightbulbLight } from "react-icons/pi";
// import { PiLightbulbFill } from "react-icons/pi";

// const Navbar = () => {
//   const [isLightOn, setIsLightOn] = useState(false);

//   const toggleLight = () => {
//     setIsLightOn((prev) => !prev);
//   };

//   return (
//     <div className="w-full h-[7vh] fixed z-[1]">
//       <div className="w-full h-full flex items-center justify-end relative">
//         <PiLightbulbLight
//           size={30}
//           className={`w-10 h-10 sm:mx-20 mx-4 rounded-full p-1 absolute bg-white mt-[5vh] cursor-pointer transition-opacity duration-300 ease-in-out ${
//             isLightOn ? "opacity-0" : "opacity-100"
//           }`}
//           onClick={toggleLight}
//         />
//         <PiLightbulbFill
//           size={30}
//           className={`w-10 h-10 sm:mx-20 mx-4 rounded-full p-1 absolute bg-white mt-[5vh] cursor-pointer transition-opacity duration-300 ease-in-out ${
//             isLightOn ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={toggleLight}
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useLight } from "@/context/LightContext";
import React, { useEffect, useState } from "react";
import { PiLightbulbLight, PiLightbulbFill } from "react-icons/pi";

const Navbar = () => {
  const { lightIntensity, setLightIntensity } = useLight();
  const [isFlickering, setIsFlickering] = useState(false); // Track flickering state

  const toggleLight = () => {
    if (lightIntensity === 7) {
      setLightIntensity(-2); // Turn off light
    } else {
      setIsFlickering(true); // Trigger flickering effect
    }
  };

  useEffect(() => {
    if (isFlickering) {
      const flickerSequence = [0, 3, 0, 4, 0, 5, 0, 6, 0.5, 7]; // Sequence of random intensities
      let index = 0;

      const flickerInterval = setInterval(() => {
        setLightIntensity(flickerSequence[index]);
        index++;

        if (index === flickerSequence.length) {
          clearInterval(flickerInterval);
          setIsFlickering(false); // Stop flickering
        }
      }, 200); // Adjust duration for each flicker
    }
  }, [isFlickering, setLightIntensity]);

  return (
    <div className="w-full h-[7vh] fixed z-[1] flex items-center justify-end">
      <div className="flex items-center sm:mx-20 mx-4 mt-[5vh]">
        {lightIntensity === 7 ? (
          <>
            <PiLightbulbFill
              size={30}
              className="sm:w-10 sm:h-10 h-7 w-7 rounded-full p-1 bg-white cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:scale-110"
              onClick={toggleLight}
            />
            <h1 className="ml-4 sm:text-[1vw] text-[3vw] font-semibold text-white transition-opacity duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)]">
              Turn off light
            </h1>
          </>
        ) : (
          <>
            <PiLightbulbLight
              size={30}
              className="sm:w-10 sm:h-10 h-7 w-7 rounded-full p-1 bg-white cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:scale-110"
              onClick={toggleLight}
            />
            <h1 className="ml-4 sm:text-[1vw] font-semibold text-[3vw] text-white transition-opacity duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)]">
              Turn on light
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
