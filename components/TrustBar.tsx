import { LanguageType, DICTIONARY } from "@/shared/lib/constants";
import { CheckCircle, Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function TrustBar({ lang }: { lang: LanguageType }) {
  const dict = DICTIONARY[lang];

  const metrics = [
    {
      id: "m1",
      icon: <CheckCircle className="text-[#00A8E8]" size={20} />,
      label: dict.trust.m1,
    },
    {
      id: "m2",
      icon: <Award className="text-[#FAB012]" size={20} />,
      label: dict.trust.m2,
    },
    {
      id: "m3",
      icon: <ShieldCheck className="text-brand-navy" size={20} />,
      label: dict.trust.m3,
    },
  ];

  return (
    <div className="bg-white border-y border-[#FAB012]/10 py-10 px-6" id="trust-bar-section">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 bg-white">
        {/* Text track label */}
        <div className="w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-[#FAB012]/20 pb-6 lg:pb-0 lg:pr-8" id="trust-intro-label">
          <p className="text-sm font-display font-bold text-brand-navy/60 uppercase tracking-widest text-center lg:text-left max-w-[200px] mx-auto lg:mx-0">
            {dict.trust.text}
          </p>
        </div>

        {/* Metrics Grid Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto flex-1" id="trust-metrics-grid">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white p-4 border border-[#FAB012]/10 shadow-sm hover:shadow-md transition-shadow"
              id={`trust-metric-item-${m.id}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00A8E8]/5" id={`trust-icon-${m.id}`}>
                {m.icon}
              </div>
              <span className="font-display text-sm font-bold text-brand-navy text-center sm:text-left leading-snug">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
