# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website — no build step, no framework. Six HTML pages share one CSS file and one JS file. Open any `.html` in a browser to preview locally.

## Architecture

### File Layout

- `index.html` — Hero / home page
- `experience.html`, `projects.html`, `skills.html`, `education.html`, `contact.html` — the five section pages
- `styles/main.css` — single stylesheet for all pages; uses CSS custom properties throughout
- `scripts/main.js` — single IIFE: theme toggle, mobile nav, Intersection Observer scroll reveals, page-based system flow, project card expand/collapse
- `latex.tex` — LaTeX resume source; canonical source of truth for content (not generated from the HTML)
- `PORTFOLIO_BUILD_PROMPT.md` — reference prompt used to generate this site; useful context for design intent

### Design System

**Aesthetic**: Editorial, warm cream. Primary palette is cream (`#f6f1e8`) with warm gold accent (`#b08d57`). The dark theme is a warm charcoal (`#1c1812`), not neon. Default is light/cream.

**Color/theme**: Light-first. Dark theme overrides live under `[data-theme="dark"]` in `main.css`. Default in JS is `'light'`. Theme preference is persisted in `localStorage`.

**Typography**: Three fonts — Cormorant Garamond (serif, headings), Inter (sans, body), JetBrains Mono (mono, labels/metadata). Section titles use serif with `clamp()` sizing.

**CSS variables** (in `:root`): `--color-*`, `--font-*`, `--sp-*` (spacing), `--shadow-*`, `--r-*` (radii), `--t-*` (transitions). All dark overrides are in `[data-theme="dark"]`.

**Spacing tokens**: `--sp-2xs` (0.25rem) → `--sp-xxl` (12rem).

**Breakpoints**: mobile < 768px, tablet/mid < 968px, desktop ≥ 968px.

### JavaScript (main.js)

| Section | What it does |
|---|---|
| Theme Toggle | Reads/writes `localStorage`, flips `data-theme` on `<html>`; default is `'light'` |
| Navigation | Floating pill nav; `.scrolled` class added after 60px; mobile dropdown below pill |
| Active Nav Link | Matched by `window.location.pathname` against `href` attributes |
| System Flow | Sets `.flow-node.active` based on current page URL, not scroll position |
| Scroll Animations | `IntersectionObserver` on `[data-scroll]` — adds `.visible` class at 8% visibility |
| Project Cards | Click `.project-item` to expand/collapse; clicking a link inside is ignored |

### Key HTML Patterns

- Nav: `<nav class="navbar" id="navbar">` → `<div class="nav-pill">` (replaces old `nav-container`)
- System flow: `<nav class="system-flow">` with `<a>` nodes that are actual links to pages
- Each inner page: `<section class="page-section" data-layer="...">` → `<div class="section-container">`
- Section header: `.section-header` → `.section-eyebrow` (num + line + tag) + `.section-title` + `.section-rule`
- Project items: `.project-item` > `.project-header-row` + `.project-desc` + `.project-expandable`
- Scroll animation: add `data-scroll` attribute; optional `data-delay="1|2|3"` for staggered reveals

## Adding or Editing Content

- **Content changes**: edit the relevant HTML page directly. `latex.tex` is the source of record but the HTML is what's deployed.
- **New project**: copy a `.project-item` block in `projects.html`; include `data-scroll`.
- **New skill category**: copy a `.skill-module` block in `skills.html`.
- **Colors**: update the CSS variable in `:root` and mirror in `[data-theme="dark"]`.
- **New page**: copy nav + system-flow from an existing page; add a new `<a>` node to `.flow-track` in all pages; add to `pageLayerMap` in `main.js`.

## Key Conventions

- All interactive elements must have `aria-label` attributes.
- Animations respect `prefers-reduced-motion` — the query at the bottom of `main.css` disables all transitions.
- No external JS dependencies — only Google Fonts CDN is used.
- The `assets/`, `components/`, and `sections/` directories currently exist but are empty placeholders.
