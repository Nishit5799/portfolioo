import React, { useRef, useEffect, useState } from "react";
import {
  useAnimations,
  useGLTF,
  useScroll,
  Text,
  useTexture,
} from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import VideoMesh from "./VideoMesh";

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
        intensity: gsap.utils.random(3, 10), // Random flicker brightness
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
        intensity: 11, // Final stable intensity
        duration: 0.5,
        ease: "linear",
        onUpdate: () => setLightIntensity(lightref.current.intensity), // Optional state sync
      },
      "0.1"
    );

    // tl.current.to(
    //   group.current.position,
    //   {
    //     x: 0.6,
    //     y: 1,
    //     z: 3.2,
    //     duration: 0.5,
    //     ease: "power1.out",
    //   },
    //   0.5
    // );
    tl.current.to(
      group.current.position,
      {
        x: 0.2,
        y: 1,
        z: 2.95,
        duration: 0.5,
        ease: "power1.out",
      },
      0.5
    );

    // tl.current.to(
    //   group.current.rotation,
    //   {
    //     y: -4.38,
    //     x: 0.3,
    //     z: 0.9,
    //   },
    //   0.5
    // ); //large screen
    tl.current.to(
      group.current.rotation,
      {
        y: -4.25,
        x: 0.8,
        z: 0.8,
      },
      0.5
    ); //small screen

    //after page3
    tl.current.to(
      group.current.rotation,
      {
        x: -0.2,
        z: 0.3,
        // y: 0.41,
      },
      1
    );

    tl.current.to(
      group.current.position,
      {
        y: -0.9,
        x: 1.2,
        z: 3.9,
      },
      1
    );
    tl.current.to(
      group.current.rotation,
      {
        y: -5.9,
        x: -0.2,
      },
      1.5
    );
    tl.current.to(
      group.current.position,
      {
        z: 6,
        x: 0.88,
        y: -0.8,
      },
      1.5
    );

    //projects animation

    tl.current.to(
      group.current.position,
      {
        z: 5.5,
        x: 2,
      },
      2
    );
    tl.current.to(
      group.current.rotation,
      {
        y: -4.4,
        x: -0.2,
      },
      2
    );
  });
  const texture = useTexture("/img.avif");
  const blankWhiteMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const blankBlackMaterial = new THREE.MeshBasicMaterial({
    color: "#C6AC8F",
  });
  const fontURL = "/ChochoCrunch-BF67145608f402e.ttf"; // Replace with your font file's path
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
              position={[0.5, -0.3, 0]}
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            <mesh
              name="Object_15"
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            {/* Add dynamic text */}

            <group position={[-0.58, 0.36, 0]}>
              <mesh
                position={[-1.52, -5.3, 1.89]}
                rotation={[0, 0, -2.1]}
                scale={[0.3, 0.4, 0.3]}
              >
                <planeGeometry args={[1, 1]} /> {/* Explicit width/height */}
                <meshBasicMaterial map={texture} />
              </mesh>

              <Text
                position={[-1.1, -5.5, 1.89]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.14}
                // font={fontURL}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                LET ME INTRODUCE MYSELF!
              </Text>

              <Text
                position={[-1.81, -5.1, 1.89]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.15}
                // font={fontURL}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                Nishit Lugun
              </Text>
              <Text
                position={[-2, -4.9, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                A self-taught frontend developer with a passion for coding and
              </Text>
              <Text
                position={[-2.12, -4.83, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.067}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                problem-solving, who spent two years mastering web development
              </Text>
              <Text
                position={[-2.24, -4.77, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                independently. During this time, he relied solely on his
                curiosity
              </Text>
              <Text
                position={[-2.36, -4.7, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                and determination, never using external platforms, and built his
              </Text>
              <Text
                position={[-2.48, -4.65, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                skills from the ground up. His journey reflects resilience and a
              </Text>
              <Text
                position={[-2.6, -4.59, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                deep understanding of creating intuitive, user-friendly websites
              </Text>
              <Text
                position={[-2.76, -4.59, 1.87]} // Slightly above the surface
                rotation={[0, 0, -2.1]}
                fontSize={0.07}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                from scratch.
              </Text>
            </group>
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
            {/* <mesh
              name="Object_19"
              geometry={nodes.Object_19.geometry}
              material={blankBlackMaterial} // Applying the blank material
            /> */}
            <group>
              {/* Object 19 */}
              <mesh
                name="Object_19"
                geometry={nodes.Object_19.geometry}
                material={blankBlackMaterial} // Applying the black material
              />

              {/* Add Text over Object_19 */}
              <Text
                position={[10, 12.45, 9.4]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.05]} // Align with Object_19
                fontSize={0.33} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                My Skills!
              </Text>
              <Text
                position={[9, 12.45, 8.3]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.25]} // Align with Object_19
                fontSize={0.22} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                HTML
              </Text>
              <Text
                position={[10, 12.45, 8.3]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.05]} // Align with Object_19
                fontSize={0.24} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                CSS
              </Text>
              <Text
                position={[11, 12.45, 8.14]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.05]} // Align with Object_19
                fontSize={0.22} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                JAVASCRIPT
              </Text>
              <Text
                position={[9, 12.45, 7.1]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.15]} // Align with Object_19
                fontSize={0.26} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                REACT
              </Text>
              <Text
                position={[10, 12.45, 7.25]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.17]} // Align with Object_19
                fontSize={0.28} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                THREE
              </Text>
              <Text
                position={[11, 12.45, 7.05]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.05]} // Align with Object_19
                fontSize={0.26} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                GSAP
              </Text>
              <Text
                position={[9, 12.45, 5.9]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.33]} // Align with Object_19
                fontSize={0.24} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                MONGODB
              </Text>
              <Text
                position={[10, 12.45, 5.9]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.15]} // Align with Object_19
                fontSize={0.25} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                GITHUB
              </Text>
              <Text
                position={[11, 12.45, 5.9]} // Adjust position to place above Object_19
                rotation={[-1.6, 3.3, 3.2]} // Align with Object_19
                fontSize={0.26} // Adjust size of the text
                color="black" // Text color
                anchorX="center"
                anchorY="middle"
                font={fontURL}
              >
                NODE
              </Text>

              {/* Add an Image (Plane) over Object_19 */}
              <mesh position={[9, 12.45, 8.7]} rotation={[-1.6, 3.3, 3.2]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/html.webp")} />
              </mesh>
              <mesh position={[10, 12.45, 8.7]} rotation={[-1.6, 3.3, 3.15]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/css.webp")} />
              </mesh>
              <mesh position={[11, 12.45, 8.6]} rotation={[-1.6, 3.3, 3.09]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/js.webp")} />
              </mesh>
              <mesh position={[9, 12.45, 7.6]} rotation={[-1.6, 3.3, 3.2]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/react.webp")} />
              </mesh>
              <mesh position={[10, 12.45, 7.7]} rotation={[-1.6, 3.3, 3.15]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/three.webp")} />
              </mesh>
              <mesh position={[11, 12.45, 7.5]} rotation={[-1.6, 3.3, 3.15]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/gsap.webp")} />
              </mesh>
              <mesh position={[9, 12.45, 6.4]} rotation={[-1.6, 3, 3.1]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/mongo.webp")} />
              </mesh>
              <mesh position={[10, 12.45, 6.4]} rotation={[-1.6, 3.01, 3.06]}>
                <planeGeometry args={[0.5, 0.4]} />
                <meshBasicMaterial map={useTexture("/git.webp")} />
              </mesh>
              <mesh position={[11, 12.45, 6.4]} rotation={[-1.6, 3.13, 3.06]}>
                <planeGeometry args={[0.5, 0.5]} />
                <meshBasicMaterial map={useTexture("/node.webp")} />
              </mesh>
            </group>

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

          <VideoMesh />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/untitled.gltf");
