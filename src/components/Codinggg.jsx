import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useFrame } from "@react-three/fiber";

export default function Codinggg(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/untitled.gltf");
  const { actions } = useAnimations(animations, group);
  const gateref = useRef(null);
  const lightref = useRef(null);
  const tl = useRef(null);
  const scroll = useScroll();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const rotation = isSmallScreen ? [0, -6, 0] : [0, -6, 0];
  const [lightIntensity, setLightIntensity] = useState(0.5);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Assuming 'sm' breakpoint
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useGSAP(() => {
    tl.current = gsap.timeline();

    const gaterefPositions = isSmallScreen
      ? { x: 29.7, y: -7 } // Small screen positions
      : { x: 30, y: -9 }; // Large screen positions

    tl.current.to(
      group.current.position,
      {
        z: 3,
        x: -0.9,
        y: 0.1,
      },
      0
    );

    tl.current.to(
      gateref.current.position,
      {
        x: gaterefPositions.x, // Dynamic based on screen size
      },
      0
    );

    tl.current.to(
      gateref.current.position,
      {
        y: gaterefPositions.y, // Dynamic based on screen size
      },
      0.1
    );

    tl.current.to(
      gateref.current.rotation,
      {
        x: 0,
        y: 0,
        z: -2,
      },
      0
    );

    tl.current.to(
      lightref.current,
      {
        intensity: 4, // Start bright
        ease: "power1.inOut",
      },
      ">0.01"
    );

    tl.current.to(
      lightref.current,
      {
        intensity: 0, // Dim
        duration: 0.11,
        ease: "power1.inOut",
      },
      "0.01"
    );

    tl.current.to(
      lightref.current,
      {
        intensity: gsap.utils.random(3, 4), // Random flicker brightness
        duration: 0.1,
        repeat: 6, // Flicker 5 times
        yoyo: true,
        ease: "none",
      },
      "0.001"
    );

    // Stabilizing the light
    tl.current.to(
      lightref.current,
      {
        intensity: 5, // Final stable intensity
        duration: 0.5,
        ease: "linear",
        onUpdate: () => setLightIntensity(lightref.current.intensity), // Optional state sync
      },
      "0.1"
    );

    tl.current.to(
      group.current.position,
      {
        x: 0.7,
        z: 2.69,
        y: 0,
      },
      0.5
    );
    tl.current.to(
      group.current.rotation,
      {
        y: -4.7,
        // x: 0.3,
      },
      0.5
    );

    //after page3
    tl.current.to(
      group.current.position,
      {
        z: 6.1,
        y: -0.9,
        x: 1.2,
      },
      1
    );
    tl.current.to(
      group.current.rotation,
      {
        y: -5.69,
      },
      1
    );
  });

  return (
    <>
      <ambientLight ref={lightref} intensity={lightIntensity} />
      {/* <ambientLight intensity={3} /> */}
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[-4.3, -3, -5.5]}
        rotation={[0, -6, 0]}
      >
        <group name="Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.197}
          >
            <group ref={gateref}>
              <mesh
                name="Object_3"
                geometry={nodes.Object_3.geometry}
                material={materials.blinn3SG}
                position={[2.09, -30, 0]}
                rotation={[-0.01, -0.01, 1.605]}
                scale={[1, 1.28, 1.339]}
              />
            </group>
            <mesh
              name="Object_10"
              geometry={nodes.Object_10.geometry}
              material={materials.lambert16SG}
            />
            <mesh
              name="Object_11"
              geometry={nodes.Object_11.geometry}
              material={materials.lambert23SG}
            />
            <mesh
              name="Object_12"
              geometry={nodes.Object_12.geometry}
              material={materials.lambert3SG}
            />
            <mesh
              name="Object_13"
              geometry={nodes.Object_13.geometry}
              material={materials.lambert8SG}
            />
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials.lambert22SG}
            />
            <mesh
              name="Object_15"
              geometry={nodes.Object_15.geometry}
              material={materials.lambert26SG}
            />
            <mesh
              name="Object_16"
              geometry={nodes.Object_16.geometry}
              material={materials.lambert28SG}
              position={[21.29, -6.72, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Object_17"
              geometry={nodes.Object_17.geometry}
              material={materials.blinn4SG}
            />
            <mesh
              name="Object_18"
              geometry={nodes.Object_18.geometry}
              material={materials.blinn5SG}
            />
            <mesh
              name="Object_19"
              geometry={nodes.Object_19.geometry}
              material={materials.lambert11SG}
            />
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials.blinn2SG}
            />
            <mesh
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={materials.lambert12SG}
            />
            <mesh
              name="Object_21"
              geometry={nodes.Object_21.geometry}
              material={materials.lambert19SG}
            />
            <mesh
              name="Object_22"
              geometry={nodes.Object_22.geometry}
              material={materials.lambert21SG}
            />
            <mesh
              name="Object_23"
              geometry={nodes.Object_23.geometry}
              material={materials.lambert14SG}
            />
            <mesh
              name="Object_24"
              geometry={nodes.Object_24.geometry}
              material={materials.lambert13SG}
            />
            <mesh
              name="Object_25"
              geometry={nodes.Object_25.geometry}
              material={materials.lambert13SG}
            />
            <mesh
              name="Object_26"
              geometry={nodes.Object_26.geometry}
              material={materials.lambert18SG}
            />
            <mesh
              name="Object_27"
              geometry={nodes.Object_27.geometry}
              material={materials.lambert24SG}
            />
            <mesh
              name="Object_28"
              geometry={nodes.Object_28.geometry}
              material={materials.lambert3SG}
            />
            <mesh
              name="Object_29"
              geometry={nodes.Object_29.geometry}
              material={materials.lambert4SG}
            />
            <mesh
              name="Object_30"
              geometry={nodes.Object_30.geometry}
              material={materials.lambert9SG}
            />
            <mesh
              name="Object_31"
              geometry={nodes.Object_31.geometry}
              material={materials.lambert25SG}
            />
            <mesh
              name="Object_32"
              geometry={nodes.Object_32.geometry}
              material={materials.lambert27SG}
            />
            <mesh
              name="Object_33"
              geometry={nodes.Object_33.geometry}
              material={materials.lambert2SG}
            />
            <mesh
              name="Object_33001"
              geometry={nodes.Object_33001.geometry}
              material={materials.lambert2SG}
              position={[-2.009, -15.203, 0.249]}
              rotation={[0, 0, 1.571]}
              scale={[0.01, 0.761, 1]}
            />
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.blinn4SG}
            />
            <mesh
              name="Object_5"
              geometry={nodes.Object_5.geometry}
              material={materials.blinn5SG}
            />
            <mesh
              name="Object_6"
              geometry={nodes.Object_6.geometry}
              material={materials.lambert10SG}
            />
            <mesh
              name="Object_7"
              geometry={nodes.Object_7.geometry}
              material={materials.lambert17SG}
            />
            <mesh
              name="Object_8"
              geometry={nodes.Object_8.geometry}
              material={materials.lambert15SG}
            />
            <mesh
              name="Object_9"
              geometry={nodes.Object_9.geometry}
              material={materials.lambert20SG}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/untitled.gltf");
