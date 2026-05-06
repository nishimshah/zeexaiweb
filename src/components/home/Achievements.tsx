import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Zap, Globe, Shield, Star, BookOpen, Building, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const achievementCategories = [
  { id: 'awards', title: 'Awards & Wins', icon: <Star size={16} /> },
  { id: 'incubation', title: 'Incubation', icon: <Building size={16} /> },
  { id: 'government', title: 'Government', icon: <Shield size={16} /> },
  { id: 'events', title: 'Events & Expos', icon: <MapPin size={16} /> }
];

const achievements = [
  {
    id: '01',
    section: 'awards',
    category: 'INTERNATIONAL AWARD | 2026',
    title: '1st Prize – AI Impact Summit 2026 India (YUVAI Category)',
    description: "ZEEX AI (Z-TRACS) won 1st Prize at the prestigious AI Impact Summit 2026 India in the YUVAI category. From being selected among the Top 8 young innovators globally to emerging as the International Winner in the Final Round.",
    bullets: [
      "Recognized by Hon'ble Minister Ashwini Vaishnaw and Union Minister of State Jitin Prasada",
      "Recognized by Abhishek Singh, CEO of IndiaAI",
      "Affirms commitment to strengthening India's AI ecosystem"
    ],
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg'
  },
  {
    id: '02',
    section: 'awards',
    category: 'INTERNATIONAL CONFERENCE AWARD | 2026',
    title: 'Best Startup in AI-Enabled Monitoring System Award',
    description: 'Recognized as the Best Startup in AI-Enabled Monitoring System at the International Conference & Exhibition on Artificial Intelligence in Health, Safety & Environment (AI-HSE 2026), Hyderabad.',
    bullets: [
      "Awarded for innovation in building an AI-enabled Monitoring & Surveillance System",
      "Designed to transform safety infrastructure across industries and smart environments",
      "Met national and international leaders, founders, and safety experts"
    ],
    image: 'https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg'
  },
  {
    id: '03',
    section: 'awards',
    category: 'INSTITUTIONAL COMPETITION | 2025',
    title: '1st Prize – AI & DeepTech Bootcamp, E-Summit IIT Madras',
    description: 'Won 1st Prize at the AI & DeepTech Bootcamp during E-Summit at Indian Institute of Technology, Madras — a strong validation of the problem being solved and direction being built.',
    bullets: [
      "Completed end-to-end product stack: Own AI models, in-house hardware, fully integrated proprietary software",
      "Recognized as a full-stack AI company ready for real-world deployments"
    ],
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg'
  },
  {
    id: '04',
    section: 'awards',
    category: 'INSTITUTIONAL COMPETITION | 2025',
    title: 'Best Pitch & E-Awards – E-Summit IIT Madras (2nd Place Overall)',
    description: 'Won Best Pitch and E-Awards at the prestigious E-Summit, securing 2nd place overall — a significant milestone reaffirming commitment to building cutting-edge AI-driven solutions.',
    bullets: [
      "Supported by event sponsors Masters' Union and WestBridge Capital",
      "Organized by IIT Madras and E-Cell IIT Madras"
    ],
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg'
  },
  {
    id: '05',
    section: 'awards',
    category: 'ENTREPRENEURSHIP AWARD | 2025',
    title: 'EO GSEA Jaipur – Global Student Entrepreneurship Award',
    description: 'Founder Gaurav Yadav won the EO GSEA Jaipur (Global Student Entrepreneurship Award), reflecting the collective effort, belief, and execution behind Zeex AI.',
    bullets: [
      "Mentored by Rahul Singhi, Chair – EO GSEA Jaipur",
      "Supported by NIRMAAN IITM and IIT Madras BS Programme"
    ],
    image: 'https://i.ibb.co/n8cWLpQy/sanidhya.jpg'
  },
  {
    id: '06',
    section: 'awards',
    category: 'INDUSTRY AWARD | 2025',
    title: 'AI Industry–Academia Collaboration Excellence Award – TechXConf 2025',
    description: 'Gaurav Yadav received the AI Industry–Academia Collaboration Excellence Award at TechXConf AI Awards 2025 — Asia\'s largest AI & Cloud Conference.',
    bullets: [
      "Honored for bridging the gap between research and real-world AI innovation",
      "Fostering impactful partnerships that drive technological progress",
      "Thanks to NIRMAAN IITM and IIT Madras for nurturing Zeex AI"
    ],
    image: 'https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg'
  },
  {
    id: '07',
    section: 'incubation',
    category: 'PROTOTYPE DEVELOPMENT GRANT | MARCH 2026',
    title: 'Selected Among Top 9 Teams – MinT-athon, IIT Madras',
    description: 'ZEEX AI selected among the Top 9 teams at the MinT-athon for Students & Industry Professionals at IIT Madras.',
    bullets: [
      "Selected for prototype development stage with funding support",
      "Backed by Bosch Mobility for prototype funding",
      "Validation of vision for real-world testing and scalability"
    ],
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg'
  },
  {
    id: '08',
    section: 'incubation',
    category: 'INCUBATION | 2025',
    title: 'Selected by NIRMAAN IITM – Pre-Incubator of IIT Madras',
    description: 'ZEEX AI selected by NIRMAAN IITM, the prestigious pre-incubator of Indian Institute of Technology, Madras.',
    bullets: [
      "Access to world-class mentorship from impactful venture experts",
      "State-of-the-art workspace designed to nurture creativity",
      "Funding and resources to turn bold ideas into reality"
    ],
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg'
  },
  {
    id: '09',
    section: 'incubation',
    category: 'SUMMIT RECOGNITION | OCTOBER 2025',
    title: 'Top 5 AI Corporate-Startup Companies – TNGSS 2025',
    description: 'ZEEX AI selected among Top 5 AI Corporate-Startup Companies at the Tamil Nadu Global Startup Summit 2025.',
    bullets: [
      "Pitched vision to 30+ country investors and industry leaders",
      "Showcased future of smart safety and infrastructure intelligence",
      "Platform inaugurated by Hon'ble Chief Minister M.K. Stalin"
    ],
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg'
  },
  {
    id: '10',
    section: 'government',
    category: 'GOVERNMENT ENGAGEMENT | 2025',
    title: 'Presentation to Union Minister Jitin Prasada – Trial in UP',
    description: 'Invited for a trial opportunity in Shahjahanpur, Uttar Pradesh to transform urban safety and traffic management through AI-powered solutions.',
    bullets: [
      "Met City SP and Traffic Administrator to assess problem areas",
      "Demonstrated real-time computer vision and traffic flow optimization",
      "Invited to explore control room operations and potential interventions"
    ],
    image: 'https://i.ibb.co/n8cWLpQy/sanidhya.jpg'
  },
  {
    id: '11',
    section: 'government',
    category: 'GOVERNMENT ENGAGEMENT | 2025',
    title: 'Meeting with Hon\'ble Governor of Jharkhand, Shri Santosh Gangwar',
    description: 'Distinguished honour of presenting Zeex AI\'s vision for transforming urban infrastructure to the Hon\'ble Governor of Jharkhand.',
    bullets: [
      "Highlighted smart surveillance and AI-powered violation detection",
      "Explored collaboration for smart city development in Jharkhand",
      "Governor provided encouraging interaction and valuable insights"
    ],
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg'
  },
  {
    id: '12',
    section: 'events',
    category: 'SUMMIT PARTICIPATION | OCTOBER 2025',
    title: 'Tamil Nadu Global Startup Summit (TNGSS) 2025',
    description: 'Presented and showcased AI-powered solutions for safety at a global platform with innovators from over 30 countries.',
    bullets: [
      "Connected with potential clients and partners interested in Zeex AI",
      "Goal: make cities and industries smarter and safer through data"
    ],
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg'
  },
  {
    id: '13',
    section: 'events',
    category: 'INDUSTRY SUMMIT | 2025',
    title: 'AWS Summit Bengaluru 2025 – KTPO Exhibition Center',
    description: 'Attended AWS Summit 2025, engaging with trailblazing startups driving innovation through cloud and AI technologies.',
    bullets: [
      "Engaged with keynotes on AI/ML, Bedrock, and LLMs",
      "Applied insights to real-time surveillance and traffic safety journey"
    ],
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg'
  },
  {
    id: '14',
    section: 'events',
    category: 'EXHIBITION | 2025',
    title: 'Startup Expo at E-Summit, IIT Madras',
    description: 'Participated in the Startup Expo, connecting with professionals, investors, and government safety agencies.',
    bullets: [
      "Engaged with investors who showed great interest in Zeex AI Safety",
      "Met enthusiastic AI talent eager to contribute to the journey",
      "Connected with tech startups for potential collaboration"
    ],
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg'
  },
  {
    id: '15',
    section: 'events',
    category: 'INDUSTRY RECOGNITION | 2025',
    title: 'Multiple Industry Events – Best Pitch Fest & E-Awards',
    description: 'Presented AI-driven solutions at multiple industry events, engaging with business leaders and investors.',
    bullets: [
      "Recognized for Innovation – Winning Best Pitch Fest & E-Awards",
      "Technology Validation – Insightful feedback on security solutions",
      "Industry Engagement – Explored pilot programs with stakeholders"
    ],
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg'
  }
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('awards');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredAchievements = achievements.filter(a => a.section === activeTab);
  const currentAchievement = filteredAchievements[activeIndex] || filteredAchievements[0];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="container-default px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            CAPABILITIES & IMPACT
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-12 uppercase tracking-tighter leading-none">
            Proven <span className="text-[#2563EB]">Track Record</span>
          </h2>

          {/* Section Switcher (Tabs) */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {achievementCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveIndex(0);
                }}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[9px] border transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xl" 
                    : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#0F172A]"
                )}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Achievement Console */}
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#F8F9FA] border-2 border-[#0F172A] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[650px]">
            
            {/* Left: Interactive Scan List */}
            <div className="lg:w-[60%] flex flex-col bg-white">
              <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Registry / {activeTab}</span>
                <span className="text-[10px] font-black text-blue-600 font-mono">[{filteredAchievements.length} ITEMS FOUND]</span>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-3"
                  >
                    {filteredAchievements.map((item, index) => (
                      <button 
                        key={item.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "w-full text-left p-6 rounded-2xl transition-all duration-500 border group flex items-start gap-6",
                          activeIndex === index 
                            ? "bg-[#F4F7FB] border-[#2563EB]/30 shadow-sm" 
                            : "bg-white border-transparent hover:border-gray-200"
                        )}
                      >
                        <span className={cn(
                          "font-mono text-xs font-bold transition-colors",
                          activeIndex === index ? "text-blue-600" : "text-gray-300"
                        )}>{item.id}</span>
                        
                        <div className="flex-1">
                          <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 font-mono">{item.category}</div>
                          <h3 className={cn(
                            "text-lg md:text-xl font-black uppercase tracking-tighter leading-tight transition-colors",
                            activeIndex === index ? "text-[#0F172A]" : "text-gray-400 group-hover:text-gray-600"
                          )}>
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                          activeIndex === index ? "bg-blue-600 text-white rotate-45" : "bg-gray-100 text-gray-300 opacity-0 group-hover:opacity-100"
                        )}>
                          <ArrowUpRight size={16} />
                        </div>
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Technical Detail Panel */}
            <div className="lg:w-[40%] bg-[#0F172A] text-white relative flex flex-col overflow-hidden">
               {/* Animated Background Element */}
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
               
               <AnimatePresence mode="wait">
                 <motion.div 
                    key={`${activeTab}-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="flex-1 flex flex-col p-10 lg:p-12 relative z-10"
                 >
                    {/* Media Preview */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl group">
                       <img 
                         src={currentAchievement?.image} 
                         alt={currentAchievement?.title}
                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60"></div>
                       <div className="absolute bottom-6 left-6 flex items-center gap-2">
                          <div className="px-3 py-1 bg-blue-600 rounded-full text-[8px] font-black uppercase tracking-widest">Verified Log</div>
                       </div>
                    </div>

                    {/* Content Detail */}
                    <div className="flex-1 space-y-8">
                       <div>
                          <span className="text-blue-500 font-mono text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Case Summary</span>
                          <p className="text-gray-300 text-sm font-medium leading-relaxed italic">
                            "{currentAchievement?.description}"
                          </p>
                       </div>

                       <div className="space-y-4">
                          <span className="text-white/40 font-mono text-[9px] font-bold tracking-[0.2em] uppercase block">Key Metrics & Recognition</span>
                          <div className="space-y-3">
                             {currentAchievement?.bullets?.map((bullet, i) => (
                               <div key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_8px_#3b82f6]"></div>
                                  <p className="text-xs text-white/80 font-medium leading-relaxed">{bullet}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                       <div className="flex flex-col">
                          <span className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Impact Level</span>
                          <span className="text-xs font-black uppercase tracking-tight text-blue-400">Enterprise Verified</span>
                       </div>
                       <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                          <Shield size={20} />
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
