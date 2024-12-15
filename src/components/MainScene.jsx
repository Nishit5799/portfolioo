import React from "react";

import Codinggg from "./Codinggg";
import { useLight } from "@/context/LightContext";

const MainScene = () => {
  const { lightIntensity } = useLight(); // Get intensity from context

  return (
    <>
      <ambientLight intensity={lightIntensity} />
      <group>
        <Codinggg />
      </group>
    </>
  );
};

export default MainScene;
