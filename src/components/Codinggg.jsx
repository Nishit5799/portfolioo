import React, { useRef, useEffect, useState } from "react";
import {
  useAnimations,
  useGLTF,
  useScroll,
  Text,
  useTexture,
} from "@react-three/drei";

import gsap from "gsap/all";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import VideoMesh from "./VideoMesh";
const SKILLS_DATA = [
  {
    name: "html",
    pos: [9, 12.45, 9],
    rot: [-1.6, 3.3, 3.2],
    url: "/html.webp",
  },
  {
    name: "css",
    pos: [10, 12.45, 9],
    rot: [-1.6, 3.3, 3.15],
    url: "/css.webp",
  },
  { name: "js", pos: [11, 12.45, 9], rot: [-1.6, 3.3, 3.1], url: "/js.webp" },
  {
    name: "react",
    pos: [9, 12.45, 7.95],
    rot: [-1.6, 3.3, 3.2],
    url: "/react.webp",
  },
  {
    name: "three",
    pos: [10, 12.45, 7.99],
    rot: [-1.6, 3.3, 3.15],
    url: "/three.webp",
  },
  {
    name: "gsap",
    pos: [11, 12.45, 7.98],
    rot: [-1.6, 3.3, 3.15],
    url: "/gsap.webp",
  },
  {
    name: "csharp",
    pos: [9, 12.45, 6.95],
    rot: [-1.6, 3, 3.1],
    url: "/csharp.webp",
  },
  {
    name: "unity",
    pos: [11, 12.45, 6.97],
    rot: [-1.6, 3.01, 3.06],
    url: "/unity.webp",
  },
  {
    name: "mongo",
    pos: [9.3, 12.45, 6.05],
    rot: [-1.6, 3, 3.1],
    url: "/mongo.webp",
  },
  {
    name: "git",
    pos: [10, 12.45, 6.9],
    rot: [-1.6, 3.01, 3.06],
    url: "/git.webp",
  },
  {
    name: "node",
    pos: [10.6, 12.45, 6.05],
    rot: [-1.6, 3.13, 3.06],
    url: "/node.webp",
  },
];
const SKILL_LABELS = [
  {
    text: "My Skills!",
    pos: [10, 12.45, 9.65],
    rot: [-1.6, 3.3, 3.05],
    size: 0.45,
  },
  { text: "HTML", pos: [9, 12.45, 8.55], rot: [-1.6, 3.3, 3.25], size: 0.28 },
  { text: "CSS", pos: [10, 12.45, 8.55], rot: [-1.6, 3.3, 3.05], size: 0.28 },
  {
    text: "JAVASCRIPT",
    pos: [11, 12.45, 8.53],
    rot: [-1.6, 3.3, 3.05],
    size: 0.25,
  },
  { text: "REACT", pos: [9, 12.45, 7.47], rot: [-1.6, 3.3, 3.15], size: 0.28 },
  {
    text: "THREE JS",
    pos: [10, 12.45, 7.49],
    rot: [-1.6, 3.3, 3.17],
    size: 0.28,
  },
  { text: "GSAP", pos: [11, 12.45, 7.5], rot: [-1.6, 3.3, 3.05], size: 0.28 },
  { text: "C#", pos: [9, 12.45, 6.54], rot: [-1.6, 3.3, 3.33], size: 0.27 },
  { text: "UNITY", pos: [11, 12.45, 6.54], rot: [-1.6, 3.3, 3.2], size: 0.28 },
  {
    text: "MONGODB",
    pos: [9.29, 12.45, 5.63],
    rot: [-1.6, 3.3, 3.2],
    size: 0.27,
  },
  { text: "GITHUB", pos: [10, 12.49, 6.5], rot: [-1.6, 3.3, 3.15], size: 0.28 },
  { text: "NODE", pos: [10.6, 12.45, 5.65], rot: [-1.6, 3.3, 3.2], size: 0.28 },
];
const BIO_PARAGRAPH = [
  {
    text: "A self-taught Full-Stack Developer with three years of",
    pos: [-1.95, -5, 1.87],
  },
  {
    text: "dedicated experience in crafting visually stunning and",
    pos: [-2.05, -4.92, 1.87],
  },
  {
    text: "interactive Game and Web experiences. Specializing in",
    pos: [-2.15, -4.85, 1.87],
  },
  {
    text: "both 2D and 3D Game/Web Development, he builds",
    pos: [-2.24, -4.76, 1.87],
  },
  {
    text: "engaging 3D Games ranging from offline experiences",
    pos: [-2.36, -4.73, 1.87],
  },
  {
    text: "to Multiplayer environments using modern technologies.",
    pos: [-2.47, -4.69, 1.87],
  },
  {
    text: "Additionally, he develops Dynamic Websites with fluid",
    pos: [-2.55, -4.6, 1.87],
  },
  { text: "animations and immersive designs.", pos: [-2.65, -4.55, 1.87] },
  {
    text: "Passionate about innovation and user-centric design,",
    pos: [-2.76, -4.52, 1.87],
  },
  {
    text: "transforming ideas into efficient digital realities.",
    pos: [-2.86, -4.46, 1.87],
  },
];
const SOCIAL_DATA = [
  {
    name: "gmail",
    pos: [0.021, 1.75, 2.8],
    rot: [-3.1, -0.023, -3.1],
    url: "/gmail.webp",
  },
  {
    name: "github",
    pos: [0.024, 1.6, 2.8],
    rot: [-3.1, -0.023, -3.1],
    url: "/github.webp",
  },
  {
    name: "linkedin",
    pos: [0.02, 1.45, 2.8],
    rot: [-3.1, -0.023, -3.1],
    url: "/linkedin.webp",
  },
  {
    name: "instagram",
    pos: [0.02, 1.315, 2.8],
    rot: [-3.1, -0.023, -3.1],
    url: "/instagram.webp",
  },
];
const CONTACT_LINKS = [
  {
    platform: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=lugun.nishit@gmail.com",
    labelPos: [0.68, 1.6, 2.85],
    linkPos: [0.31, 1.594, 2.85],
    labelSize: 0.07,
    linkSize: 0.05,
  },
  {
    platform: "Github",
    url: "https://github.com/Nishit5799",
    labelPos: [0.68, 1.45, 2.85],
    linkPos: [0.318, 1.44, 2.85],
    labelSize: 0.07,
    linkSize: 0.049,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/nishit-lugun-b15a35257",
    labelPos: [0.65, 1.3, 2.85],
    linkPos: [0.32, 1.295, 2.85],
    labelSize: 0.07,
    linkSize: 0.049,
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/_nisheeeet_",
    labelPos: [0.635, 1.16, 2.85],
    linkPos: [0.322, 1.16, 2.85],
    labelSize: 0.067,
    linkSize: 0.049,
  },
];
export default function Codinggg(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/untitled.glb");

  const skillTextures = useTexture(
    SKILLS_DATA.reduce(
      (acc, skill) => ({ ...acc, [skill.name]: skill.url }),
      {},
    ),
  );
  const socialTextures = useTexture(
    SOCIAL_DATA.reduce((acc, soc) => ({ ...acc, [soc.name]: soc.url }), {}),
  );
  const { actions } = useAnimations(animations, group);
  const gateref = useRef(null);

  const tl = useRef(gsap.timeline({ paused: true }));
  const scroll = useScroll();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const position = isSmallScreen ? [-1.2, -5.46, 1.89] : [-1.2, -5.5, 1.89];
  const fontSize = isSmallScreen ? 0.132 : 0.15;
  const positionPhoto = isSmallScreen
    ? [-1.44, -5.3, 1.89]
    : [-1.52, -5.3, 1.89];
  const positionUsername = isSmallScreen
    ? [-1.77, -5.15, 1.89]
    : [-1.81, -5.05, 1.89];
  const mainHeaderSize = isSmallScreen ? 0.132 : 0.15;

  const bioFontSizes = isSmallScreen
    ? [0.092, 0.0899, 0.09, 0.086, 0.09, 0.086, 0.09, 0.09, 0.09, 0.092]
    : [0.086, 0.0788, 0.081, 0.082, 0.082, 0.083, 0.083, 0.083, 0.083, 0.083];
  const handlePointerOver = (e) => {
    // Animates the text color to Blue (0, 0, 1) smoothly
    gsap.to(e.object.material.color, { r: 0, g: 0, b: 1, duration: 0.3 });
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e) => {
    // Reverts the text color to Black (0, 0, 0) smoothly
    gsap.to(e.object.material.color, { r: 0, g: 0, b: 0, duration: 0.3 });
    document.body.style.cursor = "default";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Assuming 'sm' breakpoint
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    const offset = scroll.offset;

    tl.current.seek(offset * tl.current.duration());
  });

  useEffect(() => {
    const initTimeline = () => {
      const gaterefPositions = isSmallScreen
        ? { x: 29.7, y: -7 }
        : { x: 30, y: -9 };

      const groupPosition = isSmallScreen
        ? { x: 0.43, y: 0.71, z: 3.58 }
        : { x: 0.6, y: 0.96, z: 3.34 };

      const groupRotation = isSmallScreen
        ? { y: -3.9, x: 0.89, z: 1 }
        : { y: -4.38, x: 0.3, z: 0.9 };

      const smallScreenRotation = { y: -3 };
      const largeScreenRotation = { y: -3 };

      const smallScreenPosition = { z: 4.9, x: 3.8, y: -0.2 };
      const largeScreenPosition = { z: 5.5, x: 3.5, y: 0 };

      const rotationValues = isSmallScreen
        ? smallScreenRotation
        : largeScreenRotation;
      const positionValues = isSmallScreen
        ? smallScreenPosition
        : largeScreenPosition;
      tl.current.clear();

      tl.current.to(group.current.position, { z: 3, x: -0.9, y: 0.1 }, 0);

      tl.current.to(gateref.current.position, { x: gaterefPositions.x }, 0);
      tl.current.to(gateref.current.position, { y: gaterefPositions.y }, 0.1);
      tl.current.to(gateref.current.rotation, { x: 0, y: 0, z: -2 }, 0);
      tl.current.to(
        gateref.current.rotation,
        { x: 0, y: 0, z: -3.2, ease: "linear" },
        0.6,
      );
      tl.current.to(
        gateref.current.position,
        { x: 23.7, y: -30.7, z: 0, ease: "linear" },
        0.6,
      );

      tl.current.to(
        gateref.current.position,
        { x: 33.9, y: -15.5, z: 0, ease: "linear" },
        3,
      );

      tl.current.to(
        gateref.current.rotation,
        { x: 0, y: 0, z: -2.12, ease: "linear" },
        3,
      );

      tl.current.to(group.current.position, groupPosition, 0.5);
      tl.current.to(group.current.rotation, groupRotation, 0.5);

      // Additional animations after page 3
      tl.current.to(group.current.rotation, { x: -0.2, z: 0.3 }, 1);
      tl.current.to(group.current.position, { y: -0.9, x: 1.2, z: 3.9 }, 1);
      tl.current.to(group.current.rotation, { y: -5.9, x: -0.2 }, 1.5);
      tl.current.to(group.current.position, { z: 6, x: 0.88, y: -0.8 }, 1.5);

      // Projects animation
      tl.current.to(group.current.position, { z: 5.5, x: 2 }, 2);
      tl.current.to(group.current.rotation, { y: -4.4, x: -0.2 }, 2);

      //contact me animation
      tl.current.to(
        group.current.position,
        {
          z: 5.2,
          y: -0.8,
          x: 1.4,
        },
        2.5,
      );
      tl.current.to(
        group.current.rotation,
        {
          y: -2.65,
          z: -0.03,
        },
        3,
      );
      tl.current.to(group.current.rotation, rotationValues, 3.5);
      tl.current.to(group.current.position, positionValues, 3.5);
      tl.current.to(
        group.current.position,
        {
          z: 9,
          x: 5,
          y: 0,
        },
        4,
      );
    };
    initTimeline();
  }, [isSmallScreen]);

  const texture = useTexture("/profilepic.png");
  const texture1 = useTexture("/exit.jpg");

  const blankWhiteMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const blankBlackMaterial = new THREE.MeshBasicMaterial({ color: "#77624B" });
  const fontURL = "/ChochoCrunch-BF67145608f402e.ttf"; // Replace with your font file's path
  return (
    <>
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
              position={[0.7, -0.3, 0]}
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            <mesh
              name="Object_15"
              position={[0, 0.12, 0]}
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            <mesh
              name="Object_15"
              position={[-0.12, -0.076, 0]}
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            <mesh
              name="Object_15"
              position={[0.58, -0.5, 0]}
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            <mesh
              name="Object_15"
              geometry={nodes.Object_15.geometry}
              material={blankWhiteMaterial} // Apply the blank material
            />
            {/* Add dynamic text */}

            <group position={[-0.37, 0.25, 0]} rotation={[0, 0.02, -0.01]}>
              <mesh
                position={positionPhoto}
                rotation={[0, 0, -2.1]}
                scale={[0.3, 0.4, 0.3]}
              >
                <planeGeometry args={[1.6, 1.1]} />{" "}
                {/* Explicit width/height */}
                <meshBasicMaterial map={texture} />
              </mesh>

              <Text
                position={position}
                rotation={[0, 0, -2.1]}
                fontSize={mainHeaderSize}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                LET ME INTRODUCE MYSELF!
              </Text>
              <Text
                position={positionUsername}
                rotation={[0, 0, -2.1]}
                fontSize={0.15}
                color="black"
                anchorX="center"
                anchorY="middle"
              >
                Nishit Lugun
              </Text>
              {BIO_PARAGRAPH.map((line, i) => (
                <Text
                  key={i}
                  position={line.pos}
                  rotation={[0, 0, -2.1]}
                  fontSize={bioFontSizes[i]}
                  color="black"
                  anchorX="center"
                  anchorY="middle"
                >
                  {line.text}
                </Text>
              ))}
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

            <group>
              {/* Object 19 */}
              <mesh
                name="Object_19"
                geometry={nodes.Object_19.geometry}
                material={blankBlackMaterial} // Applying the black material
              />

              {/* Add Text over Object_19 */}
              {SKILL_LABELS.map((label, i) => (
                <Text
                  key={i}
                  position={label.pos}
                  rotation={label.rot}
                  fontSize={label.size}
                  font={fontURL} // Restored the custom font reference here
                  color="black"
                  anchorX="center"
                  anchorY="middle"
                >
                  {label.text}
                </Text>
              ))}

              {/* Add an Image (Plane) over Object_19 */}

              {SKILLS_DATA.map((skill, index) => (
                <mesh key={index} position={skill.pos} rotation={skill.rot}>
                  <planeGeometry args={[0.5, 0.5]} />
                  <meshBasicMaterial
                    map={skillTextures[skill.name]}
                    transparent={true} // Required for transparency
                    alphaTest={0.5} // This "cuts off" the transparent pixels so they don't block other objects
                    side={THREE.DoubleSide} // Ensures the icon is visible from the back too
                  />
                </mesh>
              ))}
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
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={blankWhiteMaterial} // Apply the blank material
              position={[1, 1, 1]}
              rotation={[0, 0, 0]}
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
          {/* Main mesh */}
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            position={[-0.9, 1.46, 2.9]}
            rotation={[-3.2, -0.023, 0.028]}
            scale={[0.777, 0.577, 0.427]}
            material={blankBlackMaterial}
          >
            <planeGeometry args={[1.2, 1.7]} />
          </mesh>
          <group position={[-0.54, -0.15, 0]}>
            {/* Text Component */}
            <Text
              position={[-0.33, 1.94, 2.85]} // Position the text slightly above the plane
              rotation={[-0.1, Math.PI, 0.039]}
              fontSize={0.19} // Adjust size
              font={fontURL}
              color="black" // Text color
              anchorX="center" // Horizontal alignment
              anchorY="middle" // Vertical alignment
              maxWidth={1.5} // Restrict text width
            >
              Contact Me!
            </Text>
            <group position={[-0.89, 0.17, 0]} rotation={[0, 0, -0.03]}>
              {CONTACT_LINKS.map((link, i) => (
                <React.Fragment key={i}>
                  <Text
                    position={link.labelPos}
                    rotation={[-0.1, Math.PI, 0]}
                    fontSize={link.labelSize}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                  >
                    {link.platform}
                  </Text>
                  <Text
                    position={link.linkPos}
                    rotation={[-0.1, Math.PI, 0]}
                    fontSize={link.linkSize}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                    onClick={() => window.open(link.url, "_blank")}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                  >
                    Click here
                  </Text>
                </React.Fragment>
              ))}
              <mesh
                name="Plane"
                castShadow
                receiveShadow
                position={[2.8, 1.46, 2.9]}
                rotation={[-3.1, -0.023, 0.028]}
                scale={[0.777, 0.577, 0.427]}
                // material={blankBlackMaterial}
              >
                <planeGeometry args={[0.6, 0.3]} />
                <meshStandardMaterial
                  map={texture1} // Use the texture as the base map
                  emissiveMap={texture1} // Use the same texture for emissive
                  emissive="white" // Emit the light based on the texture
                  emissiveIntensity={1.5} // Adjust the glow intensity
                  toneMapped={false} // Ensure colors appear correctly, ignoring HDR tone mapping
                />
              </mesh>
            </group>
            {SOCIAL_DATA.map((soc, index) => (
              <mesh key={index} position={soc.pos} rotation={soc.rot}>
                <planeGeometry args={[0.08, 0.08]} />
                <meshBasicMaterial map={socialTextures[soc.name]} transparent />
              </mesh>
            ))}
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/untitled.glb");
[
  "/profilepic.png",
  "/exit.jpg",
  "/code.jpg",
  "/html.webp",
  "/css.webp",
  "/js.webp",
  "/react.webp",
  "/three.webp",
  "/gsap.webp",
  "/csharp.webp",
  "/unity.webp",
  "/git.webp",
  "/mongo.webp",
  "/node.webp",
  "/gmail.webp",
  "/github.webp",
  "/linkedin.webp",
  "/instagram.webp",
  "/racing.jpg",
  "/deathmatch.jpg",
  "/tictactoe.jpg",
  "/arcane_gaming_site.jpg",
  "/funtoy.jpg",
].forEach((url) => useTexture.preload(url));
