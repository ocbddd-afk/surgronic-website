# Surgronic — Design System Summary
$250k brand engagement · Premium medical-industrial
**Integrated into the working platform** (commit `860b1418`) — the design system lives in
`styles.css` + `app.js`, applied to the existing working files. No standalone prototype.

## Architecture

| File | Role |
|---|---|
| `styles.css` | Full $250k token system + all component styles (39KB) |
| `app.js` | Shared logic: STRINGS (242 keys × EN/FR/AR), Cloudflare API, quote basket (localStorage), WhatsApp, `SG.cardHTML`, header/footer chrome via `SG.mountChrome()` |
| `index.html` | $250k homepage sections; thin inline script wires finder/specs/featured/reveal to `SG.*` |
| `catalogue.html` / `product.html` / `quote.html` | Inner pages; inherit the new system automatically via shared CSS/JS |

Header/footer are injected by `SG.mountChrome()` — nav is **Catalogue · How it works · Why Surgronic** + quote-list pill + "Request a quote" button. Nothing is duplicated per page.

## 1. Tokens

| Token | Value | Usage |
|---|---|---|
| `--navy-950` | `#08142A` | Primary dark background (hero, why, footer) |
| `--navy-900` | `#0C1B36` | Dark surfaces, mobile nav |
| `--navy-700` | `#153A72` | Gradient endpoint, hover states |
| `--blue-500` | `#2F86F6` | **Single accent** — the ring blue. CTAs, badges, focus rings, glow |
| `--blue-400` | `#5AA2F8` | Accent hover / light-on-dark text |
| `--mist-50` | `#F2F5FA` | Light section surfaces, image wells |
| `--white` | `#FFFFFF` | Page background |
| `--ink-600` | `#5B6B82` | Secondary text |
| `--ink-900` | `#0B1526` | Primary text on light |

Rules: navy is the world, blue is the single spark. One accent only. WCAG AA minimum.
Legacy aliases (`--navy`, `--blue`, `--muted`, `--bg-soft`, `--bronze`) map to the new tokens so older inline styles keep working.

## 2. Typography

- **Display:** Manrope 700/800, `letter-spacing: -.03em`, fluid `clamp()` scale
- **Body:** Inter 400/500/600
- Loaded via Google Fonts (single request) in every page `<head>`
- Typographic quotes (’ “ ” —) throughout; never straight quotes

## 3. Components

| Component | Notes |
|---|---|
| Sticky header | Dark navy glass (`blur(18px)`), real wordmark asset (`assets/logo.svg`), EN/FR/AR switcher, quote-list pill with live count, mobile hamburger menu |
| Hero | Dark navy, blueprint grid, "Name the instrument. We’ll find it.", real forceps photo (`assets/sur-skl-01146.jpg`) with blue radial glow + floating spec tag |
| Unified finder | 3 ARIA tabs (name / reference / photograph); photo tab has drag-drop + preview; popular-search chips; trust strip rendered **once** |
| Supply channels | Two cards: "From stock" vs "Sourced to specification", with the precise rule: "Stocked items show a Stock badge; everything else is sourced, with written spec confirmation." |
| Specialties | 11 cards on dark, roman numerals, rendered live from `SG.SPECIALTIES` (trilingual) |
| Featured | 8 real product cards from the Cloudflare API; shimmer **skeleton** while loading (never bare "Loading…"); 6s timeout → API-verified static fallback → graceful error |
| How it works | 4 steps, connected horizontal timeline (vertical on mobile) |
| Why Surgronic | Dark; count-up stats (8,658 / 2 channels / 1 day); pull-quote: "Nothing ships until you’ve seen it and approved it." |
| Trust | Three **clearly-marked placeholders** (certifications, materials, customers) — "To be provided", never invented |
| Final CTA | Dark rounded panel, dual action |
| Footer | 4 columns + timelines disclaimer: "Timelines are operational targets, not unconditional guarantees." |

## 4. Motion

Slow, eased, purposeful: fade + 16px rise reveals via IntersectionObserver (`.rv` → `.in`),
1.4s count-up, shimmer skeletons. `prefers-reduced-motion` disables everything.

## 5. Logo usage

- Concept 04 Modern Wordmark, used **verbatim** from `assets/logo.svg` (dark-on-light contexts use the same file; header/footer use it as-is on navy)
- Clear space = height of the "o" ring on all sides; minimum width 96px (`.logo{min-width:96px}`)
- Ring-and-plus motif reused quietly: `.eyebrow` tick, trust-strip dots, focus rings, step markers
- Favicon: `assets/favicon.svg` (ring-and-plus)

## 6. Accessibility / RTL

- Semantic landmarks, ARIA tabs with arrow-key navigation, 44px+ tap targets, visible blue focus rings
- Full RTL via `dir="rtl"` + logical properties; Arabic reviewed to the same standard as French
- `aria-busy` on the featured grid; `aria-live="polite"`

## 7. Verification status

- [x] 88 i18n keys + title + 2 placeholders resolve in EN/FR/AR (script-verified)
- [x] All 50 homepage classes defined in styles.css (script-verified)
- [x] Served live from preview (HTTP 200, correct byte sizes, content checks pass)
- [ ] **Browser visual check still required** — logo render, finder tabs, featured load, FR/AR + RTL, 360/768/1280/1920 (parent must run; subagents have no live browser)
- [ ] **Ham's approval** before this replaces the production homepage
