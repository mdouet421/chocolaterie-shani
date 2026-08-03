import { createFileRoute } from "@tanstack/react-router";

import { Separator } from "@/components/ui/separator";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function SeparatorShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Horizontal">
        <div className="flex flex-col gap-3">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      </SubSection>

      <SubSection title="Vertical">
        <div className="flex h-8 items-center gap-3">
          <span className="text-sm">Left</span>
          <Separator orientation="vertical" className="self-stretch" />
          <span className="text-sm">Center</span>
          <Separator orientation="vertical" className="self-stretch" />
          <span className="text-sm">Right</span>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/separator")({
  component: SeparatorShowcase,
});
