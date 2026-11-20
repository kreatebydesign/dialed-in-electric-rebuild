"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  dispatchIntroEnd,
  introRemainingMs,
  introWasSeen,
  markIntroSeen,
  prefersReducedMotion,
} from "@/lib/home-intro";
import { ProtoNeMark } from "@/components/ui/ProtoDecor";

type PrototypeIntroProps = {
  active: boolean;
};

export default function PrototypeIntro({ active }: PrototypeIntroProps) {
  const [hidden, setHidden] = useState(() => {
    if (typeof window === "undefined") return true;
    if (!active) return true;
    return !document.documentElement.hasAttribute("data-intro-active");
  });
  const [fromBoot] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.hasAttribute("data-intro-active")
  );
  const introRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const end = useCallback(() => {
    setHidden(true);
    document.getElementById("die-intro-boot")?.classList.remove("die-intro-boot--handoff");
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

    timer.current = window.setTimeout(end, introRemainingMs());

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, end]);

  useLayoutEffect(() => {
    if (hidden || !active) return;
    const boot = document.getElementById("die-intro-boot");
    if (boot && fromBoot) {
      boot.classList.add("die-intro-boot--handoff");
    }
  }, [hidden, active, fromBoot]);

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
    <div
      ref={introRef}
      className={`proto-intro${fromBoot ? " proto-intro--from-boot" : ""}${hidden ? " skip" : ""}`}
      aria-hidden="true"
    >
      <button type="button" className="proto-skipbutton" onClick={end}>
        SKIP INTRO
        <ProtoNeMark size={10} />
      </button>
      {/* Plain img matches boot shell for instant handoff (no Next image pipeline delay). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/dialed-in-original.png"
        alt=""
        width={230}
        height={230}
        className="proto-intro-logo"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="pulse" />
      <p>ROSEBURG, OREGON · EST. 2019</p>
    </div>
  );
}