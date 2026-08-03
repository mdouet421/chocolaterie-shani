import { createFileRoute } from "@tanstack/react-router";

import {
  ShowcasePage,
  SubSection,
} from "@/features/design-system/showcase-page";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="Rectangles">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </SubSection>

      <SubSection title="Circles">
        <div className="flex gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="size-12 rounded-full" />
        </div>
      </SubSection>

      <SubSection title="Card Layout">
        <div className="flex items-start gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </SubSection>

      <SubSection title="Large Block">
        <Skeleton className="h-32 w-full rounded-md" />
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/skeleton")({
  component: SkeletonShowcase,
});
