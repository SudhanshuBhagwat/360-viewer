import * as THREE from "three";

export type Mode = "EDIT" | "PREVIEW";

export type Scene = {
  id: number;
  name: string;
  url: string;
  markers: Marker[];
};

export type Marker = {
  id: number;
  name: string;
  position: THREE.Vector3;
  to: number;
};
