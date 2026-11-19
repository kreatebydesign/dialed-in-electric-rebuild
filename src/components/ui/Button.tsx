import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline-white" | "outline-dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "link"; href: string };

type ButtonAsTel = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "tel"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsTel;

const baseClasses =
  "inline-flex items-center justify-center font-semibold tracking-wide rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian cursor-pointer whitespace-nowrap select-none";

const variantClasses: Record<string, string> = {
  primary:
    "bg-white text-charcoal-deep hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
  secondary:
    "bg-charcoal-mid text-white border border-edge hover:bg-charcoal hover:border-edge-strong",
  "outline-white":
    "bg-transparent text-white border border-white/50 hover:bg-white hover:text-charcoal-deep hover:border-white",
  "outline-dark":
    "bg-transparent text-charcoal-deep border border-charcoal/25 hover:bg-charcoal-deep hover:text-white hover:border-charcoal-deep",
};

const sizeClasses: Record<string, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-[15px] gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  as,
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "link" && href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  if (as === "tel" && href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}