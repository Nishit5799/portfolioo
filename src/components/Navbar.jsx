import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useLight } from "@/context/LightContext";

const Navbar = () => {
  const { lightIntensity, setLightIntensity } = useLight();
  const [isFlickering, setIsFlickering] = useState(false);

  const extraLength = useMotionValue(0);
  const rotation = useMotionValue(0);

  // Base height of the string
  const stringHeight = useTransform(extraLength, (val) => 90 + val);

  const handleToggle = () => {
    if (lightIntensity === 5) {
      setLightIntensity(0);
    } else {
      setIsFlickering(true);
    }
  };

  useEffect(() => {
    if (isFlickering) {
      const flickerSequence = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5];
      let index = 0;
      const flickerInterval = setInterval(() => {
        setLightIntensity(flickerSequence[index]);
        index++;
        if (index === flickerSequence.length) {
          clearInterval(flickerInterval);
          setIsFlickering(false);
        }
      }, 150);
      return () => clearInterval(flickerInterval);
    }
  }, [isFlickering, setLightIntensity]);

  return (
    <div className="fixed top-0 left-0 w-full h-0 z-[100] pointer-events-none">
      <motion.div
        className="absolute top-0 right-10 md:right-24 flex flex-col items-center pointer-events-none"
        style={{
          transformOrigin: "top center",
          rotate: rotation,
        }}
      >
        {/* REFINED PROFESSIONAL INSTRUCTIONS */}
        <div className="absolute right-full mr-6 top-8 whitespace-nowrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={lightIntensity > 0 ? "on" : "off"}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-end"
            >
              {/* Status label removed as requested */}
              <p className="text-[3.3vw]  md:text-base font-light tracking-tight text-gray-100 dark:text-gray-300 italic">
                {lightIntensity > 0
                  ? "PULL BULB DOWN TO TURN OFF THE LIGHT"
                  : "PULL BULB DOWN TO TURN ON THE LIGHT"}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* THE STRING */}
        <motion.div
          style={{ height: stringHeight }}
          className="w-[1.5px] bg-gray-400 dark:bg-gray-600 shadow-sm transition-colors"
        />

        {/* THE BULB ASSEMBLY */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 20 }}
          dragElastic={0}
          style={{ y: extraLength }}
          onDragEnd={(e, info) => {
            if (info.offset.y > 5) {
              handleToggle();
            }

            animate(extraLength, 0, {
              type: "spring",
              stiffness: 600,
              damping: 25,
            });

            animate(rotation, [0, 18, -14, 10, -6, 3, 0], {
              duration: 1.8,
              ease: "easeOut",
            });
          }}
          className="cursor-grab active:cursor-grabbing pointer-events-auto flex flex-col items-center"
        >
          {/* Anchor Seam */}
          <div className="w-3 h-2 bg-gray-600 rounded-t-sm -mt-[3vh]" />

          <div
            className={`w-5 h-8 rounded-b-full rounded-t-sm border-2 transition-all duration-700 ${
              lightIntensity > 0
                ? "bg-yellow-300 border-yellow-100 shadow-[0_0_30px_rgba(253,224,71,0.6)]"
                : "bg-gray-700 border-gray-600 shadow-inner"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
