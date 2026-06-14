import Button from "./Button";

type CTABannerProps = {
  headline: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "amber" | "dark";
};

export default function CTABanner({
  headline,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "dark",
}: CTABannerProps) {
  const isAmber = variant === "amber";

  return (
    <section className={`py-16 lg:py-20 ${isAmber ? "bg-amber" : "bg-charcoal-deep"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl lg:text-4xl font-bold tracking-tight mb-3 ${
            isAmber ? "text-charcoal-deep" : "text-white"
          }`}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            className={`text-base lg:text-lg max-w-2xl mx-auto mb-8 ${
              isAmber ? "text-charcoal/70" : "text-white/60"
            }`}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            as="link"
            href={primaryHref}
            variant={isAmber ? "secondary" : "primary"}
            size="lg"
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              as="tel"
              href={secondaryHref}
              variant={isAmber ? "outline-dark" : "outline-white"}
              size="lg"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
