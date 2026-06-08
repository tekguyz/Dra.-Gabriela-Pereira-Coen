import { LanguageType, DICTIONARY } from "@/shared/lib/constants";
import { Stethoscope, Award, HeartPulse } from "lucide-react";
import { motion } from "motion/react";

export function AboutDoctor({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];

  return (
    <section 
      id="about" 
      className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-brand-navy/5 bg-white"
    >
      {/* Left Column Academic Overview Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-brand-navy text-white rounded-3xl p-10 min-h-[420px] flex flex-col justify-between shadow-xl relative overflow-hidden lg:col-span-5"
        id="doctor-academic-card"
      >
        {/* Absolute low opacity ghosted Stethoscope vector icon in top-right */}
        <Stethoscope 
          className="opacity-10 h-48 w-48 absolute -right-4 -top-4 pointer-events-none text-white" 
          id="ghost- stethoscope-icon"
        />

        {/* Dynamic header label systems */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10 shadow-sm">
            <HeartPulse size={16} className="text-[#00A8E8] animate-pulse" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-white">
              {dict.about.tag}
            </span>
          </div>

          <h3 className="font-display text-3xl font-black tracking-tight text-white mb-2" id="academic-panel-title">
            {lang === "en" ? "Academic Credentials & Training" : "Credenciales y Formación Académica"}
          </h3>

          <p className="font-sans text-base leading-relaxed text-white/90" id="academic-panel-desc">
            {lang === "en"
              ? "Clinically certified practices upholding micro-surgical sanitation and precise diagnostics inside Chinandega, Nicaragua."
              : "Prácticas clínicas debidamente certificadas que vigilan la esterilización micro-quirúrgica y el diagnóstico certero."}
          </p>
        </div>

        {/* Verbatim Credentials Footer Frame */}
        <div className="border-t border-[#FAB012]/30 pt-6 mt-8 z-10" id="academic-panel-footer">
          <p className="font-display text-[10px] font-bold uppercase tracking-widest text-[#00A8E8] mb-1">
            {lang === "en" ? "Affiliation Details" : "Detalles de Afiliación"}
          </p>
          <p className="font-display text-base font-extrabold tracking-wide uppercase text-[#FAB012]">
            UNAN-León | Especialidad de Postgrado UAM
          </p>
        </div>
      </motion.div>

      {/* Right Column Narrative Panel */}
      <div className="space-y-6 lg:col-span-7 flex flex-col justify-center" id="doctor-narrative-panel">
        <div className="flex items-center gap-2">
          <Award size={16} className="text-[#FAB012]" />
          <span className="font-display text-[11px] uppercase tracking-widest text-brand-navy/60 font-bold">
            {lang === "en" ? "PRIMARY CLINICIAN PROFILE" : "PERFIL DE ESPECIALISTA"}
          </span>
        </div>

        {/* Section Header with Fluid Theme Token Key */}
        <h2 
          className="text-[var(--text-fluid-h2)] font-display font-extrabold tracking-tight uppercase text-brand-navy leading-none"
          id="doctor-main-heading"
        >
          {dict.about.heading}
        </h2>

        {/* Renders bio description data in italic tracking readable format */}
        <div className="space-y-4 font-sans text-brand-navy/90" id="doctor-main-body">
          <p className="text-lg leading-relaxed font-medium italic text-brand-navy" id="doctor-bio-body">
            {dict.about.body}
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-brand-navy/70">
            {lang === "en"
              ? "Prioritizing honest treatment checklists to save original tooth structures, we integrate the most advanced high-definition diagnostic scopes in endodontics. This establishes clinical certainty and leaves behind standard dental anxieties."
              : "Priorizando diagnósticos honestos para conservar las estructuras dentales originales, integramos tecnología avanzada de microscopía y endodoncia de consultorio en Chinandega. Esto devela la certeza en el tratamiento y disuelve la típica ansiedad de la silla."}
          </p>
        </div>

        {/* Quality Standards seal */}
        <div className="pt-6 border-t border-[#FAB012]/10 flex items-center justify-between" id="doctor-sign-seal">
          <div>
            <span className="font-display text-[10px] font-bold text-brand-navy/50 block uppercase tracking-widest">
              {lang === "en" ? "Nicaraguan Medical Registry" : "Matrícula Médica Minsa"}
            </span>
            <span className="font-display text-sm font-black tracking-widest text-[#00A8E8] mt-1 block">
              REG. M-88942-CP
            </span>
          </div>
          <div className="text-right">
            <span className="font-display text-[10px] font-bold text-brand-navy/50 block uppercase tracking-widest">
              {lang === "en" ? "Dental Surgery Director" : "Dirección de Cirugía Dental"}
            </span>
            <span className="font-display text-sm font-black text-brand-navy mt-1 block">
              Dra. Gabriela Pereira Coen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
