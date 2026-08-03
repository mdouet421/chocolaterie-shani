import { createFileRoute } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function BadgeShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="negative">Negative</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="positive">Positive</Badge>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="xs">Extra small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/badge")({
  component: BadgeShowcase,
});
