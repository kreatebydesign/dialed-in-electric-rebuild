import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Dialed In Electric",
  },
  description:
    "Privacy policy for Dialed In Electric Inc., the licensed electrical contractor serving Roseburg and Douglas County, Oregon.",
  alternates: { canonical: "/privacy" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6 text-[12px] text-muted">
          <Link href="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Privacy</span>
        </div>
        <h1 className="text-4xl font-extrabold text-charcoal-deep tracking-tight mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-neutral max-w-none text-[15px] text-muted leading-relaxed space-y-5">
          <p>
            Dialed In Electric Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy. This policy describes how we handle information when you visit{" "}
            <a href="https://dialedinelectricroseburg.com" className="text-amber hover:underline">
              dialedinelectricroseburg.com
            </a>{" "}
            or contact us for electrical services.
          </p>
          <h2 className="text-xl font-bold text-charcoal-deep pt-2">Information we collect</h2>
          <p>
            If you call, email, or otherwise contact us, we collect the information you choose to
            share — typically your name, phone number, email address, property address, and project
            details — so we can respond and provide service.
          </p>
          <h2 className="text-xl font-bold text-charcoal-deep pt-2">How we use information</h2>
          <p>
            We use contact details only to respond to service requests, schedule work, provide
            quotes, and communicate about jobs. We do not sell your personal information.
          </p>
          <h2 className="text-xl font-bold text-charcoal-deep pt-2">Website analytics</h2>
          <p>
            Our site may use privacy-respecting hosting and analytics tools that collect aggregate
            usage data such as pages visited and approximate location. This helps us improve the
            site and is not used to sell personal data.
          </p>
          <h2 className="text-xl font-bold text-charcoal-deep pt-2">Third parties</h2>
          <p>
            We may share information with service providers who help us operate the business (for
            example, phone, email, or scheduling tools) only as needed to respond to your request.
          </p>
          <h2 className="text-xl font-bold text-charcoal-deep pt-2">Contact</h2>
          <p>
            Questions about this policy can be sent to Dialed In Electric Inc., 2819 Cleveland Hill
            Rd, Roseburg, OR 97471,{" "}
            <a href="mailto:Dialedinelectric@gmail.com" className="text-amber hover:underline">
              Dialedinelectric@gmail.com
            </a>
            , or{" "}
            <a href="tel:15418176480" className="text-amber hover:underline">
              541-817-6480
            </a>
            .
          </p>
          <p className="text-sm pt-4">Last updated: September 2026</p>
        </div>
      </div>
    </section>
  );
}
