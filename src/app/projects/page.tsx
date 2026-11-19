import type { Metadata } from "next";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import ProjectsPortfolio from "@/components/prototype/ProjectsPortfolio";

export const metadata: Metadata = {
  title: {
    absolute: "Projects in Roseburg, OR | Generators, Panels & Electrical Work",
  },
  description:
    "Real project photos from Dialed In Electric in Roseburg and Douglas County — Generac installs, panel upgrades, commercial wiring, and residential electrical work. CCB# 228668.",
  keywords: [
    "electrician projects Roseburg OR",
    "generator installation photos Roseburg",
    "electrical project gallery Oregon",
    "panel upgrade photos Roseburg",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Dialed In Electric — Roseburg, OR",
    description:
      "Generator installs, panel upgrades, commercial wiring, and residential electrical. Real work from Dialed In Electric in Roseburg, OR.",
    url: "https://dialedinelectricroseburg.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsPortfolio />
      <PrototypePageClosing trackLocation="projects_close" />
    </>
  );
}