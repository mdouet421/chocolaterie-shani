import { createFileRoute } from "@tanstack/react-router";

import { Checkbox } from "@/components/ui/checkbox";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function CheckboxShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="States">
        <div className="flex flex-col gap-3">
          <Checkbox>Unchecked</Checkbox>
          <Checkbox defaultChecked>Checked</Checkbox>
          <Checkbox defaultChecked indeterminate>Indeterminate</Checkbox>
          <Checkbox disabled>Disabled</Checkbox>
          <Checkbox disabled defaultChecked>Disabled checked</Checkbox>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-3">
          <Checkbox size="sm" defaultChecked>Small</Checkbox>
          <Checkbox size="default" defaultChecked>Default</Checkbox>
          <Checkbox size="lg" defaultChecked>Large</Checkbox>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/checkbox")({
  component: CheckboxShowcase,
});
