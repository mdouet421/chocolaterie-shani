import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import { Sonner } from "@/components/ui/sonner";

function SonnerShowcase() {
  return (
    <ShowcasePage>
      <Sonner />

      <SubSection title="Toast types">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="default"
            onClick={() => toast("Default toast notification")}
          >
            Default
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.success("Operation completed successfully!")}
          >
            Success
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.warning("Please check your input.")}
          >
            Warning
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.info("Here is some useful information.")}
          >
            Info
          </Button>
        </div>
      </SubSection>

      <SubSection title="With description">
        <Button
          variant="secondary"
          onClick={() =>
            toast("Event Created", {
              description: "Your event has been scheduled for tomorrow at 3pm.",
            })
          }
        >
          With Description
        </Button>
      </SubSection>

      <SubSection title="With action">
        <Button
          variant="secondary"
          onClick={() =>
            toast("File deleted", {
              action: {
                label: "Undo",
                onClick: () => toast.success("File restored!"),
              },
            })
          }
        >
          With Action
        </Button>
      </SubSection>

      <SubSection title="Loading">
        <Button
          variant="secondary"
          onClick={() => {
            const id = toast.loading("Loading data...");
            setTimeout(() => {
              toast.success("Data loaded!", { id });
            }, 2000);
          }}
        >
          Loading Toast
        </Button>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/sonner")({
  component: SonnerShowcase,
});
