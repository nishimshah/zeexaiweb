import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star, Zap, Shield } from 'lucide-react';

const awards = [
  { id: 1, title: "1st Prize – AI Impact Summit", year: "2026", icon: <Trophy />, category: "Innovation", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop&q=80" },
  { id: 2, title: "Best Startup – AI-HSE 2026", year: "2026", icon: <Award />, category: "Business", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80" },
  { id: 3, title: "1st Prize – AI bootcamp IITM", year: "2025", icon: <Target />, category: "Technical", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80" },
  { id: 4, title: "Best Pitch – E-Summit IITM", year: "2025", icon: <Star />, category: "Strategy", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
  { id: 5, title: "EO GSEA – Student Entrepreneur", year: "2025", icon: <Zap />, category: "Entrepreneur", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80" },
  { id: 6, title: "AI Excellence Award", year: "2025", icon: <Shield />, category: "Excellence", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80" },
  { id: 7, title: "Top 9 – MinT-athon IIT Madras", year: "2026", icon: <Award />, category: "Research", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&auto=format&fit=crop&q=80" },
  { id: 8, title: "NIRMAAN IITM Pre-Incubator", year: "2025", icon: <Shield />, category: "Growth", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80" },
  { id: 9, title: "Union Minister Recognition", year: "2025", icon: <Target />, category: "Policy", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80" },
  { id: 10, title: "Governor Recognition", year: "2025", icon: <Star />, category: "Recognition", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80" },
  { id: 11, title: "TN Global Startup Summit", year: "2025", icon: <Zap />, category: "Networking", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80" },
  { id: 12, title: "AWS Summit Showcase", year: "2025", icon: <Shield />, category: "Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80" },
  { id: 13, title: "Startup Expo IIT Madras", year: "2025", icon: <Award />, category: "Exhibition", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80" },
  { id: 14, title: "Best Pitch Fest Winner", year: "2025", icon: <Trophy />, category: "Victory", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80" }
];

import PartnersMarquee from '@/components/shared/PartnersMarquee';

const AwardsSection = () => {
  return (
    <section className="pt-5 pb-24 bg-white overflow-hidden relative">
      {/* ── Partners Marquee ─────────────────────────────────── */}
      <PartnersMarquee className="mb-16" />

      {/* ── Heading & Impact Summary ────────────────────────── */}
      <div className="container-default px-8 relative z-20 mb-12">
        <div className="flex flex-col items-center text-center">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[8px] font-black text-[#2563EB] uppercase tracking-[0.4em] mb-3"
            >
                Prestigious Global Recognition
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-4"
            >
                Award-Winning <span className="text-[#2563EB]">Excellence</span>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 text-[#475569]"
            >
                <div className="h-[1px] w-8 bg-[#E2E8F0]"></div>
                <span className="text-[9px] font-black uppercase tracking-widest">
                  14+ Global Recognitions <span className="mx-2 text-[#2563EB]">•</span> 3 Countries
                </span>
                <div className="h-[1px] w-8 bg-[#E2E8F0]"></div>
            </motion.div>
        </div>
      </div>

      {/* ── Regular Grid (Filled Rows) ──────────────────────── */}
      <div className="container-default px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-[#f8f9fb] border border-[#E8ECF1] flex flex-col"
            >
              {/* Image with fixed aspect ratio for uniformity */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30"></div>
                
                {/* Year tag */}
                <div className="absolute bottom-2 right-2">
                   <span className="text-[7px] font-black text-white uppercase tracking-widest bg-black/20 backdrop-blur-sm px-1.5 py-0.5 rounded">
                     {award.year}
                   </span>
                </div>
              </div>
              
              <div className="p-3 flex-grow flex flex-col">
                <div className="flex items-center gap-1.5 mb-1.5">
                   <div className="text-[#2563EB]">
                     {React.cloneElement(award.icon as React.ReactElement, { size: 10 })}
                   </div>
                   <span className="text-[6px] font-black text-[#64748B] uppercase tracking-widest truncate">
                     {award.category}
                   </span>
                </div>
                <h3 className="text-[9px] font-black text-[#0F172A] uppercase tracking-tight leading-tight line-clamp-2">
                  {award.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Text - Smaller */}
      <div className="mt-16 flex flex-col items-center opacity-[0.02] select-none pointer-events-none">
        <h3 className="text-4xl md:text-[8rem] font-black text-[#0F172A] uppercase tracking-[0.2em] leading-none whitespace-nowrap">
          ZEEX • IMPACT
        </h3>
      </div>
    </section>
  );
};

export default AwardsSection;
