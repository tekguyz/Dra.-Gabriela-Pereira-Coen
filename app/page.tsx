"use client";

import { useState, useEffect } from "react";
import { LanguageType } from "@/shared/lib/constants";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { AboutDoctor } from "@/components/AboutDoctor";
import { ServicesSection } from "@/components/ServicesSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<LanguageType>("es");

  useEffect(() => {
    // Force browser to start at absolute top on mount to fix scrolling bugs
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
      
      // Secondary deferred fallback to clear any browser-initiated layout jumps
      const handleScrollBack = () => {
        window.scrollTo(0, 0);
      };

      const delayTimer = setTimeout(handleScrollBack, 10);
      
      // Clean history state on fresh landing if there is a hash to halt native anchor jumping
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      return () => clearTimeout(delayTimer);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col font-sans overflow-x-hidden bg-white">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <TrustBar lang={lang} />
      <AboutDoctor lang={lang} />
      <ServicesSection lang={lang} />
      <FaqAccordion lang={lang} />
      <ContactForm lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
