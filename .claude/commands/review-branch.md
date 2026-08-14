# BRANCH REVIEW GUIDELINES (review-branch)

Use these guidelines when reviewing branches or Pull Requests created for generating customized portfolios from resumes.

---

## 1. Technical Health Audit

Run these checks to verify the code compiles and follows standards:

1. **Compilation Check:**
   - Execute the build command:
     ```bash
     npm run build
     ```
   - Ensure the build completes with exit code 0 and zero TypeScript or Vite compilation errors.
2. **Type Safety check:**
   - Ensure `noUnusedLocals` and `noUnusedParameters` flags are satisfied.
   - Verify that there are no `any` type casts used as escape hatches in the files.
3. **Import Structure:**
   - Ensure all components are imported using relative paths (e.g. `./components/Hero` rather than `@/` aliases if not configured).
   - Ensure styling uses Tailwind classes matching variables defined in the stylesheet.

---

## 2. Visual Style & Anti-Copy Check

Verify that the theme does not copy the original "Midnight Aurora" style:

| Original Style (FORBIDDEN) | Check in Current Branch |
|---|---|
| Background colors of `#050505` / `#0A0A0A` | Verify the background is a completely different hex or style (e.g., `#FAF9F6` for cream, `#FFFFFF` for white, or a themed dark `#121212`). |
| Accents of Cyan (`#22D3EE`) and Purple (`#8B5CF6`) | Check for distinct accent combinations (e.g., Orange/Charcoal, Blue/Crimson, Green/Amber). |
| Cyan/Purple linear gradients on headers and text | Ensure text gradients are omitted, or use completely different colors suited to the new style. |
| Circle & Ring dynamic mouse custom cursor | Verify that if a custom cursor is present, it matches the design style (e.g., crosshairs for vintage terminal, block for brutalist, or disabled/standard browser cursor). |
| Simulated IDE code typing screen on Hero section | Check if the typing simulator has been customized to match the new topic, or replaced entirely with another focal element. |
| Radial space-glow blobs in the background | Verify that background patterns are distinct (e.g., grids, solid blocks, noise textures, or geometric dividers). |

---

## 3. Structural Skeleton Check

Verify that the structure aligns with the guidelines in [PROJECT_REFERENCE.md](file:///d:/Desktop/Krumos%20Internship%20Training/Projects/PortFolio%20Project/PROJECT_REFERENCE.md):

1. **Navbar Section:**
   - Includes navigation links to `#home`, `#about`, `#projects`, `#experience`.
   - Includes a working CTA button linking to `#contact`.
   - The bar changes styling (shadow or blur) on scroll.
   - Mobile menu behaves correctly (toggles state, hides on anchor clicks).
2. **Hero Section:**
   - Tagline, heading name, role description are present.
   - Project, contact, and resume download buttons are fully functional.
3. **About Section:**
   - Skills grid is present and readable.
4. **Projects Section:**
   - Project cards exist with titles, categories, description paragraphs, GitHub links, and live previews.
5. **Experience Section:**
   - Timeline cards display chronological job titles, company names, durations, achievements, and tech stacks.
6. **Contact Section:**
   - Forms contain functional inputs (Name, Email, Subject, Message).
   - Contact info lists valid email addresses and social link anchors.

---

## 4. Mobile & Touch Audits

1. **Touch Responsiveness:**
   - Custom pointer/cursors must be disabled on touchscreens (`pointer: coarse` media query checks).
   - Touch buttons and links must have a minimum tap target of `44x44px`.
2. **Layout Adaptability:**
   - Grids (e.g., Project grids, About skills columns) must collapse into single columns on mobile breakpoints (`sm:` or `max-w-md`).
   - Text spacing and font sizing must adjust gracefully so that titles do not overflow horizontal screen bounds.
