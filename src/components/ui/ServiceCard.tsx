import Link from "next/link";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col gap-4 p-6 bg-charcoal rounded-sm overflow-hidden hover:bg-charcoal-mid transition-colors duration-200"
      >
        {/* Amber top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" />
        {/* Amber glow corner */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="flex items-center justify-center w-11 h-11 bg-amber/15 rounded-sm text-amber">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
        <span className="mt-auto text-xs font-semibold text-amber flex items-center gap-1.5">
          Learn more
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-4 p-6 bg-white border border-edge rounded-sm overflow-hidden hover:border-amber hover:shadow-md transition-all duration-200"
    >
      {/* Amber top bar — appears on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-edge group-hover:bg-amber transition-colors duration-200" />

      <div className="flex items-center justify-center w-11 h-11 bg-surface rounded-sm text-charcoal group-hover:bg-amber group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-charcoal mb-1.5 group-hover:text-amber transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
      <span className="mt-auto text-xs font-semibold text-amber flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Learn more
        <svg
          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
        </svg>
      </span>
    </Link>
  );
}
