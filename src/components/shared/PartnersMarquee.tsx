import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: "IIT Madras", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/512px-IIT_Madras_Logo.svg.png" },
  { id: 2, name: "Nirmaan IITM", logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png" },
  { id: 3, name: "AWS Startups", logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png" },
  { id: 4, name: "NVIDIA Inception", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyI3Qf_YPBBh5ZVZxIg3YpbKpQYuIdZfg9A&s" },
  { id: 5, name: "Ministry of IT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" },
  { id: 6, name: "T-Hub", logo: "https://t-hub.co/wp-content/uploads/2021/11/logo.png" },
];

const duplicatePartners = [...partners, ...partners];

const PartnersMarquee: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-4 min-w-full items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicatePartners.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="flex-none">
            <div className="relative w-[150px] md:w-[200px] h-24 bg-white rounded-[1.2rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center p-5 grayscale transition-all duration-500">
              <img src={partner.logo} alt={partner.name} className="max-h-[55%] max-w-full object-contain" />
              <span className="mt-2 text-[8px] font-black text-[#2563EB]/40 uppercase tracking-widest">{partner.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersMarquee;
