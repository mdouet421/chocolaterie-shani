import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import { ConfirmResponsiveDrawer } from "@/components/ui/confirm-responsive-drawer";

function ConfirmResponsiveDrawerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default confirmation">
        <ConfirmResponsiveDrawer
          onConfirm={() => alert("Confirmed!")}
        >
          <Button>Delete Item</Button>
        </ConfirmResponsiveDrawer>
      </SubSection>

      <SubSection title="Custom title and description">
        <ConfirmResponsiveDrawer
          title="Discard changes?"
          description="All unsaved changes will be lost. This action cannot be undone."
          confirmText="Discard"
          cancelText="Keep editing"
          confirmVariant="destructive"
          onConfirm={() => alert("Discarded!")}
        >
          <Button variant="destructive">Discard Changes</Button>
        </ConfirmResponsiveDrawer>
      </SubSection>

      <SubSection title="Disabled (bypasses confirmation)">
        <ConfirmResponsiveDrawer
          enabled={false}
          onConfirm={() => alert("No confirmation needed!")}
        >
          <Button variant="secondary">Action (no confirm)</Button>
        </ConfirmResponsiveDrawer>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/confirm-responsive-drawer",
)({
  component: ConfirmResponsiveDrawerShowcase,
});
