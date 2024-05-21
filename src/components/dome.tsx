import { updateCurrentScene } from "@/store";
import { Marker } from "@/types";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Dome({
  texture,
  markers,
  shouldTeleport,
}: {
  texture: THREE.Texture;
  markers: Marker[];
  shouldTeleport: boolean;
}) {
  return (
    <group>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 32, 32]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>
      {markers.map((marker) => (
        <mesh position={marker.position} key={marker.id}>
          <Html center>
            <button
              onClick={() => {
                if (shouldTeleport) {
                  updateCurrentScene(marker.to);
                } else {
                }
              }}
              className="text-black bg-gray-200 px-3 py-1 rounded select-none"
            >
              {marker.name}
            </button>
          </Html>
        </mesh>
      ))}
    </group>
  );
}
