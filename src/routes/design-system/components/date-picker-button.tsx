import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { DatePickerButton } from "@/components/ui/date-picker-button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DatePickerButtonShowcase() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  return (
    <ShowcasePage>
      <SubSection title="Default (no date selected)">
        <DatePickerButton />
      </SubSection>

      <SubSection title="With selected date">
        <DatePickerButton>
          {new Date().toLocaleDateString()}
        </DatePickerButton>
      </SubSection>

      <SubSection title="Interactive with calendar popover">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <DatePickerButton>
                {date ? date.toLocaleDateString() : undefined}
              </DatePickerButton>
            }
          />
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setOpen(false);
              }}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </SubSection>

      <SubSection title="Disabled">
        <DatePickerButton disabled>
          {new Date().toLocaleDateString()}
        </DatePickerButton>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/date-picker-button",
)({
  component: DatePickerButtonShowcase,
});
