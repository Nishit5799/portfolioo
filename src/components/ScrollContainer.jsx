import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";

import Page13 from "./Page13";
import Page12_About from "./Page12_About";

const ScrollContainer = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ScrollControls pages={4} damping={0.3}>
        <MainScene />
        <Scroll html>
          <Page11 />
          <Page12_About />
          <Page13 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
