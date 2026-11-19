import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function ProtoInnerShell({ children }: { children: ReactNode }) {
  return <div className="proto-inner-shell">{children}</div>;
}

export function ProtoSection({
  eyebrow,
  title,
  lead,
  children,
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section className="proto-inner-section" id={id}>
      {eyebrow && <div className="proto-eyebrow proto-muted">{eyebrow}</div>}
      {title && <h2 className="proto-inner-title">{title}</h2>}
      {lead && <p className="proto-inner-lead">{lead}</p>}
      {children}
    </section>
  );
}

export function ProtoSplit({
  image,
  imageAlt,
  children,
  imagePosition = "center",
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
  imagePosition?: string;
}) {
  return (
    <div className="proto-inner-split">
      <div className="proto-inner-split-copy">{children}</div>
      <div className="proto-inner-split-media">
        <Image
          src={image}
          alt={imageAlt}
          width={4000}
          height={3000}
          className="proto-inner-photo"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 900px) 100vw, 46vw"
        />
      </div>
    </div>
  );
}

export function ProtoFactRow({ items }: { items: { label: string; sub: string }[] }) {
  return (
    <dl className="proto-fact-row">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.sub}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProtoLinkList({
  items,
}: {
  items: { label: string; href: string; note?: string }[];
}) {
  return (
    <ul className="proto-inner-linklist">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <span>{item.label}</span>
            {item.note && <small>{item.note}</small>}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ProtoBulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="proto-inner-areas">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProtoPoints({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="proto-inner-points">
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="proto-inner-points-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ProtoActions({ children }: { children: ReactNode }) {
  return <div className="proto-inner-actions">{children}</div>;
}