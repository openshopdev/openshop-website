# OpenShop Homepage — ASCII Wireframe

Layout companion to `homepage-copy.md` (content) and `design.md` (tokens/components). Each block below is one full-width section, stacked top to bottom in build order. Rounded corners, pill shapes, and the dashed connector are drawn loosely — see `design.md` for exact radius/color tokens.

---

## Nav — rounded pill, floats above the cream background

```
   ╭──────────────────────────────────────────────────────────────────────╮
   │  ⊙ Open Shop     Product ▾  Features ▾  Pricing  Resources ▾  ⋮      │
   │                                                    Company ▾  [Connect Shopify]│
   ╰──────────────────────────────────────────────────────────────────────╯
        ^logo+wordmark      ^nav links, Figtree 500, centered-left       ^primary CTA, pinned right
```

---

## 1. Hero — locked copy, full-bleed illustration band beneath

```
                    ╭──────────────────────────────────────────────╮
                    │              (nav pill, see above)            │
                    ╰──────────────────────────────────────────────╯

                     Let OpenShop            <- EB Garamond, display-lg
                handle the busywork.            "OpenShop" in --color-primary

              OpenShop is an AI operator for Shopify stores.
              It watches your store, catches what needs attention,
              and handles repetitive tasks so you can focus on growth.
                      ^ Figtree, --text-lg, centered, ~36ch

                  ( Connect Shopify )     See what it can do ›
                    ^primary pill btn      ^secondary text link

  ┌──────────┐                                                    ┌──────────┐
  │📦 Fulfill.│(7)                                                │📦 Fulfill.│(0)✓
  └────┬─────┘                                                    └─────┬────┘
       ┆                  ╭───────────╮        ╭───────────╮            ┆
  ┌────┴─────┐            │  ^  ^     │        │           │       ┌────┴────┐
  │🔄 Refund │(3)          │ (•ᴥ•)    │        │           │       │🔄 Refund │(0)✓
  └────┬─────┘            │  ▔▔▔▔▔   │ mascot  │           │       └─────┬────┘
       ┆       ┄┄┄┄┄┄┄┄┄┄ │[laptop⊙]│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄       ┆
  ┌────┴─────┐            ╰───────────╯                          ┌────┴────┐
  │✉ Email   │(12)                                                │✉ Email  │(0)✓
  └────┬─────┘                                                    └─────┬────┘
       ┆                                                                ┆
  ┌────┴─────┐                                                    ┌─────┴────┐
  │✎ Design  │(5)                                                 │✎ Design  │(0)✓
  └──────────┘                                                    └──────────┘

     ^left cards: orange badges, work incoming    ^right cards: green badges, work done
     ^dashed line winds left → through mascot → right, per design.md §6
```

---

## 2. Watch it work — before/after demo (two-panel, stacked or side-by-side)

```
                         Say it like you'd tell a person.
                     No forms, no menus. Tell OpenShop what's
                       wrong and watch it get handled.
                              ^ EB Garamond section title, Figtree subhead

   ╭─ BEFORE ───────────────────────────╮   ╭─ AFTER ────────────────────────────╮
   │  💬 you                            │   │  ✅ Order #4521                     │
   │  "hey can u check order 4521,      │→  │     Mislabel confirmed. Refund      │
   │   customer says wrong size         │   │     issued: $42.00. Reply sent.     │
   │   shipped. if its our mistake      │   │                                     │
   │   refund + send something nice.    │   │  ⚠️  Black Hoodie (M)               │
   │   also low on the black hoodie"    │   │     12 left, selling fast.          │
   │                                     │   │     Reorder draft ready to review.  │
   ╰─────────────────────────────────────╯   ╰─────────────────────────────────────╯
     ^raw chat bubble, Figtree, muted card       ^structured Tasks/Artifacts card,
                                                    ink text, green check icons

                              ( Connect Shopify )
```

---

## 3. Runs on the AI you already use — logo row

```
                       Runs on the AI you already use
              Built on an open MCP server — 142 Shopify tools any
                    AI can call. Ask it from wherever you work.

        ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌──────────┐
        │ Claude │  │ Claude │  │ ChatGPT│  │ Cursor │  │ Windsurf │  ...
        │Desktop │  │  Code  │  │        │  │        │  │          │
        └────────┘  └────────┘  └────────┘  └────────┘  └──────────┘
              ^ grayscale/ink logo tiles, low-contrast, single row, wraps on mobile

                  See it in action ›        View the MCP on GitHub ›
```

---

## 4. Proof bar — sourced facts, not customer logos [PLACEHOLDER for logos later]

```
   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
     142 tools         28 categories       184 tests        Open source     Basic+
    ^big Figtree 600 numeral, small ink label underneath each, single centered row
   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

---

## 5. Made for the way you sell — tab selector + content panel

```
                        Made for the way you sell

   ( Fulfillment )  ( Support & Refunds )  ( Marketing & Email )  ( Creative )  ( Ops )
     ^active tab pill filled orange, inactive tabs plain ink text, Figtree 600

   ╭───────────────────────────────────────────────────────────────────────╮
   │  OpenShop for Fulfillment                    ┌───────────────────┐    │
   │  ^EB Garamond italic emphasis on "Fulfillment"│  (optional visual/ │    │
   │                                               │   screenshot of    │    │
   │  Orders age, trackings go missing,            │   the Tasks card   │    │
   │  customers ask "where's my stuff."            │   for this tab)    │    │
   │  OpenShop watches unfulfilled orders and      │                    │    │
   │  clears the backlog before it becomes a       └───────────────────┘    │
   │  support queue.                                                        │
   │                                                                         │
   │  ( Connect Shopify )                                                   │
   ╰───────────────────────────────────────────────────────────────────────╯
       ^single card, content swaps when a tab is clicked, card itself stays put
```

---

## 6. One agent. Every surface. — feature grid (2 rows × 3, or 3 rows × 2 on mobile)

```
                          One agent. Every surface.
             Chat is home — you watch the agent work. Everything
                    else surfaces what it produced.

   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
   │ 💬  Chat       │   │ ☑  Tasks      │   │ 🎨  Studio     │
   │                │   │                │   │                │
   │ Hand off a     │   │ Every job the  │   │ Where creative │
   │ task in plain  │   │ agent is       │   │ work lands:    │
   │ language...    │   │ running...     │   │ photos, copy...│
   └───────────────┘   └───────────────┘   └───────────────┘

   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
   │ 📄  Artifacts  │   │ 📊  Intel      │   │ ⚙  Skills     │
   │                │   │                │   │                │
   │ The real       │   │ Store patterns │   │ The library of │
   │ outputs...     │   │ read back in   │   │ workflows      │
   │ ready to ship  │   │ plain language │   │ OpenShop knows │
   └───────────────┘   └───────────────┘   └───────────────┘
       ^--color-surface cards, --radius-md, ink line icon top-left, Figtree label+body

                          Explore all features ›
```

---

## 7. Bring your own AI — centered statement + provider row

```
                             Bring your own AI
              OpenShop isn't locked to one model. Run it on Claude,
              GPT, Gemini, or a local model with Ollama — the store
                            logic stays the same.

              [Claude]   [GPT]   [Gemini]   [Ollama/local]
                    ^small ink pill chips, single centered row

                                Read the docs ›
```

---

## 8. Testimonials — [PLACEHOLDER content, masonry/grid shell]

```
                          What merchants are saying

   ╭───────────────╮  ╭───────────────╮  ╭───────────────╮
   │ " quote about  │  │ " quote about  │  │ " quote about  │
   │   fulfillment  │  │   refunds "    │  │   Studio "     │
   │   handled  "   │  │                │  │                │
   │  — Name, Store │  │  — Name, Store │  │  — Name, Store │
   ╰───────────────╯  ╰───────────────╯  ╰───────────────╯
   ╭───────────────╮  ╭───────────────╮  ╭───────────────╮
   │ " quote "      │  │ " quote "      │  │ " quote "      │
   │  — Name, Store │  │  — Name, Store │  │  — Name, Store │
   ╰───────────────╯  ╰───────────────╯  ╰───────────────╯
        ^2 rows × 3 shown, staggered card heights (masonry) once real quotes exist
```

---

## 9. Case studies — [PLACEHOLDER content, 4-up card row]

```
   ╭──────────────╮ ╭──────────────╮ ╭──────────────╮ ╭──────────────╮
   │ Headline stat │ │ Headline stat │ │ Headline stat │ │ Headline stat │
   │ " quote "      │ │ " quote "      │ │ " quote "      │ │ " quote "      │
   │ — Attribution │ │ — Attribution │ │ — Attribution │ │ — Attribution │
   │  View case → │ │  View case → │ │  View case → │ │  View case → │
   ╰──────────────╯ ╰──────────────╯ ╰──────────────╯ ╰──────────────╯
        ^4 cards, single row desktop → horizontal scroll or stack on mobile
```

---

## 10. Pricing teaser — centered banner

```
   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
                      Start free, scale when you're ready
              The MCP layer is open source. The agent is free to start.

                              ( See pricing )
   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

---

## 11. Final CTA — full-width cream band, mirrors hero energy

```
                              Start with your store

               Connect Shopify and watch OpenShop clear the busywork —
                 fulfillment, refunds, email, and creative, handled.

                  ( Connect Shopify )     View the MCP on GitHub ›
                    ^large primary pill     ^secondary link
```

---

## Footer — 4-column, cream, ink text

```
   ⊙ Open Shop            Company          Product          Resources        Legal
   short brand line        About            Chat             Docs            Terms
                            Careers          Tasks            MCP · GitHub    Privacy
                            Trust & Security Studio           Blog
                                             Artifacts        Use cases
                                             Intel
                                             Skills

   ────────────────────────────────────────────────────────────────────────────────
   © OpenShop                                              [social icons — TBD]
```

---

## Responsive notes

- **Nav:** collapses to logo + hamburger under ~960px; dropdowns become an accordion sheet.
- **Hero illustration band:** stacks vertically on mobile — cards drop below the mascot in a single centered column instead of mirrored left/right; dashed line simplifies to a short vertical connector.
- **Feature grid (§6):** 3×2 → 2×3 → 1×6 as viewport narrows.
- **Tabs (§5):** horizontal scroll instead of wrap once tabs exceed viewport width.
- **Testimonials/case studies (§8–9):** grid/row collapses to a single-column horizontal scroll-snap carousel on mobile.
