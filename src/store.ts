import * as THREE from "three";
import { Mode, Scene } from "./types";
import { create } from "zustand";
import { DEFAULT_FOV } from "./constants";

export const scenes: Scene[] = [
  {
    id: 1,
    name: "Kitchen",
    url: "/Kitchen.png",
    markers: [
      {
        id: 1,
        name: "Living Room",
        position: new THREE.Vector3(
          -371.57213716518595,
          -78.21146051407901,
          -321.02512950386165
        ),
        to: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Living Room",
    url: "/Living.png",
    markers: [
      {
        id: 2,
        name: "Kitchen",
        position: new THREE.Vector3(
          -378.6986401890879,
          -15.897281506151787,
          -321.6886734953721
        ),
        to: 0,
      },
    ],
  },
];

type ISceneStore = {
  fov: number;
  mode: Mode;
  currentScene: number;
  scenes: Scene[];
  selectedMarker: number | null;
};

export const useSceneStore = create<ISceneStore>((set) => ({
  fov: DEFAULT_FOV,
  mode: "EDIT",
  currentScene: 0,
  scenes: scenes,
  selectedMarker: null,
}));

export const updateFov = (fov: number) => {
  useSceneStore.setState((_) => ({ fov }));
};

export const updateMode = (mode: Mode) => {
  useSceneStore.setState(() => ({ mode }));
};

export const updateCurrentScene = (scene: number) => {
  useSceneStore.setState((_) => ({ currentScene: scene }));
};

export const updateSelectedMarker = (selectedMarker: number) => {
  useSceneStore.setState((_) => ({ selectedMarker }));
};

export const addMarker = (sceneId: number, position: THREE.Vector3) => {
  useSceneStore.setState((state) => {
    const allScenes = state.scenes.map((scene) => {
      if (scene.id === sceneId) {
        const markers = scene.markers;
        markers.push({
          id: Math.random() * 1000,
          name: "Kitchen",
          position: new THREE.Vector3(position.x, position.y, position.z),
          to: 0,
        });
        return {
          ...scene,
          markers,
        };
      }
      return scene;
    });
    return {
      scenes: allScenes,
    };
  });
};
