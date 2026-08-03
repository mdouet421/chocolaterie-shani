import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";

function PopoverShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Popover>
          <PopoverTrigger render={<Button variant="secondary" />}>
            Open Popover
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Popover Title</PopoverTitle>
              <PopoverDescription>
                This is a popover with some descriptive content inside.
              </PopoverDescription>
            </PopoverHeader>
            <p className="text-sm">
              Popovers are great for displaying additional information or
              actions without navigating away from the current page.
            </p>
          </PopoverContent>
        </Popover>
      </SubSection>

      <SubSection title="Placement">
        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger render={<Button variant="secondary" />}>
              Top
            </PopoverTrigger>
            <PopoverContent side="top">
              <PopoverHeader>
                <PopoverTitle>Top Popover</PopoverTitle>
                <PopoverDescription>
                  This popover appears above the trigger.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger render={<Button variant="secondary" />}>
              Bottom
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <PopoverHeader>
                <PopoverTitle>Bottom Popover</PopoverTitle>
                <PopoverDescription>
                  This popover appears below the trigger.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger render={<Button variant="secondary" />}>
              Left
            </PopoverTrigger>
            <PopoverContent side="left">
              <PopoverHeader>
                <PopoverTitle>Left Popover</PopoverTitle>
                <PopoverDescription>
                  This popover appears to the left.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger render={<Button variant="secondary" />}>
              Right
            </PopoverTrigger>
            <PopoverContent side="right">
              <PopoverHeader>
                <PopoverTitle>Right Popover</PopoverTitle>
                <PopoverDescription>
                  This popover appears to the right.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/popover")({
  component: PopoverShowcase,
});
