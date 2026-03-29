

## Build Plan: Otto Landing Page

**Product**: Otto — WhatsApp-native personal co-pilot (weather, traffic, calendar, finances morning briefing)
**Brand**: Name "Otto", primary color #e3237a (pink/magenta), dark theme inspired by GastoAI
**Language**: Bilingual (English + Spanish toggle)

### Structure

**1. Navbar** — Logo "Otto", nav links (How it works, Features, Pricing), language toggle (EN/ES), CTA button

**2. Hero Section** — Bold headline + subtitle, WhatsApp chat mockup showing a morning briefing message (weather, traffic, calendar, finances), CTA "Save the number" button, dark background with pink gradient accents

**3. How It Works (3 steps)** — Save the number → Get your morning briefing → Reply to act. Numbered cards with icons, clean layout

**4. Features Grid** — 4 cards: Weather, Traffic, Calendar, Finances. Each with icon, title, short description. Pink accent highlights

**5. Pricing & FAQ** — Pricing cards (free/pro tiers), FAQ accordion below

**6. Footer** — Logo, links, social icons

### Technical Approach

- **Files**: Single `Index.tsx` page with section components in `src/components/` (Hero, HowItWorks, Features, Pricing, FAQ, Navbar, Footer)
- **Styling**: Update CSS variables in `index.css` for dark theme with `#e3237a` as primary. Add custom gradients/glows via Tailwind config
- **i18n**: Simple context-based language toggle (EN/ES) with a translations object — no external library needed
- **Design tokens**:
  - Background: ~`#0a0a0a` / `#111`
  - Primary: `#e3237a` (HSL ~340 82% 52%)
  - Text: white/gray tones
  - Cards: subtle dark elevated surfaces with border glow
- **Animations**: Subtle fade-in on scroll using CSS/intersection observer
- **WhatsApp mockup**: CSS-built chat bubble component showing a sample Otto morning message

### Files to Create/Edit
- `src/index.css` — dark theme variables
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Features.tsx`
- `src/components/Pricing.tsx`
- `src/components/FAQ.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppMockup.tsx`
- `src/contexts/LanguageContext.tsx`
- `src/pages/Index.tsx` — compose all sections
- `index.html` — update title/meta to "Otto"

