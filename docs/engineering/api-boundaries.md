# API Boundaries

## Current State

There is no backend API in this portfolio. Content is local and typed.

## Source Of Truth

- `src/content/site.ts` contains navigation, metadata, projects, blog entries, and contact details.
- `src/types/content.ts` defines the contract for content-driven UI.

## Future Extension Path

If a CMS or headless blog is added later:

- Preserve the same component props where possible.
- Add a thin mapping layer from remote content to local UI types.
- Keep route components independent from the transport source.
