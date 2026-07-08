# OpenShop Typography

Use this as the typography guide for the OpenShop website we are building. The direction is inspired by Wispr Flow's type pairing, but the system below is written for OpenShop's own brand: crafted, confident, effortless.

## Reference Audit

Checked on July 8, 2026 from `https://wisprflow.ai/`.

Wispr Flow's public Webflow stylesheet uses this pairing:

- Display / headline font: `EB Garamond`
- Body / navigation / button font: `Figtree`
- Logo: outlined SVG artwork, not live text

Their CSS variables map roughly to:

```css
--font-body: Figtree, Arial, sans-serif;
--font-display: "EB Garamond", Arial, sans-serif;
```

OpenShop should use the same type relationship, not the same brand expression:

- Editorial serif for the main promise
- Clean sans serif for everything that needs to feel usable, fast, and product-grade

## Font Roles

### EB Garamond

Use for OpenShop's expressive editorial moments:

- H1 and large H2 headlines
- Short hero statements on the website
- Pull quotes
- High-emphasis product storytelling
- Founder-style or atelier-style statements
- Optional italic emphasis inside display copy

Recommended weights:

- `400` regular
- `400 italic`

Avoid using EB Garamond for dense UI, pricing details, nav, small labels, forms, or buttons. It should create warmth and personality, not carry product mechanics.

### Figtree

Use for all functional website and product text:

- Body copy
- Navigation
- Buttons
- Form labels
- Inputs
- Pricing text
- Tables
- Cards
- Toolbars
- Sidebars
- Status labels
- Small explanatory text

Recommended weights:

- `400` regular
- `500` medium
- `600` semibold
- `700` bold, sparingly

Figtree keeps the interface modern, readable, and calm while EB Garamond adds the editorial layer.

## Implementation

Do not hotlink Wispr Flow's Webflow font files. Use a licensed source such as Google Fonts, Fontsource, or self-hosted files.

Example Google Fonts import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Example CSS tokens:

```css
:root {
  --font-display: "EB Garamond", Georgia, serif;
  --font-body: "Figtree", Arial, sans-serif;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.45;
}

h1,
h2,
.font-display {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: 0;
}

button,
input,
textarea,
select,
.font-ui {
  font-family: var(--font-body);
}
```

## OpenShop Usage Rules

OpenShop's brand is "Atelier": crafted, confident, effortless. This pairing works because it gives the site an editorial front door while keeping the product surfaces clear.

- Use EB Garamond for the homepage H1, major section headlines, and high-emotion product promises.
- Use Figtree for navigation, CTAs, feature descriptions, pricing, forms, product UI, and all repeated content.
- Keep buttons in Figtree semibold, usually `600`.
- Keep paragraph text in Figtree regular or medium.
- Use EB Garamond italic only for short emphasis, never long paragraphs.
- Do not use tight negative letter spacing as a default. Let the serif breathe.
- Avoid making every heading EB Garamond if the section is operational, dense, or comparison-heavy.
- Do not make the site feel like Wispr Flow visually. Use the same typography logic, then let OpenShop's layout, color, voice, and product screenshots create the brand.

## Suggested Type Scale

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --display-sm: 2rem;
  --display-md: 3rem;
  --display-lg: 4.5rem;
}
```

Recommended application:

- Product UI labels: `--text-xs` or `--text-sm`, Figtree 500/600
- Body copy: `--text-base`, Figtree 400
- Large supporting copy: `--text-lg`, Figtree 400
- Section title: `--display-sm` or `--display-md`, EB Garamond 400
- Homepage hero title: `--display-lg`, EB Garamond 400
- Dense product sections: Figtree headings, 500/600

## Tailwind Token Example

```js
fontFamily: {
  sans: ["Figtree", "Arial", "sans-serif"],
  display: ["EB Garamond", "Georgia", "serif"],
}
```

Usage:

```html
<h1 class="font-display text-6xl font-normal">Your AI operator for Shopify</h1>
<p class="font-sans text-lg">Hand off store work and watch it get done.</p>
<button class="font-sans font-semibold">Start a task</button>
```

## Website Pattern

For the OpenShop website, the first screen should establish this type hierarchy immediately:

```html
<nav class="font-sans font-semibold">
  OpenShop
</nav>

<h1 class="font-display font-normal">
  Your AI operator for Shopify
</h1>

<p class="font-sans">
  Hand off store work and watch campaigns, reports, and fixes come back ready to approve.
</p>

<a class="font-sans font-semibold">
  Start with your store
</a>
```

The headline carries the atelier feeling. The paragraph and CTA make the product feel direct and usable.

## Practical Direction

The useful lesson from Wispr Flow is the contrast:

- Human, editorial headline voice from EB Garamond
- Precise, modern product interface from Figtree

That combination should make OpenShop feel premium and calm while still behaving like a serious operator workspace.
