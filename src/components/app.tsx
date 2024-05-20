"use client";

import ControlsProvider from "@/providers";
import Controls from "./controls";
import Editor from "./editor";

export default function App() {
  return (
    <ControlsProvider>
      <Editor />
      <Controls />
    </ControlsProvider>
  );
}
