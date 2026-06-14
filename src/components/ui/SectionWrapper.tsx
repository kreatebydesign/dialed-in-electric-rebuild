type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "surface" | "dark";
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  variant = "white",
  id,
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    surface: "bg-surface",
    dark: "bg-charcoal text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${bgClasses[variant]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
