"use client";

import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { useControlsContext } from "@/providers";
import { scenes } from "@/store";

function Dome({
  name,
  position,
  texture,
}: {
  name: string;
  position: THREE.Vector3;
  texture: THREE.Texture;
}) {
  return (
    <group>
      <mesh onClick={(event) => console.log(event)} scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 32, 32]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>
      <mesh position={position}>
        <Html center>
          <button className="text-black bg-gray-200 px-3 py-1 rounded select-none">
            {name}
          </button>
        </Html>
      </mesh>
    </group>
  );
}

function Portals() {
  const { currentScene } = useControlsContext();
  const { link, ...props } = scenes[currentScene];
  const maps = useLoader(
    THREE.TextureLoader,
    scenes.map((entry) => entry.url)
  );
  return <Dome {...props} texture={maps[currentScene]} />;
}

export default function Editor() {
  const { fov } = useControlsContext();

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
