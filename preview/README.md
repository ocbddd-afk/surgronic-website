# Surgronic v2 — $250k Reskin (integrated)

Working platform files, reskinned to the $250k design system. **Not a prototype** —
every interactive element runs against the real backend.

## Files

| File | Purpose |
|---|---|
| `index.html` | $250k homepage (hero + unified finder, channels, specialties, featured, how, why, trust, final CTA). Thin inline script; all logic via `SG.*` from `app.js` |
| `app.js` | Shared platform: 242 i18n keys × EN/FR/AR, Cloudflare D1 API, quote basket (localStorage `surgronic_quote_v2`), WhatsApp deep links, product cards, header/footer chrome |
| `styles.css` | Full $250k design tokens + components (navy-950/blue-500, Manrope/Inter, glass header, skeletons, RTL, reduced-motion) |
| `catalogue.html` | Search/filter 8,658 products (inherits new design system) |
| `product.html` | Product detail (inherits new design system) |
| `quote.html` | 3-step quote form + basket (inherits new design system) |
| `assets/` | Product images + `logo.svg` / `logo-reversed.svg` / `favicon.svg` |
| `DESIGN-SYSTEM.md` | Tokens, type, components, motion, logo usage, verification status |
| `check-i18n.js` | Build gate: fails if any `data-i18n` key is missing from STRINGS |

## Deploy

Working dir is `~/workspace/surgronic/v2-redesign/`. Preview deploy:

```bash
cd ~/workspace/surgronic/v2-redesign
for f in index.html app.js styles.css catalogue.html product.html quote.html; do
  cp "$f" ~/workspace/surgronic/netlify-deploy/website/preview/"$f"
done
cd ~/workspace/surgronic/netlify-deploy/website
git add preview/ && git commit -m "..." && git push origin main
```

Live preview: https://ocbddd-afk.github.io/surgronic-website/preview/index.html
(GitHub Pages CDN can take ~2 min to invalidate after push.)

## Architecture notes

- Header/footer injected by `SG.mountChrome()` in `app.js` — edit once, applies to all pages
- Language: `SG.setLang()` → `surgronic:lang` event → pages re-render; `SG.applyI18n()` translates `data-i18n` / `data-i18n-ph` / `data-i18n-title`
- Featured products: live `getProduct` calls with 6s timeout → API-verified static fallback → graceful error card
- Quote basket persists in localStorage; header pill count updates via `SG.updateBasketUI()`

## Placeholders needing real content (from Ham)

1. **Hero photo** — currently `assets/sur-skl-01146.jpg` (Adlerkreutz Tissue Forceps, real catalog image). Replace with a purpose-shot hero photograph when available.
2. **Certifications & standards** — trust card marked "To be provided"
3. **Materials & craftsmanship** — trust card marked "To be provided"
4. **Trusted by / customers** — trust card marked "To be provided" (permission-gated)
5. **Specialty counts** — cards show roman numerals; live per-specialty counts not yet wired
6. **Newer logo file** — if Ham supplies an updated Concept 04 asset, swap `assets/logo.svg`

## Do not

- Invent certifications, clients, or statistics
- Add extra accent colors (blue-500 is the single accent)
- Break the `SG.*` API surface — inner pages depend on it
- Deploy a major redesign to production without Ham's explicit approval
