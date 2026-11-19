type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "raised" | "deep" | "white" | "surface" | "dark";
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  variant = "default",
  id,
}: SectionWrapperProps) {
  const bgClasses: Record<string, string> = {
    default: "bg-graphite",
    raised: "bg-surface",
    deep: "bg-obsidian",
    white: "bg-graphite",
    surface: "bg-surface",
    dark: "bg-charcoal",
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 border-t border-edge ${bgClasses[variant]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}