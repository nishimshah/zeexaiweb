import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Building, Shield, MapPin, Star, ExternalLink, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const achievementCategories = [
  { id: 'all',        title: 'All',             icon: <Star size={14} /> },
  { id: 'awards',     title: 'Awards & Wins',   icon: <Award size={14} /> },
  { id: 'incubation', title: 'Incubation',      icon: <Building size={14} /> },
  { id: 'government', title: 'Government',      icon: <Shield size={14} /> },
  { id: 'events',     title: 'Events & Expos',  icon: <MapPin size={14} /> },
];

const achievements = [
  {
    id: '01', section: 'awards',
    year: '2026', tag: 'International Award',
    title: '1st Prize – AI Impact Summit 2026 India',
    subtitle: 'YUVAI Category · International Winner',
    description: "Won 1st Prize among the Top 8 young innovators globally. Recognized by Hon'ble Minister Ashwini Vaishnaw and IndiaAI CEO Abhishek Singh.",
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg',
    accent: 'bg-blue-600',
  },
  {
    id: '02', section: 'awards',
    year: '2026', tag: 'International Conference',
    title: 'Best Startup in AI-Enabled Monitoring System',
    subtitle: 'AI-HSE 2026 · Hyderabad',
    description: 'Recognized at the International Conference on AI in Health, Safety & Environment for innovation in AI-powered monitoring infrastructure.',
    image: 'https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg',
    accent: 'bg-indigo-600',
  },
  {
    id: '03', section: 'awards',
    year: '2025', tag: 'Institutional Award',
    title: '1st Prize – AI & DeepTech Bootcamp',
    subtitle: 'E-Summit · IIT Madras',
    description: 'Won 1st Prize validating our full-stack AI company status: own models, in-house hardware, and integrated proprietary software.',
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg',
    accent: 'bg-blue-700',
  },
  {
    id: '04', section: 'awards',
    year: '2025', tag: 'Pitch Award',
    title: 'Best Pitch & E-Awards – E-Summit IIT Madras',
    subtitle: '2nd Place Overall · Supported by WestBridge Capital',
    description: 'Secured Best Pitch and E-Awards at the prestigious E-Summit, backed by Masters\' Union and WestBridge Capital.',
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg',
    accent: 'bg-sky-600',
  },
  {
    id: '05', section: 'awards',
    year: '2025', tag: 'Entrepreneurship Award',
    title: 'EO GSEA Jaipur – Global Student Entrepreneurship',
    subtitle: 'Mentored by EO GSEA Chair Rahul Singhi',
    description: "Founder Gaurav Yadav won the Global Student Entrepreneurship Award, supported by NIRMAAN IITM and the IIT Madras BS Programme.",
    image: 'https://i.ibb.co/n8cWLpQy/sanidhya.jpg',
    accent: 'bg-blue-500',
  },
  {
    id: '06', section: 'awards',
    year: '2025', tag: 'Industry Award',
    title: 'AI Industry–Academia Collaboration Excellence',
    subtitle: 'TechXConf 2025 · Asia\'s Largest AI & Cloud Conference',
    description: "Honored for bridging research and real-world AI innovation, fostering impactful partnerships across the industry.",
    image: 'https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg',
    accent: 'bg-violet-600',
  },
  {
    id: '07', section: 'incubation',
    year: '2026', tag: 'Prototype Grant',
    title: 'Top 9 Teams – MinT-athon IIT Madras',
    subtitle: 'Bosch Mobility Prototype Funding',
    description: 'Selected for prototype development stage at MinT-athon with direct funding support from Bosch Mobility.',
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg',
    accent: 'bg-blue-600',
  },
  {
    id: '08', section: 'incubation',
    year: '2025', tag: 'Pre-Incubation',
    title: 'Selected by NIRMAAN IITM',
    subtitle: 'Pre-Incubator of IIT Madras',
    description: 'Selected into the prestigious NIRMAAN IITM Pre-Incubator, gaining world-class mentorship, workspace, and funding resources.',
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg',
    accent: 'bg-indigo-600',
  },
  {
    id: '09', section: 'incubation',
    year: '2025', tag: 'Summit Recognition',
    title: 'Top 5 AI Startup Companies – TNGSS 2025',
    subtitle: 'Tamil Nadu Global Startup Summit · 30+ Countries',
    description: "Pitched to investors and leaders from 30+ countries at the summit inaugurated by CM M.K. Stalin.",
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg',
    accent: 'bg-sky-600',
  },
  {
    id: '10', section: 'government',
    year: '2025', tag: 'Government Engagement',
    title: 'Trial Invitation – Union Minister Jitin Prasada',
    subtitle: 'Shahjahanpur, Uttar Pradesh Smart City',
    description: 'Invited for a live trial in UP to transform urban safety and traffic management through AI-powered surveillance.',
    image: 'https://i.ibb.co/n8cWLpQy/sanidhya.jpg',
    accent: 'bg-blue-700',
  },
  {
    id: '11', section: 'government',
    year: '2025', tag: 'Government Recognition',
    title: 'Meeting with Governor of Jharkhand Santosh Gangwar',
    subtitle: 'Smart City Collaboration · Ranchi',
    description: 'Presented Zeex AI\'s vision for AI-powered urban infrastructure, smart surveillance, and violation detection to the Governor.',
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg',
    accent: 'bg-indigo-700',
  },
  {
    id: '12', section: 'events',
    year: '2025', tag: 'Global Summit',
    title: 'Tamil Nadu Global Startup Summit (TNGSS) 2025',
    subtitle: '30+ Countries · Global Investor Audience',
    description: 'Showcased AI-powered safety solutions on a global stage, connecting with partners and investors from over 30 countries.',
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg',
    accent: 'bg-blue-600',
  },
  {
    id: '13', section: 'events',
    year: '2025', tag: 'Industry Summit',
    title: 'AWS Summit Bengaluru 2025',
    subtitle: 'KTPO Exhibition Center · AI/ML, Bedrock, LLMs',
    description: 'Engaged with cutting-edge AI/ML keynotes and applied insights to our real-time surveillance and traffic safety journey.',
    image: 'https://i.ibb.co/xSqvrQ8s/1732205528576.jpg',
    accent: 'bg-sky-600',
  },
  {
    id: '14', section: 'events',
    year: '2025', tag: 'Startup Expo',
    title: 'Startup Expo at E-Summit, IIT Madras',
    subtitle: 'Investors, Government Agencies & AI Talent',
    description: 'Connected with investors, government safety agencies, and enthusiastic AI talent eager to join the Zeex AI journey.',
    image: 'https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg',
    accent: 'bg-blue-600',
  },
  {
    id: '15', section: 'events',
    year: '2025', tag: 'Industry Recognition',
    title: 'Best Pitch Fest & E-Awards – Multiple Industry Events',
    subtitle: 'Pan-India Recognition · Investor Outreach',
    description: 'Recognized across multiple industry events for innovation, winning Best Pitch Fest awards and exploring pilot programs with key stakeholders.',
    image: 'https://i.ibb.co/9HM6KKrB/gaurav.jpg',
    accent: 'bg-violet-600',
  },
];

const stats = [
  { number: '15+', label: 'Awards & Recognitions' },
  { number: '30+', label: 'Countries Reached' },
  { number: '2×', label: 'Govt. Engagements' },
  { number: 'Top 5', label: 'Global AI Startup' },
];

const trailItems = [
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
  "AWS Summit Bengaluru",
  "Tamil Nadu Global Startup Summit",
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? achievements
    : achievements.filter(a => a.section === activeTab);

  return (
    <section className="bg-[#F8FAFC] py-24 overflow-hidden">

      {/* Header */}
      <div className="container-default px-8 text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6"
        >
          <Star size={10} /> Capabilities & Impact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter mb-4 leading-none"
        >
          Proven <span className="text-blue-600">Milestones</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
        >
          From IIT Madras to global summits, every achievement validates Zeex AI's commitment to redefining proactive safety.
        </motion.p>
      </div>

      {/* Stats Bar */}
      <div className="container-default px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-[#0F172A] mb-1">{s.number}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="container-default px-8 mb-10">
        <div className="flex gap-2 overflow-x-auto pb-2 justify-start lg:justify-center">
          {achievementCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[9px] border transition-all duration-300 whitespace-nowrap flex-shrink-0",
                activeTab === cat.id
                  ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              )}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Cards Grid */}
      <div className="container-default px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex md:grid overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 gap-6 snap-x snap-mandatory scrollbar-hide md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Year badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                      {item.year}
                    </span>
                  </div>

                  {/* ID badge */}
                  <div className="absolute top-4 right-4">
                    <span className={cn("px-3 py-1 text-white text-[9px] font-black uppercase tracking-widest rounded-full", item.accent)}>
                      #{item.id}
                    </span>
                  </div>

                  {/* Tag on image bottom */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-[9px] font-black uppercase tracking-widest">{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-black text-[#0F172A] uppercase tracking-tight leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">{item.subtitle}</p>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed flex-1">{item.description}</p>

                  <div className={cn("mt-5 h-[2px] rounded-full w-10 transition-all duration-500 group-hover:w-full", item.accent.replace('bg-', 'bg-'))}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>


      <style>{`
        @keyframes scroll-fast-ach {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
        .animate-scroll-fast-ach {
          animation: scroll-fast-ach 22s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
