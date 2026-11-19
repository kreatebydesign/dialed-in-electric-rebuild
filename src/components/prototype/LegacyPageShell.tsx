type LegacyPageShellProps = {
  children: React.ReactNode;
};

/**
 * Wraps legacy service-page sections in prototype-aligned dark styling
 * without rewriting every content block.
 */
export default function LegacyPageShell({ children }: LegacyPageShellProps) {
  return <div className="proto-legacy proto-inner-legacy">{children}</div>;
}