import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Request Electrical or Generator Service | Dialed In Electric",
  },
  description:
    "Call or email Dialed In Electric for generator installation, panel upgrades, and electrical service in Roseburg, OR. CCB# 228668. 541-817-6480.",
  keywords: [
    "contact electrician Roseburg OR",
    "call electrician Roseburg",
    "generator quote Roseburg Oregon",
    "electrician quote Roseburg",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dialed In Electric | Roseburg, OR Electrician",
    description:
      "Call 541-817-6480 or email us. Generator installation, panel upgrades, and electrical service throughout Douglas County. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/contact",
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011.03 2.18 2 2 0 013 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const serviceAreas = [
  "Roseburg",
  "Sutherlin",
  "Winston",
  "Green",
  "Melrose",
  "Garden Valley",
  "Lookingglass",
  "Wilbur",
];

const steps = [
  {
    n: "01",
    title: "Reach Out",
    body: "Call or email us with a few details about your project.",
  },
  {
    n: "02",
    title: "We Review the Work",
    body: "We'll talk through the scope and answer any questions before giving you a price.",
  },
  {
    n: "03",
    title: "Schedule the Work",
    body: "We'll get you on the calendar and keep you updated throughout the process.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-deep py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-5 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              CCB# 228668 · Roseburg, OR
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Need Electrical Work or a Generator Quote?
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl">
            Give us a call or send an email. We&apos;ll talk through the project and let you know what to expect.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">

            {/* Left — contact cards */}
            <div className="lg:col-span-3 flex flex-col gap-5">

              {/* Call card */}
              <div className="bg-charcoal-deep rounded-sm p-7 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 bg-amber/15 rounded-sm text-amber shrink-0">
                    <PhoneIcon />
                  </div>
                  <h2 className="text-[15px] font-extrabold text-white">Call Dialed In Electric</h2>
                </div>
                <p className="text-[14px] text-white/55 leading-relaxed mb-6">
                  Need help with a generator, panel upgrade, or electrical project? Give us a call and we&apos;ll talk through the next step.
                </p>
                <a
                  href="tel:15418176480"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-amber text-charcoal-deep font-semibold text-[15px] tracking-wide rounded-sm hover:bg-amber-dark hover:-translate-y-px hover:shadow-md transition-all duration-200 w-full sm:w-auto"
                >
                  <PhoneIcon />
                  Call 541-817-6480
                </a>
                <p className="text-[12px] text-white/35 mt-4">Mon–Fri, 7am–6pm · Same-day response most days</p>
              </div>

              {/* Email card */}
              <div className="bg-white border border-edge rounded-sm p-7 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-edge" aria-hidden="true" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 bg-surface rounded-sm text-charcoal shrink-0">
                    <MailIcon />
                  </div>
                  <h2 className="text-[15px] font-extrabold text-charcoal-deep">Email Us</h2>
                </div>
                <p className="text-[14px] text-muted leading-relaxed mb-6">
                  Prefer email? Send us the details of your project and we&apos;ll get back to you.
                </p>
                <a
                  href="mailto:Dialedinelectric@gmail.com"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-transparent text-charcoal border border-charcoal/25 font-semibold text-[15px] tracking-wide rounded-sm hover:bg-charcoal-deep hover:text-white hover:border-charcoal-deep transition-all duration-200 w-full sm:w-auto"
                >
                  <MailIcon />
                  Email Us
                </a>
                <p className="text-[12px] text-muted mt-4">Dialedinelectric@gmail.com</p>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Address */}
              <div className="bg-white border border-edge rounded-sm p-5">
                <p className="text-[11px] font-bold text-charcoal/50 tracking-[0.18em] uppercase mb-3">Address</p>
                <address className="not-italic text-[14px] text-charcoal leading-relaxed">
                  <span className="font-semibold">Dialed In Electric Inc.</span><br />
                  2819 Cleveland Hill Rd<br />
                  Roseburg, OR 97471
                </address>
              </div>

              {/* Service areas */}
              <div className="bg-white border border-edge rounded-sm p-5">
                <p className="text-[11px] font-bold text-charcoal/50 tracking-[0.18em] uppercase mb-3">
                  Service Areas
                </p>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                  {serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-[13px] text-charcoal">
                      <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] text-muted mt-3">Serving all of Douglas County, OR</p>
              </div>

              {/* License */}
              <div className="bg-surface border border-edge rounded-sm p-5">
                <p className="text-[11px] font-bold text-charcoal/50 tracking-[0.18em] uppercase mb-3">Licensing</p>
                <div className="flex flex-col gap-1.5 text-[13px] text-charcoal">
                  <p><span className="font-semibold">CCB#</span> 228668</p>
                  <p><span className="font-semibold">Oregon</span> licensed &amp; insured</p>
                  <p><span className="font-semibold">Generac</span> factory certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What Happens Next</span>
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight">
              Simple Process, No Surprises
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-4 p-6 bg-surface rounded-sm border border-edge border-t-2 border-t-amber"
              >
                <span className="text-[11px] font-bold text-amber tracking-widest">{step.n}</span>
                <div>
                  <h3 className="text-[15px] font-bold text-charcoal-deep mb-2">{step.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
