import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SheetShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Right (default)">
        <Sheet>
          <SheetTrigger render={<Button />}>Open Right</SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the right side.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <Button>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SubSection>

      <SubSection title="Left">
        <Sheet>
          <SheetTrigger render={<Button variant="secondary" />}>
            Open Left
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the left side.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </SubSection>

      <SubSection title="Top">
        <Sheet>
          <SheetTrigger render={<Button variant="secondary" />}>
            Open Top
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the top.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </SubSection>

      <SubSection title="Bottom">
        <Sheet>
          <SheetTrigger render={<Button variant="secondary" />}>
            Open Bottom
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the bottom.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/sheet")({
  component: SheetShowcase,
});
