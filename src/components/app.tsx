"use client";

import ControlsProvider from "@/providers";
import Controls from "./controls";
import Editor from "./editor";

export default function App() {
  return (
    <div className="relative flex flex-grow flex-shrink-0 basis-0">
      <ControlsProvider>
        <Editor />
        <Controls />
      </ControlsProvider>
    </div>
  );
}
