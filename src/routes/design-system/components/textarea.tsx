import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { Textarea } from "@/components/ui/textarea";

function TextareaShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Textarea placeholder="Type your message here..." />
      </SubSection>

      <SubSection title="Disabled">
        <Textarea placeholder="This textarea is disabled" disabled />
      </SubSection>

      <SubSection title="With Default Value">
        <Textarea defaultValue="This textarea has a default value that you can edit." />
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-3">
          <Textarea placeholder="Small textarea" size="sm" />
          <Textarea placeholder="Default textarea" size="default" />
          <Textarea placeholder="Large textarea" size="lg" />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/textarea")({
  component: TextareaShowcase,
});
