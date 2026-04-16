import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Zap, Globe, Shield } from 'lucide-react';

const achievements = [
  {
    id: '01',
    category: 'MILESTONES',
    title: 'IIT Madras Nirmaan 2024',
    description: 'Selected for pre-incubation under the prestigious Nirmaan program at IIT Madras.',
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg'
  },
  {
    id: '02',
    category: 'RECOGNITION',
    title: 'Top AI Infrastructure 2024',
    description: 'Recognized for engineering the most resilient AI surveillance architecture.',
    image: 'https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg'
  },
  {
    id: '03',
    category: 'DEPLOYMENTS',
    title: '500+ Active Nodes',
    description: 'Global deployment of autonomous security units across major industrial hubs.',
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg'
  },
  {
    id: '04',
    category: 'INTEGRATIONS',
    title: 'Fortune 500 Partners',
    description: 'Successful system integration with leading global logistics and manufacturing firms.',
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg'
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="container-default px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            CAPABILITIES & IMPACT
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
            Our <span className="text-[#2563EB]">Track Record</span>
          </h2>
        </div>

        {/* Achievement Card Layout - Inspired by Image */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white border-2 border-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[500px]">
            
            {/* Left Section: Vertical Label + List */}
            <div className="flex-1 flex relative">
              {/* Vertical Side Text */}
              <div className="w-16 border-r border-[#E2E8F0] flex flex-col justify-between py-12 items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#475569] -rotate-90 whitespace-nowrap origin-center">MILESTONES / 2024</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#475569] -rotate-90 whitespace-nowrap origin-center">ZEEX AI NODES</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#475569] -rotate-90 whitespace-nowrap origin-center">PROVEN IMPACT</span>
              </div>

              {/* Main List */}
              <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  {achievements.map((item, index) => (
                    <div 
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`cursor-pointer transition-all duration-300 group ${activeIndex === index ? 'opacity-100 translate-x-4' : 'opacity-30 hover:opacity-60'}`}
                    >
                      <div className="flex items-center gap-4 mb-1">
                        <span className="text-[10px] font-black text-[#2563EB] tracking-widest">{item.id}</span>
                        <span className="text-[8px] font-black text-[#475569] uppercase tracking-widest">{item.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-[#0F172A] uppercase tracking-tighter leading-none flex items-center gap-4">
                        {item.title}
                        {activeIndex === index && <ArrowUpRight className="text-[#2563EB]" size={24} />}
                      </h3>
                      {activeIndex === index && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 text-[#475569] font-medium max-w-sm text-sm leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section: Image Stack Layout */}
            <div className="lg:w-[40%] bg-[#F4F7FB] border-l-2 lg:border-[#0F172A] relative overflow-hidden">
               <div className="h-full w-full flex flex-col p-4 gap-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="flex-1 flex flex-col gap-4"
                    >
                      {/* Featured Image */}
                      <div className="flex-grow rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-gray-200 border border-[#E2E8F0]">
                        <img 
                          src={achievements[activeIndex].image} 
                          alt={achievements[activeIndex].title}
                          className="w-full h-full object-cover scale-110 active:scale-100 transition-transform duration-1000"
                        />
                      </div>
                      {/* Secondary Technical Detail (Small) */}
                      <div className="h-24 rounded-2xl bg-[#0F172A] p-6 flex items-center justify-between">
                         <div className="flex flex-col">
                            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Verification Node</span>
                            <span className="text-xs font-black text-white uppercase tracking-tight">Status: Active verified</span>
                         </div>
                         <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#2563EB]">
                            <Shield size={18} />
                         </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Decorative "Preview" cards mimicking the image's stack */}
                  <div className="absolute top-0 right-4 h-full pointer-events-none opacity-10">
                    <div className="flex flex-col gap-4 py-4">
                       {[1,2,3,4,5].map(i => (
                         <div key={i} className="w-24 aspect-video rounded-lg bg-[#0F172A]" />
                       ))}
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
