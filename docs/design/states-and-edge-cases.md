# States And Edge Cases

## Content States

- Blog list with few posts should still look balanced in a one-column stack.
- Side projects can grow without changing the card API.
- Contact details must remain useful even if only email is available.

## Theme States

- Light and dark themes use the same semantic tokens.
- Decorative gradients should remain readable against both backgrounds.
- Theme toggle should not shift layout when state text changes.

## Accessibility States

- Skip link appears on keyboard focus.
- Navigation remains usable when links wrap onto multiple lines.
- Cards should not depend on hover to reveal meaning.
- Text contrast must remain readable against soft brand backgrounds.

## Failure States

- Unknown blog slug renders the shared 404 route.
- Missing images should not break layout proportions.
- If JavaScript is delayed, the page should still render readable content before theme hydration completes.
