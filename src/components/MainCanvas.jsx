"use client";

import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";

import ScrollContainer from "./ScrollContainer";
import BgScene from "./BgScene";
import Navbar from "./Navbar";
import { LightProvider } from "@/context/LightContext";

const MainCanvas = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading screen (e.g., while fetching assets or preparing 3D content)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust the time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LightProvider>
      <div className="w-full h-screen fixed top-0 left-0">
        {isLoading && (
          <div className="loading-screen">
            <div className="loading-animation">
              {/* Your animation here, e.g., a spinning circle or custom animation */}
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          </div>
        )}
        {!isLoading && (
          <>
            <Navbar />
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ fov: 64, position: [1.8, 0.8, 4] }}
            >
              <BgScene />
              <ScrollContainer />
            </Canvas>
          </>
        )}
      </div>
    </LightProvider>
  );
};

export default MainCanvas;
