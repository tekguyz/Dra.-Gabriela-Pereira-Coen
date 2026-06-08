"use client";

import { useState } from "react";
import { LanguageType, DICTIONARY } from "@/shared/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FaqAccordion({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: dict.faq.q1, a: dict.faq.a1 },
    { q: dict.faq.q2, a: dict.faq.a2 },
    { q: dict.faq.q3, a: dict.faq.a3 },
    { q: dict.faq.q4, a: dict.faq.a4 },
    { q: dict.faq.q5, a: dict.faq.a5 },
  ];

  return (
    <section 
      id="faq" 
      className="py-24 px-6 max-w-4xl mx-auto space-y-12"
    >
      {/* Header Segment Stack */}
      <div className="text-center space-y-3" id="faq-layout-header">
        <span 
          className="text-[10px] font-display font-bold text-[#00A8E8] tracking-widest uppercase block text-center mb-2"
          id="faq-header-tag"
        >
          {dict.faq.tag}
        </span>
        <h2 
          className="text-3xl font-display font-black uppercase text-brand-navy text-center tracking-tight"
          id="faq-header-title"
        >
          {dict.faq.title}
        </h2>
      </div>

      {/* Interactive Accordion Loop List Matrix */}
      <div className="space-y-4" id="faq-accordion-container">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border border-[#FAB012]/20 rounded-2xl bg-white overflow-hidden transition-colors duration-300 shadow-sm hover:shadow-md"
              id={`faq-accordion-item-${idx}`}
            >
              {/* Clickable bar target trigger */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left min-h-[64px] px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-navy/[0.02] font-display font-bold text-brand-navy text-base md:text-lg outline-none transition-colors duration-200"
                aria-expanded={isOpen}
                id={`faq-trigger-${idx}`}
              >
                <div className="flex gap-4 pr-4">
                  <HelpCircle 
                    className={`mt-0.5 shrink-0 transition-colors ${isOpen ? "text-[#FAB012]" : "text-brand-navy/40"}`} 
                    size={20} 
                  />
                  <span>{faq.q}</span>
                </div>
                
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#00A8E8] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Revealed Content Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    id={`faq-panel-${idx}`}
                  >
                    <div className="bg-white border-t border-[#FAB012]/10 px-6 py-5 font-sans text-base text-brand-navy/80 leading-relaxed adaptive-height animate-fade-in relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FAB012]/30 to-transparent" />
                      <p className="ml-2">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>
    </section>
  );
}
