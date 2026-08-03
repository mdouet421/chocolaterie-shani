import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
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

function DialogShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Dialog>
          <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="secondary" />}>
                Cancel
              </DialogClose>
              <Button variant="destructive">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SubSection>

      <SubSection title="With save action">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            Edit Profile
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you are done.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="secondary" />}>
                Cancel
              </DialogClose>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SubSection>

      <SubSection title="Without close button">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            Terms of Service
          </DialogTrigger>
          <DialogContent hideCloseButton>
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>
                Please read and accept the terms of service to continue.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <div />
              <Button>Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/dialog")({
  component: DialogShowcase,
});
