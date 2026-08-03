import { Mail } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { Input } from "@/components/ui/input";

function InputShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Input placeholder="Enter text..." />
      </SubSection>

      <SubSection title="With Placeholder">
        <Input placeholder="john@example.com" type="email" />
      </SubSection>

      <SubSection title="Disabled">
        <Input placeholder="Disabled input" disabled />
      </SubSection>

      <SubSection title="With Start Addon">
        <Input placeholder="Email" startAddon={<Mail />} />
      </SubSection>

      <SubSection title="With End Addon">
        <Input placeholder="Email" endAddon={<Mail />} />
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-3">
          <Input placeholder="Small" size="sm" />
          <Input placeholder="Default" size="default" />
          <Input placeholder="Large" size="lg" />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/input")({
  component: InputShowcase,
});
