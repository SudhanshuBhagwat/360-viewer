"use client";

import { useControlsContext } from "@/providers";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

export default function Controls() {
  const { fov, setFov } = useControlsContext();

  return (
    <div
      id="controls"
      className="absolute top-6 right-6 bg-white dark:bg-zinc-900 rounded-lg p-6 border-2 border-zinc-700 dark:border-gray-200 shadow-md"
    >
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Controls</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="fov">FOV</Label>
            <div className="w-full col-span-2">
              <Slider
                name="fov"
                defaultValue={[fov]}
                max={90}
                min={60}
                step={1}
                value={[fov]}
                onValueChange={(value) => setFov(value[0])}
              />
            </div>
          </div>
          <Button onClick={() => setFov(75)}>Reset FOV</Button>
        </div>
      </div>
    </div>
  );
}
