
## Plan: Simplify Pricing to Free-only

Remove the Pro plan from the Pricing section, keeping only the Free tier. Center the single card.

### Changes

1. **`src/components/Pricing.tsx`** — Remove the Pro plan from the `plans` array, change the grid to single-column centered layout, remove the "popular" badge logic
2. **`src/contexts/LanguageContext.tsx`** — No changes needed (unused keys are harmless)
