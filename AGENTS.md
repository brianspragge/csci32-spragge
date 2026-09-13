# AGENTS.md

Guidance for agents working in this repository.

## Overview

Turborepo monorepo for the **VimCats** project (CSCI 32 coursework). It contains one
Next.js app and several shared packages. All source is TypeScript.

**Keep this file current.** When a change affects anything documented here — routes,
exports, layout, tooling, conventions, or gotchas — update this file in the same change.

## Toolchain

- **Monorepo:** Turborepo 2.x, Yarn 1.22.22 workspaces (pinned via `devEngines`)
- **Runtime:** Node >= 22
- **Framework:** Next.js 15.5 (App Router), React 19
- **Styling:** Tailwind CSS v4 (no `tailwind.config` file; theme lives in CSS)
- **Lint/format:** ESLint 9 flat config, Prettier 3
- **Type checking:** `tsc --noEmit` per package
- **No test runner is configured.** Do not assume one exists; verify manually or ask.

## Layout

```
apps/
  vimcats/            Next.js app (App Router, React 19, Tailwind v4)
packages/
  ui/                 @repo/ui        React component library
  math/               @repo/math      utility functions
  eslint-config/      @repo/eslint-config
  tailwind-config/    @repo/tailwind-config   shared Tailwind theme tokens
  typescript-config/  @repo/typescript-config
```

Workspaces are `apps/*` and `packages/*` (root `package.json`).

### `apps/vimcats` routes

- `/` — landing page
- `/button` — `@repo/ui/button` showcase
- `/input` — controlled input showcase
- `/games/random-number-guesser` — game using `@repo/math/getRandomInt`

Interactive components begin with `'use client'` (e.g. `input/page.tsx`, the game files).

### `@repo/ui` exports

Subpath exports map directly to `src/` files: `button`, `card`, `cat`, `code`, `input`,
`page`, `size`, `variant`, plus `styles.css` (built to `dist/index.css`).

- Every `@repo/ui` component is a **named** export.
- `Page` (`@repo/ui/page`) is the shared page shell: a full-height centered column with a
  `max-w-3xl p-24` `<main>`. Wrap each route's content in it instead of repeating wrapper
  divs.
- The base `bg-eggshell-200` and `font-sans` live once on `<body>` in
  `apps/vimcats/src/app/layout.tsx`; do not re-add them per page.
- UI props are driven by the `Size` and `Variant` enums; Tailwind class strings are
  produced by helper functions in `size.ts`, `variant.ts`, and `tokens.ts` rather than
  inline ternaries. Follow that pattern when adding components.
- Theme colors (e.g. `deep-crimson-500`, `baltic-blue-500`, `olive-leaf-500`,
  `eggshell-200`, `sand-dune-50`) are defined in
  `packages/tailwind-config/shared-styles.css` under `@theme`.

## Commands

Run from the repo root:

```sh
yarn build        # turbo run build
yarn dev          # turbo run dev
yarn lint         # turbo run lint
yarn check-types  # turbo run check-types
yarn format       # prettier --write "**/*.{ts,tsx,md}"
```

Target a single workspace with a filter:

```sh
yarn turbo run build --filter=vimcats
yarn turbo run dev --filter=vimcats
```

Build order is handled by `turbo.json`: `build` and `check-types` depend on their
dependencies (`^build`, `^check-types`). `@repo/ui` must build before the app consumes it,
so prefer the turbo tasks over running `next build` in isolation.

After changes, run `yarn lint` and `yarn check-types` to verify.

## Conventions

- **Formatting (Prettier):** no semicolons, single quotes, 2-space indent, no tabs.
- **EditorConfig:** LF line endings, UTF-8, trailing whitespace trimmed, final newline.
  Markdown keeps trailing whitespace.
- **No comments in source** unless explicitly requested.
- Keep helper logic in named functions (see `packages/ui/src/variant.ts`) rather than
  inline.
- New shared code belongs in a `@repo/*` package, not duplicated in the app.

## Known gotchas

- `@repo/ui` subpath exports for `.tsx` files must be listed explicitly; the `./*`
  wildcard only resolves `.ts` (e.g. `./page` → `./src/page.tsx`).
- `@repo/ui` `files` ships `dist`, but its `exports` point at `src/*`. The app relies on
  this workspace setup; a plain publish would break the pointed-at files.
- `@repo/ui` styles are a separate build step (`tailwindcss -i ./src/styles.css -o
./dist/index.css`). Run `yarn build` in the package after editing `styles.css`.
- README.md is largely the stock Turborepo starter and uses `docs`/`web` names that do not
  exist here; the real app is `vimcats`.
