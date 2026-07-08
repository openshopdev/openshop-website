# Product

## Register

product

## Users

Everyday Shopify merchants and small DTC operators ("OPC" — ordinary/solo operators and lean teams), plus growth-minded DTC operators (the Chase-Chappell crowd: ads, UGC, creative, ROAS). Their context: running a real store day-to-day, time-poor, not designers or engineers. They want to hand work to an AI operator and watch it get done — not learn a complex tool. The primary job on any screen is "get this store task done with the agent," so the app must feel as easy as Shopify itself.

## Product Purpose

> Canonical strategy: `docs/STRATEGY.md` — "Connect every AI to every Shopify store. Be the layer Shopify won't build." (3 layers: open MCP → skills+memory → the autonomous OpenShop agent.)

OpenShop is an AI ecom operator/workspace — not a rented cloud agent, but your own AI that runs on your Claude/Codex/local runtime, knows ecommerce deeply, and operates the store with you. Success = a merchant hands off a task in chat and the agent plans, runs tools, and produces real outcomes (campaigns, creative, analytics, store changes) with the merchant approving direction. Chat is the home surface (you watch the agent work); everything else surfaces the work it produces (Tasks, Studio, Artifacts, Intel, Skills).

## Brand Personality

"Atelier" — warm, editorial, confident, calm. Three words: **crafted, confident, effortless**. It should feel like a premium operator's workspace, not a busy SaaS dashboard. Voice: speaks plainly, respects the merchant, celebrates the possible (no hype, no jargon, no "leverage our synergies"). Emotional goal: a time-poor operator feels in control and at ease — the tool does the heavy lifting and never makes them feel stupid.

## Anti-references

- **SaaS-cream AI slop** — warm near-white/parchment bodies, identical card grids, hero-metric templates, tiny tracked uppercase eyebrows on every section, gradient text, glassmorphism-by-default, side-stripe accent borders.
- **Per-page bespoke layouts** — every page inventing its own structure (left-rail category filters on Skills, left "My reports" rail on Intel, plain-text agent prompt). The app must read as ONE framework, not vibe-coded pages stitched together.
- **Heavy chrome / bloated navigation** — too many top-level menu items, redundant top bars, drop-shadows everywhere. Not Notion-dense, not enterprise-admin busy.
- Reference feel to match (chat-first craftsmanship, lean nav, watch-the-work): Hermes, Multica, MuleRun's "computer", Conductor — minimal persistent nav, agent/chat as the primary surface, outputs surfaced contextually.

## Design Principles

- **Shopify-simple ease-of-use.** OPC ICP first: the obvious action is always visible (e.g. "New task" → assign to agent), copy is plain, nothing requires a manual.
- **Chat-first, watch-the-work.** Chat is home; the agent's reasoning, tool calls, and artifacts stream in. Lean persistent nav (a handful of work surfaces); configuration tucked away.
- **One system, applied everywhere.** Every page uses one of the canonical shells (Browse / Converse / Detail) on the shared Atelier component library — no bespoke per-page layouts. Consistency is the craftsmanship.
- **Depth without shadows.** Modern depth via tonal layering + hairline borders + backdrop-blur glass + motion — never drop-shadows. Warm-dark Atelier, single amber accent used sparingly.
- **Anti-slop by default.** If someone could look at a screen and say "an AI made that," it failed. Enforced by the design system (semantic tokens, lint) + the impeccable detector.

## Accessibility & Inclusion

WCAG AA: body text ≥4.5:1, large text ≥3:1, real focus-visible rings on every interactive element, keyboard reachability (incl. non-drag fallbacks like the board "Move to…" menu). `prefers-reduced-motion` honored on every animation (static/crossfade fallback). Color is never the sole signal (status carries icon/label + token color). Dark default; never reads `prefers-color-scheme`.
