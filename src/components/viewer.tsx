"use client";

import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useState } from "react";
import * as THREE from "three";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { useControlsContext } from "@/providers";

const store = [
  {
    name: "Living Room",
    position: new THREE.Vector3(
      -371.57213716518595,
      -78.21146051407901,
      -321.02512950386165
    ),
    url: "/Kitchen.png",
    link: 1,
  },
  {
    name: "Kitchen",
    position: new THREE.Vector3(
      -259.60585644279956,
      -43.43365502674772,
      -230.4146853826204
    ),
    url: "/Living.png",
    link: 0,
  },
];

function Dome({
  name,
  position,
  texture,
  onClick,
}: {
  name: string;
  position: THREE.Vector3;
  texture: THREE.Texture;
  onClick: () => void;
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
          <button
            className="text-black bg-gray-200 px-3 py-1 rounded select-none"
            onClick={onClick}
          >
            {name}
          </button>
        </Html>
      </mesh>
    </group>
  );
}

function Portals() {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(
    THREE.TextureLoader,
    store.map((entry) => entry.url)
  );
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />;
}

export default function Viewer() {
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
