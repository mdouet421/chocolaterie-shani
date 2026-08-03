import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function ProgressShowcase() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <Progress value={33} className="w-[60%]" />
      </SubSection>

      <SubSection title="Animated">
        <Progress value={progress} className="w-[60%]" />
      </SubSection>

      <SubSection title="With label and value">
        <Progress value={56} className="w-full max-w-sm">
          <ProgressLabel>Upload progress</ProgressLabel>
          <ProgressValue />
        </Progress>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/progress")({
  component: ProgressShowcase,
});
