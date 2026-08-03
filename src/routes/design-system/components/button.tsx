import { createFileRoute } from "@tanstack/react-router";
import { MailIcon, PlusIcon, TrashIcon } from "lucide-react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { Button } from "@/components/ui/button";

function ButtonShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive-secondary">Destructive Secondary</Button>
          <Button variant="link">Link</Button>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </SubSection>

      <SubSection title="Icon sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs"><PlusIcon /></Button>
          <Button size="icon-sm"><PlusIcon /></Button>
          <Button size="icon"><PlusIcon /></Button>
          <Button size="icon-lg"><PlusIcon /></Button>
        </div>
      </SubSection>

      <SubSection title="With icon">
        <div className="flex flex-wrap items-center gap-3">
          <Button><MailIcon /> Send Email</Button>
          <Button variant="secondary"><PlusIcon /> Add Item</Button>
          <Button variant="destructive"><TrashIcon /> Delete</Button>
        </div>
      </SubSection>

      <SubSection title="Loading">
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>Loading</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="destructive" loading>Loading</Button>
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="destructive" disabled>Disabled</Button>
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/button")({
  component: ButtonShowcase,
});
