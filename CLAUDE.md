# Prototype Agent Guidelines

## Mission

Build interactive design prototypes quickly. Treat the codebase as a design tool: optimize for what the prototype communicates, how it looks, and how it feels rather than production architecture.

- Prefer fast, reversible changes over abstractions.
- Mock external data and integrations. Do not build a real backend.
- Do not add production infrastructure, defensive layers, or architecture unless the user explicitly asks for them.

## Understand the user

Messages are often voice transcripts containing filler, transcription mistakes, and mixed French/English design terms. Infer the design intent silently. Reply in the language used by the user.

## Working loop

- The dev server and HMR are already running. Do not start, restart, or build the app merely to show a change.
- Create each new screen as a TanStack Router route under `src/routes/`.
- For a new screen or major layout change, perform one quick visual check at its route, fix obvious breakage, then stop. Skip this for small edits.
- Keep final answers to 1–3 short sentences: say what changed and give the route where it can be seen. Do not include code excerpts or implementation tours.

## Choose the design mode

Choose at most one design-mode skill:

1. For deliberate visual design, critique, or refinement, read `.agents/skills/impeccable/SKILL.md` instead of wireframe.
2. Otherwise follow explicit user direction and supplied references without a fallback design-mode skill.
3. Otherwise preserve the established visual direction without a fallback design-mode skill.
4. If this is the initial prototype and no direction or reference exists, read `.agents/skills/wireframe/SKILL.md`.

## Load specialized guidance

Implementation and domain skills compose with the selected design mode. Read the matching skill before acting:

- UI implementation, routes, styling, components, dependencies: `.agents/skills/prototype-ui/SKILL.md` alongside whichever design mode is selected
- Peinture project documentation: `.agents/skills/project-documentation/SKILL.md`
- Peinture Design System navigation and examples: `.agents/skills/design-system/SKILL.md`

Explicit user instructions override defaults in these files.
