---
name: clean-fronend-code
description: Strip and refactor messy frontend into a clean structure—components, layout, CSS/styles, markup, and types under src/types. Use when the user says "clean this frontend", "refactor this page", "tidy components", "clean CSS", or asks to clean up / simplify / restructure frontend UI code or reusable styles.
---

# Clean Frontend Code

## Goal

Turn messy frontend into a clear structure: one job per section, shared patterns reused, dead/duplicated code removed, all interfaces/types under `./src/types/**`, and **one main function per main component file**. Prefer editing existing files; create files only when a real split improves clarity.

## When to apply

- "clean this frontend"
- "refactor this page"
- "tidy components"
- "clean CSS" / messy or duplicated styles
- Similar asks to clean up, simplify, or restructure UI code

## Workflow

1. **Scope** — Identify the page(s)/component(s) in scope. Do not refactor unrelated areas.
2. **Map** — List current structure: entry file, child components, extra functions in the same file, duplicated/inline styles, inline `interface`/`type`/`enum` declarations, duplicated markup, dead code.
3. **Plan** — Decide splits/merges and naming. Keep the public UI behavior the same unless the user asked for visual changes.
4. **Refactor** — Apply changes in small, coherent edits:
   - Extract repeated UI into shared components (each in its own file)
   - Enforce one main function per main component file (see Component files)
   - Move all interfaces/types into `./src/types/**` (see Types layout)
   - Clean messy CSS: reusable styling → separate shared classes (see [clean-css.md](clean-css.md))
   - Collapse one-off wrappers that add no meaning
   - Co-locate unique styles with the component that owns them; put shared classes in the project's shared style location
   - Remove unused imports (see Unused imports), unused props, CSS, and dead branches
5. **Verify** — Build/lint if the project has scripts; confirm layout still matches intent on desktop and mobile; confirm no leftover type declarations in component/page files; confirm each main component file exports/defines only one main function; confirm no unused imports remain; confirm repeated styles use shared classes.

## Component files

For a **main component** file: only **one main function** in that file (the component itself).

- One exported/default component function per file — no sibling components, no helper components, no second `function`/`const X = () =>` UI units in the same file
- Move extra components into their own files under the project's component layout (e.g. `src/components/...`)
- Tiny non-UI helpers (pure formatters) may stay only if the project already does that; prefer extracting if they grow or are reused
- File name matches the main function (`Hero.tsx` → `function Hero` / `export default function Hero`)
- Pages compose by importing children; they do not define those children inline in the page file

## Types layout

Move **all** `interface`, `type`, and shared `enum` declarations out of components/pages/hooks and into `./src/types/**`.

- Path: `src/types/<domain>.ts` (or nested `src/types/<domain>/*.ts` when a domain grows)
- Export named types; re-export from `src/types/index.ts` only if the project already uses a barrel
- Components/pages import types from `src/types/...` — do not redefine them inline
- Keep prop types in `src/types` too (`ButtonProps`, `HeroProps`, etc.), not beside the component
- Exception: do not invent types for plain JS files; only extract when TypeScript types already exist or the project is TS

## Styles (summary)

- Reusable styling must be a **separate shared class** (not copy-pasted inline styles or duplicate rule blocks)
- Unique one-offs may stay local; repeated patterns must be extracted
- Full rules and examples: [clean-css.md](clean-css.md)

## Structure rules

- **One composition** — First viewport reads as one composition, not a dashboard (unless it is a dashboard).
- **One job per section** — Each section: one purpose, one headline, usually one short supporting sentence.
- **No needless cards** — Default: no cards. Cards only when they wrap a user interaction. If border/shadow/radius can go without hurting understanding, remove them.
- **Hero discipline** (landing/promo): brand + one headline + one support line + one CTA group + one dominant image. No stats strips, schedule snippets, or secondary promo clutter in the first viewport. No overlays on hero media.
- **Preserve design system** — If the project already has tokens/components/patterns, follow them. Do not invent a parallel look.

## Unused imports

After every edit, remove **all unused imports** in touched files.

- Drop unused default, named, namespace, type-only, and side-effect-free imports that nothing references
- After extracting types/components, delete leftover imports that pointed at the old inline symbols or moved modules
- After removing `useMemo`/`useCallback`/hooks/components, remove their imports too (`react` named imports included)
- Prefer a clean import list: no blank leftover commas, no empty `import {} from "..."`, no unused `import type`
- Do not leave unused imports “for later”

## Code hygiene

- Match existing stack and file layout (React/Vue/etc., CSS modules/Tailwind/etc.), except types always go under `./src/types/**`.
- Prefer clear names over abstractions (`Hero`, `PricingSection` > `SectionWrapper1`).
- Keep components focused; split when a file has more than one main function, mixes unrelated concerns, or exceeds ~200–300 lines of UI.
- Do not add `useMemo`/`useCallback` by default; follow the repo's React guidance if present.
- Do not add docs, README, or drive-by refactors outside scope.
- Never commit secrets or `.env` files.

## Output

When cleaning:

1. Briefly state what was messy and the target structure.
2. Make the edits.
3. Summarize what moved/merged/removed (file list + one line each).

If the user only wants a plan, stop after the map + plan and wait for go-ahead.

## Eval testing

Cases live in [evals/evals.json](evals/evals.json). Fixtures:

- [evals/files/messy-landing.jsx](evals/files/messy-landing.jsx) — cluttered hero + needless cards
- [evals/files/messy-components.jsx](evals/files/messy-components.jsx) — duplication, no-op wrappers, unused hooks
- [evals/files/messy-types.tsx](evals/files/messy-types.tsx) — inline interfaces/types to move into `src/types/**`
- [evals/files/messy-styles.jsx](evals/files/messy-styles.jsx) — duplicated inline styles → reusable classes ([clean-css.md](clean-css.md))

When running skill evals: copy fixtures into the run workspace, execute each prompt with the skill, grade against `assertions`, and compare to a no-skill baseline. Do not treat fixture paths inside the skill dir as the app source of truth for real project cleanups.
