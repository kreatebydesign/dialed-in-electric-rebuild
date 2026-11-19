export const INTRO_SESSION_KEY = "die_prototype_intro";
export const INTRO_STARTED_KEY = `${INTRO_SESSION_KEY}_started`;
export const INTRO_DURATION_MS = 4000;

export const INTRO_END_EVENT = "die:intro:end";

export function introStartedAt(): number | null {
  try {
    const v = sessionStorage.getItem(INTRO_STARTED_KEY);
    if (!v) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

/** Wall-clock time left for the homepage intro (boot + React). */
export function introRemainingMs(totalMs = INTRO_DURATION_MS): number {
  const started = introStartedAt();
  if (!started) return totalMs;
  return Math.max(600, totalMs - (Date.now() - started));
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "seen");
    sessionStorage.removeItem(INTRO_STARTED_KEY);
  } catch {
    /* ignore */
  }
}

export function introWasSeen(): boolean {
  try {
    const v = sessionStorage.getItem(INTRO_SESSION_KEY);
    return v === "1" || v === "seen";
  } catch {
    return true;
  }
}

export function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export function dispatchIntroEnd(): void {
  document.documentElement.removeAttribute("data-intro-active");
  document.documentElement.setAttribute("data-intro-done", "true");
  window.dispatchEvent(new CustomEvent(INTRO_END_EVENT));
}