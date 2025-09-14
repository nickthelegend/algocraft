# Next.js 15 Migration Plan for Vite + React + TypeScript Project

## Introduction
This plan outlines the migration of the current Vite + React + TypeScript application to Next.js 15 using the App Router. The existing structure includes a standard Vite setup with Shadcn UI components, Tailwind CSS, custom hooks, utilities, and basic pages (Index and NotFound). The migration will preserve functionality while leveraging Next.js features like server-side rendering, improved routing, and better TypeScript support.

Key goals:
- Maintain UI/UX with Shadcn UI and Tailwind.
- Convert Vite-specific configs to Next.js equivalents.
- Restructure for App Router without losing components or hooks.
- Ensure compatibility and test thoroughly.

Assumptions:
- No Vite-specific plugins beyond standard (e.g., no heavy custom plugins).
- Public assets (e.g., favicon.ico, robots.txt) are static and can be copied.
- No dynamic imports or Vite optimizations that conflict with Next.js.
- ESLint is flat config (eslint.config.js).
- Project uses Bun or npm (package-lock.json present).

## 1. Project Setup
Initialize a new Next.js 15 project and install dependencies.

- Create a new Next.js app: Use `npx create-next-app@latest` with TypeScript, Tailwind CSS, ESLint, and App Router enabled. Name it the same as current project or copy over.
- Install core dependencies: Next.js 15, React 18+, TypeScript.
- Install Tailwind CSS: Follow Next.js docs for Tailwind integration.
- Install Shadcn UI: Run `npx shadcn-ui@latest init` in the new project, then add existing components manually.
- Install additional: ESLint (with Next.js plugin), PostCSS (if needed).
- Copy package.json scripts and dependencies from Vite project, adjusting for Next.js (e.g., remove Vite, add Next.js scripts like `dev`, `build`, `start`).

## 2. File Structure
Map the current `src/` to Next.js `app/` directory.

Current structure:
- `src/App.tsx`: Root component.
- `src/main.tsx`: Entry point.
- `src/components/ui/`: Shadcn components.
- `src/hooks/`: Custom hooks (use-mobile.tsx, use-toast.ts).
- `src/lib/utils.ts`: Utilities.
- `src/pages/Index.tsx`, `NotFound.tsx`: Pages.

Next.js structure:
- `app/`: App Router root.
  - `app/layout.tsx`: Root layout (replaces App.tsx).
  - `app/page.tsx`: Home page (from src/pages/Index.tsx).
  - `app/not-found.tsx`: Not found page (from src/pages/NotFound.tsx).
- `components/`: Keep as is, under root or src/ (Next.js allows flexibility; recommend root-level for reusability).
- `hooks/`: Move to `lib/hooks/` or keep in `src/hooks/` if using src/.
- `lib/`: Keep utils.ts.
- `public/`: Copy assets (favicon.ico, etc.).
- Remove `src/vite-env.d.ts`, `index.html`; Next.js handles entry.

Handle layouts: Introduce root layout in `app/layout.tsx` wrapping providers (e.g., ThemeProvider if using Shadcn).

## 3. Configuration Migration
Migrate Vite configs to Next.js.

- **TypeScript**: Copy `tsconfig.json`; Next.js has its own `tsconfig.json`—merge paths, include/exclude. Remove `tsconfig.app.json`, `tsconfig.node.json`.
- **Tailwind CSS**: Rename `tailwind.config.ts` if needed; update content paths to include `app/` and `components/`. PostCSS config: Next.js uses `postcss.config.js`—copy and ensure Tailwind plugin.
- **ESLint**: Convert `eslint.config.js` (flat config) to Next.js ESLint setup. Install `@next/eslint-config-next` and update config to extend it. Handle React hooks rules.
- Remove `vite.config.ts`, `postcss.config.js` (if Vite-specific).
- Environment: Add `.env.local` if vars exist; Next.js auto-loads.

## 4. Routing
Convert `src/pages/` to App Router.

- Create `app/page.tsx`: Move content from `src/pages/Index.tsx`.
- Create `app/not-found.tsx`: Move from `src/pages/NotFound.tsx`.
- No dynamic routes assumed; if added later, use `[slug]/page.tsx`.
- Handle 404: Next.js `not-found.tsx` auto-handles.
- Remove any Vite router if present (none in structure).

## 5. Components and Hooks
Integrate existing assets.

- **Shadcn UI**: Components in `src/components/ui/` are compatible; copy to `components/ui/`. Ensure `components.json` is updated for new paths. Hooks like `use-toast.ts` in ui/—move if needed.
- **Custom Hooks**: `src/hooks/use-mobile.tsx`, `use-toast.ts`—copy to `hooks/` or `lib/hooks/`. No adjustments needed as they are client-side; mark with `'use client'` if server components used.
- Utilities: `src/lib/utils.ts`—copy as is; ensure cn() helper works with Tailwind classes.
- Adjustments: Add `'use client'` directive to client-only components/hooks to avoid server errors.

## 6. Entry Points
Replace Vite entry with Next.js.

- Remove `src/main.tsx` (ReactDOM.render) and `src/App.tsx`.
- Create `app/layout.tsx`: Wrap pages with providers (e.g., QueryClientProvider if used, ThemeProvider for Shadcn).
- `app/page.tsx` becomes the default export.
- CSS: Move `src/index.css`, `src/App.css` to `app/globals.css` or root; import in layout.tsx.
- Metadata: Add Next.js metadata export in layout.tsx for title, etc.

## 7. Potential Issues
- **Vite-Specific**: Remove SVGR or alias plugins; Next.js handles imports differently. Update any `__VITE__` defines.
- **Public Assets**: Copy `public/` contents to Next.js `public/`.
- **Hydration Mismatches**: Ensure client/server consistency; use dynamic imports for client-only code.
- **Build Errors**: TypeScript paths may need alias updates (@/* to src/).
- **Performance**: App Router enables RSC; audit for server-client boundaries.
- **Bun Lock**: If using Bun, regenerate lockfile after deps.
- **SEO**: Next.js improves; add metadata.

## 8. Testing Strategy
Verify migration step-by-step.

- **Unit Tests**: If none, add Jest/React Testing Library later.
- **Manual Testing**:
  1. Run `npm run dev` in new project; check home page renders.
  2. Navigate to non-existent route; verify 404.
  3. Test components: Render pages with Shadcn elements (buttons, cards).
  4. Mobile: Test use-mobile hook responsiveness.
  5. Build: `npm run build` and `npm start`; check no errors.
- **E2E**: Use Playwright/Cypress to script page loads, interactions.
- **Diff Check**: Compare screenshots before/after.
- **Lighthouse**: Audit performance/SEO post-migration.

## Sequential Implementation Steps
1. **Backup Current Project**: Copy entire directory to avoid data loss.
2. **Initialize Next.js Project**: Run `npx create-next-app@15` with TS, Tailwind, ESLint, App Router. Skip src/ dir creation.
3. **Install Dependencies**: Add React, Shadcn, copy from package.json (e.g., lucide-react, clsx).
4. **Copy Assets**: Move public/, components/, hooks/, lib/ to new project root.
5. **Migrate Configs**: Update tsconfig.json, tailwind.config.ts, eslint.config.js.
6. **Setup Routing**: Create app/page.tsx from Index.tsx, app/not-found.tsx.
7. **Create Layout**: Implement app/layout.tsx with globals.css import and providers.
8. **Adjust Components/Hooks**: Add 'use client' where needed; test imports.
9. **Remove Vite Files**: Delete vite.config.ts, main.tsx, App.tsx, index.html, vite-env.d.ts.
10. **Test Locally**: Run dev server, verify pages/components.
11. **Build and Deploy Test**: Run build/start; fix errors.
12. **Documentation**: Update README.md with Next.js commands.
13. **Cleanup**: Remove old Vite locks/configs.

This plan ensures a smooth transition; estimate 4-8 hours depending on customizations.