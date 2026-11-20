import { useCallback, useRef } from "react";

const SWIPE_THRESHOLD_PX = 48;

/** Horizontal swipe → step carousel (mobile). */
export function useGallerySwipe(onStep: (delta: -1 | 1) => void) {
  const startX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.changedTouches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = startX.current;
      const end = e.changedTouches[0]?.clientX;
      if (start === null || end === undefined) return;
      const delta = end - start;
      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
      onStep(delta < 0 ? 1 : -1);
      startX.current = null;
    },
    [onStep]
  );

  return { onTouchStart, onTouchEnd };
}