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
      icon: <ShoppingCart className="text-green-600" size={24} />,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/services/retail-wholesale-high-risk",
      colorClass: "group-hover:bg-green-50",
      textColor: "group-hover:text-green-300",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Traffic Monitoring",
      description: "AI-powered traffic management with real-time analytics and violation detection.",
      icon: <Car className="text-red-600" size={24} />,
      image: "https://images.unsplash.com/photo-1597762333765-cbcd63dd8acc?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/traffic-public-safety",
      colorClass: "group-hover:bg-red-50",
      textColor: "group-hover:text-red-300",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Corporate & Residential",
      description: "Surveillance for homes and offices with intelligent alerts and remote access.",
      icon: <Home className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/services/corporate-residential",
      colorClass: "group-hover:bg-blue-50",
      textColor: "group-hover:text-blue-300",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Industrial Surveillance",
      description: "Surveillance systems for factories and warehouses to ensure safety.",
      icon: <Building2 className="text-gray-700" size={24} />,
      image: "https://plus.unsplash.com/premium_photo-1661962513763-05ff8b984285?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/traffic-public-safety",
      colorClass: "group-hover:bg-gray-100",
      textColor: "group-hover:text-gray-400",
      delay: 0.4,
    },
  ];
  
  return (
    <section className="py-24 bg-[#F4F7FB]" ref={ref}>
      <div className="container-default px-8">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-full text-sm font-bold mb-4 border border-[#E2E8F0]"
          >
            SOLUTIONS
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-[#0F172A] mb-5 max-w-3xl mx-auto"
          >
            AI Security for <span className="text-[#2563EB]">Every Environment</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-[#475569] max-w-2xl mx-auto"
          >
            Customized surveillance solutions that adapt to your specific security requirements and infrastructure.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionCards.map((card, index) => (
            <div 
              key={card.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={320}
                />
              </div>
              <div className="p-8">
                <div className="mb-4 text-[#2563EB]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
                <p className="text-[#475569] text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>
                <Link 
                  to={card.link} 
                  className="inline-flex items-center text-[#1E3A8A] font-bold text-sm uppercase tracking-wider group-hover:text-[#2563EB]"
                >
                  Explore Solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-flex items-center px-10 py-5 bg-[#1E3A8A] text-white font-bold rounded-lg shadow-lg hover:bg-[#2563EB] transition-all"
          >
            VIEW ALL SERVICES
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SolutionsPreview);