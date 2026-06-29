# UI Spec

## Visual Direction

Editorial product portfolio with quiet surfaces, dense signal, and restrained color. The site should feel intentional rather than template-like.

## Core Routes

- `/` introduces Robin, selected side projects, latest writing, and a contact CTA.
- `/about` explains background, strengths, and current role.
- `/side-projects` shows broader experimentation work.
- `/blog` lists writing.
- `/blog/[slug]` focuses on reading comfort.
- `/contact` exposes direct contact details.

## Component Foundation

The design system uses shadcn primitives as the base layer:

- `Button` for calls to action and link-like actions.
- `Card` for page surfaces, content cards, and feature panels.
- `Badge` for small labels, tags, and categories.
- `Separator` for section rhythm and grouped content division.

## Typography

- Base font size is `16px`.
- Type scale follows a minor third progression.
- Display typography uses `--font-display`, body and UI copy use `--font-sans`.
- Shared utility classes:
  - `.type-label`
  - `.type-body`
  - `.type-body-lg`
  - `.type-meta`
  - `.type-display-1`
  - `.type-display-2`
  - `.type-display-3`
  - `.type-hero`

## Interaction Rules

- Primary links and actions use the green brand token.
- Theme switch uses a visible toggle track with current state announced via `aria-pressed`.
- Focus styles use the shared ring token and must stay visible in both themes.
- Motion is restrained and reduced when `prefers-reduced-motion` is enabled.
