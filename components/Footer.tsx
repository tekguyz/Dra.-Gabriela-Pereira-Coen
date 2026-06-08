"use client";

import { LanguageType, DICTIONARY, CLINIC_DATA } from "@/shared/lib/constants";
import { MapPin, Phone, MessageSquare, Instagram, Facebook, Award, ArrowUpRight } from "lucide-react";

export function Footer({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 px-6 border-t border-white/5" id="clinical-footer">
      <div className="max-w-7xl mx-auto space-y-16" id="footer-inner-wrapper">
        
        {/* Structural Column Spread Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12" id="footer-cols-grid">
          
          {/* Column 1: Branding & Physical Address metadata - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-6" id="footer-col-1-brand-details">
            <div className="flex items-center gap-2" id="footer-logo">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10" id="footer-logo-wrap">
                <Award className="text-[#FAB012]" size={20} />
              </div>
              <div>
                <span className="font-display text-base font-extrabold uppercase tracking-widest text-[#00A8E8] block leading-none">
                  DRA. GABRIELA
                </span>
                <span className="font-display text-[10px] uppercase font-bold tracking-wider text-[#00A8E8] block mt-1">
                  {lang === "en" ? "Endodontics Specialist" : "Especialista en Endodoncia"}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm">
              {lang === "en" 
                ? "Providing dental surgery excellence, absolute sterilisation protocols, and precise diagnosis procedures in Chinandega." 
                : "Excelencia clínica en cirugía general y tratamientos de conductos avanzados con estrictas pautas de esterilización en Chinandega."}
            </p>

            {/* Direct Contact Metadata Panel */}
            <div className="space-y-4 pt-2" id="footer-address-meta">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#00A8E8] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-white/80 leading-relaxed">
                  {dict.footer.addressValue}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#FAB012] shrink-0" />
                <span className="font-sans text-sm font-bold text-white/90">
                  <span className="text-white/50 font-normal mr-1">{lang === "en" ? "Landline: " : "Tel. Fijo: "}</span>
                  <a href={`tel:${CLINIC_DATA.phoneLandline.replace(/\s+/g, '')}`} className="hover:text-[#FAB012] transition-colors">
                    {CLINIC_DATA.phoneLandline}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MessageSquare size={18} className="text-[#25D366] shrink-0" />
                <span className="font-sans text-sm font-bold text-white/90">
                  <span className="text-white/50 font-normal mr-1">{lang === "en" ? "WhatsApp: " : "WhatsApp: "}</span>
                  <a 
                    href={CLINIC_DATA.whatsappBaseUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    {CLINIC_DATA.phoneMobile}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Hours / Clinical Schedules - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-2-times">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#00A8E8]">
              {dict.footer.hoursLabel}
            </h4>
            <div className="space-y-3 font-sans text-sm text-white/80" id="operating-hours-lines">
              <div className="pb-2 border-b border-white/5 flex justify-between gap-4">
                <span>{lang === "en" ? "Mon – Fri" : "Lunes – Viernes"}</span>
                <span className="text-white font-semibold">8:00 AM – 5:00 PM</span>
              </div>
              <div className="pb-2 border-b border-white/5 flex justify-between gap-4">
                <span>{lang === "en" ? "Saturday" : "Sábado"}</span>
                <span className="text-white font-semibold flex items-center gap-1">
                  8:00 AM – 12:00 MD
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{lang === "en" ? "Sunday" : "Domingo"}</span>
                <span className="text-[#FAB012] font-semibold uppercase font-display text-xs tracking-widest">{lang === "en" ? "Closed" : "Cerrado"}</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 border border-white/10 text-xs text-white/80 leading-relaxed font-sans shadow-sm">
              <strong className="text-white font-display text-xs tracking-wider uppercase">{lang === "en" ? "Note" : "Importante"}:</strong><br/>
              <span className="inline-block mt-1">
                {lang === "en" 
                  ? "Clinics operate strictly via reservations to guarantee customized diagnostic intervals." 
                  : "Atendemos previa cita para asegurar el tiempo íntegro de su diagnóstico."}
              </span>
            </div>
          </div>

          {/* Column 3: Directory external links & Socials - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6" id="footer-col-3-links">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#00A8E8]">
              {dict.footer.linksLabel}
            </h4>
            <ul className="space-y-3 font-sans text-sm" id="footer-links-list">
              <li>
                <a 
                  href={CLINIC_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-white/5 text-white/80 hover:text-white transition-colors"
                  id="footer-link-gmaps"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#00A8E8]" />
                    <span>{dict.footer.map}</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href={CLINIC_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-white/5 text-white/80 hover:text-[#FAB012] transition-colors"
                  id="footer-link-instagram"
                >
                  <div className="flex items-center gap-2">
                    <Instagram size={16} className="text-[#FAB012]" />
                    <span>{dict.footer.instagram}</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href={CLINIC_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 text-white/80 hover:text-[#00A8E8] transition-colors"
                  id="footer-link-facebook"
                >
                  <div className="flex items-center gap-2">
                    <Facebook size={16} className="text-[#00A8E8]" />
                    <span>{dict.footer.facebook}</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Dynamic copyright lines, safety warnings & scroll-to-top */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom-stamp">
          <div className="space-y-1 text-center md:text-left" id="copyright-box">
            <p className="font-display text-xs tracking-wider text-white/50 uppercase">
              © {year} DRA. GABRIELA PEREIRA COEN. {lang === "en" ? "All Rights Reserved." : "Todos los Derechos Reservados."}
            </p>
            <p className="font-sans text-xs text-white/40">
              {lang === "en"
                ? "Chinandega, Nicaragua. Specialty postgraduate endodontist certification UNAN & UAM."
                : "Chinandega, Nicaragua. Prácticas odontológicas y endodónticas certificadas por UNAN-León & UAM."}
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="rounded-full bg-white/5 min-h-[48px] px-6 py-2 border border-white/10 text-[10px] font-display font-bold tracking-widest uppercase hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            id="back-to-top-btn"
          >
            {lang === "en" ? "↑ SCROLL TO TOP" : "↑ SUBIR A LA CIMA"}
          </button>
        </div>

      </div>
    </footer>
  );
}
