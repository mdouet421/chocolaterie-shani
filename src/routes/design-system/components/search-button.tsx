import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import { SearchButton } from "@/components/ui/search-button";

function SearchButtonShowcase() {
  const [value, setValue] = useState("");

  return (
    <ShowcasePage>
      <SubSection title="Default">
        <div className="flex items-center gap-3">
          <SearchButton value={value} onChange={(v) => setValue(v ?? "")} />
          {value && <span className="text-sm text-muted-foreground">Search: {value}</span>}
        </div>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute(
  "/design-system/components/search-button",
)({
  component: SearchButtonShowcase,
});
