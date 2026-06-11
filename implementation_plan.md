# Frank's Auto Parts White Light-Theme Transition Plan

This plan details the transition of the "Frank's Auto Parts" website from the current dark theme to a premium light-theme design, with white backgrounds, dark text, clean borders, and matching glassmorphic overlays.

## User Review Required

> [!IMPORTANT]
> **Refactoring Text Colors**: Many components currently use hardcoded `text-white` classes for text content (such as headers and section descriptions). We will replace these with responsive classes (like `text-foreground` or `text-slate-900`) to ensure contrast against the new white background.
> 
> **Glassmorphic Components**: Glass effects (`glass-effect` and `glass-effect-strong`) will be transitioned from dark transparency (`rgba(22,22,22,0.4)`) to white transparency (`rgba(255,255,255,0.7)`) to maintain the premium overlay appearance on a light background.
> 
> **Header & Hero Gradients**: The hero page gradients will be updated from dark radial overlays to soft light overlays, preserving the brand's premium orange accent details.

## Open Questions

> [!IMPORTANT]
> **Theme Toggle**: Do you want the dark theme to be completely removed (pure light theme), or would you prefer us to enable light theme by default but preserve dark mode support (e.g., standard light/dark toggle)? For maximum impact and clean presentation, we recommend refactoring variables to a default light theme first.

## Proposed Changes

### Global Styling

#### [MODIFY] [index.css](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/index.css)
- Refactor `:root` CSS HSL variables (background to white `0 0% 100%`, foreground to dark charcoal `0 0% 12%`, border/card/secondary tokens to light colors).
- Update `.glass-effect` and `.glass-effect-strong` to use light background overlays (`rgba(255, 255, 255, 0.7)`).
- Update `.hero-gradient`, `.luxury-shadow`, and `.depth-shadow` colors for a light environment.

---

### Component Styling Updates

#### [MODIFY] [Header.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/components/Header.jsx)
- Update mobile drawer backgrounds to use light card styling.
- Replace text color classes to align with the new light scheme (such as contact info link hovers).

#### [MODIFY] [Footer.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/components/Footer.jsx)
- Update text and link styling to guarantee visibility against the light footer background.

#### [MODIFY] [HomePage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/HomePage.jsx)
- Replace hardcoded `text-white` with `text-foreground` or `text-slate-900`.
- Update hero background photo overlay from dark gradient to a soft light gradient.

#### [MODIFY] [AboutPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/AboutPage.jsx)
- Replace hardcoded text-color styling.
- Adjust milestones timeline colors and background panels.

#### [MODIFY] [ServicesPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/ServicesPage.jsx)
- Convert text colors on service cards.

#### [MODIFY] [ContactPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/ContactPage.jsx)
- Convert form label and input text styling to ensure readability.

#### [MODIFY] [QuoteRequestPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/QuoteRequestPage.jsx)
- Adjust form inputs and select field borders for light backgrounds.

#### [MODIFY] [FAQPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/FAQPage.jsx)
- Update FAQ accordion trigger and text colors.

---

## Verification Plan

### Automated Tests
- Build verification:
  ```powershell
  npm run build
  ```
- Run ESLint to verify codebase consistency:
  ```powershell
  npm run lint
  ```

### Manual Verification
- Run local dev server (`npm run dev`) and check:
  - Text contrast on all pages.
  - Form field inputs and search inputs display typed text clearly.
  - Hover effects on cards, navigation elements, and logo badge look clean.
