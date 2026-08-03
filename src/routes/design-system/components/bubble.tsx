import { createFileRoute } from "@tanstack/react-router";

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function BubbleShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Incoming / outgoing">
        <BubbleGroup className="max-w-md">
          <Bubble align="start" variant="muted">
            <BubbleContent>Hey! Are we still on for the design review?</BubbleContent>
          </Bubble>
          <Bubble align="end" variant="default">
            <BubbleContent>Yes, sending the Figma link now.</BubbleContent>
          </Bubble>
          <Bubble align="start" variant="muted">
            <BubbleContent>Perfect, thanks a lot.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </SubSection>

      <SubSection title="Variants">
        <BubbleGroup className="max-w-md">
          <Bubble variant="default">
            <BubbleContent>Default</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>Secondary</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>Muted</BubbleContent>
          </Bubble>
          <Bubble variant="tinted">
            <BubbleContent>Tinted</BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Outline</BubbleContent>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent>Ghost</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Destructive</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </SubSection>

      <SubSection title="With reactions">
        <BubbleGroup className="max-w-md">
          <Bubble align="end" variant="default">
            <BubbleContent>Just shipped the new onboarding flow!</BubbleContent>
            <BubbleReactions side="bottom" align="end">
              🎉 3
            </BubbleReactions>
          </Bubble>
        </BubbleGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/bubble")({
  component: BubbleShowcase,
});
