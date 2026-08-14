# IMPLEMENTATION PLAN: RESUME-TO-PORTFOLIO GENERATOR

This implementation plan provides a structured workflow for any developer or AI coding agent to ingest a resume and generate a customized portfolio website. The resulting website must follow the component skeleton outlined in [PROJECT_REFERENCE.md](file:///d:/Desktop/Krumos%20Internship%20Training/Projects/PortFolio%20Project/PROJECT_REFERENCE.md) but must adopt a completely different visual design system.

> [!IMPORTANT]
> **Strict Anti-Copy Rule:** The generated portfolio must NOT copy or replicate the visual theme, colors, cursor, or styling variables of the current portfolio. Doing so violates the guidelines of this project.

---

## 1. What NOT to Copy (The Forbidden Style List)

When building the new design, do not use the following styles from the current project:
1. **Color Palette:**
   - Dark slate backgrounds: `#0A0A0A` and `#050505`
   - Accents: Neon Cyan (`#22D3EE`) and Neon Purple (`#8B5CF6`)
2. **Text Gradients:**
   - Linear gradients blending Cyan to Purple or Purple to Cyan
3. **Cursor Effects:**
   - Dynamic cursor consisting of a small tracking dot and outer ring with spring physics
4. **Keyframe Animations:**
   - Space/orbit animations (`slow-pan`, `orbit-cw`, `orbit-ccw`, `planet-hue-shift`)
   - Pulsing radial gradients resembling aurora or space nebulae
5. **Card Styling:**
   - Glassmorphism overlays (`glass-premium` with background opacity and 20px blur, plus `glass-glow` borders)
6. **Hero Interactive Element:**
   - Simulating an IDE/code terminal displaying files on the right side of the hero section

---

## 2. Recommended Alternative Design Personas

Select one of the following design aesthetics to build the new website:

### Persona A: Neo-Brutalist (Playful & High Contrast)
- **Background:** Flat cream (`#FDF6E2`), light gray (`#F0F0F0`), or pastel canvas
- **Typography:** Bold sans-serif or Monospace (e.g., Syne, Space Grotesk, Space Mono)
- **Borders:** Solid black borders (`border-2 border-black` or `border-[3px] border-neutral-900`)
- **Shadows:** Hard offset shadows without blur (`shadow-[4px_4px_0px_#000]`)
- **Accents:** High-saturation primary colors (e.g., Chrome Yellow, Acid Green, Neon Orange)
- **Hero Element:** Asymmetrical grid split-screen containing blocky interactive cards or badge arrays

### Persona B: Swiss Modern (Structured & Clean Grid)
- **Background:** Clean White (`#FFFFFF`) or Light Ice Blue (`#F4F6F9`)
- **Typography:** Heavy sans-serif headings (e.g., Inter, Outfit, Instrument Sans)
- **Borders:** Ultra-thin light borders (`border-neutral-200`)
- **Layout:** Asymmetrical multi-column grids, strict mathematical spacing, large bold numbers for lists
- **Accents:** Red-orange (`#FF4500`), Cobalt Blue (`#0047AB`), or Midnight Black
- **Hero Element:** Oversized typographic wordmark paired with minimalist interactive hover grids

### Persona C: Minimalist Monochrome (Elegant & Sophisticated)
- **Background:** Light warm cream (`#FAF9F6`) or soft dark Charcoal (`#121212`)
- **Typography:** Elegant serif headings (e.g., Playfair Display, Lora) paired with clean sans-serif body text (e.g., Plus Jakarta Sans)
- **Borders:** Invisible or very subtle line dividers
- **Shadows:** Very soft, natural blurs
- **Accents:** Dark bronze, gold, or charcoal tints
- **Hero Element:** Large central text reveal animation, minimalist links, and clean profile image layout

### Persona D: Glitch/Retro Terminal (Vintage Monospace)
- **Background:** Pure terminal black (`#000000`)
- **Typography:** Monospace fonts (e.g., JetBrains Mono, Fira Code)
- **Borders:** Pixelated or dashed lines (`border-dashed border-green-500`)
- **Accents:** Green phosphor (`#39FF14`), Amber orange (`#FFB000`), or CRT cyan
- **Animations:** Glitch scanlines, terminal cursor blinks, typing tickers
- **Hero Element:** Interactive CLI query shell where visitors can type commands

---

## 3. Step-by-Step Generation Workflow

### Step 1: Ingest and Parse the Resume
Extract the resume details of the candidate into a structured JSON format matching this schema:
```json
{
  "personal": {
    "name": "Full Name",
    "role": "Current Job Title",
    "subRole": "Secondary Speciality",
    "pitch": "A short 2-sentence elevator pitch summarizing experience and stack.",
    "aboutExtended": "A longer bio detailing philosophy, methods, and career objectives.",
    "resumePdfPath": "/resume-filename.pdf",
    "contact": {
      "email": "email@example.com",
      "location": "City, Country",
      "github": "https://github.com/username",
      "linkedin": "https://linkedin.com/in/username"
    }
  },
  "skills": [
    { "category": "Languages", "items": ["TypeScript", "Python"] },
    { "category": "Frameworks", "items": ["React", "NestJS"] }
  ],
  "experience": [
    {
      "role": "Job Title",
      "company": "Company Name",
      "companyLink": "https://company.com",
      "duration": "Start Date - End Date",
      "points": [
        "Major accomplishment or responsibility using key metrics",
        "Key tech stack implemented during the role"
      ],
      "tags": ["React", "TypeScript"]
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "Short explanation of the project's purpose and functionality.",
      "tags": ["NodeJS", "React"],
      "github": "https://github.com/...",
      "live": "https://...",
      "image": "/project-preview.jpg"
    }
  ]
}
```

### Step 2: Establish the Theme (`index.css`)
1. Open [src/index.css](file:///d:/Desktop/Krumos%20Internship%20Training/Projects/PortFolio%20Project/src/index.css).
2. Rewrite the `:root` variables to match the selected design persona.
3. Configure fonts, scrollbar styles, borders, background, foreground, primary accents, and custom hover states.
4. Replace existing space keyframes (orbit, slow-pan) with new style keyframes (e.g. brutalist offsets, minimal fades, or retro scanlines).

### Step 3: Configure `App.tsx`
1. Open [src/App.tsx](file:///d:/Desktop/Krumos%20Internship%20Training/Projects/PortFolio%20Project/src/App.tsx).
2. Remove the cursor trailing effects (ring and inner dot springs) unless they are customized to match the new persona (e.g., a pixelated crosshair cursor for Retro Terminal, or a hover zoom block cursor for Neo-Brutalist).
3. Ensure theme context bindings align with the styles defined in the CSS variables.

### Step 4: Re-populate Components
Update each component under `src/components/` by replacing the hardcoded data with the parsed resume JSON data:

1. **`Navbar.tsx`**:
   - Update name initials and full name.
   - Adjust animation variants to match the styling theme (e.g., sharp slide-down for Brutalist, smooth fade for Minimalist).
2. **`Hero.tsx`**:
   - Inject name, roles, pitch description, and links.
   - Replace the terminal typing component with a custom component that fits the new design persona (e.g., interactive cards, floating items, or text showcase).
3. **`About.tsx`**:
   - Display extended bio.
   - Map out the skills grid using cards styled to match the new theme (e.g., black-bordered tags for Neo-Brutalist, minimal clean columns for Swiss Modern).
4. **`Projects.tsx`**:
   - Map projects list into project cards.
   - Customize hover effects on cards (e.g. physical offset transitions for Brutalist, image zoom for Minimalist).
5. **`Experience.tsx`**:
   - Map history array into the timeline.
   - Align layout markers (dots, lines, dates) with the visual design guidelines of the chosen persona.
6. **`Contact.tsx`**:
   - Inject email, location, and social links.
   - Customize input fields (borders, shadows, focus rings) to match the selected design.
7. **`Footer.tsx`**:
   - Update text copyright and name.

---

## 4. Verification Check list
After implementing the changes:
1. Run `npm run build` to verify there are zero TypeScript compiler warnings or errors.
2. Open the page in a browser and check responsive states on mobile, tablet, and desktop views.
3. Ensure all links (resume download, GitHub, LinkedIn, contact form submit) are functional.
