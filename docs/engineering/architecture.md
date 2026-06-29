# Architecture

## Stack

- Next.js App Router
- React 19
- Tailwind CSS v4
- shadcn/ui primitives
- Storybook for component review

## Structure

- `app/` owns route composition and metadata.
- `src/components/layout/` owns shell elements like header and footer.
- `src/components/sections/` owns page-level content sections.
- `src/components/ui/` owns reusable primitives and portfolio-specific reusable components.
- `src/content/site.ts` is the single source for portfolio content.

## Rendering Model

- Static content-first site.
- Blog post pages are generated from local content arrays.
- Theme is handled client-side through `next-themes`.

## Validation

- Lint for code health.
- Next.js production build for route and type validation.
- Storybook build for component-level regressions.
