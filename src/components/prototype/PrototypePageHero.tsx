import Image from "next/image";
import Link from "next/link";

type PrototypePageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  image: string;
  imagePosition?: string;
  children?: React.ReactNode;
};

export default function PrototypePageHero({
  eyebrow,
  title,
  lead,
  image,
  imagePosition = "center",
  children,
}: PrototypePageHeroProps) {
  return (
    <section className="proto-page-hero">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover -z-10"
        style={{ objectPosition: imagePosition }}
        sizes="100vw"
        priority
      />
      <div className="proto-page-hero-content">
        <nav className="text-[11px] text-white/45 mb-6 tracking-wide" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white/70">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/60">{eyebrow}</span>
        </nav>
        <div className="proto-eyebrow proto-muted">{eyebrow}</div>
        <h1 className="proto-display">{title}</h1>
        {lead && (
          <p className="mt-5 text-[15px] text-white/60 max-w-lg leading-relaxed">{lead}</p>
        )}
        {children}
      </div>
    </section>
  );
}