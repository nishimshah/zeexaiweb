import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px 0px' }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  // Exact 6 Partners from the reference site
  const clients = [
    { name: "NIRMAAN", logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png" },
    { name: "AWS Partner Network", logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png" },
    { name: "INDIAai", logo: "https://indiaai.gov.in/assets/images/indiaai-logo.svg" },
    { name: "NVIDIA", logo: "https://mohyilabs.com/wp-content/uploads/2023/04/nvidia-inception-logo.png" },
    { name: "AI IMPACT SUMMIT", logo: "https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg" },
    { name: "IIT MADRAS", logo: "https://www.iitm.ac.in/sites/default/files/iitm-logo.png" },
  ];

  // Duplicated for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden border-y border-[#E2E8F0]" ref={setRef}>
      <div className="container-default px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-[#EEF2FF] text-[#4F46E5] rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-[#E0E7FF] mb-8">
            TRUSTED PARTNERSHIPS
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter leading-none">
            Supported by <span className="text-[#6366F1]">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
            Our technology is recognized and supported by premier institutions and industry leaders.
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Professional Fading Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-20 pointer-events-none"></div>

          <div className="flex animate-marquee items-center py-10 gap-8" style={{ width: 'max-content' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none"
              >
                <div className="relative w-[220px] md:w-[280px] h-36 bg-white rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center p-8 transition-all duration-500 hover:shadow-xl hover:border-blue-100 group/card">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[70%] max-w-full object-contain transition-all duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const span = target.parentElement?.querySelector('span') as HTMLElement;
                      if (span) span.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-[10px] font-black text-gray-400 uppercase tracking-widest">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;

