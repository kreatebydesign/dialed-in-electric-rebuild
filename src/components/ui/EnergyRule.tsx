type EnergyRuleProps = {
  className?: string;
  /** subtle | pulse — pulse runs a single pass on view */
  variant?: "subtle" | "pulse";
};

/**
 * Signature Dialed In rule: hairline with a traveling light pulse.
 */
export default function EnergyRule({
  className = "",
  variant = "subtle",
}: EnergyRuleProps) {
  return (
    <div
      className={`energy-rule energy-rule--${variant} relative w-full h-px bg-white/12 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span className="energy-rule__pulse" />
    </div>
  );
}