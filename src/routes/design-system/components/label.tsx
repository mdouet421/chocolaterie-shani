import { createFileRoute } from "@tanstack/react-router";

import { Label } from "@/components/ui/label";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function LabelShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Label>Email address</Label>
      </SubSection>

      <SubSection title="With required indicator">
        <Label>
          Username <span className="text-destructive">*</span>
        </Label>
      </SubSection>

      <SubSection title="With helper text">
        <div className="flex flex-col gap-1">
          <Label>Password</Label>
          <span className="text-xs text-muted-foreground">
            Must be at least 8 characters long.
          </span>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/label")({
  component: LabelShowcase,
});
