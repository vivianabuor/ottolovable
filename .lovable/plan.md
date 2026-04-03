

## Plan: Add Dynamic Animations

### 1. HowItWorks — Scroll-triggered staggered reveal

Use Intersection Observer to animate each step card when it scrolls into view, with a staggered delay per card.

**`src/components/HowItWorks.tsx`**:
- Add a `useRef` + `useEffect` with `IntersectionObserver` on the grid container
- Each card starts with `opacity-0 translate-y-8` and transitions to `opacity-100 translate-y-0` when visible
- Stagger: card 0 = 0ms, card 1 = 200ms, card 2 = 400ms
- Add a subtle scale effect on entrance (`scale-95` → `scale-100`)

### 2. WhatsApp Mockup — Sequential chat message appearance

Make messages appear one-by-one with realistic typing delays, triggered when the mockup scrolls into view.

**`src/components/WhatsAppMockup.tsx`**:
- Use `useState` to track how many messages are visible (0→4)
- Use `IntersectionObserver` to start the sequence when the mockup enters the viewport
- Each message appears after a delay (e.g., 0.8s, 1.6s, 2.4s, 3.2s) with a fade+slide-up animation
- Add a small "typing..." indicator bubble that appears before each message and disappears when the message shows
- Only render `ChatBubble` components for indices below the visible count

### No other files need changes — all animation is CSS transitions + React state.

