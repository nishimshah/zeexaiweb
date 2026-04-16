import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  ShoppingCart, 
  Building2, 
  Factory, 
  Sprout, 
  UtensilsCrossed, 
  Shield, 
  Trophy, 
  User, 
  Trash2, 
  Truck, 
  MapPin, 
  Heart,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Industry {
  name: string;
  icon: React.ReactNode;
  link: string;
  description: string;
  color: string;
  bgColor: string;
}

const Industries = () => {
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

  const industries: Industry[] = [
    {
      name: "Automotive",
      icon: <Car className="w-6 h-6" />,
      link: "/services",
      description: "AI surveillance for assembly and logistics nodes.",
      color: "",
      bgColor: ""
    },
    {
      name: "Retail",
      icon: <ShoppingCart className="w-6 h-6" />,
      link: "/services/retail-wholesale-high-risk",
      description: "Loss prevention and behavior analytics.",
      color: "",
      bgColor: ""
    },
    {
      name: "Finance",
      icon: <Building2 className="w-6 h-6" />,
      link: "/services/banks-atms-financial",
      description: "Secure perimeter monitoring for financial hubs.",
      color: "",
      bgColor: ""
    },
    {
      name: "Industry",
      icon: <Factory className="w-6 h-6" />,
      link: "/services/industry-smart-factories",
      description: "Smart factory safety and hardware health.",
      color: "",
      bgColor: ""
    },
    {
      name: "Agriculture",
      icon: <Sprout className="w-6 h-6" />,
      link: "/services",
      description: "Large-scale perimeter monitoring for yield assets.",
      color: "",
      bgColor: ""
    },
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      link: "/services",
      description: "Critical care zone and patient safety protocols.",
      color: "",
      bgColor: ""
    },
    {
      name: "Logistics",
      icon: <Truck className="w-6 h-6" />,
      link: "/services",
      description: "Autonomous inventory and fleet tracking.",
      color: "",
      bgColor: ""
    },
    {
      name: "Sports",
      icon: <Trophy className="w-6 h-6" />,
      link: "/services",
      description: "Crowd density and safety threat management.",
      color: "",
      bgColor: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-[#F4F7FB] relative overflow-hidden border-t border-[#E2E8F0]" ref={setRef}>
      <div className="container-default px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            DEPLOYMENT SECTORS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
            Cross-Sector <span className="text-[#2563EB]">Intelligence</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto font-medium">
            Industrial-grade AI solutions engineered for specialized global industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                to={industry.link}
                className="group block bg-white rounded-xl p-8 border border-[#E2E8F0] hover:shadow-xl hover:border-[#2563EB] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4F7FB] flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-black text-[#0F172A] mb-3 uppercase tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-[#475569] font-medium leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center px-12 py-6 bg-[#1E3A8A] text-white font-black rounded-xl uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            All Integration Vectors
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;

