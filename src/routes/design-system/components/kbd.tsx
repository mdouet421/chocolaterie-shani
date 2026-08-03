import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function KbdShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="flex flex-col items-start gap-4">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⌃</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>B</Kbd>
          </KbdGroup>
        </div>
      </SubSection>

      <SubSection title="Inline in text">
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <KbdGroup>
            <Kbd>Ctrl + B</Kbd>
            <Kbd>Ctrl + K</Kbd>
          </KbdGroup>{" "}
          to open the command palette
        </p>
      </SubSection>

      <SubSection title="In a button">
        <Button variant="secondary">
          Accept{" "}
          <Kbd data-icon="inline-end" className="translate-x-0.5">
            ⏎
          </Kbd>
        </Button>
      </SubSection>

      <SubSection title="In a tooltip">
        <TooltipProvider>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger render={<Button variant="secondary" />}>
                Save
              </TooltipTrigger>
              <TooltipContent>
                Save Changes <Kbd>S</Kbd>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="secondary" />}>
                Print
              </TooltipTrigger>
              <TooltipContent>
                Print Document{" "}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/kbd")({
  component: KbdShowcase,
});
