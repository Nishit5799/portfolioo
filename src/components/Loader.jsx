import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Only update if the new progress is higher than the current state
    // This prevents the "jumping backwards" glitch
    if (progress > smoothProgress) {
      setSmoothProgress(progress);
    }

    if (progress === 100) {
      // Small delay to ensure the GPU has actually painted the textures
      const timer = setTimeout(() => setIsHidden(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, smoothProgress]);

  if (isHidden) return null;

  return (
    <div className="w-full h-screen fixed z-[100] top-0 left-0 flex flex-col items-center justify-center bg-[#111111] text-white font-sans">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-tighter mb-2">LOADING...</h1>
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-black">
            {Math.round(smoothProgress)}
          </span>
          <span className="text-xl text-gray-500">%</span>
        </div>
      </div>

      <div className="w-72 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-500 ease-out"
          style={{ width: `${smoothProgress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">
        NISHIT'S PORTFOLIO
      </p>
    </div>
  );
};

export default Loader;
