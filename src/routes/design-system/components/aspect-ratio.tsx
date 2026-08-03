import { createFileRoute } from "@tanstack/react-router";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";

function AspectRatioShowcase() {
  return (
    <ShowcasePage>
      <SubSection title="16 / 9">
        <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            className="size-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </SubSection>

      <SubSection title="Square (1 / 1)">
        <AspectRatio ratio={1 / 1} className="w-full max-w-[12rem] rounded-lg bg-muted">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            className="size-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </SubSection>

      <SubSection title="Portrait (9 / 16)">
        <AspectRatio ratio={9 / 16} className="w-full max-w-[10rem] rounded-lg bg-muted">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            className="size-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/components/aspect-ratio")({
  component: AspectRatioShowcase,
});
