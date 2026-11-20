import { IconArrowNE, IconArrowRight } from "@/components/ui/ProtoIcons";

/** Standard text-link trailing arrow */
export function ProtoTextArrow() {
  return <IconArrowRight className="proto-icon proto-icon--cta" />;
}

/** CTA / phone / external northeast mark */
export function ProtoNeMark({ size = 12 }: { size?: number }) {
  return <IconArrowNE className="proto-icon proto-icon--ne" size={size} />;
}