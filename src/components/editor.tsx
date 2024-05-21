"use client";

import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Portals from "./portals";
import { useSceneStore } from "@/store";

export default function Editor() {
  const fov = useSceneStore((state) => state.fov);

  return (
    <Canvas>
      <PerspectiveCamera position={[0, 0, 0.1]} fov={fov} makeDefault />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.8}
        autoRotate={false}
        rotateSpeed={-0.2}
      />
      <Suspense fallback={null}>
        <Preload all />
        <Portals />
      </Suspense>
    </Canvas>
  );
}
