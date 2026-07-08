# OpenShop Homepage — Content & Copy

Information architecture adapted from wisprflow.ai (section order, pacing, before/after demo, use-case tabs, features grid, cross-platform section, social proof, final CTA) — rewritten section-by-section for OpenShop. Copy is grounded in `PRODUCT.md`, `STRATEGY.md`, `key-differentiators.md`, and `merchant-skill-catalog.md` from the shop-pilot repo. Sections marked **[PLACEHOLDER]** need real data (logos, quotes, metrics) before shipping — nothing below fabricates a testimonial, customer name, or stat that isn't sourced.

Voice throughout: plain, warm, no hype, no jargon (per `PRODUCT.md` Brand Personality). Headlines in EB Garamond, everything else in Figtree (per `OPENSHOP_TYPOGRAPHY.md` / `design.md`).

---

## Nav

Matches the hero reference image directly:

- **Logo** — OpenShop mark + wordmark, left
- **Product** ▾ · **Features** ▾ · **Pricing** · **Resources** ▾ · **Company** ▾
- **Connect Shopify** — primary CTA button, right

Suggested dropdown contents (fill in as pages exist):
- **Product ▾** — Overview, Chat, Tasks, Studio, Skills
- **Features ▾** — mirrors the "One agent. Every surface." section anchors below
- **Resources ▾** — Docs, `@openshop/admin-mcp` on GitHub, Blog, Use cases
- **Company ▾** — About, Careers **[PLACEHOLDER]**, Trust & Security

---

## 1. Hero — *(your copy, unchanged)*

```
Let OpenShop handle the busywork.

OpenShop is an AI operator for Shopify stores. It watches your store,
catches what needs attention, and handles repetitive tasks so you
can focus on growth.

[Connect Shopify]   See what it can do ›
```

Illustration: mascot + orbiting task cards (Fulfillment, Refund, Email, Design) connected by the dashed line — per `design.md` §5–6. This section is locked; nothing below should touch it.

---

## 2. Watch it work — before/after demo

Wispr's structural move: show messy input → clean output, in the product's own voice. OpenShop's version isn't text-to-text, it's *message-to-completed-task* — which is a stronger demo for us because it shows the agent actually doing store work, not just formatting.

**Heading:** "Say it like you'd tell a person."
**Subheading:** "No forms, no menus. Tell OpenShop what's wrong and watch it get handled."

**Before** (a merchant's real, unpolished chat message):
> "hey can u check order 4521, customer says wrong size shipped. if its actually our mistake go ahead and refund + send them something nice. also i think we're getting low on the black hoodie again"

**After** (OpenShop's structured, completed output — rendered as the Tasks/Artifacts view, not prose):
> ✅ **Order #4521** — mislabel confirmed (packing slip mismatch). Refund issued: $42.00. Reply sent to customer.
> ⚠️ **Black Hoodie (M)** — 12 units left, selling faster than restock pace. Reorder draft created for review.

**CTA:** `Connect Shopify`

---

## 3. Runs on the AI you already use

This is a real, sourced differentiator (`STRATEGY.md` Layer 1) — not a generic "multi-platform" claim. Lead with it the way Wispr leads with its 40+ app list.

**Heading:** "Runs on the AI you already use"
**Subheading:** "OpenShop is built on an open MCP server — 142 Shopify tools any AI can call. Ask it from wherever you already work."

**Logos/list:** Claude Desktop · Claude Code · ChatGPT · Cursor · Windsurf · OpenShop's own dashboard

**CTA:** `See it in action` · `View the MCP on GitHub`

---

## 4. Proof bar (facts, not logos)

Wispr uses customer logos here. We don't have verified customer logos yet, so lead with sourced product facts instead — still functions as trust signal, all pulled from `STRATEGY.md` / `key-differentiators.md`:

> **142 tools** across 28 categories · **184 automated tests**, all passing · **Open source** MCP layer · Works on every Shopify plan, Basic and up

**[PLACEHOLDER]** — swap for customer logos once we have named, approved merchants to display.

---

## 5. Made for the way you sell

Wispr's persona-tab pattern, remapped to OpenShop's actual task categories (matches the hero illustration's card set, and the skill catalog's daily-driver categories in `merchant-skill-catalog.md`).

**Heading:** "Made for the way _you_ sell"

**Tabs:**

1. **Fulfillment**
   "OpenShop for _Fulfillment_" — "Orders age, trackings go missing, customers ask 'where's my stuff.' OpenShop watches unfulfilled orders and clears the backlog before it becomes a support queue."

2. **Support & Refunds**
   "OpenShop for _Support_" — "Say what happened, OpenShop checks the order, decides if it's actually your mistake, and handles the refund and the reply — in your voice, not a script."

3. **Marketing & Email**
   "OpenShop for _Marketing_" — "From a flash-sale setup to a customer win-back segment, OpenShop drafts the discount, the page, and the email — you approve, it ships."

4. **Design & Creative**
   "OpenShop for _Creative_" — "New product, new photos, new copy. OpenShop generates product images and descriptions so the listing is ready the same day the stock is."

5. **Inventory & Reporting**
   "OpenShop for _Operators_" — "OpenShop checks inventory against sales velocity, flags reorders before you're out, and compiles the end-of-month report while you sleep."

**CTA under each tab:** `Connect Shopify`

---

## 6. One agent. Every surface.

Direct equivalent of Wispr's "Core Features" grid — mapped 1:1 to OpenShop's actual product surfaces from `PRODUCT.md`.

**Heading:** "One agent. Every surface."
**Subheading:** "Chat is home — you watch the agent work. Everything else surfaces what it produced."

- **Chat** — "Hand off a task in plain language and watch OpenShop plan, run tools, and report back."
- **Tasks** — "Every job the agent is running or has finished, in one queue — nothing happens off-screen."
- **Studio** — "Where creative work lands: product photography, descriptions, campaign assets."
- **Artifacts** — "The real outputs — reports, images, drafts — ready to review and ship."
- **Intel** — "Store patterns and performance, read back to you in plain language, not a raw dashboard."
- **Skills** — "The library of workflows OpenShop knows how to run — markdown, readable, extendable."

**CTA:** `Explore all features`

---

## 7. Bring your own AI

Wispr's "cross-device" section, for OpenShop this is about model choice, not device — also sourced from the competitive table in `STRATEGY.md` (multi-provider LLM: Ollama, Gemini, Claude, GPT).

**Heading:** "Bring your own AI"
**Subheading:** "OpenShop isn't locked to one model. Run it on Claude, GPT, Gemini, or a local model with Ollama — the store logic stays the same."

**CTA:** `Read the docs`

---

## 8. Testimonials — **[PLACEHOLDER]**

Structure to fill once we have real merchants using OpenShop (do not populate with invented names/quotes):

**Heading:** "Love letters to OpenShop" *(or a less Wispr-specific alternative once we have real voice: "What merchants are saying")*

Format per entry, matching Wispr's pattern:
> "[real quote]"
> — [Real name], [real role/store]

Need: 6–10 short quotes, ideally covering a range of the use-case tabs above (one about fulfillment, one about refunds, one about the creative/Studio surface, etc.) so the section doubles as social proof for each feature claim.

---

## 9. Case studies — **[PLACEHOLDER]**

Wispr's card format ("90% faster everywhere," attributed quote, link to full case study) — reuse once we have a merchant willing to go deep with real numbers (hours saved, orders processed, refunds resolved). Don't publish a stat here without a named, verifiable source.

---

## 10. Pricing teaser

Pricing tiers exist in draft (`docs/plans/pricing-model.md`: Free OSS / $29 Pro / $99 Plus / $299 Agency) but that doc explicitly flags the numbers as **unvalidated assumptions**. Treat this section as a teaser, not a commitment, until pricing is confirmed:

**Heading:** "Start free, scale when you're ready"
**Subheading:** "The MCP layer is open source. The agent is free to start."
**CTA:** `See pricing` → links to a real pricing page once tiers are locked.

**[PLACEHOLDER]** — do not hardcode `$29 / $99 / $299` into the marketing site until pricing is finalized; that doc is explicitly a draft.

---

## 11. Final CTA

Wispr's closing pattern: restate the promise, one primary + one secondary action.

**Heading:** "Start with your store"
**Subheading:** "Connect Shopify and watch OpenShop clear the busywork — fulfillment, refunds, email, and creative, handled."
**CTAs:** `Connect Shopify` · `View the MCP on GitHub`

---

## Footer

- **Company** — About, Careers **[PLACEHOLDER]**, Trust & Security
- **Product** — Chat, Tasks, Studio, Artifacts, Intel, Skills
- **Resources** — Docs, `@openshop/admin-mcp` (GitHub), Blog, Use cases
- **Legal** — Terms, Privacy **[PLACEHOLDER — need real policies before launch]**
- **Social** — **[PLACEHOLDER — confirm which channels actually exist]**

---

## What's intentionally not copied from Wispr

- The "Ask ChatGPT/Claude/Perplexity what they think" gimmick section — cute for a consumer tool, off-brand for an operator workspace that's supposed to feel calm and premium, per the anti-slop rule in `PRODUCT.md`.
- Wispr's WPM speed stat — we don't have an equivalent validated metric yet. Resist the urge to invent one; use the sourced tool/test-count stats in §4 instead until a real merchant benchmark exists.
