import { useVideoTexture } from "@react-three/drei";

export default function VideoMesh() {
  const videoTexture = useVideoTexture("/codevideo.mp4", {
    loop: true,
    muted: true,
    start: true, // Automatically starts the video
  });

  return (
    <mesh
      name="Plane"
      castShadow
      receiveShadow
      position={[2.59, 1.16, 0.031]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.033}
    >
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
    </mesh>
  );
}
