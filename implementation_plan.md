# Frank's Auto Parts Rebranding & Inventory Removal Plan

This plan outlines the steps to rebrand the website from "Brothers Auto Parts" to "Frank's Auto Parts Service & Sales", implement a premium white-background logo with 3D/metallic styling, and remove the inventory catalog to convert the app into a sleek service and sales lead-generation website.

## User Review Required

> [!IMPORTANT]
> **Inventory Page Removal**: We will remove the `InventoryPage.jsx` and delete its routing entry. All links previously pointing to `/inventory` (in the Header, Footer, and page text) will be deleted or redirected to `/services` or `/quote-request`.
> 
> **Logo Design Details**: The logo will be styled directly in CSS using premium Tailwind variables:
> - **Background**: Solid clean white wrapper with 3D inset drop-shadows and subtle silver borders.
> - **Effects**: Metallic-like gradients and smooth 3D micro-animations (tilts and lifts) on hover.
> - **Text**: "FRANK'S AUTO PARTS" (primary text) and "SERVICE & SALES" (subtitle).

## Open Questions

> [!IMPORTANT]
> **Email Domain Rebranding**: We plan to update email links and text from `info@brothersautoparts.com` to `info@franksautoparts.com` or similar. Please verify if you have a preferred contact email or domain.
> 
> **Home Page Header Action**: With the inventory catalog removed, the main Call-To-Action (CTA) on the home page hero will be simplified to focus entirely on **Request quote** and **Call now**. Let us know if you want any specific secondary CTA (e.g. "Our Services").

## Proposed Changes

### Routing & Navigation Components

#### [MODIFY] [App.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/App.jsx)
- Remove `InventoryPage` import and `/inventory` Route definition.

#### [MODIFY] [Header.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/components/Header.jsx)
- Remove `Inventory` from the navigation links list.
- Rebrand "Brothers Auto Parts" to "Frank's Auto Parts Service & Sales".
- Replace current logo mark with a white background container having metallic text gradients, silver chrome border, and 3D hover animations.

#### [MODIFY] [Footer.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/components/Footer.jsx)
- Update branding text, copyright statements, and email address to "Frank's Auto Parts".
- Remove the `Inventory` link from quick links.
- Update footer logo structure to mirror the header's design.

---

### Pages (Rebranding & Section Removals)

#### [DELETE] [InventoryPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/InventoryPage.jsx)
- Delete this file to remove all parts search catalog logic.

#### [MODIFY] [HomePage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/HomePage.jsx)
- Rebrand texts to Frank's Auto Parts.
- Remove "Find my part" CTA buttons.
- Remove the "Search inventory" form block (the advanced filters section).
- Update metadata titles and descriptions.

#### [MODIFY] [AboutPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/AboutPage.jsx)
- Update Martines/Brothers history context to match Frank's business services.
- Update headers and metadata.

#### [MODIFY] [ContactPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/ContactPage.jsx)
- Update email addresses, map subtitle text, and titles to reflect Frank's branding.

#### [MODIFY] [ServicesPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/ServicesPage.jsx)
- Change text references to "Frank's Auto Parts".

#### [MODIFY] [FAQPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/FAQPage.jsx)
- Rebrand questions and answers to refer to Frank's Auto Parts Service & Sales.

#### [MODIFY] [QuoteRequestPage.jsx](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/apps/web/src/pages/QuoteRequestPage.jsx)
- Rebrand texts to Frank's.

---

## Verification Plan

### Automated Tests
- Build verification to check for compilation errors after page deletion:
  ```powershell
  npm run build
  ```
- Run ESLint to ensure all static imports are valid:
  ```powershell
  npm run lint
  ```

### Manual Verification
- Run dev server (`npm run dev`) and test:
  - Navigation works and does not link to inventory.
  - Logo displays with white background, chrome-like text shadows/gradients, and interactive 3D scale/tilting.
  - Rebranding check on all pages and in page tab headers (<Helmet>).
