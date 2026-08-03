import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import {
  ResponsiveDrawer,
  ResponsiveDrawerClose,
  ResponsiveDrawerContent,
  ResponsiveDrawerDescription,
  ResponsiveDrawerFooter,
  ResponsiveDrawerHeader,
  ResponsiveDrawerTitle,
  ResponsiveDrawerTrigger,
} from "@/components/ui/responsive-drawer";

function ResponsiveDrawerShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <ResponsiveDrawer>
          <ResponsiveDrawerTrigger render={<Button />}>
            Open Responsive Drawer
          </ResponsiveDrawerTrigger>
          <ResponsiveDrawerContent>
            <ResponsiveDrawerHeader>
              <ResponsiveDrawerTitle>Responsive Drawer</ResponsiveDrawerTitle>
              <ResponsiveDrawerDescription>
                This component renders as a dialog on desktop and a drawer on mobile.
              </ResponsiveDrawerDescription>
            </ResponsiveDrawerHeader>
            <ResponsiveDrawerFooter>
              <ResponsiveDrawerClose render={<Button variant="secondary" />}>
                Close
              </ResponsiveDrawerClose>
            </ResponsiveDrawerFooter>
          </ResponsiveDrawerContent>
        </ResponsiveDrawer>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/responsive-drawer",
)({
  component: ResponsiveDrawerShowcase,
});
