 # AutoFlow AI

A modern, responsive single-page website for an AI automation agency, built with React + Vite, React Router, and Tailwind CSS (via @tailwindcss/postcss). The project demonstrates clean architecture, accessible UI patterns, and a scalable page structure suitable for marketing sites or lightweight apps.

## Features
- React 19 with Vite for fast DX (HMR, lightning builds)
- Client-side routing with React Router (Home, About, Services, Case Studies, Blog, Contact)
- Tailwind CSS v4 pipeline via PostCSS with utility-first styling and small design system utilities
- Accessible navigation (keyboard-friendly, focus-visible, skip link) and responsive layout
- Iconography via lucide-react

## Tech Stack
- React, React DOM
- React Router DOM
- Tailwind CSS (via @tailwindcss/postcss)
- Vite
- ESLint (modern config with react-refresh and react-hooks)

## Project Structure
```
AutoFlow AI/
├─ index.html
├─ vite.config.js
├─ src/
│  ├─ main.jsx               # Router & app bootstrap
│  ├─ App.jsx                # Layout with Navbar/Footer and <Outlet />
│  ├─ index.css              # Tailwind import + global styles/utilities
│  └─ pages/                 # Route components
│     ├─ Home.jsx
│     ├─ About.jsx
│     ├─ Services.jsx
│     ├─ CaseStudies.jsx
│     ├─ Blog.jsx
│     └─ Contact.jsx
```

## 1) Project Description and Purpose
AutoFlow AI serves as a polished front-end for an AI automation services brand. It showcases offerings, case studies, and a clear contact CTA, while providing a maintainable foundation to extend features, add content, and integrate backends or forms.

## 2) Installation
Prerequisites: Node.js LTS (v18+ recommended) and npm.

- Install dependencies:
```
npm install
```
- Start the development server:
```
npm run dev
```
- Build for production:
```
npm run build
```
- Preview the production build locally:
```
npm run preview
```
- Lint the project:
```
npm run lint
```

## 3) Usage
- Development: Run the dev server; Vite will display the local URL. Hot-module replacement is enabled for rapid iteration.
- Routes available out of the box:
  - / (Home)
  - /about
  - /services
  - /case-studies
  - /blog
  - /contact
- Adding a new page/route:
  1. Create a component in `src/pages/YourPage.jsx`.
  2. Register it in the router inside `src/main.jsx` by adding a route object.
  3. (Optional) Add a NavLink in the `Navbar` inside `src/App.jsx`.
- Styling:
  - Tailwind utilities are available globally (see `src/index.css`).
  - Reusable UI utility classes (e.g., `.ui-card`, `.ui-button-primary`, `.ui-cta`) are defined in `src/index.css` using `@apply` for consistency.
- Icons: Import from `lucide-react` and use as React components.

## 4) Configuration Options
- Vite (`vite.config.js`):
  - Adjust plugins or add options like `base`, `server`, and `build` according to your deployment needs.
- Router base path:
  - If deploying under a sub-path (e.g., `/autoflow/`), you can set a basename in the router or configure `base` in `vite.config.js` to match your hosting path.
- Tailwind & Theme:
  - Tailwind is enabled via `@import "tailwindcss";` in `src/index.css` (Tailwind v4 pipeline).
  - Brand background colors and small design tokens live in `:root` within `src/index.css` (e.g., `--bg-start`, `--bg-end`). Tweak these to match your branding.
  - Extend/organize utility classes in `src/index.css` to keep UI consistent.
- ESLint:
  - Configured in `eslint.config.js`. Run `npm run lint` to check code quality. You can also run ESLint with `--fix` locally if desired.
- Environment Variables:
  - None are required by default. If you add runtime configs, use `VITE_`-prefixed variables per Vite conventions and access via `import.meta.env`.

## Deployment
- Run `npm run build` to generate the production bundle in `dist/`.
- Serve `dist/` with any static host (Vercel, Netlify, Cloudflare Pages, Nginx, etc.).
- Because this is a SPA with client-side routing, ensure a fallback to `index.html` for non-root routes (most hosts provide a SPA fallback setting or redirect rule).

## 5) Contribution Guidelines
- Issues & Features: Open an issue describing the change, rationale, and acceptance criteria.
- Branching: Create feature branches from `main` (e.g., `feat/add-contact-form`).
- Code Style: Follow ESLint rules. Keep components small and cohesive; prefer composition over large monoliths.
- Commits: Use clear messages (Conventional Commits recommended, e.g., `feat:`, `fix:`, `docs:`).
- PRs:
  - Ensure `npm run lint` passes.
  - Keep PRs focused and include before/after screenshots for UI changes.
  - Describe testing steps and potential impact on routing or global styles.

## 6) License
No license file is currently provided. All rights reserved by default. If you intend to open-source this project, add a `LICENSE` file (e.g., MIT, Apache-2.0) and update this section accordingly.

---

### Notes
- Accessibility: The layout includes a skip link, focus-visible styles, and keyboard-friendly navigation. Maintain these patterns when adding new components.
- Performance: Favor static content, defer heavy logic, and keep images optimized. Tailwind utility classes help create minimal CSS.
- Extensibility: You can integrate forms, analytics, or a headless CMS. Keep routes and UI utilities organized to scale comfortably.
