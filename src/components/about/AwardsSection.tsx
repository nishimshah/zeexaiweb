import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Target, Zap, Shield } from 'lucide-react';

const awards = [
  { id: 1, title: "1st Prize – AI Impact Summit", year: "2026", icon: <Trophy />, category: "Innovation", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop&q=80" },
  { id: 2, title: "Best Startup – AI-HSE 2026", year: "2026", icon: <Award />, category: "Business", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80" },
  { id: 3, title: "1st Prize – AI bootcamp IITM", year: "2025", icon: <Target />, category: "Technical", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80" },
  { id: 4, title: "Best Pitch – E-Summit IITM", year: "2025", icon: <Star />, category: "Strategy", image: "https://images.unsplash.com/photo-1475721027785-f74dea327912?w=600&auto=format&fit=crop&q=80" },
  { id: 5, title: "EO GSEA – Student Entrepreneur", year: "2025", icon: <Zap />, category: "Entrepreneur", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80" },
  { id: 6, title: "AI Excellence Award", year: "2025", icon: <Shield />, category: "Excellence", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80" },
  { id: 7, title: "Top 9 – MinT-athon IIT Madras", year: "2026", icon: <Award />, category: "Research", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&auto=format&fit=crop&q=80" },
  { id: 8, title: "NIRMAAN IITM Pre-Incubator", year: "2025", icon: <Shield />, category: "Growth", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80" },
  { id: 10, title: "Union Minister Recognition", year: "2025", icon: <Target />, category: "Policy", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80" },
  { id: 11, title: "Governor Recognition", year: "2025", icon: <Star />, category: "Recognition", image: "https://images.unsplash.com/photo-1576267423445-b2e887aa16be?w=600&auto=format&fit=crop&q=80" },
  { id: 12, title: "TN Global Startup Summit", year: "2025", icon: <Zap />, category: "Networking", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80" },
  { id: 13, title: "AWS Summit Showcase", year: "2025", icon: <Shield />, category: "Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80" },
  { id: 14, title: "Startup Expo IIT Madras", year: "2025", icon: <Award />, category: "Exhibition", image: "https://images.unsplash.com/photo-1591115765373-520b7a3d7294?w=600&auto=format&fit=crop&q=80" },
  { id: 15, title: "Best Pitch Fest Winner", year: "2025", icon: <Trophy />, category: "Victory", image: "https://images.unsplash.com/photo-1496469888073-80de7e9527ad?w=600&auto=format&fit=crop&q=80" }
];

const duplicateAwards = [...awards, ...awards]; // For seamless infinite loop

const partners = [
  { id: 1, name: "IIT Madras", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/512px-IIT_Madras_Logo.svg.png", type: "Academic Partner" },
  { id: 2, name: "Nirmaan IITM", logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png", type: "Pre-Incubator" },
  { id: 3, name: "AWS Startups", logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png?w=200&h=80&fit=contain&q=80", type: "Cloud Partner" },
  { id: 4, name: "NVIDIA Inception", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyI3Qf_YPBBh5ZVZxIg3YpbKpQYuIdZfg9A&s&w=200&h=80&fit=contain&q=80", type: "AI Partner" },
  { id: 5, name: "Ministry of IT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emblem_of_India.svg/200px-Emblem_of_India.svg.png", type: "Government Support" },
  { id: 6, name: "T-Hub", logo: "https://t-hub.co/wp-content/uploads/2021/11/logo.png", type: "Innovation Hub" },
];

const duplicatePartners = [...partners, ...partners];

const AwardsSection = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Use a slow auto-scroll or just interactive
  React.useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setScrollProgress((prev) => (prev + 0.05) % 100);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-32 bg-white overflow-hidden relative" ref={containerRef}>
      <div className="container-default px-8 relative z-20 w-full mb-24">
        <div className="flex flex-col items-center text-center">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-black text-[#2563EB] uppercase tracking-[0.4em] mb-4"
            >
                Prestigious Global Recognition
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-none"
            >
                Award-Winning <span className="text-[#2563EB]">Excellence</span>
            </motion.h2>
        </div>
      </div>

      {/* Unique 3D Concave Ribbon Gallery */}
      <div className="relative h-[500px] flex items-center justify-center overflow-visible mb-32 perspective-[2000px]">
        <div className="flex gap-8 items-center justify-center w-full">
          {awards.map((award, index) => {
            // Calculate 3D position based on index and scroll progress
            const position = (index - (scrollProgress / 100) * awards.length + awards.length) % awards.length;
            const normalizedPos = position > awards.length / 2 ? position - awards.length : position;
            
            // Only show cards within visible range
            if (Math.abs(normalizedPos) > 3) return null;

            const rotateY = normalizedPos * -15; // Concave tilt
            const translateZ = -Math.abs(normalizedPos) * 100;
            const translateX = normalizedPos * 350;
            const opacity = 1 - Math.abs(normalizedPos) * 0.25;

            return (
              <motion.div
                key={award.id}
                animate={{ 
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    opacity: opacity,
                    scale: 1 - Math.abs(normalizedPos) * 0.1
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute w-[280px] md:w-[350px] aspect-[4/5] group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-80" />
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      {React.cloneElement(award.icon as React.ReactElement, { size: 24 })}
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest mb-2 block">{award.year}</span>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none">
                        {award.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Sponsored Marquee Trail (Section Kept) */}
      <div className="bg-[#F8FAFC] py-20 border-y border-[#E2E8F0]">
        <div className="container-default px-8 mb-12">
            <h3 className="text-center text-[10px] font-black text-[#475569] uppercase tracking-[0.5em] opacity-40">
                Official Strategic Partners
            </h3>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div 
              className="flex gap-8 min-w-full items-center"
              animate={{ x: [-100 * partners.length, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
              {duplicatePartners.map((partner, index) => (
                  <div key={`${partner.id}-${index}`} className="flex-none">
                      <div className="relative w-[180px] md:w-[240px] h-28 bg-white rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500">
                          <img src={partner.logo} alt={partner.name} className="max-h-[70%] max-w-full object-contain" />
                          <span className="mt-3 text-[9px] font-black text-[#2563EB]/50 uppercase tracking-widest">{partner.name}</span>
                      </div>
                  </div>
              ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center opacity-5 select-none pointer-events-none">
          <h3 className="text-7xl md:text-[10rem] font-black text-[#0F172A] uppercase tracking-[0.2em] leading-none whitespace-nowrap">
             RECOGNITION • PARTNERS • IMPACT
          </h3>
      </div>
    </section>
  );
};

export default AwardsSection;
