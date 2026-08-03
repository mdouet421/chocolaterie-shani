---
name: project-documentation
description: Creates and edits Peinture project documentation. Use when changing the documentation tree, documentation pages, or files under .peinture/documentation.
---

# Project documentation

## Contract

- `.peinture/documentation/manifest.json` is the source of truth for the navigation tree and page titles.
- **All documentation Markdown files live in `.peinture/documentation/content/`** — never at the sandbox root or elsewhere.
- File on disk: `.peinture/documentation/content/{id}.md` (plain Markdown, no YAML frontmatter).
- In `manifest.json`, every `markdown` node `source` must point into that folder with a **relative path starting with `./content/`**, e.g. `"./content/overview.md"`.
- Do not use `./static/`, bare filenames, or paths outside `content/`.

Node types:

- `markdown`: content page with a Markdown `source`.
- `route`: navigation entry pointing to a prototype URL; no Markdown body.
- `group`: structural heading with `children`; no body.

## Workflow

1. Read the manifest before editing.
2. For add, remove, rename, or move operations, update the manifest and the matching file under `content/` together.
3. When adding a page: create `.peinture/documentation/content/{id}.md`, then add a manifest node with `"source": "./content/{id}.md"`.
4. Keep node ids unique and stable; use lowercase kebab-case for new ids.
5. Keep the manifest at version `1.0.0`.
6. Parse the final file as JSON and confirm every `./content/…` source exists on disk.
