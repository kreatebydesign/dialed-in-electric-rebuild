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

// All variants share: consistent height via py, rounded-sm, tracking, semibold
const baseClasses =
  "inline-flex items-center justify-center font-semibold tracking-wide rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap select-none";

const variantClasses: Record<string, string> = {
  // Amber fill — dark text, darkens + lifts on hover
  primary:
    "bg-amber text-charcoal-deep hover:bg-amber-dark hover:-translate-y-px hover:shadow-md",

  // Charcoal fill — white text, for use on light or amber backgrounds
  secondary:
    "bg-charcoal-deep text-white hover:bg-charcoal",

  // For dark/photo backgrounds: subtle white fill at rest, solid white fill on hover
  "outline-white":
    "bg-white/8 text-white border border-white/75 hover:bg-white hover:text-charcoal-deep hover:border-white",

  // For light backgrounds: transparent, charcoal border 25%, charcoal fill + white text on hover
  "outline-dark":
    "bg-transparent text-charcoal border border-charcoal/25 hover:bg-charcoal-deep hover:text-white hover:border-charcoal-deep",
};

// Consistent height: sm=36px, md=40px, lg=48px
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
