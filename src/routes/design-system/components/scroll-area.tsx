import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { ScrollArea } from "@/components/ui/scroll-area";

function ScrollAreaShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Vertical Scroll">
        <ScrollArea className="h-48 w-full rounded-md border p-4">
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="text-sm">
                Item {i + 1} — Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </div>
            ))}
          </div>
        </ScrollArea>
      </SubSection>

      <SubSection title="Horizontal Scroll">
        <ScrollArea className="w-full rounded-md border" orientation="horizontal">
          <div className="flex gap-4 p-4">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium"
              >
                Card {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/scroll-area",
)({
  component: ScrollAreaShowcase,
});
