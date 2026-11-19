import Button from "./Button";

type CTABannerProps = {
  headline: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "dark" | "amber";
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
  const isLight = variant === "light" || variant === "amber";

  return (
    <section
      className={`py-16 lg:py-20 border-t border-edge ${
        isLight ? "bg-surface-raised" : "bg-obsidian grain"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-white text-balance">
          {headline}
        </h2>
        {subtext && (
          <p className="text-base lg:text-lg max-w-2xl mx-auto mb-8 text-white/55">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            as="link"
            href={primaryHref}
            variant="primary"
            size="lg"
            data-track="request_service_click"
            data-track-location="cta_banner"
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              as="tel"
              href={secondaryHref}
              variant="outline-white"
              size="lg"
              data-track="phone_click"
              data-track-location="cta_banner"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}