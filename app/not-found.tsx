"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Sparkles, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-brand-navy p-6" id="not-found-page-wrapper">
      {/* Decorative Golden Ambient Ray */}
      <div 
        className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00A8E8] via-[#FAB012] to-[#00A8E8]" 
        id="not-found-top-accent"
      />

      <div className="max-w-xl w-full text-center space-y-8" id="not-found-container">
        
        {/* Animated Brand Stamp / Shield */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-clinical-gray border border-[#FAB012]/30 relative"
          id="not-found-icon-wrap"
        >
          <FileQuestion className="text-[#00A8E8] animate-pulse" size={44} />
          {/* Sparkle accent */}
          <span className="absolute -top-1 -right-1 text-[#FAB012]">
            <Sparkles size={20} />
          </span>
        </motion.div>

        {/* Dynamic Dual-Language Copy Layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="space-y-6"
          id="not-found-text-stack"
        >
          {/* English copy */}
          <div className="space-y-2 border-b border-brand-navy/[0.06] pb-6" id="not-found-english-card">
            <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
              Page Not Found
            </h1>
            <p className="font-sans text-sm text-brand-navy/70 leading-relaxed max-w-md mx-auto">
              The clinical page you are looking for has been moved, renamed, or is temporarily offline. Let us guide you back to our care services.
            </p>
          </div>

          {/* Spanish copy */}
          <div className="space-y-2 pt-2" id="not-found-spanish-card">
            <h2 className="font-display text-2xl font-black tracking-tight text-brand-navy/90">
              Página No Encontrada
            </h2>
            <p className="font-sans text-sm text-brand-navy/70 leading-relaxed max-w-md mx-auto">
              El segmento clínico que busca ha sido retirado, cambiado de nombre o está temporalmente fuera de servicio. Con gusto le guiaremos de regreso.
            </p>
          </div>
        </motion.div>

        {/* Return Button with micro-effects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="pt-4"
          id="not-found-action-wrapper"
        >
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-navy px-8 font-display text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#00A8E8] active:scale-95 shadow-md hover:shadow-lg"
            id="not-found-home-redirect-trigger"
          >
            <Home size={16} />
            <span>Go to Homepage • Ir a Inicio</span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
