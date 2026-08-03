import { createFileRoute } from "@tanstack/react-router";
import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Toggle } from "@/components/ui/toggle";

function ToggleShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
          <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
          Bookmark
        </Toggle>
      </SubSection>

      <SubSection title="Outline">
        <div className="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle italic">
            <ItalicIcon />
            Italic
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <BoldIcon />
            Bold
          </Toggle>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle small" size="sm">
            Small
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle default" size="default">
            Default
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle large" size="lg">
            Large
          </Toggle>
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Toggle disabled" disabled>
            Disabled
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
            Disabled
          </Toggle>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/toggle")({
  component: ToggleShowcase,
});
