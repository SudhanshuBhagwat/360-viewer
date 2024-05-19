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

function Viewer({ fovAmount }: { fovAmount: number }) {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 0.1]} fov={fovAmount} makeDefault />
      <PerspectiveCamera fov={150} />
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
    </>
  );
}

export default function App() {
  const [fov, setFov] = useState(75);

  return (
    <div className="h-screen relative">
      <Canvas>
        <Viewer fovAmount={fov} />
      </Canvas>
      <div
        id="controls"
        className="absolute top-6 right-6 bg-white dark:bg-zinc-900 rounded-lg p-6 border-2 border-zinc-700 dark:border-gray-200 shadow-md"
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="fov">FOV</Label>
              <div className="w-full col-span-2">
                <Slider
                  name="fov"
                  defaultValue={[fov]}
                  max={90}
                  min={60}
                  step={1}
                  onValueChange={(value) => setFov(value[0])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
