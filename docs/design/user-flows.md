# User Flows

## Goal

Support a quick scan on mobile first, then deeper exploration on larger screens, without forcing users through a single long landing page.

## Primary Flows

1. Home to About
   - User lands on `/`.
   - Hero explains role, focus, and current position quickly.
   - User taps `About me` to get experience and capabilities.

2. Home to Side Projects
   - User sees selected projects on the home page.
   - User taps `View my work` or `View all projects`.
   - User scans project summaries and tags before reading descriptions.

3. Home to Blog
   - User sees latest writing cards.
   - User taps into `/blog` or a post detail page.
   - Post page prioritizes readability and calm typography.

4. Any page to Contact
   - User reaches `Contact` from navigation or the home CTA.
   - Contact details are immediately visible without a form dependency.

## Mobile-First Behavior

- Header stacks into brand row, nav row, and theme control behavior that stays tappable at small widths.
- Section spacing starts compact and expands progressively from `md` upward.
- Cards use single-column layouts by default, then grow into two or three columns only when space supports it.
- Links and buttons keep a minimum touch height of roughly 44px.

## Edge Paths

- Missing route goes to a branded 404 with a direct return-home action.
- Theme toggle is accessible from both header and footer.
- External links open in a new tab only when they leave the site.
