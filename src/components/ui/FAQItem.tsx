"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-edge last:border-0 transition-colors ${open ? "" : "hover:border-amber/40"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={`text-[15px] font-semibold leading-snug transition-colors ${open ? "text-amber" : "text-charcoal group-hover:text-amber"}`}>
          {question}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-sm border transition-all duration-200 ${
            open
              ? "bg-amber border-amber text-charcoal-deep rotate-45"
              : "border-edge text-muted group-hover:border-amber group-hover:text-amber"
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-[15px] text-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
