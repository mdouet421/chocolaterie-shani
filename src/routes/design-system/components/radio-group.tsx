import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { RadioGroup, Radio } from "@/components/ui/radio-group";

function RadioGroupShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <RadioGroup defaultValue="option-1">
          <Radio value="option-1">Option One</Radio>
          <Radio value="option-2">Option Two</Radio>
          <Radio value="option-3">Option Three</Radio>
        </RadioGroup>
      </SubSection>

      <SubSection title="Small">
        <RadioGroup defaultValue="sm-1">
          <Radio value="sm-1" size="sm">Small Option A</Radio>
          <Radio value="sm-2" size="sm">Small Option B</Radio>
          <Radio value="sm-3" size="sm">Small Option C</Radio>
        </RadioGroup>
      </SubSection>

      <SubSection title="Large">
        <RadioGroup defaultValue="lg-1">
          <Radio value="lg-1" size="lg">Large Option A</Radio>
          <Radio value="lg-2" size="lg">Large Option B</Radio>
          <Radio value="lg-3" size="lg">Large Option C</Radio>
        </RadioGroup>
      </SubSection>

      <SubSection title="Disabled">
        <RadioGroup defaultValue="d-1" disabled>
          <Radio value="d-1">Disabled Selected</Radio>
          <Radio value="d-2">Disabled Unselected</Radio>
        </RadioGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/radio-group",
)({
  component: RadioGroupShowcase,
});
