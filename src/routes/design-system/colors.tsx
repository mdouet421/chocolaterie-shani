import { createFileRoute } from "@tanstack/react-router";

import { ShowcasePage, SubSection } from "@/features/design-system/showcase-page";
import {
  ColorSwatch,
  ColorSwatchGrid,
  SemanticSwatch,
} from "@/features/design-system/color-swatch";

function DesignSystemColorsPage() {
  return (
    <ShowcasePage>
      <SubSection title="Neutral">
        <ColorSwatchGrid>
          <ColorSwatch bgClass="bg-neutral-50" label="50" />
          <ColorSwatch bgClass="bg-neutral-100" label="100" />
          <ColorSwatch bgClass="bg-neutral-200" label="200" />
          <ColorSwatch bgClass="bg-neutral-300" label="300" />
          <ColorSwatch bgClass="bg-neutral-400" label="400" />
          <ColorSwatch bgClass="bg-neutral-500" label="500" />
          <ColorSwatch bgClass="bg-neutral-600" label="600" />
          <ColorSwatch bgClass="bg-neutral-700" label="700" />
          <ColorSwatch bgClass="bg-neutral-800" label="800" />
          <ColorSwatch bgClass="bg-neutral-900" label="900" />
          <ColorSwatch bgClass="bg-neutral-950" label="950" />
        </ColorSwatchGrid>
      </SubSection>

      <SubSection title="Negative">
        <ColorSwatchGrid>
          <ColorSwatch bgClass="bg-negative-50" label="50" />
          <ColorSwatch bgClass="bg-negative-100" label="100" />
          <ColorSwatch bgClass="bg-negative-200" label="200" />
          <ColorSwatch bgClass="bg-negative-300" label="300" />
          <ColorSwatch bgClass="bg-negative-400" label="400" />
          <ColorSwatch bgClass="bg-negative-500" label="500" />
          <ColorSwatch bgClass="bg-negative-600" label="600" />
          <ColorSwatch bgClass="bg-negative-700" label="700" />
          <ColorSwatch bgClass="bg-negative-800" label="800" />
          <ColorSwatch bgClass="bg-negative-900" label="900" />
          <ColorSwatch bgClass="bg-negative-950" label="950" />
        </ColorSwatchGrid>
      </SubSection>

      <SubSection title="Warning">
        <ColorSwatchGrid>
          <ColorSwatch bgClass="bg-warning-50" label="50" />
          <ColorSwatch bgClass="bg-warning-100" label="100" />
          <ColorSwatch bgClass="bg-warning-200" label="200" />
          <ColorSwatch bgClass="bg-warning-300" label="300" />
          <ColorSwatch bgClass="bg-warning-400" label="400" />
          <ColorSwatch bgClass="bg-warning-500" label="500" />
          <ColorSwatch bgClass="bg-warning-600" label="600" />
          <ColorSwatch bgClass="bg-warning-700" label="700" />
          <ColorSwatch bgClass="bg-warning-800" label="800" />
          <ColorSwatch bgClass="bg-warning-900" label="900" />
          <ColorSwatch bgClass="bg-warning-950" label="950" />
        </ColorSwatchGrid>
      </SubSection>

      <SubSection title="Positive">
        <ColorSwatchGrid>
          <ColorSwatch bgClass="bg-positive-50" label="50" />
          <ColorSwatch bgClass="bg-positive-100" label="100" />
          <ColorSwatch bgClass="bg-positive-200" label="200" />
          <ColorSwatch bgClass="bg-positive-300" label="300" />
          <ColorSwatch bgClass="bg-positive-400" label="400" />
          <ColorSwatch bgClass="bg-positive-500" label="500" />
          <ColorSwatch bgClass="bg-positive-600" label="600" />
          <ColorSwatch bgClass="bg-positive-700" label="700" />
          <ColorSwatch bgClass="bg-positive-800" label="800" />
          <ColorSwatch bgClass="bg-positive-900" label="900" />
          <ColorSwatch bgClass="bg-positive-950" label="950" />
        </ColorSwatchGrid>
      </SubSection>

      <SubSection title="Semantic">
        <ColorSwatchGrid>
          <SemanticSwatch label="Primary" bgClass="bg-primary" fgClass="text-primary-foreground" />
          <SemanticSwatch label="Secondary" bgClass="bg-secondary" fgClass="text-secondary-foreground" />
          <SemanticSwatch label="Accent" bgClass="bg-accent" fgClass="text-accent-foreground" />
          <SemanticSwatch label="Muted" bgClass="bg-muted" fgClass="text-muted-foreground" />
          <SemanticSwatch label="Destructive" bgClass="bg-destructive" fgClass="text-destructive-foreground" />
          <SemanticSwatch label="Card" bgClass="bg-card" fgClass="text-card-foreground" />
          <SemanticSwatch label="Popover" bgClass="bg-popover" fgClass="text-popover-foreground" />
        </ColorSwatchGrid>
      </SubSection>

      <SubSection title="Chart">
        <ColorSwatchGrid>
          <ColorSwatch bgClass="bg-chart-1" label="1" />
          <ColorSwatch bgClass="bg-chart-2" label="2" />
          <ColorSwatch bgClass="bg-chart-3" label="3" />
          <ColorSwatch bgClass="bg-chart-4" label="4" />
          <ColorSwatch bgClass="bg-chart-5" label="5" />
        </ColorSwatchGrid>
      </SubSection>
    </ShowcasePage>
  );
}

export const Route = createFileRoute("/design-system/colors")({
  component: DesignSystemColorsPage,
});
