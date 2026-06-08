import { LanguageType, DICTIONARY } from "@/shared/lib/constants";
import { Activity, Shield, Sparkles, Hammer, Users, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export function ServicesSection({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];

  const servicesList = [
    {
      id: "s1",
      icon: <Activity className="text-brand-navy group-hover:text-[#00A8E8] transition-colors" size={24} />,
      title: dict.services.s1_title,
      desc: dict.services.s1_desc,
    },
    {
      id: "s2",
      icon: <Shield className="text-[#00A8E8] group-hover:text-[#FAB012] transition-colors" size={24} />,
      title: dict.services.s2_title,
      desc: dict.services.s2_desc,
    },
    {
      id: "s3",
      icon: <Sparkles className="text-[#FAB012] group-hover:text-brand-navy transition-colors" size={24} />,
      title: dict.services.s3_title,
      desc: dict.services.s3_desc,
    },
    {
      id: "s4",
      icon: <Hammer className="text-brand-navy group-hover:text-[#00A8E8] transition-colors" size={24} />,
      title: dict.services.s4_title,
      desc: dict.services.s4_desc,
    },
    {
      id: "s5",
      icon: <Users className="text-[#00A8E8] group-hover:text-[#FAB012] transition-colors" size={24} />,
      title: dict.services.s5_title,
      desc: dict.services.s5_desc,
    },
    {
      id: "s6",
      icon: <ShoppingBag className="text-[#FAB012] group-hover:text-brand-navy transition-colors" size={24} />,
      title: dict.services.s6_title,
      desc: dict.services.s6_desc,
    },
  ];

  return (
    <section id="services" className="py-28 px-6 bg-clinical-gray">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Component Block Layout Stack - Center aligned */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="services-layout-header">
          <span 
            className="text-xs font-display font-bold text-[#00A8E8] tracking-[0.2em] uppercase block mb-2"
            id="services-header-tag"
          >
            {dict.services.tag}
          </span>
          <h2 
            className="text-[var(--text-fluid-h2)] font-display font-black uppercase text-brand-navy tracking-tight"
            id="services-header-title"
          >
            {dict.services.title}
          </h2>
          <p 
            className="text-base font-body text-brand-navy/70 max-w-2xl mx-auto mt-4 leading-relaxed"
            id="services-header-subtitle"
          >
            {dict.services.subtitle}
          </p>
        </div>

        {/* Asymmetric Core Grid Matrix */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="services-asymmetric-grid"
        >
          {servicesList.map((item, idx) => {
            // Apply asymmetric dynamic shifts directly into layout tracks for elite print appeal
            const flexOffset = idx % 3 === 1 ? "lg:translate-y-4" : idx % 3 === 2 ? "lg:-translate-y-4" : "";
            const isHighlight = item.id === "s6";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`transition-all duration-300 group flex flex-col justify-between min-h-[280px] p-8 rounded-3xl ${flexOffset} ${
                  isHighlight 
                    ? "bg-gradient-to-br from-white via-clinical-gray to-[#FAB012]/5 border-2 border-[#FAB012]/30 shadow-md relative overflow-hidden" 
                    : "bg-white border border-[#FAB012]/10 hover:border-[#00A8E8]/30 shadow-xs"
                }`}
                id={`services-card-${item.id}`}
              >
                {isHighlight && (
                  <div className="absolute top-4 right-6 bg-[#FAB012] text-brand-navy px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-wider shadow-sm z-10">
                    {dict.productsBadge.tag}
                  </div>
                )}
                <div className="relative z-10">
                  {/* Isolated framing layout box container for vector details */}
                  <div 
                    className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
                      isHighlight ? "bg-white border border-[#FAB012]/20 shadow-sm" : "bg-[#F8F9FA]"
                    }`}
                    id={`services-item-icon-wrap-${item.id}`}
                  >
                    {item.icon}
                  </div>

                  {/* Service Card content info */}
                  <div className="space-y-2">
                    <h3 
                      className="text-lg font-display font-bold tracking-tight text-brand-navy group-hover:text-[#00A8E8] transition-colors"
                      id={`services-item-title-${item.id}`}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm font-body text-brand-navy/80 leading-relaxed mt-2"
                      id={`services-item-desc-${item.id}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Aesthetic static bottom detail loop (minimal decorative alignment line) */}
                <div className="pt-6 mt-6 border-t border-brand-navy/[0.04] flex items-center justify-between text-xs font-display tracking-widest font-bold text-brand-navy/20 uppercase relative z-10">
                  <span>0{idx + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A8E8] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action CTA bottom banner */}
        <div className="text-center pt-12" id="services-bottom-cta">
          <p className="font-display text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-6">
            {lang === "en" 
              ? "All treatments structured under strict international clinical protocols" 
              : "Todos los tratamientos estructurados bajo rigurosos protocolos clínicos internacionales"}
          </p>
          <a
            href={dict.hero.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-3 rounded-full bg-brand-navy px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-[#00A8E8] hover:scale-[1.02] shadow-sm transition-all duration-300"
            id="services-whatsapp-trigger"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
               <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12.004 2c-5.517 0-9.996 4.48-9.996 10c0 1.77.462 3.434 1.273 4.887L2.004 22l5.277-1.385A9.953 9.953 0 0 0 12.004 22c5.517 0 9.996-4.48 9.996-10c0-5.52-4.479-10-9.996-10zm0 1.778c4.542 0 8.222 3.68 8.222 8.222c0 4.542-3.68 8.222-8.222 8.222c-1.637 0-3.155-.479-4.435-1.302l-.319-.208l-3.13.821l.835-3.045l-.229-.364A8.17 8.17 0 0 1 3.782 12c0-4.542 3.68-8.222 8.222-8.222z"/><path d="M15.935 13.438c-.283-.142-1.674-.827-1.933-.922c-.26-.095-.448-.142-.637.142c-.188.283-.73.922-.896 1.11c-.165.188-.33.212-.613.07a7.79 7.79 0 0 1-2.28-1.407a8.59 8.59 0 0 1-1.577-1.964c-.165-.283-.018-.435.124-.576c.128-.127.283-.33.425-.495c.142-.165.189-.283.283-.472c.094-.189.047-.354-.023-.495c-.071-.142-.637-1.533-.873-2.1c-.23-.557-.462-.482-.637-.49c-.165-.008-.354-.01-.543-.01c-.189 0-.495.07-.755.354c-.26.283-.99 0.967-.99 2.36c0 1.391 1.014 2.736 1.155 2.924c.142.189 1.996 3.048 4.837 4.27c.676.29 1.203.464 1.614.595c.68.216 1.298.185 1.787.113c.545-.08 1.674-.684 1.91-1.344c.236-.66.236-1.226.165-1.344c-.07-.118-.26-.189-.543-.33z"/></svg>
            </div>
            <span>{dict.hero.cta}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
