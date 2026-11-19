export const INTRO_SESSION_KEY = "die_prototype_intro";

export const INTRO_END_EVENT = "die:intro:end";

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "seen");
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