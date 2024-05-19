import { ReactNode, createContext, useContext, useState } from "react";

const ControlsContext = createContext({
  fov: 75,
  setFov: (_value: number) => {},
});

export const useControlsContext = () => useContext(ControlsContext);

export default function ControlsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fov, setFov] = useState<number>(75);

  return (
    <ControlsContext.Provider
      value={{
        fov,
        setFov,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
