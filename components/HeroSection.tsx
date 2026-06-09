import { LanguageType, DICTIONARY, CLINIC_DATA } from "@/shared/lib/constants";
import { MessageSquare, ShieldCheck, Heart, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-white to-white py-10 sm:py-20 lg:py-32">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[350px] w-[350px] rounded-full bg-[#00A8E8]/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[10%] -z-10 h-[400px] w-[400px] rounded-full bg-[#FAB012]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          
          {/* Text/CTA Column */}
          <div className="flex flex-col space-y-5 sm:space-y-6 lg:col-span-7">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 sm:px-5 sm:py-2.5 border border-[#FAB012]/30 shadow-sm"
              id="hero-tag-badge"
            >
              <Sparkles size={13} className="text-[#FAB012] shrink-0" />
              <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy">
                {dict.hero.tag}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-[4.25rem] xl:text-[4.5rem] font-black tracking-tight text-brand-navy leading-[1.15] sm:leading-[1.05]"
              id="hero-headline"
            >
              {dict.hero.headline}
            </motion.h1>

            {/* Subheadline paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-brand-navy/80 max-w-2xl"
              id="hero-subheadline"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* Call to Action and Verification badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2"
              id="hero-cta-group"
            >
              <a
                href={dict.hero.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-brand-navy px-5 py-3 sm:px-8 sm:py-4 font-display text-xs sm:text-sm uppercase tracking-wider font-bold text-white shadow-xl hover:bg-[#00A8E8] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] whitespace-nowrap flex-nowrap shrink-0"
                id="hero-whatsapp-link"
              >
                <div className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12.004 2c-5.517 0-9.996 4.48-9.996 10c0 1.77.462 3.434 1.273 4.887L2.004 22l5.277-1.385A9.953 9.953 0 0 0 12.004 22c5.517 0 9.996-4.48 9.996-10c0-5.52-4.479-10-9.996-10zm0 1.778c4.542 0 8.222 3.68 8.222 8.222c0 4.542-3.68 8.222-8.222 8.222c-1.637 0-3.155-.479-4.435-1.302l-.319-.208l-3.13.821l.835-3.045l-.229-.364A8.17 8.17 0 0 1 3.782 12c0-4.542 3.68-8.222 8.222-8.222z"/><path d="M15.935 13.438c-.283-.142-1.674-.827-1.933-.922c-.26-.095-.448-.142-.637.142c-.188.283-.73.922-.896 1.11c-.165.188-.33.212-.613.07a7.79 7.79 0 0 1-2.28-1.407a8.59 8.59 0 0 1-1.577-1.964c-.165-.283-.018-.435.124-.576c.128-.127.283-.33.425-.495c.142-.165.189-.283.283-.472c.094-.189.047-.354-.023-.495c-.071-.142-.637-1.533-.873-2.1c-.23-.557-.462-.482-.637-.49c-.165-.008-.354-.01-.543-.01c-.189 0-.495.07-.755.354c-.26.283-.99 0.967-.99 2.36c0 1.391 1.014 2.736 1.155 2.924c.142.189 1.996 3.048 4.837 4.27c.676.29 1.203.464 1.614.595c.68.216 1.298.185 1.787.113c.545-.08 1.674-.684 1.91-1.344c.236-.66.236-1.226.165-1.344c-.07-.118-.26-.189-.543-.33z"/></svg>
                </div>
                <span>{dict.hero.cta}</span>
              </a>

              {/* Secure Phone fallback for local clicks */}
              <div className="flex flex-col px-2 justify-center sm:justify-start" id="hero-phone-container">
                <span className="font-display text-[10px] font-bold text-brand-navy/60 uppercase tracking-widest">
                  {lang === "en" ? "Direct Office Line" : "Línea Directa de Oficina"}
                </span>
                <a
                  href={`tel:${CLINIC_DATA.phoneMobile.replace(/\s+/g, "")}`}
                  className="font-display text-base sm:text-lg font-black text-brand-navy hover:text-[#00A8E8] transition-colors"
                >
                  {CLINIC_DATA.phoneDisplayMobile}
                </a>
              </div>
            </motion.div>

            {/* Social reference line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-xs text-brand-navy/60 italic"
              id="hero-social-subtext"
            >
              {dict.hero.socialSubtext}
            </motion.p>
          </div>

          {/* Clinical Visual Window - Clean Luxury Aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative"
            id="hero-visual-graphic"
          >
            <div className="relative w-full max-w-md rounded-[2.5rem] bg-white p-8 border border-[#FAB012]/30 shadow-2xl shadow-brand-navy/5 overflow-hidden">
              
              {/* Soft interior background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-clinical-gray/50 to-[#00A8E8]/5" />

              {/* Interactive clinical display layout */}
              <div className="relative flex flex-col space-y-8 z-10">
                
                {/* Header Profile Info */}
                <div className="flex items-center justify-center border-b border-[#FAB012]/20 pb-6">
                  <div className="text-center">
                    <Award size={32} className="mx-auto text-[#FAB012] mb-3" />
                    <span className="font-display text-sm uppercase tracking-widest text-[#00A8E8] font-bold block mb-1">
                      {lang === "en" ? "Endodontics Specialist" : "Especialidad en Endodoncia"}
                    </span>
                    <h3 className="font-display text-2xl font-black text-brand-navy uppercase tracking-tight">
                      Dra. G. Pereira Coen
                    </h3>
                  </div>
                </div>

                {/* Aesthetic vector alignment */}
                <div className="relative flex h-64 w-full items-center justify-center rounded-[2rem] bg-white/80 p-6 border border-[#FAB012]/10 shadow-sm">
                  <svg
                    className="h-full w-full text-brand-navy drop-shadow-sm"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Clean luxury tooth contour */}
                    <path
                      d="M 85 60 C 85 30, 115 30, 115 60 C 115 80, 135 90, 135 125 C 135 160, 115 175, 110 175 C 105 175, 103 150, 100 150 C 97 150, 95 175, 90 175 C 85 175, 65 160, 65 125 C 65 90, 85 80, 85 60 Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinejoin="round"
                    />
                    {/* Subtle elegant Sparkle inside tooth */}
                    <path d="M 120 50 L 123 58 L 131 61 L 123 64 L 120 72 L 117 64 L 109 61 L 117 58 Z" fill="#FAB012" />
                  </svg>

                  {/* Floating WhatsApp Bubble */}
                  <a
                    href={dict.hero.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-4 -right-4 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300 z-20 tooltip-trigger"
                    aria-label="WhatsApp Dr. Gabriela"
                  >
                     <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12.004 2c-5.517 0-9.996 4.48-9.996 10c0 1.77.462 3.434 1.273 4.887L2.004 22l5.277-1.385A9.953 9.953 0 0 0 12.004 22c5.517 0 9.996-4.48 9.996-10c0-5.52-4.479-10-9.996-10zm0 1.778c4.542 0 8.222 3.68 8.222 8.222c0 4.542-3.68 8.222-8.222 8.222c-1.637 0-3.155-.479-4.435-1.302l-.319-.208l-3.13.821l.835-3.045l-.229-.364A8.17 8.17 0 0 1 3.782 12c0-4.542 3.68-8.222 8.222-8.222z"/><path d="M15.935 13.438c-.283-.142-1.674-.827-1.933-.922c-.26-.095-.448-.142-.637.142c-.188.283-.73.922-.896 1.11c-.165.188-.33.212-.613.07a7.79 7.79 0 0 1-2.28-1.407a8.59 8.59 0 0 1-1.577-1.964c-.165-.283-.018-.435.124-.576c.128-.127.283-.33.425-.495c.142-.165.189-.283.283-.472c.094-.189.047-.354-.023-.495c-.071-.142-.637-1.533-.873-2.1c-.23-.557-.462-.482-.637-.49c-.165-.008-.354-.01-.543-.01c-.189 0-.495.07-.755.354c-.26.283-.99 0.967-.99 2.36c0 1.391 1.014 2.736 1.155 2.924c.142.189 1.996 3.048 4.837 4.27c.676.29 1.203.464 1.614.595c.68.216 1.298.185 1.787.113c.545-.08 1.674-.684 1.91-1.344c.236-.66.236-1.226.165-1.344c-.07-.118-.26-.189-.543-.33z"/></svg>
                  </a>
                </div>

                {/* Clean rating metric */}
                <div className="pt-2 text-center">
                   <div className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-5 py-2 border border-[#FAB012]/30 shadow-sm">
                      <span className="font-display text-sm font-bold text-brand-navy">5.0</span>
                      <div className="flex text-[#FAB012]">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="drop-shadow-sm">{star}</span>
                        ))}
                      </div>
                      <span className="font-display text-sm font-bold text-[#00A8E8] uppercase tracking-wide">
                        {lang === "en" ? "Certified Specialist" : "Dentista Certificada"}
                      </span>
                   </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
