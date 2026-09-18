import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import FAQItem from "@/components/ui/FAQItem";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ | Generator & Electrical Questions | Dialed In Electric",
  },
  description:
    "Answers to common questions about Generac generator installation, panel upgrades, permits, scheduling, and electrical service in Roseburg and Douglas County, OR.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Dialed In Electric — Roseburg, OR",
    description:
      "Generator installation, panel upgrades, permits, and scheduling questions answered by Dialed In Electric in Roseburg, OR.",
    url: "https://dialedinelectricroseburg.com/faq",
  },
};

const faqs = [
  {
    question: "What size Generac generator do I need for my home?",
    answer:
      "Most homes in the 1,500–3,000 sq ft range run well on a 14–22kW unit, which covers HVAC, refrigerator, well pump, lights, and outlets. Larger homes or those with electric heat may need 24–26kW. We size the generator during the site walkthrough based on your panel, load list, and fuel supply — never a guess.",
  },
  {
    question: "How long does Generac generator installation take in Roseburg?",
    answer:
      "Most residential installs are completed in one to two days. If a concrete pad needs to cure, we schedule the pad pour and return for electrical and gas work. From your first call to a running generator is typically one to two weeks.",
  },
  {
    question: "Do I need a permit for a standby generator in Oregon?",
    answer:
      "Yes. Generator installations in Oregon require an electrical permit, and gas work needs a separate permit through your local jurisdiction. We pull all required permits, schedule inspections, and handle the paperwork.",
  },
  {
    question: "What fuel does a Generac standby generator use?",
    answer:
      "Generac standby generators run on natural gas or propane (LP). If your home has a gas line, we connect directly. If not, we coordinate with a licensed propane provider for a dedicated tank.",
  },
  {
    question: "How much does generator installation cost in Roseburg?",
    answer:
      "A typical whole-home Generac installation in Roseburg runs between $8,000 and $16,000 installed — depending on generator size, pad work, gas line distance, and transfer switch configuration. We provide a clear, itemized quote after a site walkthrough.",
  },
  {
    question: "What's the difference between a standby and a portable generator?",
    answer:
      "A standby generator is permanently installed, connected to your panel and fuel supply, and starts automatically within seconds of an outage. A portable generator requires manual setup, extension cords, and stored fuel, and can only power a limited number of circuits.",
  },
  {
    question: "Can you install a generator on a rural Douglas County property?",
    answer:
      "Yes. Many of our installs are on rural properties with wells, shops, and propane. We plan for clearances, fuel supply, and transfer switch placement during the walkthrough.",
  },
  {
    question: "When do I need a panel or service upgrade?",
    answer:
      "If you are adding a large load (EV charger, hot tub, HVAC), remodeling, installing a standby generator, or your panel is outdated or damaged, a 100→200A upgrade is often required. We calculate the load and tell you what the job needs before work starts.",
  },
  {
    question: "Do you pull permits for electrical work?",
    answer:
      "Yes. We pull the required electrical permits, schedule inspections, and handle the paperwork with the local jurisdiction for residential and commercial jobs.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Dialed In Electric Inc. is an Oregon licensed electrical contractor, CCB# 228668, and we carry the required insurance for the work we perform.",
  },
  {
    question: "How soon can you start a job in Roseburg?",
    answer:
      "Most projects get on the calendar within a week of accepting a proposal. Generator installs and panel upgrades are often same-week when materials and permits allow.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Call or email with a few project details and we will review the scope, answer questions, and provide a clear written quote before any work begins.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Roseburg and communities throughout Douglas County, including Sutherlin, Winston, Green, Melrose, Myrtle Creek, Glide, Oakland, Canyonville, and surrounding areas.",
  },
  {
    question: "Do you handle new construction and commercial wiring?",
    answer:
      "Yes. We wire new homes from rough-in through trim-out and do commercial work for shops, tenant improvements, machine circuits, lighting, and service upgrades.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-charcoal-deep py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">FAQ</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Roseburg &amp; Douglas County
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-2xl mb-8">
            Straight answers about Generac generator installation, panel upgrades, permits, and electrical service from Dialed In Electric in Roseburg, OR.
          </p>
          <Button as="tel" href="tel:15418176480" variant="primary" size="lg">
            Call 541-817-6480
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Looking for generator details? See{" "}
            <Link href="/generators" className="text-amber hover:underline">
              Generac installation
            </Link>
            ,{" "}
            <Link href="/panel-upgrades" className="text-amber hover:underline">
              panel upgrades
            </Link>
            , or{" "}
            <Link href="/commercial" className="text-amber hover:underline">
              commercial electrical
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Still have a question?"
        subtext="Call or email Dialed In Electric. We'll walk through your project and give you a clear next step."
        primaryLabel="Request Service"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
      />
    </>
  );
}
