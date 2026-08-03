import { createFileRoute } from "@tanstack/react-router";
import { MinusIcon, PlusIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function ButtonGroupShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <ButtonGroup>
          <Button variant="secondary">Archive</Button>
          <Button variant="secondary">Report</Button>
        </ButtonGroup>
      </SubSection>

      <SubSection title="Vertical orientation">
        <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
          <Button variant="secondary" size="icon">
            <PlusIcon />
          </Button>
          <Button variant="secondary" size="icon">
            <MinusIcon />
          </Button>
        </ButtonGroup>
      </SubSection>

      <SubSection title="With input">
        <ButtonGroup>
          <Input placeholder="Search..." />
          <Button variant="secondary" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/button-group")({
  component: ButtonGroupShowcase,
});
