"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ScrollContainer from "./ScrollContainer";
import Navbar from "./Navbar";
import { LightProvider } from "@/context/LightContext";
import Loader from "./Loader";

const MainCanvas = () => {
  return (
    <LightProvider>
      {/* 1. Loader sits strictly as an HTML overlay outside the Canvas */}
      <Loader />

      <div className="w-full h-screen fixed top-0 left-0 z-0">
        <Navbar />
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 64, position: [1.8, 0.8, 4] }}
        >
          {/* 2. Suspense sits INSIDE Canvas. Fallback is null because our custom Loader handles the UI */}
          <Suspense fallback={null}>
            <ScrollContainer />
          </Suspense>
        </Canvas>
      </div>
    </LightProvider>
  );
};

export default MainCanvas;
