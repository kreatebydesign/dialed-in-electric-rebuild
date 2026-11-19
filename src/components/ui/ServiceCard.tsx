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
        className="group relative flex flex-col gap-4 p-6 bg-surface-raised border border-edge-strong rounded-sm overflow-hidden hover:border-white/30 transition-colors duration-200"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-white/40" />
        <div className="flex items-center justify-center w-11 h-11 bg-white/8 border border-edge rounded-sm text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-sm text-white/55 leading-relaxed">{description}</p>
        </div>
        <span className="mt-auto text-xs font-semibold text-white/70 flex items-center gap-1.5 group-hover:text-white transition-colors">
          Learn more
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
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
      className="group relative flex flex-col gap-4 p-6 bg-surface border border-edge rounded-sm hover:border-white/22 hover:bg-surface-raised transition-all duration-200"
    >
      <div className="flex items-center justify-center w-11 h-11 bg-white/5 border border-edge rounded-sm text-white/80 group-hover:text-white group-hover:border-edge-strong transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
      <span className="mt-auto text-xs font-semibold text-white/45 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
        </svg>
      </span>
    </Link>
  );
}