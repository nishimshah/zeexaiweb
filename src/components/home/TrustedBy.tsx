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

  // Real Partner Logos - Specific 6 Requested Partners (Local Reliable Assets)
  const clients = [
    { name: "Nirmaan IITM", logo: "/images/partners/nirmaan.png" },
    { name: "AWS Global Startups", logo: "/images/partners/aws.png" },
    { name: "IndiaAI", logo: "/images/partners/india-ai.png" },
    { name: "NVIDIA Inception", logo: "/images/partners/nvidia.png" },
    { name: "AI Impact Summit", logo: "/images/partners/ai-impact.png" },
    { name: "IIT Madras", logo: "/images/partners/iit-madras.png" },
  ];

  // Duplicated 3 times for seamless 33.33% scroll loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-y border-[#E2E8F0]" ref={setRef}>
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
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Professional Fading Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>

          <div className="flex animate-marquee items-center py-4 gap-20" style={{ width: 'max-content' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none flex items-center justify-center h-20"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-14 w-auto object-contain transition-all duration-500 cursor-default"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;

