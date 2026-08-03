---
name: wireframe
description: Creates low-fidelity prototypes quickly with a neutral palette and simple typography. Use when the user asks for a wireframe or when starting a prototype without visual references or an established design direction.
---

Explicit user direction and supplied references take priority. Once the project has an established visual direction, preserve it instead of resetting the work to wireframe mode.

You are in wireframe / low-fidelity mode. The goal is to prototype quickly, not produce a polished design.

## Principles

- **Speed over perfection**: prioritize fast execution. Don't spend time on visual details.
- **Structure over style**: focus on information hierarchy, layout and interactions — not colors, shadows or fine typography.
- **Restricted palette**: use only shades of neutral (`neutral-50` to `neutral-900`), white and black. No accent colors.
- **Accessible text contrast**: text must never use a shade lighter than `neutral-500`. Use `neutral-500` to `neutral-900` (or black) for all text to ensure readability.
- **Simple typography**: use the project's existing sans-serif font. Differentiate hierarchy levels only through size and weight (bold/normal).
- **No decorations**: no shadows, no gradients, no excessive border radius, no real images. Use gray rectangles as image placeholders.
- **Thin borders**: use `border border-neutral-300` to delimit areas. No colored backgrounds except very light gray to distinguish sections.
- **Realistic placeholder content**: use realistic text (no lorem ipsum) but don't spend time polishing the copy.
- Create new reusable components if need but always reuse and update existing UI components from `src/components/ui/` when a matching pattern exists. If you need to modify an existing UI component, make sure that where it's already in use will not break.

## What to produce

A functional React component with Tailwind CSS that shows:

1. The overall structure of the page or component
2. The layout of main elements
3. Identifiable interactive zones (buttons, links, forms)
4. Content hierarchy

## What NOT to do

- Spend time on responsive design (one breakpoint is enough)
- Add animations or transitions
- Optimize accessibility beyond basic semantic HTML
- Worry about pixel-perfection

$ARGUMENTS
