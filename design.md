# OpenShop Website — Design.md

Source references for this doc: `Herosection.png` (hero design reference), `Openshop logo.png` (brand mark), `OPENSHOP_TYPOGRAPHY.md` (type system), `PRODUCT.md` (brand/product context).

This covers the **marketing website** specifically. It is a lighter, editorial expression of the OpenShop brand — distinct from the "warm-dark Atelier" theme used inside the product workspace (see `PRODUCT.md`). Same personality, different surface: the website sells the promise in daylight; the product does the work at night.

## 1. Brand Foundation

- **Personality:** Atelier — crafted, confident, effortless. Premium operator energy, not busy SaaS.
- **Voice:** Plain, warm, no hype, no jargon. Confident understatement over exclamation.
- **Emotional goal:** A time-poor Shopify merchant looks at the page and feels *relief* — the busywork is handled, nothing here requires a manual.
- **Anti-slop rule:** If a screen reads as "an AI made this," it failed. No gradient text, no glassmorphism-by-default, no generic SaaS-cream template feel, no tiny tracked-uppercase eyebrows on every section.

## 2. Color System

Sampled from the hero reference. Treat hexes as close approximations of the source files — pull exact values from the logo/illustration assets if a component needs pixel-perfect matching.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FEF6EE` | Page background — warm cream, not pure white |
| `--color-surface` | `#FFF9F2` | Nav pill, cards, raised surfaces (barely lighter than bg — separation comes from hairline border, not shadow) |
| `--color-ink` | `#1B1B1B` | Primary text, mascot fill, line-art icon strokes (near-black, never pure `#000`) |
| `--color-primary` | `#FC4C0A` | Brand orange — CTA buttons, headline highlight word, logo, links |
| `--color-primary-hover` | `#E64409` | Primary button hover/active |
| `--color-success` | `#2E9A2A` | "Done" status badges, completed checkmarks |
| `--color-border` | `#F0E3D6` | Hairline borders on cards/nav (warm, low-contrast) |
| `--color-muted` | `#8A8078` | Secondary/supporting text on cream |

Usage rules:
- Cream background + near-white-cream surfaces is the whole palette for 90% of the page. Orange is a **single accent**, used sparingly and with intent (primary actions, one highlighted headline word, badges, decorative sparkles/dashed lines).
- Green appears only as a status signal (task complete), never decoratively.
- Never full black (`#000`) or full white (`#FFF`) — everything sits on the warm cream/ink pairing.

## 3. Typography

Full system lives in `OPENSHOP_TYPOGRAPHY.md` — this is the summary as applied on the marketing site.

- **Display / headline — EB Garamond 400**, regular weight, generous size (`--display-lg: 4.5rem` for the H1). Used for the hero statement and major section headlines only.
- **Body / UI — Figtree**, 400 body / 500–600 for nav, buttons, labels. Used for everything functional: nav, paragraph copy, buttons, card labels, badges.
- **Hero pattern:** mixed-color headline within a single EB Garamond block — most words in `--color-ink`, one emphasis word in `--color-primary` (e.g. "Let **OpenShop** handle the busywork."). Two lines max, tight but not cramped leading.
- **Body copy under the hero:** Figtree regular, `--text-lg`, centered, max-width ~34–38ch, `--color-ink` at slightly reduced opacity or `--color-muted` for the supporting line.
- Never use EB Garamond for nav, buttons, badges, or dense copy — it exists only for editorial/emotional moments.

## 4. Logo & Mark

- Mark: a thick circular "G"-like stroke combined with a 4-point sparkle/star, in white on the brand orange (`#FB580A`–`#FC4C0A` range), or ink-on-cream in the nav lockup.
- Nav lockup: mark + "OpenShop" wordmark in Figtree semibold, ink black, mark rendered at small scale (~28–32px) left of the wordmark with a tight gap.
- The same sparkle motif reappears as a decorative micro-element elsewhere on the page (see §7) — it's the brand's signature shape, not just a logo detail.

## 5. Layout & Grid

- Centered content column, max-width roughly `1280px`, generous horizontal padding (`~48–64px` desktop).
- **Nav:** full-width pill container (not edge-to-edge chrome) — rounded rectangle (`~20–24px` radius), `--color-surface` fill, sits with margin from the viewport edge on all sides. Logo left, nav links + dropdown chevrons centered/left-of-center, primary CTA button pinned right.
- **Hero section:** vertically generous whitespace above and below. Centered headline → centered subcopy → centered CTA row → full-bleed illustration band beneath, all on one continuous cream canvas (no hard section dividers, no card container around the hero itself).
- **Illustration band:** symmetric composition — floating status cards connected by a single dashed orange line that winds from far left, through the cards, behind/around the mascot, out to the far right. Mirrored left/right card rhythm (fulfillment → refund → email → design on each side), mascot centered as the visual anchor at the bottom-middle.
- Sections below the fold should keep the same rhythm: generous vertical spacing, one idea per section, content never touches the viewport edge.

## 6. Components

**Buttons**
- Primary: solid `--color-primary` fill, fully rounded (pill, `border-radius: 9999px`), white Figtree 600 text, optional leading icon (e.g. Shopify bag mark), subtle darken on hover (`--color-primary-hover`). No drop shadow.
- Secondary / text link: no fill, `--color-ink` Figtree 600 text with a trailing chevron (`›`), used for lower-commitment actions ("See what it can do"). Sits inline next to the primary button, never stacked as equal-weight twin buttons.

**Cards (status tiles)**
- Small rounded-rect tiles (`~16px` radius), `--color-surface` fill, hairline `--color-border`, centered content: line-art ink icon (stroke style, ~24–28px, package/refund/email/pencil) above a Figtree 500 label ("Fulfillment", "Refund", "Email", "Design").
- Each card carries a small numbered/status badge pinned to its top-right corner, overlapping the card edge.

**Status badges**
- Circular, ~28–32px, solid fill.
- Orange fill + white number = pending/active count.
- Green fill + white checkmark (or "0") = complete/cleared.
- Never combine more than these two states on the marketing site — it's illustrative, not a real dashboard.

**Connector line**
- Single dashed stroke in `--color-primary` at reduced weight/opacity, hand-drawn curve (not straight segments), links every card to the mascot. This is the visual device that says "one agent, many tasks."

**Mascot**
- Flat-illustration black cat (ink fill), paws resting on an open laptop, white chest/paws for contrast, the brand sparkle-mark rendered small and orange on the laptop lid. Friendly, understated, not cartoonish/cutesy — it's the "agent" personified.
- Small orange 4-point sparkle accents scattered near the mascot and along the connector line reinforce the brand mark motif.

## 7. Iconography & Illustration Style

- Line icons: consistent stroke width, ink black, no fill except functional color (checkmarks green). Simple, geometric, editorial — not skeuomorphic, not filled/glyph style.
- Decorative sparkles: the logo's 4-point star shape, used small and sparingly as scene-setting detail (never as a repeated pattern/texture).
- Dashed lines: only in brand orange, only to show connection/flow (agent ↔ task), not as generic decoration.

## 8. Spacing & Radius Tokens

```css
:root {
  --radius-sm: 12px;   /* small chips, inline elements */
  --radius-md: 16px;   /* status cards */
  --radius-lg: 24px;   /* nav pill, large surfaces */
  --radius-full: 9999px; /* buttons, badges */

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 96px;   /* section-level vertical rhythm */
}
```

## 9. Motion & Accessibility

- Motion is subtle: gentle float/parallax on the illustration cards and sparkles at most, crossfade/scale on hover for buttons. No bouncing, no attention-seeking looping animation.
- Honor `prefers-reduced-motion` — static fallback for any hover/scroll animation.
- Maintain WCAG AA contrast: ink-on-cream and white-on-orange both need verification at final hex values; body text ≥ 4.5:1, large display text ≥ 3:1.
- Color is never the only signal — status badges pair color with a number or checkmark, not fill alone.

## 10. What to Avoid (Anti-references)

Carried over from `PRODUCT.md`, applicable to the website too:
- Generic "SaaS-cream AI slop": identical card grids, gradient text, glassmorphism-by-default, tiny tracked-uppercase eyebrows on every section.
- Per-section bespoke layouts that don't share the same nav pill / card / button language — the site must read as one system.
- Heavy chrome, drop-shadow-everywhere, enterprise-dashboard density.
- Pure black/pure white anywhere in the palette.

---

*Next: translate tokens above into actual CSS/Tailwind config once the stack is chosen, and validate exact hex values against the source logo/illustration files before shipping.*

## 11. Fast Build Reference: `sea-website`

Reference repo: `https://github.com/DylanNgo1808/sea-website`

This repo is useful as an implementation starting point, not as a visual direction. It is a compact Next app with a clear marketing-page structure:

- `app/(main)/page.jsx` composes the homepage from sections.
- `components/home/Navbar.jsx` provides a fixed marketing nav with desktop and mobile states.
- `components/home/Hero.jsx` provides the first-screen hero structure.
- `components/home/FeaturesGrid.jsx`, `HowItWorks.jsx`, `Testimonials.jsx`, and `components/shared/FinalCta.jsx` provide reusable section patterns.
- `styles/variables.css`, `typography.css`, `button.css`, and `common.css` centralize basic theme primitives.

Reuse for speed:

- Next app structure and route organization.
- Component split: nav, hero, feature grid, how-it-works, testimonials, final CTA, footer.
- Mobile nav behavior and dropdown pattern.
- Shared button/card/section component idea.
- Simple one-page marketing IA.

Replace for OpenShop:

- Replace SEA's blue palette with OpenShop cream, ink, orange, and green status tokens from this doc.
- Replace SEA's Inter/Jakarta/Playfair stack with Figtree + EB Garamond from `OPENSHOP_TYPOGRAPHY.md`.
- Replace SEA's WebGL shader hero with the OpenShop hero illustration system from `Herosection.png`.
- Replace generic SaaS feature cards with OpenShop's real product pillars from `FEATURES.md`: Chat, Studio, Autopilot, Skills, Analytics, Brand.
- Replace SEA CTAs with `Connect Shopify` / `See what it can do`.
- Remove heavy dark-section defaults unless a later page section genuinely needs contrast.

Build principle:

Start from SEA's code skeleton, then overwrite the brand layer and hero visual language. The final website should look like `Herosection.png`, not like SEA Survey.
