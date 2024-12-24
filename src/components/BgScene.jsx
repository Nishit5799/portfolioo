import React from "react";
import * as THREE from "three";

const BgScene = () => {
  return (
    <mesh>
      <sphereGeometry args={[100, 100, 32, 32]} />
      <meshStandardMaterial color={"white"} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default BgScene;
