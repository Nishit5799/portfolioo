import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page1 from "./Page1";
import Page2 from "./Page2";

const ScrollContainer = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.5}>
        <MainScene />
        <Scroll html>
          <Page1 />
          <Page2 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
