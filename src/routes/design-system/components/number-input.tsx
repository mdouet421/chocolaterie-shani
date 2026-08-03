import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { NumberInput } from "@/components/ui/number-input";

function NumberInputShowcase() {
  const [value, setValue] = useState<number | null>(5);

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="max-w-xs">
          <NumberInput
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
          />
        </div>
      </SubSection>

      <SubSection title="Mobile buttons">
        <div className="max-w-xs">
          <NumberInput
            value={value}
            onValueChange={setValue}
            min={0}
            max={20}
            buttons="mobile"
          />
        </div>
      </SubSection>

      <SubSection title="Classic buttons">
        <div className="max-w-xs">
          <NumberInput
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            buttons="classic"
          />
        </div>
      </SubSection>

      <SubSection title="With step">
        <div className="max-w-xs">
          <NumberInput
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            step={5}
            buttons="mobile"
          />
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="max-w-xs">
          <NumberInput
            value={value}
            disabled
            buttons="mobile"
          />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/number-input",
)({
  component: NumberInputShowcase,
});
