"use client";

import { updateMode } from "@/store";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function ModeChanger() {
  return (
    <>
      <Label>Edit</Label>
      <Switch
        id="editor-mode"
        onCheckedChange={(value) => updateMode(value ? "PREVIEW" : "EDIT")}
      />
      <Label>Preview</Label>
    </>
  );
}
