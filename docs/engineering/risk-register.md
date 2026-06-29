# Risk Register

## Active Risks

- Portfolio content is local-only, which makes non-technical updates slower.
- Typography relies on system-safe fallbacks instead of hosted web fonts in this environment.
- Blog and project data are duplicated between list and detail patterns if the content model expands further.
- Storybook and Next.js can drift visually if tokens are changed without shared review.

## Mitigations

- Keep all site content centralized in `src/content/site.ts`.
- Keep typography and color tokens in `app/globals.css`.
- Use shadcn primitives as the stable shared base before adding custom component styling.
- Validate every visual system change in both app routes and Storybook.
