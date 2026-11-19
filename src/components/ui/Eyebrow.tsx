type EyebrowProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Eyebrow({
  children,
  align = "left",
  className = "",
}: EyebrowProps) {
  const alignClass =
    align === "center"
      ? "justify-center text-center"
      : "justify-start text-left";

  return (
    <div
      className={`flex items-center gap-3 mb-5 ${alignClass} ${className}`}
    >
      <div className="h-px w-8 bg-white/35 shrink-0" aria-hidden="true" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/55">
        {children}
      </span>
      {align === "center" && (
        <div className="h-px w-8 bg-white/35 shrink-0" aria-hidden="true" />
      )}
    </div>
  );
}