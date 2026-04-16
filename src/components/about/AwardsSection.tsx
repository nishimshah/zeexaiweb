import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Target, Zap, Shield } from 'lucide-react';

const awards = [
  { id: 1, title: "1st Prize – AI Impact Summit 2026 India", year: "2026", icon: <Trophy /> },
  { id: 2, title: "Best Startup – AI-HSE 2026 Hyderabad", year: "2026", icon: <Award /> },
  { id: 3, title: "1st Prize – AI & DeepTech Bootcamp IITM", year: "2025", icon: <Target /> },
  { id: 4, title: "Best Pitch – E-Summit IIT Madras", year: "2025", icon: <Star /> },
  { id: 5, title: "EO GSEA Jaipur – Student Entrepreneurship", year: "2025", icon: <Zap /> },
  { id: 6, title: "AI Industry–Academia Excellence Award", year: "2025", icon: <Shield /> },
  { id: 7, title: "Top 9 Teams – MinT-athon IIT Madras", year: "2026", icon: <Award /> },
  { id: 8, title: "Selected by NIRMAAN IITM Pre-Incubator", year: "2025", icon: <Shield /> },
  { id: 9, title: "Top 5 AI Corporate-Startup – TNGSS 2025", year: "2025", icon: <Trophy /> },
  { id: 10, title: "Trial Opportunity – Union Minister Jitin Prasada", year: "2025", icon: <Target /> },
  { id: 11, title: "Governor of Jharkhand Recognition", year: "2025", icon: <Star /> },
  { id: 12, title: "Tamil Nadu Global Startup Summit 2025", year: "2025", icon: <Zap /> },
  { id: 13, title: "AWS Summit Bengaluru 2025 Showcase", year: "2025", icon: <Shield /> },
  { id: 14, title: "Startup Expo – E-Summit IIT Madras", year: "2025", icon: <Award /> },
  { id: 15, title: "Best Pitch Fest & E-Awards Victory", year: "2025", icon: <Trophy /> }
];

const gradients = [
  'from-blue-600 to-indigo-600',
  'from-emerald-600 to-teal-600',
  'from-orange-600 to-red-600',
  'from-indigo-600 to-purple-600',
  'from-pink-600 to-rose-600',
  'from-cyan-600 to-blue-600'
];

const AwardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % awards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden relative min-h-[900px] flex flex-col items-center justify-center">
      <div className="container-default px-8 relative h-[800px] w-full flex items-center justify-center">
        
        {/* Central Content - The Focal Heading */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="text-center max-w-2xl px-4 translate-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-[#E2E8F0] mb-8"
            >
              Proven Excellence
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1] uppercase tracking-tighter"
            >
              Pioneering the Future <br/>of <span className="text-[#2563EB]">AI Innovation</span>
            </motion.h2>

            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="mt-8 flex items-center justify-center gap-4"
            >
                <div className="h-[1px] w-12 bg-[#E2E8F0]"></div>
                <span className="text-[11px] font-black text-[#0F172A] uppercase tracking-[0.3em] flex items-center gap-2">
                    <Award size={14} className="text-[#2563EB]" />
                    {awards.length}+ Global Recognitions
                </span>
                <div className="h-[1px] w-12 bg-[#E2E8F0]"></div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.p 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] text-[#2563EB] mt-8 font-black uppercase tracking-[0.4em]"
              >
                  Latest Milestone: {awards[activeIndex].title}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* The Turn-by-Turn Semi-Circle Arc - Positioned Lower */}
        <div className="absolute top-[65%] flex items-center justify-center w-full">
          <div className="relative w-full h-full flex items-center justify-center">
            {awards.map((award, index) => {
              let diff = index - activeIndex;
              if (diff > awards.length / 2) diff -= awards.length;
              if (diff < -awards.length / 2) diff += awards.length;

              const isVisible = Math.abs(diff) <= 3;
              const angle = diff * 42; 
              
              const opacity = isVisible ? 1 - Math.abs(diff) * 0.22 : 0;
              const scale = isVisible ? 1 - Math.abs(diff) * 0.12 : 0.4;
              const zIndex = isVisible ? 20 - Math.abs(diff) : 0;

              return (
                <motion.div
                  key={award.id}
                  animate={{
                    transform: `rotate(${angle}deg) translate(0, -440px) rotate(${-angle}deg)`,
                    opacity,
                    scale,
                    zIndex
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 25 }}
                  className="absolute"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div 
                    className={`w-48 h-48 bg-gradient-to-br ${gradients[index % gradients.length]} p-7 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center border-[6px] border-white transition-all cursor-pointer`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 mb-4 text-white border border-white/20">
                      {React.cloneElement(award.icon as React.ReactElement, { size: 26 })}
                    </div>
                    <span className="text-[9px] font-black text-white/90 uppercase tracking-widest block mb-1">
                        {award.year}
                    </span>
                    <h3 className="text-[11px] font-black text-white uppercase tracking-tight leading-tight line-clamp-3">
                        {award.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Ring Background */}
        <div className="absolute top-[65%] w-[880px] h-[880px] border-2 border-dashed border-[#F4F7FB] rounded-full opacity-30 z-0 -translate-y-1/2"></div>
      </div>

      {/* Navigation Indicators */}
      <div className="mt-24 flex justify-center gap-2 relative z-40">
        {awards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              activeIndex === i ? 'w-12 bg-[#2563EB]' : 'w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
