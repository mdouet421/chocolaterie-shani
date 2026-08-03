import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

function CalendarShowcase() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [rangeFrom, setRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  return (
    <ShowcasePage>
      <SubSection title="Single selection">
        <Card className="w-fit py-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </Card>
        {selectedDate && (
          <p className="mt-2 text-sm text-muted-foreground">
            Selected: {selectedDate.toLocaleDateString()}
          </p>
        )}
      </SubSection>

      <SubSection title="Range selection">
        <Card className="w-fit py-0">
          <Calendar
            mode="range"
            selected={rangeFrom}
            onSelect={(range) =>
              setRange({
                from: range?.from,
                to: range?.to,
              })
            }
          />
        </Card>
      </SubSection>

      <SubSection title="Disabled dates">
        <Card className="w-fit py-0">
          <Calendar
            mode="single"
            disabled={{ before: new Date() }}
          />
        </Card>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/calendar")({
  component: CalendarShowcase,
});
