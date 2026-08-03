import { createFileRoute } from "@tanstack/react-router";
import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function CollapsibleShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Basic">
        <Collapsible className="flex w-[350px] flex-col gap-2">
          <div className="flex items-center justify-between gap-4 px-4">
            <h4 className="text-sm font-semibold">Order #4189</h4>
            <CollapsibleTrigger render={<Button variant="ghost" size="icon" className="size-8" />}>
              <ChevronsUpDownIcon />
              <span className="sr-only">Toggle details</span>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">Shipped</span>
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">Shipping address</p>
              <p className="text-muted-foreground">100 Market St, San Francisco</p>
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">Items</p>
              <p className="text-muted-foreground">2x Studio Headphones</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </SubSection>

      <SubSection title="Simple">
        <Collapsible defaultOpen className="w-[350px]">
          <CollapsibleTrigger
            render={
              <Button variant="secondary" className="w-full justify-between">
                Can I use this in my project?
                <ChevronsUpDownIcon />
              </Button>
            }
          />
          <CollapsibleContent className="mt-2 rounded-md border p-3 text-sm text-muted-foreground">
            Yes. Free to use for personal and commercial projects. No attribution required.
          </CollapsibleContent>
        </Collapsible>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/collapsible")({
  component: CollapsibleShowcase,
});
