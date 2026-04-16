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

  // Client logos - using placeholder names
  const clients = [
    { name: "Global Logistics", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=LOGISTICS" },
    { name: "Safety First", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=SAFETY" },
    { name: "Industrial Tech", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=INDUSTRIAL" },
    { name: "Secure Hub", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=SECURE+HUB" },
    { name: "Prime Bank", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=PRIME+BANK" },
    { name: "Urban Grid", logo: "https://via.placeholder.com/200x100/FFFFFF/0F172A?text=URBAN+GRID" }
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-32 bg-white relative overflow-hidden" ref={setRef}>
      <div className="container-default px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            ENTERPRISE TRUST
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">
            PROVEN IN THE <span className="text-[#2563EB]">FIELD</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto font-medium">
            Supporting global leaders in maintaining operational security and asset protection.
          </p>
        </motion.div>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex gap-6 animate-scroll" style={{ width: 'max-content' }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-56 h-32 flex items-center justify-center bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain p-8 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;

