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

      <div className="bg-white">
        <AchievementsSection />
      </div>

    </Layout>
  );
};

export default AchievementsPage;
