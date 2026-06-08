import { useState } from "react";
import { LanguageType, NAV_LINKS, DICTIONARY, CLINIC_DATA } from "@/shared/lib/constants";
import { Menu, X, Globe, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar({ lang, setLang }: { lang: LanguageType; setLang: (l: LanguageType) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dict = DICTIONARY[lang];

  return (
    <>
      <div className="w-full bg-[#FAB012] text-brand-navy font-display text-xs font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Sparkles size={14} />
        <span>{dict.productsBadge.title}</span>
      </div>
      <header id="navbar-header" className="sticky top-0 z-50 w-full border-b border-[#FAB012]/20 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Brand Logo & Name */}
          <a href="#" className="flex flex-col focus:outline-none min-h-[48px] justify-center" id="brand-logo-link">
            <span className="font-display text-lg font-bold tracking-tight text-brand-navy sm:text-xl">
              Dra. Gabriela Pereira Coen
            </span>
            <span className="font-display text-[10px] uppercase tracking-widest text-brand-navy/60">
              {lang === "en" ? "Endodontics Specialist" : "Especialista en Endodoncia"}
            </span>
          </a>

          {/* Desktop Links Matrix */}
          <nav className="hidden items-center gap-x-8 md:flex" id="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/80 hover:text-brand-navy transition-colors duration-200 min-h-[48px] flex items-center"
                id={`nav-link-${link.id}`}
              >
                {link[lang]}
              </a>
            ))}

            {/* Language Switcher Button Group */}
            <div className="flex items-center gap-1 rounded-full bg-clinical-gray/40 p-1 border border-[#FAB012]/20" id="lang-switcher-container">
              <button
                onClick={() => setLang("es")}
                className={`flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full px-3 text-xs font-bold font-display uppercase tracking-wider transition-all duration-200 ${
                  lang === "es"
                    ? "bg-brand-navy text-white shadow-sm"
                    : "text-brand-navy/70 hover:text-brand-navy"
                }`}
                id="lang-btn-es"
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full px-3 text-xs font-bold font-display uppercase tracking-wider transition-all duration-200 ${
                  lang === "en"
                    ? "bg-brand-navy text-white shadow-sm"
                    : "text-brand-navy/70 hover:text-brand-navy"
                }`}
                id="lang-btn-en"
              >
                EN
              </button>
            </div>

            {/* Call to Action Booking Button */}
            <a
              href={dict.hero.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 min-h-[48px] font-display text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#00A8E8] shadow-sm"
              id="book-appointment-btn"
            >
              <MessageSquare size={16} />
              <span>{dict.nav.contact}</span>
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden" id="mobile-controls-container">
            {/* Quick Lang toggle */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center justify-center gap-1 rounded-full border border-[#FAB012]/20 min-w-[48px] min-h-[48px] bg-white px-3 text-xs font-display font-bold uppercase tracking-wider text-brand-navy"
              id="mobile-quick-lang"
            >
              <Globe size={14} />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full bg-brand-navy/[0.04] text-brand-navy hover:bg-[#FAB012]/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[#FAB012]/20 bg-white md:hidden overflow-hidden"
              id="mobile-drawer-menu"
            >
              <div className="flex flex-col gap-y-2 px-6 py-6 border-b border-border-subtle">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center min-h-[48px] font-display text-base font-bold uppercase tracking-wider text-brand-navy hover:text-[#00A8E8] transition-colors"
                    id={`mobile-nav-link-${link.id}`}
                  >
                    {link[lang]}
                  </a>
                ))}

                <div className="flex items-center justify-between border-t border-[#FAB012]/20 pt-4 mt-2">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-navy/60">
                    {lang === "en" ? "Select Language:" : "Seleccionar idioma:"}
                  </span>
                  <div className="flex gap-1 rounded-full bg-clinical-gray/40 p-1 border border-[#FAB012]/20">
                    <button
                      onClick={() => {
                        setLang("es");
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full px-3 text-xs font-display font-bold uppercase tracking-wider ${
                        lang === "es" ? "bg-brand-navy text-white" : "text-brand-navy/70"
                      }`}
                      id="mobile-lang-es"
                    >
                      ESP
                    </button>
                    <button
                      onClick={() => {
                        setLang("en");
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full px-3 text-xs font-display font-bold uppercase tracking-wider ${
                        lang === "en" ? "bg-brand-navy text-white" : "text-brand-navy/70"
                      }`}
                      id="mobile-lang-en"
                    >
                      ENG
                    </button>
                  </div>
                </div>

                <a
                  href={dict.hero.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-navy min-h-[48px] py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-sm active:scale-95 transition-all text-center"
                  id="mobile-whatsapp-cta"
                >
                  <MessageSquare size={18} />
                  <span>{dict.nav.contact}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
