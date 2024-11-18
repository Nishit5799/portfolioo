import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const ScrollContainer = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.7}>
        <MainScene />
        <Scroll html>
          <Page1 />
          <Page2 />
          <Page3 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
