import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useFrame } from "@react-three/fiber";

export default function Codinggroom(props) {
  const { nodes, materials } = useGLTF("./codinggroom.glb");
  const group = useRef(null);
  const tl = useRef(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useGSAP(() => {
    tl.current = gsap.timeline();
    tl.current.to(group.current.rotation, {
      x: -0.05,
    });
    tl.current.to(
      group.current.position,
      {
        z: 1,
        y: 0.2,
      },
      0
    );
    tl.current.to(
      group.current.rotation,
      {
        y: 0.04,
      },
      0
    );
    tl.current.to(
      group.current.position,
      {
        x: -0.8,
      },
      0
    );

    //after page1

    tl.current.to(group.current.position, {
      x: 0.3,
      z: 2,
      y: 0.5,
    });
    tl.current.to(
      group.current.rotation,
      {
        y: 1.33,

        z: 0.5,
      },
      1
    );
    tl.current.to(
      group.current.position,
      {
        x: -0.8,
        y: 1.6,
        z: 2.7,
      },
      1
    );

    //after page2

    tl.current.to(
      group.current.position,
      {
        y: 0.6,
        z: 2,
        x: -1.4,
      },
      1.5
    );

    tl.current.to(
      group.current.position,
      {
        y: 1,
        z: 5.1,
        x: -2,
      },
      2
    );
    tl.current.to(
      group.current.rotation,
      {
        x: -0.4,
        y: -0.05,
        z: 0.05,
      },
      2
    );

    //after page3
    tl.current.to(
      group.current.position,
      {
        y: 1,
        x: 1,
      },
      2.5
    );
    tl.current.to(
      group.current.rotation,
      {
        y: 1.7,
      },
      2.5
    );
    tl.current.to(group.current.position, { y: 1.5, x: 0.2, z: 6 }, 3);
  }, []);
  return (
    <group
      {...props}
      ref={group}
      rotation={[0.6, 1.7, 0]}
      position={[-1.4, 0, 5.3]}
      scale={0.19}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.blinn3SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.lambert10SG}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.lambert17SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.lambert15SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert20SG}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.lambert16SG}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.lambert23SG}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.lambert8SG}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.lambert26SG}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.lambert28SG}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.lambert11SG}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.lambert12SG}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.lambert19SG}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.lambert21SG}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.lambert14SG}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.lambert18SG}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.lambert24SG}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.lambert4SG}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.lambert25SG}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.lambert27SG}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.lambert2SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./codinggroom.glb");
