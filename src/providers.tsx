import { ReactNode, createContext, useContext, useState } from "react";
import { Mode } from "./types";
import { DEFAULT_FOV } from "./constants";
import { scenes } from "./store";

const ControlsContext = createContext({
  fov: DEFAULT_FOV,
  setFov: (_value: number) => {},
  mode: "edit",
  setMode: (_value: Mode) => {},
  currentScene: 0,
  setCurrentScene: (_value: number) => {},
  scenes: scenes,
});

export const useControlsContext = () => useContext(ControlsContext);

export default function ControlsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fov, setFov] = useState<number>(DEFAULT_FOV);
  const [mode, setMode] = useState<Mode>("EDIT");
  const [currentScene, setCurrentScene] = useState<number>(0);

  return (
    <ControlsContext.Provider
      value={{
        fov,
        setFov,
        mode,
        setMode,
        currentScene,
        setCurrentScene,
        scenes,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
