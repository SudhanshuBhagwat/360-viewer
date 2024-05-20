import * as THREE from "three";

export type Mode = "EDIT" | "PREVIEW";

export type Scene = {
  name: string;
  position: THREE.Vector3;
  url: string;
  link: number;
};
