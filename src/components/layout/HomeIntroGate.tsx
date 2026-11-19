"use client";

import { usePathname } from "next/navigation";
import PrototypeIntro from "@/components/prototype/PrototypeIntro";

export default function HomeIntroGate() {
  const pathname = usePathname();
  return <PrototypeIntro active={pathname === "/"} />;
}