"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";

import ScrollContainer from "./ScrollContainer";
import { Environment } from "@react-three/drei";
import BgScene from "./BgScene";

const MainCanvas = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 64, position: [0, 2, 4] }}>
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <BgScene />
        <ScrollContainer />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
