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

  // Real Partner Logos - Standardized for high-end look
  const clients = [
    {
      name: "IIT Madras",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/512px-IIT_Madras_Logo.svg.png"
    },
    {
      name: "Nirmaan IITM",
      logo: "https://raw.githubusercontent.com/Nirmaan-IITM/nirmaan-iitm.github.io/master/assets/img/logo.png"
    },
    {
      name: "AWS Startups",
      logo: "https://preditrix.ai/wp-content/uploads/2025/04/aws-n.png"
    },
    {
      name: "NVIDIA Inception",
      logo: "https://mohyilabs.com/wp-content/uploads/2023/04/nvidia-inception-logo.png"
    },
    {
      name: "Bosch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1024px-Bosch-logo.svg.png"
    },
    {
      name: "MeitY",
      logo: "https://www.digitalindia.gov.in/sites/all/themes/di_theme/logo.png"
    },
    {
      name: "T-Hub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/T-Hub_Logo-PNG.png"
    },
    {
      name: "Startup India",
      logo: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Startup-India_Preview.png"
    }
  ];

  // Perfectly duplicated for seamless scroll
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
          <p className="text-sm md:text-base text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed">
            Partnering with institutions where reliability, scale, and execution matter most.
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Professional Fading Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>

          <div className="flex animate-marquee items-center py-4" style={{ width: 'max-content' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-12 md:px-24 transition-all duration-700"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const span = target.nextElementSibling as HTMLElement;
                    if (span) span.style.display = 'block';
                  }}
                />
                <span className="hidden text-[11px] font-black text-gray-400 uppercase tracking-widest">{client.name}</span>
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
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;

