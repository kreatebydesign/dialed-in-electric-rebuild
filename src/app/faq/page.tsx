import type { Metadata } from "next";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import { ProtoInnerShell, ProtoSection } from "@/components/prototype/PrototypeInner";
import FAQItem from "@/components/ui/FAQItem";

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
      "Most homes in the 1,500–3,000 sq ft range run well on a 14–22kW unit, which covers HVAC, refrigerator, well pump, lights, and outlets. Larger homes or those with electric heat may need 24–26kW. We size the generator during the site walkthrough based on your panel, load list, and fuel supply.",
  },
  {
    question: "How long does Generac generator installation take in Roseburg?",
    answer:
      "Many residential installs finish in one to two days on site. If a concrete pad needs to cure, we schedule the pour separately. Overall timing depends on permits, equipment lead times, and fuel coordination.",
  },
  {
    question: "Do I need a permit for a standby generator in Oregon?",
    answer:
      "Yes. Generator installations in Oregon require an electrical permit, and gas work needs a separate permit through your local jurisdiction. We pull required permits, schedule inspections, and handle the paperwork.",
  },
  {
    question: "What fuel does a Generac standby generator use?",
    answer:
      "Generac standby generators run on natural gas or propane (LP). If your home has a gas line, we connect directly. If not, we coordinate with a licensed propane provider for a dedicated tank.",
  },
  {
    question: "How much does generator installation cost in Roseburg?",
    answer:
      "Cost depends on generator size, transfer switch type, pad work, conduit runs, and fuel setup. We provide an itemized quote after a site walkthrough with your load list and installation details.",
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
      "After you accept a proposal, we coordinate materials, permits when required, and schedule the install. Timing depends on scope, utility coordination, and equipment lead times.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call or email with a short description of the project and location. We review the scope, answer questions, and provide a written quote before work begins.",
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

      <PrototypePageHero
        eyebrow="FAQ"
        title={
          <>
            QUESTIONS
            <br />
            ANSWERED.
          </>
        }
        lead="Generators, panel upgrades, permits, and electrical service in Roseburg and Douglas County. CCB# 228668."
        image="/images/gallery/generator-install-side-yard.jpg"
        imagePosition="center 40%"
      />

      <ProtoInnerShell>
        <ProtoSection eyebrow="COMMON QUESTIONS">
          <div className="proto-faq">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="proto-inner-lead" style={{ marginTop: 40 }}>
            Related services:{" "}
            <Link href="/generators">Generac installation</Link>,{" "}
            <Link href="/backup-power">backup power</Link>,{" "}
            <Link href="/panel-upgrades">panel upgrades</Link>,{" "}
            <Link href="/ev-charger">EV chargers</Link>,{" "}
            <Link href="/new-home-wiring">new home wiring</Link>,{" "}
            <Link href="/commercial">commercial electrical</Link>, and{" "}
            <Link href="/service-areas">service areas</Link>.
          </p>
          <div className="proto-inner-actions">
            <a className="proto-btn" href="tel:15418176480">
              541 817 6480 <span>↗</span>
            </a>
            <Link className="proto-textlink" href="/contact">
              REQUEST SERVICE <span className="arrow">→</span>
            </Link>
          </div>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="faq_close" />
    </>
  );
}