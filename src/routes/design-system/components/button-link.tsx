import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { ButtonLink } from "@/components/ui/button-link";

function ButtonLinkShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <ButtonLink to="/design-system/components/button-link">
          Default Link
        </ButtonLink>
      </SubSection>

      <SubSection title="Variants">
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            to="/design-system/components/button-link"
            variant="default"
          >
            Default
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            variant="secondary"
          >
            Secondary
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            variant="destructive"
          >
            Destructive
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            variant="ghost"
          >
            Ghost
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            variant="link"
          >
            Link
          </ButtonLink>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink
            to="/design-system/components/button-link"
            size="sm"
          >
            Small
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            size="default"
          >
            Default
          </ButtonLink>
          <ButtonLink
            to="/design-system/components/button-link"
            size="lg"
          >
            Large
          </ButtonLink>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/button-link",
)({
  component: ButtonLinkShowcase,
});
