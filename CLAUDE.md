# CLAUDE.md

Developer guidance for working in this portfolio repository.

## What this is

This repository is a Vite + React + TypeScript + Tailwind CSS v4 single-page portfolio application. It has an interactive, animated user experience driven by Framer Motion, structured around standard sections (Navbar, Hero, About/Skills, Projects, Experience, Contact, Footer).

The project is structured as a skeleton. Future iterations or automated tools should keep the component skeleton and functionality but customize the personal data and completely change the visual design theme to prevent copies.

## Commands

Use the following commands for development, testing, and building:

```bash
npm run dev      # Start the local development server (Vite)
npm run build    # Compile TypeScript and build the production bundle
npm run preview  # Preview the production build locally
```

## Tech Stack & Dependencies

- **Framework:** React 19.2.x (with TypeScript 5.9.x)
- **Build Tool:** Vite 7.2.x
- **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
- **Animation:** Framer Motion 12.38.x
- **Class Merging:** `clsx` and `tailwind-merge` (via a shared helper `src/utils/cn.ts`)
- **Plugin:** `vite-plugin-singlefile` (used to bundle the entire project if single-file delivery is needed, check configuration)

## Path Aliases

This project does not use custom path aliases like `@/` by default, but rather relative imports for modular structure (e.g., `import Navbar from './components/Navbar'`). Ensure all components and files are imported correctly using relative paths from the current directory.

## Code Conventions & Standards

- **TypeScript:** Strict type checks (`strict: true`) are enabled in `tsconfig.json`. Explicit typing is required; avoid the `any` keyword. Use `import type` when importing interfaces or types.
- **Component File Names:** Component files must be written in PascalCase (e.g., `Hero.tsx`, `Projects.tsx`, `Navbar.tsx`).
- **Function/Variable Names:** Use camelCase for variables, objects, functions, hooks, and local state. Use UPPERCASE for global configurations or static content objects.
- **State Management:** Simple states use standard React hooks (`useState`, `useEffect`). Any theme transitions or locks are managed through the custom `src/context/ThemeContext.tsx`.
- **CSS Architecture:** Tailwind v4 `@import "tailwindcss";` in `src/index.css` compiles all styles. Design tokens should be stored as root CSS custom properties inside `:root` or dark class namespaces.
- **Aesthetics & Performance:** Ensure smooth micro-interactions (e.g., button scale taps, scroll highlights, hover shifts) using Framer Motion. Verify builds compile with zero typescript errors before pushing.
