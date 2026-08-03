import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { SearchInput } from "@/components/ui/search-input";

function SearchInputShowcase() {
  const [value1, setValue1] = useState<string | undefined>("");
  const [value2, setValue2] = useState<string | undefined>("");

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="max-w-sm">
          <SearchInput value={value1} onChange={setValue1} />
        </div>
        {value1 && <p className="mt-2 text-sm text-muted-foreground">Search value: {value1}</p>}
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex max-w-sm flex-col gap-3">
          <SearchInput placeholder="Small" size="sm" />
          <SearchInput placeholder="Default" />
          <SearchInput value={value2} onChange={setValue2} placeholder="Large" size="lg" />
        </div>
      </SubSection>

      <SubSection title="Disabled">
        <div className="max-w-sm">
          <SearchInput disabled value="Disabled input" />
        </div>
      </SubSection>

      <SubSection title="Loading">
        <div className="max-w-sm">
          <SearchInput loading value="Loading..." />
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/search-input",
)({
  component: SearchInputShowcase,
});
