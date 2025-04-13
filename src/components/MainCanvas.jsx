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
      <Suspense fallback={<Loader />}>
        <div className="w-full h-screen fixed top-0 left-0">
          <Navbar />
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 64, position: [1.8, 0.8, 4] }}
          >
            <ScrollContainer />
          </Canvas>
        </div>
      </Suspense>
    </LightProvider>
  );
};

export default MainCanvas;
