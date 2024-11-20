import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const ScrollContainer = () => {
  return (
    <>
      <ScrollControls pages={4} damping={0.6}>
        <MainScene />
        <Scroll html>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
