import Link from "next/link";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import {
  ProtoFactRow,
  ProtoInnerShell,
  ProtoLinkList,
  ProtoPoints,
  ProtoSection,
} from "@/components/prototype/PrototypeInner";

export type CityHighlightLink = { label: string; href: string };

export type CityContent = {
  name: string;
  slug: string;
  region: string;
  distance: string;
  intro: string;
  localNote: string;
  primaryService: string;
  highlightTitle?: string;
  highlightBody?: string;
  highlightLinks?: CityHighlightLink[];
};

const services = [
  { label: "Generac standby generators", href: "/generators", note: "Pad, ATS, wiring, gas coordination, startup" },
  { label: "Backup power / transfer switches", href: "/backup-power", note: "Portable generator connections" },
  { label: "Panel and service upgrades", href: "/panel-upgrades", note: "200-amp and meter work" },
  { label: "Residential electrical", href: "/electrical-services", note: "Circuits, troubleshooting, repairs" },
  { label: "Commercial electrical", href: "/commercial", note: "Shops and tenant improvements" },
  { label: "EV charger installation", href: "/ev-charger", note: "Level 2 home charging circuits" },
];

const whyUs = [
  { title: "Clear scope", body: "We review the job and explain what is included before work starts." },
  { title: "Permits and inspections", body: "Required permits and inspections are coordinated when the job needs them." },
  { title: "Labeled work", body: "Panels and circuits are labeled for the next service visit." },
  { title: "Local crew", body: "Based in Roseburg at 2819 Cleveland Hill Rd, not a national dispatch line." },
];

function heroImageFor(primaryService: string) {
  if (primaryService === "Panel Upgrades") {
    return { src: "/images/projects/panel-service-work.jpg", position: "center 35%" };
  }
  if (primaryService === "Backup Power") {
    return { src: "/images/projects/generac-transfer-equipment.jpg", position: "center 40%" };
  }
  return { src: "/images/gallery/generator-install-side-yard.jpg", position: "center 40%" };
}

export default function CityServiceAreaContent({
  city,
  otherCities,
}: {
  city: CityContent;
  otherCities: { name: string; slug: string }[];
}) {
  const heroImg = heroImageFor(city.primaryService);

  return (
    <>
      <PrototypePageHero
        eyebrow={`Service area · ${city.name}`}
        title={
          <>
            {city.name.toUpperCase()}
            <br />
            ELECTRICIAN.
          </>
        }
        lead={city.intro}
        image={heroImg.src}
        imagePosition={heroImg.position}
      />

      <ProtoFactRow
        items={[
          { label: city.name, sub: city.region },
          { label: "From Roseburg", sub: city.distance },
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: city.primaryService, sub: "Common request in this area" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection eyebrow={`SERVICES IN ${city.name.toUpperCase()}`} title="What we install">
          <ProtoLinkList items={services} />
        </ProtoSection>

        {city.highlightBody ? (
          <ProtoSection
            eyebrow="FOCUS"
            title={city.highlightTitle || `Electrical work near ${city.name}`}
          >
            <p className="proto-inner-lead">{city.highlightBody}</p>
            {city.highlightLinks && city.highlightLinks.length > 0 ? (
              <ul className="proto-inner-linklist" style={{ marginTop: 20 }}>
                {city.highlightLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span>{item.label}</span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </ProtoSection>
        ) : null}

        <ProtoSection eyebrow="LOCAL NOTES" title={`Working in ${city.name}`}>
          <p className="proto-inner-lead" style={{ marginBottom: 16 }}>
            We are based in Roseburg ({city.distance}). {city.localNote}
          </p>
          <ProtoPoints items={whyUs} />
          <div className="proto-inner-actions">
            <Link
              className="proto-btn"
              href="/contact"
              data-track="request_service_click"
              data-track-location={`service_area_${city.slug}_inline`}
            >
              REQUEST SERVICE <span>↗</span>
            </Link>
            <a
              className="proto-textlink"
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location={`service_area_${city.slug}_inline`}
            >
              541 817 6480 <span className="arrow">↗</span>
            </a>
          </div>
        </ProtoSection>

        <ProtoSection eyebrow="NEARBY" title="Other service areas">
          <ul className="proto-inner-linklist">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`}>
                  <span>{c.name}</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 20 }}>
            <Link href="/service-areas" className="proto-textlink">
              Douglas County overview <span className="arrow">→</span>
            </Link>
          </p>
        </ProtoSection>
      </ProtoInnerShell>
    </>
  );
}