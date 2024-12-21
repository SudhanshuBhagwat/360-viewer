import {
  addMarker,
  updateCurrentScene,
  updateSelectedMarker,
  useSceneStore,
} from "@/store";
import { Marker } from "@/types";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Dome({
  sceneId,
  texture,
  markers,
  shouldTeleport,
}: {
  sceneId: number;
  texture: THREE.Texture;
  markers: Marker[];
  shouldTeleport: boolean;
}) {
  const selectedMarker = useSceneStore((state) => state.selectedMarker);
  const mode = useSceneStore((state) => state.mode);

  return (
    <group>
      <mesh
        scale={[-1, 1, 1]}
        onClick={(event) => {
          if (mode === "EDIT") {
            addMarker(sceneId, event.point);
          }
        }}
      >
        <sphereGeometry args={[500, 32, 32]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>
      {markers.map((marker, index) => (
        <mesh position={marker.position} key={marker.id}>
          <Html center>
            <button
              onClick={() => {
                if (shouldTeleport) {
                  updateCurrentScene(marker.to);
                } else {
                  updateSelectedMarker(index);
                }
              }}
              className={`text-black bg-gray-200 px-3 py-1 rounded select-none ${
                selectedMarker === index
                  ? "ring-2 ring-offset-2 ring-black"
                  : ""
              }`}
            >
              {marker.name}
            </button>
          </Html>
        </mesh>
      ))}
    </group>
  );
}
