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

  // Real Partner Logos - Replicating the 'Exact Trail' from About page
  const clients = [
    { name: "IIT Madras", logo: "https://www.iitm.ac.in/sites/default/files/iitm-logo.png" },
    { name: "Nirmaan IITM", logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png" },
    { name: "AWS Startups", logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png" },
    { name: "NVIDIA Inception", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyI3Qf_YPBBh5ZVZxIg3YpbKpQYuIdZfg9A&s" },
    { name: "Ministry of IT", logo: "https://www.meity.gov.in/sites/default/files/meity_logo.png" },
    { name: "T-Hub", logo: "https://t-hub.co/wp-content/uploads/2021/11/logo.png" },
  ];

  // Perfectly duplicated for seamless scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-[#E2E8F0]" ref={setRef}>
      <div className="container-default px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            Strategic Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter leading-none">
            Trusted by <span className="text-[#2563EB]">Global Partners</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed">
            Partnering with institutions where reliability, scale, and execution matter most.
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Professional Fading Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>

          <div className="flex animate-marquee items-center py-8 gap-6" style={{ width: 'max-content' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none"
              >
                <div className="relative w-[180px] md:w-[220px] h-28 bg-white rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-xl hover:border-blue-100 group/card">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[50%] max-w-full object-contain transition-all duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const span = target.nextElementSibling as HTMLElement;
                      if (span) span.style.display = 'block';
                    }}
                  />
                  <span className="mt-3 text-[9px] font-black text-[#2563EB]/50 uppercase tracking-widest group-hover/card:text-[#2563EB] transition-colors">
                    {client.name}
                  </span>
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

