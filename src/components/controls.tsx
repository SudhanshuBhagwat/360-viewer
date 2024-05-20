"use client";

import { useControlsContext } from "@/providers";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { MAX_FOV, MIN_FOV } from "@/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { UploadDialog } from "./upload-dialog";

export default function Controls() {
  const { fov, setFov, scenes, currentScene, setCurrentScene } =
    useControlsContext();

  return (
    <div className="absolute top-6 right-6 space-y-2 max-w-80 min-w-80">
      <Collapsible className="bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 border-2 border-zinc-700 dark:border-gray-200 shadow-md space-y-4">
        <CollapsibleTrigger>Scenes</CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="">
            <UploadDialog />
          </div>
          <div className="flex items-center gap-2">
            <Label className="whitespace-nowrap">Current Scene: </Label>
            <Select
              defaultValue={String(currentScene)}
              onValueChange={(value) => setCurrentScene(Number(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a scene" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {scenes.map((scene) => (
                    <SelectItem value={String(scene.link)}>
                      {scene.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 border-2 border-zinc-700 dark:border-gray-200 shadow-md space-y-4">
        <CollapsibleTrigger>Scene Controls</CollapsibleTrigger>
        <CollapsibleContent>
          <div id="controls">
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
                      max={MAX_FOV}
                      min={MIN_FOV}
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
