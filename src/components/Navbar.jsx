import { useLight } from "@/context/LightContext";
import React, { useEffect, useState } from "react";
import { PiLightbulbLight, PiLightbulbFill } from "react-icons/pi";

const Navbar = () => {
  const { lightIntensity, setLightIntensity } = useLight();
  const [isFlickering, setIsFlickering] = useState(false); // Track flickering state
  const [textOverride, setTextOverride] = useState(""); // Override text state

  const toggleLight = () => {
    if (lightIntensity === 5) {
      setLightIntensity(0); // Turn off light
      setTextOverride(""); // Clear text override
    } else {
      setTextOverride("Turn off light"); // Set text to "Turn off light"
      setIsFlickering(true); // Trigger flickering effect
    }
  };

  useEffect(() => {
    if (isFlickering) {
      const flickerSequence = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5]; // Sequence of random intensities
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

  const lightStatusText =
    textOverride || (lightIntensity === 5 ? "Turn off light" : "Turn on light");

  return (
    <div
      className="w-full h-[7vh] fixed z-[1] flex items-center justify-end"
      onClick={toggleLight}
    >
      <div className="flex items-center sm:mx-20 mx-4 mt-[5vh]">
        {lightIntensity === 5 ? (
          <PiLightbulbLight
            size={30}
            className="sm:w-10 sm:h-10 h-7 w-7 rounded-full p-1 bg-white cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:scale-110"
          />
        ) : (
          <PiLightbulbFill
            size={30}
            className="sm:w-10 sm:h-10 h-7 w-7 rounded-full p-1 bg-white cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)] hover:scale-110"
          />
        )}
        <h1 className="ml-4 sm:text-[1vw] cursor-pointer text-[3vw] font-semibold text-white transition-opacity duration-500 ease-[cubic-bezier(0.65, 0.05, 0.36, 1)]">
          {lightStatusText}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
