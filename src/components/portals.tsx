import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import Dome from "./dome";
import { useSceneStore } from "@/store";

export default function Portals() {
  const [currentScene, scenes, mode] = useSceneStore((state) => [
    state.currentScene,
    state.scenes,
    state.mode,
  ]);
  const { ...props } = scenes[currentScene];
  const maps = useLoader(
    THREE.TextureLoader,
    scenes.map((entry) => entry.url)
  );

  return (
    <Dome
      shouldTeleport={mode === "PREVIEW"}
      {...props}
      sceneId={scenes[currentScene].id}
      texture={maps[currentScene]}
    />
  );
}
