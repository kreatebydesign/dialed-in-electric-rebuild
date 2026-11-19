"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  dispatchIntroEnd,
  introWasSeen,
  markIntroSeen,
  prefersReducedMotion,
} from "@/lib/home-intro";

type SiteIntroProps = {
  active: boolean;
};

const HOLD_MS = 1200;
const EXIT_MS = 650;
const EMBLEM_MS = 1400;

export default function SiteIntro({ active }: SiteIntroProps) {
  const [phase, setPhase] = useState<"off" | "emerge" | "hold" | "exit">("off");
  const timers = useRef<number[]>([]);

  const finish = useCallback(() => {
    markIntroSeen();
    setPhase("off");
    dispatchIntroEnd();
  }, []);

  const skip = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    finish();
  }, [finish]);

  useEffect(() => {
    if (!active) return;

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.current.push(id);
    };

    const frame = requestAnimationFrame(() => {
      if (introWasSeen() || prefersReducedMotion()) {
        dispatchIntroEnd();
        return;
      }

      document.documentElement.setAttribute("data-intro-active", "true");

      setPhase("emerge");
      schedule(() => setPhase("hold"), EMBLEM_MS);
      schedule(() => setPhase("exit"), EMBLEM_MS + HOLD_MS);
      schedule(() => finish(), EMBLEM_MS + HOLD_MS + EXIT_MS);
    });

    return () => {
      cancelAnimationFrame(frame);
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, [active, finish]);

  useEffect(() => {
    if (phase === "off") return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") skip();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, skip]);

  if (!active || phase === "off") return null;

  return (
    <div
      className={`intro-shell fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050506] grain ${
        phase === "exit" ? "intro-shell--exit" : ""
      }`}
    >
      <button
        type="button"
        onClick={skip}
        className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 z-10 text-[11px] font-medium tracking-[0.14em] uppercase text-white/45 hover:text-white/80 transition-colors px-3 py-2"
      >
        Skip
      </button>

      <div
        className={`relative intro-emblem-cinematic intro-bolt-cinematic w-[min(76vw,320px)] aspect-square ${
          phase === "emerge" ? "intro-emblem-cinematic--emerge" : ""
        } ${phase === "hold" ? "intro-emblem-cinematic--hold" : ""}`}
        aria-hidden="true"
      >
        <Image
          src="/brand/dialed-in-badge-dark.png"
          alt=""
          fill
          className="object-contain"
          sizes="320px"
          priority
        />
      </div>
    </div>
  );
}