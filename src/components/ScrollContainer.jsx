import { Scroll, ScrollControls } from "@react-three/drei";
import React, { useState, useEffect, useRef } from "react";
import MainScene from "./MainScene";
import Page11 from "./Page11";
import Page12_About from "./Page12_About";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Page15 from "./Page15";
import Page16 from "./Page16";
import { gsap } from "gsap";

const ScrollContainer = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Track scroll direction
  const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion
  const scrollContainerRef = useRef(null); // Reference to scroll container
  const prevScrollTop = useRef(0); // Store previous scroll position

  // Detect scroll direction and handle scroll
  const handleScroll = () => {
    if (scrollContainerRef.current && animationComplete) {
      const currentScrollTop = scrollContainerRef.current.scrollTop;

      if (currentScrollTop > prevScrollTop.current) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up but only if animation is complete
        setIsScrollingDown(false);
      }

      prevScrollTop.current = currentScrollTop;
    }
  };

  // Trigger animation and set animationComplete state
  const triggerAnimation = () => {
    const tl = gsap.timeline();

    tl.to(scrollContainerRef.current, {
      // Define your animation logic here
      duration: 2,
      onComplete: () => {
        // After animation completes, enable scrolling down only
        setAnimationComplete(true);
      },
    });
  };

  useEffect(() => {
    // Trigger animation on mount
    triggerAnimation();

    if (scrollContainerRef.current) {
      // Attach scroll event listener
      scrollContainerRef.current.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <ScrollControls
        pages={6.96}
        damping={0.4}
        infinite={isScrollingDown} // Infinite scrolling only when scrolling down
        ref={scrollContainerRef}
      >
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
