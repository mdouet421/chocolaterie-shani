---
name: prototype-ui
description: Implements React prototype screens and components using this project's TanStack Router, Base UI, Tailwind tokens, and frontend conventions. Use for any UI code change.
---

# Prototype UI

## Before editing

1. Inspect the relevant route and nearby components.
2. Check `src/components/ui/` and the existing showcases under `src/routes/design-system/` (indexed in `.peinture/design-system/manifest.json`) before creating a primitive.
3. Check `src/index.css` before using a color utility or design token.

## Components and routing

- Reuse and adapt existing UI components when their semantics fit.
- Use Base UI for new headless primitives and Lucide for functional icons.
- Use `ButtonLink` for button-styled navigation and TanStack Router `Link` for other navigation.
- Use `cn()` from `src/lib/tailwind/utils.ts` for conditional class names.
- Create screens as file-based routes under `src/routes/`.
- Use TanStack Router view transitions when page transitions are requested.

## Styling

- Use Tailwind utilities in `className`. Do not add inline styles or CSS modules.
- Prefer semantic utilities such as `bg-background`, `text-foreground`, `text-muted-foreground`, and `border-border`.
- Tailwind's default palette is reset. Only use color utilities declared in `src/index.css`; add a missing token to `@theme` instead of hardcoding a color.
- Apply `backdrop-blur` on the same element as a transform or opacity animation, or place blur and animation on siblings. Do not blur a descendant of a transformed element.
- Existing component styles and variants may be changed when the design calls for it, but check existing usages before making a breaking change.

## Dependencies and fonts

- Use pnpm.
- Add exact versions with `pnpm add -E`; never add `^`, `~`, or ranges.
- Install fonts through a Fontsource variable package, import it from `src/main.tsx`, and expose it through `--font-sans` in `src/index.css`.

## Verification

For a new screen or major layout change, inspect the rendered route once. Fix broken layout, missing tokens, and runtime errors, then return to the user.
