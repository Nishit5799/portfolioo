import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";

import Page12_About from "./Page12_About";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Page15 from "./Page15";
import Page16 from "./Page16";

const ScrollContainer = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ScrollControls pages={6.96} damping={0.4}>
        <MainScene />
        <Scroll html>
          <Page11 />
          <Page12_About />
          <Page13 />
          <Page14 />
          <Page15 />
          <Page16 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
