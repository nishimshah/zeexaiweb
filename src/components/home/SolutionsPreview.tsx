import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, ShoppingCart, ArrowRight, Car, Building2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/ui/OptimizedImage';

const SolutionsPreview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '200px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const solutionCards = [
    {
      id: 1,
      title: "Shops & Supermarkets",
      description: "Retail security solutions with theft prevention and customer behavior analytics.",
      icon: <ShoppingCart className="text-[#10b981]" size={20} />,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
      link: "/services/retail-wholesale-high-risk",
      bgColor: "bg-[#f0fdf4]"
    },
    {
      id: 2,
      title: "Traffic Monitoring",
      description: "AI-powered traffic management with real-time analytics and violation detection.",
      icon: <Car className="text-[#ef4444]" size={20} />,
      image: "https://images.unsplash.com/photo-1597762333765-cbcd63dd8acc?w=800&auto=format&fit=crop&q=80",
      link: "/services/traffic-public-safety",
      bgColor: "bg-[#fef2f2]"
    },
    {
      id: 3,
      title: "Corporate & Residential",
      description: "Surveillance for homes and offices with intelligent alerts and remote access.",
      icon: <Home className="text-[#3b82f6]" size={20} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      link: "/services/corporate-residential",
      bgColor: "bg-[#eff6ff]"
    },
    {
      id: 4,
      title: "Industrial Surveillance",
      description: "Surveillance systems for factories and warehouses to ensure safety.",
      icon: <Building2 className="text-[#334155]" size={20} />,
      image: "https://plus.unsplash.com/premium_photo-1661962513763-05ff8b984285?w=800&auto=format&fit=crop&q=80",
      link: "/services/traffic-public-safety",
      bgColor: "bg-[#f8fafc]"
    },
  ];
  
  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container-default px-6">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 py-1 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-[#E2E8F0]"
          >
            Industry Services
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter leading-none"
          >
            AI Security for Every Environment
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base text-[#475569] max-w-2xl mx-auto font-medium"
          >
            Transforming workplaces and cities with intelligent safety and management powered by AI and data.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionCards.map((card) => (
            <Link 
              key={card.id}
              to={card.link}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0">
                <OptimizedImage 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-white mb-2 leading-tight uppercase tracking-tight group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-white/80 text-[10px] font-medium leading-relaxed group-hover:text-white transition-colors">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-3 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-all hover:gap-3 group text-xs uppercase tracking-widest"
          >
            View all services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};


export default React.memo(SolutionsPreview);