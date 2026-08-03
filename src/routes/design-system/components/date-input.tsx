import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { DateInput } from "@/components/ui/date-input";

function DateInputShowcase() {
  const [date, setDate] = useState<Date | null>(null);
  const [prefilledDate, setPrefilledDate] = useState<Date | null>(new Date());

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="max-w-xs">
          <DateInput value={date} onChange={setDate} />
        </div>
        {date && (
          <p className="mt-2 text-sm text-muted-foreground">
            Selected: {date.toLocaleDateString()}
          </p>
        )}
      </SubSection>

      <SubSection title="With pre-filled value">
        <div className="max-w-xs">
          <DateInput value={prefilledDate} onChange={setPrefilledDate} />
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="max-w-xs">
          <DateInput value={new Date()} disabled />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/date-input",
)({
  component: DateInputShowcase,
});
