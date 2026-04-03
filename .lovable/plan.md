

## Plan: Update WhatsApp Mockup Bubbles

### Changes

1. **`src/components/WhatsAppMockup.tsx`** — Remove the finances bubble (line 28)

2. **`src/contexts/LanguageContext.tsx`** — Update the `mock.calendar` translations:
   - **EN**: `"📅 Calendar:\n20:00 — Dinner with friends\n20:30 — Daily Product Team (Medellín)\n21:30 — Family call"`
   - **ES**: `"📅 Calendario:\n20:00 — Cena con amigos\n20:30 — Daily Product Team (Medellín)\n21:30 — Llamada familiar"`

3. **`src/components/WhatsAppMockup.tsx`** — Update the `ChatBubble` component to render `\n` as line breaks using `whitespace-pre-line` CSS or splitting on newlines.

