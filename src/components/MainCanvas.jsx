"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";

import ScrollContainer from "./ScrollContainer";
// import { Environment } from "@react-three/drei";
import BgScene from "./BgScene";
import Navbar from "./Navbar";
import { LightProvider } from "@/context/LightContext";

const MainCanvas = () => {
  return (
    <LightProvider>
      <div className="w-full h-screen fixed top-0 left-0">
        <Navbar />
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 64, position: [1.8, 0.8, 4] }}
        >
          {/* <Environment preset="city" /> */}

          <BgScene />
          <ScrollContainer />
        </Canvas>
      </div>
    </LightProvider>
  );
};

export default MainCanvas;
