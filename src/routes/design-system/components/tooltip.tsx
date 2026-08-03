import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function TooltipShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Default (Top)">
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>Tooltip on top</TooltipContent>
        </Tooltip>
      </SubSection>

      <SubSection title="Positions">
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger render={<Button variant="secondary" />}>
              Top
            </TooltipTrigger>
            <TooltipContent side="top">Top tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="secondary" />}>
              Bottom
            </TooltipTrigger>
            <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="secondary" />}>
              Left
            </TooltipTrigger>
            <TooltipContent side="left">Left tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="secondary" />}>
              Right
            </TooltipTrigger>
            <TooltipContent side="right">Right tooltip</TooltipContent>
          </Tooltip>
        </div>
      </SubSection>

      <SubSection title="With Different Triggers">
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger render={<Button />}>
              Primary
            </TooltipTrigger>
            <TooltipContent>Primary button tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="destructive" />}>
              Destructive
            </TooltipTrigger>
            <TooltipContent>Destructive button tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" />}>
              Ghost
            </TooltipTrigger>
            <TooltipContent>Ghost button tooltip</TooltipContent>
          </Tooltip>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/tooltip")({
  component: TooltipShowcase,
});
