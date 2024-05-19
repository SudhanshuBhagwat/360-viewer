"use client";

import ControlsProvider from "@/providers";
import Viewer from "./viewer";
import Controls from "./controls";

export default function App() {
  return (
    <ControlsProvider>
      <Viewer />
      <Controls />
    </ControlsProvider>
  );
}
