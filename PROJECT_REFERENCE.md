# PROJECT REFERENCE

This document outlines the code structure, file organization, and layout skeleton of the portfolio project. All future implementations must follow this structural layout, while changing the stylistic design.

---

## 1. Directory Structure

The project follows a standard Vite + React + TS structure:

```
portfolio-project/
├── public/                 # Static assets (favicons, PDFs, resumes)
├── src/
│   ├── assets/             # Images, SVGs, backgrounds
│   ├── components/         # Page sections and component UI blocks
│   │   ├── About.tsx       # Tech skills, credentials, introduction layout
│   │   ├── Contact.tsx     # Message forms, contact information, social links
│   │   ├── Experience.tsx  # Work timeline, career history layout
│   │   ├── Footer.tsx      # Copywrite, credits, signature links
│   │   ├── Hero.tsx        # Catchy header intro, code simulator or primary focal point
│   │   ├── Navbar.tsx      # Top sticky or floating navigation bar with mobile drawer
│   │   └── Projects.tsx    # Cards displaying portfolio projects
│   ├── context/
│   │   └── ThemeContext.tsx # Context managing the dark/light mode state
│   ├── types/
│   │   └── images.d.ts     # Global TypeScript type helpers for importing images
│   ├── utils/
│   │   └── cn.ts           # Class utility to merge Tailwind classes using clsx & tailwind-merge
│   ├── App.tsx             # Main orchestrator mounting all components and managing custom cursor/effects
│   ├── index.css           # Styling entry point defining global styles and theme variables
│   └── main.tsx            # DOM mounting script
├── package.json            # Dependencies and script definitions
├── tsconfig.json           # TS Compiler preferences
└── vite.config.ts          # Vite build instructions
```

---

## 2. Component Blueprint (The Skeleton)

Any portfolio generated using this reference must keep the following component architecture:

### 1. `App.tsx` (Main Container)
- **Role:** Mounts the `ThemeProvider` context. Wraps the main layout inside a container.
- **Interactivity:** Can handle custom cursor hooks (e.g., tracking mouse position for ring/circle cursors) or screen-wide mouse effect tracking.
- **Order of Sections:**
  ```tsx
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </main>
  <Footer />
  ```

### 2. `Navbar.tsx` (Header)
- **State:** Tracks `isScrolled` (boolean to add blur or shadow styling once the user scrolls down) and `isMobileMenuOpen` (boolean for toggling hamburger drawer).
- **Links:** Direct anchor links pointing to `#home`, `#about`, `#projects`, `#experience`.
- **CTA:** Contains a prominent "Contact Me" button linking directly to `#contact`.

### 3. `Hero.tsx` (Introduction)
- **Intro Text:** Welcome tagline (e.g., "Hello, I'm..."), name heading, role subtitle, and a brief elevator pitch.
- **Highlights:** Quick pills representing top technologies.
- **Focal Component:** An interactive side panel. The current project utilizes a code terminal with files (`developer.ts`, `infra.yaml`, `interests.json`) displaying text with a typing effect. Future iterations can replace this with other interactive modules (e.g., visual cards, canvas models, or interactive diagrams).
- **Actions:** Prominent action buttons: "View Projects" (`#projects`), "Download Resume" (pointing to a PDF), and "Contact Me" (`#contact`).

### 4. `About.tsx` (Information & Skills)
- **Elevator Pitch:** Extended description of background, passion, and engineering approach.
- **Skills Grid:** Visual representation of key tools, frameworks, and programming languages categorized neatly.

### 5. `Projects.tsx` (Showcase)
- **Layout:** A grid or list of cards.
- **Data Attributes:** Each project card must display:
  - Project Title
  - Short description
  - Category tags (e.g., "React", "NodeJS")
  - Code link (e.g., GitHub URL)
  - Live preview link
  - Image mockup or visual card header
- **Filter State (Optional):** Categories to filter displayed projects.

### 6. `Experience.tsx` (Timeline)
- **Layout:** Vertical timeline or card stack representing career history.
- **Data Attributes:** Each event must specify:
  - Role Title (e.g., "Software Engineer Intern")
  - Company name & website link
  - Time period (e.g., "May 2025 - Present")
  - Bulleted achievements/impact summaries
  - Technology tags used in the role

### 7. `Contact.tsx` (Get In Touch)
- **Layout:** Split section containing:
  - **Form:** Interactive form inputs (Name, Email, Subject, Message) with a "Send Message" submit button.
  - **Info Panels:** Direct communication channels (Email address, Location, and quick-link social icons).

### 8. `Footer.tsx` (Credits)
- **Content:** Copyright note, name, signature footer links, and links to source repositories.

---

## 3. Styling Utilities & Global Integrations

- **Utility cn:** All custom overrides use the `cn` function (`src/utils/cn.ts`) to resolve styling conflicts dynamically.
- **Tailwind:** Colors, fonts, and animation custom classes should be mapped to the Tailwind variables configured inside `src/index.css` under the `@import "tailwindcss"` syntax.
- **Context:** The `ThemeContext` controls global page-level dark mode variables, ensuring styling matches system themes or custom overrides seamlessly.
