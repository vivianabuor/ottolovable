

## Plan: Add Early Access Section + WhatsApp Link

### What's being added

A new section before Pricing with two visual blocks (matching the uploaded screenshot):

1. **Testimonial quote** — pink gradient background, large italic quote: "Imagina despertar y que alguien brillante ya revisó todo por ti. Eso es oπo." with subtitle "El copiloto que tu rutina necesitaba."

2. **Early access urgency block** — light/white background with:
   - "Acceso anticipado — Cupos limitados" badge
   - Bold headline "Los primeros 500 usuarios entran gratis para siempre" (with "gratis para siempre" highlighted in pink/yellow)
   - Urgency subtitle
   - Stats row: 391 cupos tomados | 109 lugares gratis restantes | ∞ días que te ahorra
   - WhatsApp CTA button: "Comenzar aquí — Quiero mi lugar gratis" linking to `https://wa.me/15556422389`

Also: Update the Hero "Start/Comienza" button to link to `https://wa.me/15556422389`.

### Files to change

1. **`src/components/EarlyAccess.tsx`** (new) — The two-block section with bilingual translations via `useLanguage`
2. **`src/contexts/LanguageContext.tsx`** — Add translation keys for the new section
3. **`src/pages/Index.tsx`** — Import and place `<EarlyAccess />` between `<Features />` and `<Pricing />`
4. **`src/components/Hero.tsx`** — Make the CTA button an `<a>` linking to `https://wa.me/15556422389`

### Design approach
- Testimonial block: gradient from primary pink to a lighter pink, white text, centered
- Early access block: light background (contrasting with the dark theme — as shown in screenshot), dark text, centered layout
- Stats use large bold numbers with small labels below
- CTA is a full-width pink button with WhatsApp icon

