import { createFileRoute } from "@tanstack/react-router";
import { Bold, BoldIcon, Italic, ItalicIcon, Underline, UnderlineIcon } from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function ToggleGroupShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Multiple">
        <ToggleGroup variant="outline" multiple>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </SubSection>

      <SubSection title="Outline">
        <ToggleGroup variant="outline" defaultValue={["all"]}>
          <ToggleGroupItem value="all" aria-label="Toggle all">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="missed" aria-label="Toggle missed">
            Missed
          </ToggleGroupItem>
        </ToggleGroup>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-col gap-4">
          <ToggleGroup size="sm" defaultValue={["top"]} variant="outline">
            <ToggleGroupItem value="top" aria-label="Toggle top">
              Top
            </ToggleGroupItem>
            <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
              Bottom
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Toggle left">
              Left
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Toggle right">
              Right
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup defaultValue={["top"]} variant="outline">
            <ToggleGroupItem value="top" aria-label="Toggle top">
              Top
            </ToggleGroupItem>
            <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
              Bottom
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Toggle left">
              Left
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Toggle right">
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </SubSection>

      <SubSection title="Vertical">
        <ToggleGroup
          multiple
          orientation="vertical"
          spacing={1}
          defaultValue={["bold", "italic"]}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/toggle-group")({
  component: ToggleGroupShowcase,
});
