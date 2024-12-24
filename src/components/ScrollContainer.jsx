import { ScrollControls, Scroll } from "@react-three/drei";
import React, { useRef } from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Page15 from "./Page15";
import Page16 from "./Page16";
import Page10 from "./Page10";

const ScrollContainer = () => {
  const page10Ref = useRef(null); // Reference for Page10

  const scrollToTop = () => {
    if (page10Ref.current) {
      page10Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <ScrollControls pages={7} damping={0.4}>
      <MainScene />
      <Scroll html>
        <div className="page10" ref={page10Ref}>
          <Page10 />
        </div>
        <Page11 />
        <Page12 />
        <Page13 />
        <Page14 />
        <Page15 />
        <Page16 scrollToTop={scrollToTop} />
      </Scroll>
    </ScrollControls>
  );
};

export default ScrollContainer;
