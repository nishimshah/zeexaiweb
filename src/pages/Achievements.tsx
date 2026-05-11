import React from 'react';
import Layout from '@/components/layout/Layout';
import AchievementsSection from '@/components/home/Achievements';
import { motion } from 'framer-motion';

const AchievementsPage = () => {
  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#050810] overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-8"
            >
              PROVEN PERFORMANCE
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter"
            >
              GLOBAL <span className="text-[#2563EB]">ACHIEVEMENTS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Documenting our journey of technological breakthroughs and successful global deployments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Moving Trail – right below the hero box */}
      <div className="bg-[#0A0F1A] py-5 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0F1A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0F1A] to-transparent z-10 pointer-events-none"></div>
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: 'trailScroll 22s linear infinite' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {[
                "AI Impact Summit 2026 · 1st Prize",
                "AI-HSE Best Startup Award",
                "E-Summit IIT Madras · 1st Prize",
                "EO GSEA Jaipur Winner",
                "TechXConf Excellence Award",
                "MinT-athon Top 9 · Bosch Funded",
                "NIRMAAN IITM Incubated",
                "TNGSS Top 5 AI Startup",
                "UP Govt Trial Invitation",
                "Jharkhand Governor Meeting",
                "AWS Summit Bengaluru 2025",
                "Tamil Nadu Global Startup Summit",
              ].map((label, idx) => (
                <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                  <span className="text-[11px] font-black text-white/70 uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes trailScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      <div className="bg-white">
        <AchievementsSection />
      </div>

    </Layout>
  );
};

export default AchievementsPage;
