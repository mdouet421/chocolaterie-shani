import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2Icon, GitCommitHorizontalIcon, InfoIcon } from "lucide-react";

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function MarkerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="flex max-w-md flex-col gap-3">
          <Marker>
            <MarkerIcon>
              <GitCommitHorizontalIcon />
            </MarkerIcon>
            <MarkerContent>Committed changes to the design system.</MarkerContent>
          </Marker>
          <Marker>
            <MarkerIcon>
              <CheckCircle2Icon />
            </MarkerIcon>
            <MarkerContent>Deployment finished successfully.</MarkerContent>
          </Marker>
        </div>
      </SubSection>

      <SubSection title="Separator">
        <div className="max-w-md">
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
        </div>
      </SubSection>

      <SubSection title="Border">
        <div className="max-w-md">
          <Marker variant="border">
            <MarkerIcon>
              <InfoIcon />
            </MarkerIcon>
            <MarkerContent>New messages below</MarkerContent>
          </Marker>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/marker")({
  component: MarkerShowcase,
});
