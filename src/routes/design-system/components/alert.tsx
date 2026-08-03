import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  TerminalIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function AlertShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </SubSection>

      <SubSection title="Variants">
        <div className="flex flex-col gap-4">
          <Alert>
            <TerminalIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <TriangleAlertIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your subscription is about to expire.
            </AlertDescription>
          </Alert>
          <Alert variant="positive">
            <CheckCircleIcon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
        </div>
      </SubSection>

      <SubSection title="Without icon">
        <div className="flex flex-col gap-3">
          <Alert>
            <AlertTitle>Default alert</AlertTitle>
            <AlertDescription>
              This is a default alert without an icon.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Destructive alert</AlertTitle>
            <AlertDescription>
              This is a destructive alert without an icon.
            </AlertDescription>
          </Alert>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/alert")({
  component: AlertShowcase,
});
