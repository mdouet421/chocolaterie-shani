import { createFileRoute } from "@tanstack/react-router";
import { ExternalLinkIcon, PlusIcon, PencilIcon } from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { ResponsiveIconButtonLink } from "@/components/ui/responsive-icon-button-link";

function ResponsiveIconButtonLinkShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButtonLink to="." label="Create"><PlusIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Edit"><PencilIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Open Link"><ExternalLinkIcon /></ResponsiveIconButtonLink>
        </div>
      </SubSection>

      <SubSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButtonLink to="." label="Default"><PlusIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Secondary" variant="secondary"><PencilIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Ghost" variant="ghost"><ExternalLinkIcon /></ResponsiveIconButtonLink>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButtonLink to="." label="Extra Small" size="xs"><PlusIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Small" size="sm"><PlusIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Default" size="default"><PlusIcon /></ResponsiveIconButtonLink>
          <ResponsiveIconButtonLink to="." label="Large" size="lg"><PlusIcon /></ResponsiveIconButtonLink>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/responsive-icon-button-link",
)({
  component: ResponsiveIconButtonLinkShowcase,
});
