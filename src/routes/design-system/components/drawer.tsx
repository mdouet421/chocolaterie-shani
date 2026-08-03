import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function DrawerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Bottom drawer">
        <Drawer>
          <DrawerTrigger render={<Button />}>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                This is a description of the drawer content.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p className="text-sm text-muted-foreground">
                Place your drawer content here. This area can contain forms,
                lists, or any other components.
              </p>
            </DrawerBody>
            <DrawerFooter className="flex flex-row gap-2">
              <DrawerClose render={<Button variant="secondary" className="flex-1" />}>
                Cancel
              </DrawerClose>
              <Button className="flex-1">Confirm</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/drawer")({
  component: DrawerShowcase,
});
