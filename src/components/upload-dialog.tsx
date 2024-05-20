import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UploadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Create a new scene</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md z-[13606259]">
        <DialogHeader>
          <DialogTitle>Upload Scene</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="scene-name">Scene Name</Label>
            <Input id="scene-name" placeholder="Living Room" />
          </div>
          <div className="max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
