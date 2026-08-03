import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Spinner } from "@/components/ui/spinner";

function SpinnerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Spinner />
      </SubSection>

      <SubSection title="Custom size">
        <div className="flex items-center gap-4">
          <Spinner className="size-3" />
          <Spinner />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </SubSection>

      <SubSection title="Full (centered)">
        <div className="flex h-32 rounded-lg border border-dashed border-neutral-200">
          <Spinner full />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/spinner")({
  component: SpinnerShowcase,
});
