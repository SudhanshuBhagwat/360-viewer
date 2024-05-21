"use client";

import { useSceneStore } from "@/store";
import Controls from "./controls";
import Editor from "./editor";

export default function App() {
  const mode = useSceneStore((state) => state.mode);

  return (
    <div className="relative flex flex-grow flex-shrink-0 basis-0">
      <Editor />
      {mode === "EDIT" ? <Controls /> : <></>}
    </div>
  );
}
