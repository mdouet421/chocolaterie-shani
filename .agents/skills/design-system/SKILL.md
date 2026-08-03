---
name: design-system
description: Maintains Peinture Design System navigation and showcase routes. Use when changing .peinture/design-system or adding token and component showcase pages.
---

# Design System

## Contract

- `.peinture/design-system/manifest.json` is the source of truth for Design System navigation.
- Token entries belong under the `Tokens` group.
- Reusable component entries belong under the `Components` group.
- Showcase entries use `type: "route"` and their `source` is the real TanStack Router URL, for example `/design-system/components/button`.

## Showcase page presentation

Design system routes render inside a **Peinture iframe**. The host pane (outside the iframe) shows the page title from the manifest `title` field and the surrounding chrome. The route content must be presentation-neutral at the page level.

**Do not add inside the route:**

- A page-level title (`<h1>`, a heading repeating the component or token name, etc.) — Peinture already displays the manifest title above the iframe.
- Outer page padding or a max-width page wrapper (`p-*`, `px-*`, `py-*`, `max-w-*`, centered containers) — Peinture applies horizontal inset (`px-16`) around the iframe so content aligns with the page title; do not duplicate that padding inside the route.

**Do use:**

- `ShowcasePage` from `src/features/design-system/showcase-page.tsx` as the page shell — a vertical stack with gap between blocks only.
- `SubSection` for in-page group labels (variants, sizes, states). Those `<h2>` headings label demo sections, not the page itself.
- Other reusable primitives from `src/features/design-system/` (e.g. `EmptyShowcase`, `ColorSwatch`, `ColorSwatchGrid`).

## `src/features/design-system/` — reusable primitives only

This directory holds **shared showcase building blocks**, not one file per route.

**Do not** create `*-showcase.tsx` files that exist only to wrap a single route (e.g. `colors-showcase.tsx`, `button-showcase.tsx`). Compose showcase JSX **directly in the route** under `src/routes/design-system/`.

## Workflow

1. Read the manifest, `src/index.css`, and the relevant exports in `src/components/ui/`.
2. Reuse the real token or component in its showcase; do not create a separate fake implementation.
3. Add or update the showcase route under `src/routes/design-system/` — put the demo content in the route file, importing primitives from `src/features/design-system/`.
4. Add the matching route node to the correct manifest group.
5. Keep ids unique, stable, and lowercase kebab-case.
6. Parse the final manifest as JSON and confirm each source resolves to a route.
7. Open the route once and fix obvious rendering or token errors.
