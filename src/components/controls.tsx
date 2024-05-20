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
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { UploadDialog } from "./upload-dialog";
import {
  CaretSortIcon,
  Crosshair1Icon,
  TargetIcon,
} from "@radix-ui/react-icons";

const MARKERS = [
  {
    name: "Crosshair",
    icon: <Crosshair1Icon className="w-8 h-8" />,
  },
  {
    name: "Target",
    icon: <TargetIcon className="w-8 h-8" />,
  },
];

export default function Controls() {
  const { fov, setFov, scenes, currentScene, setCurrentScene } =
    useControlsContext();

  return (
    <div className="absolute top-6 right-6 space-y-2 max-w-80 min-w-80 select-none">
      <Collapsible className="bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 border-2 border-zinc-700 dark:border-gray-200 shadow-md space-y-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <span>Scenes</span>
          <CaretSortIcon className="h-4 w-4" />
        </CollapsibleTrigger>
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
                    <SelectItem key={scene.link} value={String(scene.link)}>
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
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <span>Scene Controls</span>
          <CaretSortIcon className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div id="controls">
            <div className="grid gap-4">
              <div className="space-y-1">
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
      <Collapsible className="bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 border-2 border-zinc-700 dark:border-gray-200 shadow-md space-y-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <span>Marker Settings</span>
          <CaretSortIcon className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div id="controls">
            <div className="grid gap-4">
              <div className="space-y-1">
                <h4 className="font-medium leading-none">Markers</h4>
                <p className="text-sm text-muted-foreground">
                  Drag and Drop markers on the screen
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {MARKERS.map((marker) => (
                  <div key={marker.name}>{marker.icon}</div>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
