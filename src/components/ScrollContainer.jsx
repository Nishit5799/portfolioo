import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page1 from "./Page1";

const ScrollContainer = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={7} damping={0.8}>
        <MainScene />
        <Scroll html>
          <Page1 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
