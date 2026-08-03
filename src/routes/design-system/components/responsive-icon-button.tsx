import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon, PencilIcon, TrashIcon, DownloadIcon } from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { ResponsiveIconButton } from "@/components/ui/responsive-icon-button";

function ResponsiveIconButtonShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default variant">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButton label="Create"><PlusIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Edit"><PencilIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Download"><DownloadIcon /></ResponsiveIconButton>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButton label="Extra Small" size="xs"><PlusIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Small" size="sm"><PlusIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Default" size="default"><PlusIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Large" size="lg"><PlusIcon /></ResponsiveIconButton>
        </div>
      </SubSection>

      <SubSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <ResponsiveIconButton label="Default"><PlusIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Secondary" variant="secondary"><PencilIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Destructive" variant="destructive"><TrashIcon /></ResponsiveIconButton>
          <ResponsiveIconButton label="Ghost" variant="ghost"><DownloadIcon /></ResponsiveIconButton>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/responsive-icon-button",
)({
  component: ResponsiveIconButtonShowcase,
});
