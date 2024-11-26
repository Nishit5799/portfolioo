import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";

const ScrollContainer = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <ScrollControls pages={3} damping={0.7}>
        <MainScene />
        <Scroll html>
          {/* <Page1 />
          <Page2 />
          <Page3 />
          <Page4 /> */}
          <Page11 />
          <Page12 />
          <Page13 />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ScrollContainer;
