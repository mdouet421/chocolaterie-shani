import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

function SliderShowcase() {
  const [value, setValue] = React.useState([0.3, 0.7]);

  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <Slider defaultValue={[75]} max={100} step={1} className="w-full max-w-xs" />
      </SubSection>

      <SubSection title="Range">
        <Slider defaultValue={[25, 50]} max={100} step={5} className="w-full max-w-xs" />
      </SubSection>

      <SubSection title="Multiple thumbs">
        <Slider defaultValue={[10, 20, 70]} max={100} step={10} className="w-full max-w-xs" />
      </SubSection>

      <SubSection title="Vertical">
        <div className="flex items-center gap-6">
          <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" className="h-40" />
          <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" className="h-40" />
        </div>
      </SubSection>

      <SubSection title="Controlled">
        <div className="grid w-full max-w-xs gap-3">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="slider-temperature">Temperature</Label>
            <span className="text-sm text-muted-foreground">{value.join(", ")}</span>
          </div>
          <Slider
            id="slider-temperature"
            value={value}
            onValueChange={(next) => setValue(next as number[])}
            min={0}
            max={1}
            step={0.1}
          />
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <Slider defaultValue={[50]} max={100} step={1} disabled className="w-full max-w-xs" />
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/slider")({
  component: SliderShowcase,
});
