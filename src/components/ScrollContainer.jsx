import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";

import Page12_About from "./Page12_About";
import Page13 from "./Page13";
import Page14 from "./Page14";

const ScrollContainer = () => {
  return (
    <>
      {/* <OrbitControls /> */}

      <ScrollControls pages={5.96} damping={0.3}>
        <MainScene />
        <Scroll html>
          <Page11 />
          <Page12_About />
          <Page13 />
          <Page14 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
