# Design

> Thin pointer to the project's visual system. The source of truth lives in `src/index.css` (tokens) and `/styleguide` (live examples) — update those, not this file.

## Direction

Monochrome, flat, rounded, airy. Depth comes from thin borders and contrast, never shadows or gradients. White space is a design element. No decorative icons.

## Tokens

All colors, radii, and type sizes are defined in `src/index.css` (`@theme`). Only the tokens defined there exist — Tailwind's default palette is disabled. Prefer semantic tokens (`bg-background`, `text-muted-foreground`, `border-border`…) over raw scale values.

## Typography

Inter Variable (`@fontsource-variable/inter`), hierarchy through size and weight only.

## Components

Use the library in `src/components/ui/` (Base UI + CVA). Browse `/styleguide` for every component and token, live.
