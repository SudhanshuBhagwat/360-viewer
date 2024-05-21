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
          -259.60585644279956,
          -43.43365502674772,
          -230.4146853826204
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
  useSceneStore.setState((state) => ({ fov }));
};

export const updateMode = (mode: Mode) => {
  useSceneStore.setState(() => ({ mode }));
};

export const updateCurrentScene = (scene: number) => {
  useSceneStore.setState((state) => ({ currentScene: scene }));
};

export const updateSelectedMarker = (selectedMarker: number) => {
  useSceneStore.setState((state) => ({ selectedMarker }));
};
