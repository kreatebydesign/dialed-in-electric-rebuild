"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  dispatchIntroEnd,
  introWasSeen,
  markIntroSeen,
  prefersReducedMotion,
} from "@/lib/home-intro";

const INTRO_MS = 3250;

type PrototypeIntroProps = {
  active: boolean;
};

export default function PrototypeIntro({ active }: PrototypeIntroProps) {
  const [hidden, setHidden] = useState(() => {
    if (typeof window === "undefined") return true;
    if (!active) return true;
    return !document.documentElement.hasAttribute("data-intro-active");
  });
  const timer = useRef<number | undefined>(undefined);

  const end = useCallback(() => {
    setHidden(true);
    document.documentElement.removeAttribute("data-intro-react-ready");
    markIntroSeen();
    dispatchIntroEnd();
  }, []);

  useLayoutEffect(() => {
    if (!active) {
      dispatchIntroEnd();
      return;
    }

    if (introWasSeen() || prefersReducedMotion()) {
      dispatchIntroEnd();
      return;
    }

    if (!document.documentElement.hasAttribute("data-intro-active")) {
      document.documentElement.setAttribute("data-intro-active", "true");
    }

    document.documentElement.setAttribute("data-intro-react-ready", "true");
    timer.current = window.setTimeout(end, INTRO_MS);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, end]);

  useEffect(() => {
    if (hidden) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") end();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hidden, end]);

  if (!active || hidden) return null;

  return (
    <div className={`proto-intro${hidden ? " skip" : ""}`} aria-hidden="true">
      <button type="button" className="proto-skipbutton" onClick={end}>
        SKIP INTRO ↗
      </button>
      <Image
        src="/brand/dialed-in-original.png"
        alt=""
        width={230}
        height={230}
        className="w-[min(230px,45vw)] h-auto"
        priority
      />
      <div className="pulse" />
      <p>ROSEBURG, OREGON · EST. 2019</p>
    </div>
  );
}