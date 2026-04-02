

## Plan: Link All CTA Buttons to WhatsApp

Three CTA buttons are missing the WhatsApp link (`https://wa.me/15556422389`):

### Changes

1. **`src/components/Navbar.tsx`** — Wrap both desktop and mobile "Get Otto" buttons in `<a href="https://wa.me/15556422389" target="_blank" rel="noopener noreferrer">` (lines 45-47 and 76-78)

2. **`src/components/Pricing.tsx`** — Wrap the free plan CTA button in `<a href="https://wa.me/15556422389" target="_blank" rel="noopener noreferrer">` (line 33-35)

Hero and EarlyAccess already have the correct link — no changes needed there.

