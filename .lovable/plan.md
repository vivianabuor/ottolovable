

## Plan: Animate Stats Numbers with Count-Up Effect

Add a scroll-triggered counting animation to the stats (87, 413, ∞) in the EarlyAccess section.

### Changes

**`src/components/EarlyAccess.tsx`**:
- Add `useRef`, `useState`, `useEffect` for an `IntersectionObserver` on the stats grid
- Create a `CountUp` helper component that animates from 0 to the target number over ~1.5s using `requestAnimationFrame`
- Apply to 87 and 413; for ∞, fade it in with a scale effect after the number animations complete
- Each stat staggers slightly (0ms, 300ms, 600ms)

No other files need changes.

