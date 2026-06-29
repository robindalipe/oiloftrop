# Portfolio Design System

## Goal

Create a portfolio that feels editorial, calm, and product-minded rather than template-driven. The same tokens and primitives support both the public site and Storybook.

## Foundation

- Framework: Next.js App Router
- Styling: Tailwind CSS v4
- Primitive layer: shadcn/ui
- Theme model: semantic CSS variables with light and dark themes

## Brand Color

- Primary brand color: `Green Sea`, `#16A085`
- Supporting dark emphasis: `#117864`
- Soft tint: translucent brand fill for badges, callouts, and focus surfaces

## Semantic Tokens

- `background`: page canvas
- `background-strong`: elevated surfaces
- `background-muted`: quiet secondary surfaces
- `foreground`: primary text
- `foreground-muted`: supporting text
- `border`: structural separators
- `primary`: brand and call-to-action color
- `ring`: shared focus color

## Typography

- Base size is `16px`.
- Scale uses a minor third progression:
  - `xs`: `0.694rem`
  - `sm`: `0.833rem`
  - `base`: `1rem`
  - `lg`: `1.2rem`
  - `xl`: `1.44rem`
  - `2xl`: `1.728rem`
  - `3xl`: `2.074rem`
  - `4xl`: `2.488rem`
  - `5xl`: `2.986rem`
  - `6xl`: `3.583rem`
  - `7xl`: `4.3rem`
  - `8xl`: `5.16rem`
- Display font: `--font-display`
- Body and UI font: `--font-sans`

## Utility Classes

- `.type-label` for micro labels and navigation
- `.type-body` for standard reading text
- `.type-body-lg` for large supporting paragraphs
- `.type-meta` for dates and metadata
- `.type-display-1` to `.type-display-3` for heading tiers
- `.type-hero` for the landing-page headline

## shadcn Usage

- `Button` handles CTA hierarchy and inline action links.
- `Card` is the base surface for cards and content panels.
- `Badge` carries tags, categories, and eyebrow labels.
- `Separator` defines rhythm between large sections and grouped rows.

## Layout Rules

- Mobile first by default.
- Container width is `max-w-7xl` with progressive horizontal padding.
- Section spacing starts tighter on small screens and expands at `md`.
- Large grids collapse to one column first, then scale up only when there is room.

## Accessibility

- Visible skip link
- Strong focus ring on links and buttons
- Reduced-motion support
- Theme toggle with clear state and keyboard accessibility
