import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  ShoppingCart, 
  Car, 
  Microscope,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'z-audit',
    name: 'Z-Audit',
    subtitle: 'Speech Intelligence',
    icon: <Shield />,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1000&auto=format&fit=crop&q=80',
    description: 'Z-Audit enables organizations to extract structured intelligence from unstructured voice data using advanced neural speech recognition.',
    capabilities: ['Multilingual Translation', 'Emotional Tone Analysis', 'Compliance Scoring'],
    color: '#2563EB'
  },
  {
    id: 'z-factory',
    name: 'Z-Factory',
    subtitle: 'Facility Intelligence',
    icon: <Settings />,
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1000&auto=format&fit=crop&q=80',
    description: 'Digitize physical operations using AI-powered monitoring for real-time safety enforcement and operational optimization.',
    capabilities: ['PPE Detection', 'Machine Utilization', '3D Digital Twin'],
    color: '#10B981'
  },
  {
    id: 'z-market',
    name: 'Z-Market',
    subtitle: 'Consumer Intelligence',
    icon: <ShoppingCart />,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=80',
    description: 'Provide deep insights into customer behavior and retail performance using computer vision and data analytics.',
    capabilities: ['Footfall Tracking', 'Heatmap Analysis', 'Shelf Monitoring'],
    color: '#F59E0B'
  },
  {
    id: 'z-tracs',
    name: 'Z-Tracs',
    subtitle: 'Traffic Management',
    icon: <Car />,
    image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=1000&auto=format&fit=crop&q=80',
    description: 'AI-powered traffic monitoring and enforcement solutions designed for modern smart city infrastructure.',
    capabilities: ['Density Estimation', 'Violation Detection', 'Vehicle Classification'],
    color: '#6366F1'
  },
  {
    id: 'z-labs',
    name: 'Z-Labs',
    subtitle: 'Innovation Hub',
    icon: <Microscope />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80',
    description: 'Continuous improvement, experimentation, and model optimization across all AI modules.',
    capabilities: ['Model Training', 'R&D Experimentation', 'Performance Benchmarking'],
    color: '#EC4899'
  }
];

const ProductShowcase = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  const getCardStyle = (index: number) => {
    const total = products.length;
    let position = (index - centerIndex + total) % total;

    if (position > total / 2) position -= total;

    const isActive = position === 0;
    const isStep1 = Math.abs(position) === 1;
    const isStep2 = Math.abs(position) === 2;

    let x = 0;
    let scale = 0.5;
    let zIndex = 0;
    let opacity = 0;
    let rotateY = 0;

    if (isActive) {
      x = 0;
      scale = 1;
      zIndex = 10;
      opacity = 1;
    } else if (isStep1) {
      x = position > 0 ? 250 : -250;
      scale = 0.8;
      zIndex = 5;
      opacity = 0.7;
      rotateY = position > 0 ? -20 : 20;
    } else if (isStep2) {
      x = position > 0 ? 440 : -440;
      scale = 0.6;
      zIndex = 1;
      opacity = 0.3;
      rotateY = position > 0 ? -35 : 35;
    } else {
      x = position > 0 ? 600 : -600;
      opacity = 0;
    }

    return { x, scale, zIndex, opacity, rotateY, filter: isActive ? 'blur(0px)' : 'blur(2px)' };
  };

  return (
    <section className="relative py-24 bg-[#0a0e1a] overflow-hidden min-h-[75vh] flex flex-col justify-center">
      {/* Background with subtle blur */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={centerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center saturate-150"
            style={{ backgroundImage: `url(${products[centerIndex].image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-transparent to-[#0a0e1a]"></div>
      </div>

      <div className="container-default relative z-10 px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            ZeexAI <span className="text-[#2563EB]">Solutions</span>
          </motion.h2>
        </div>

        <div 
          className="relative h-[480px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {products.map((product, index) => {
            const style = getCardStyle(index);
            const isCenter = centerIndex === index;
            const isHovered = hoveredIndex === index && isCenter;

            return (
              <motion.div
                key={product.id}
                animate={style}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                className={`absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer preserve-3d border border-white/5 ${isCenter ? 'z-50' : ''}`}
                onMouseEnter={() => isCenter && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setCenterIndex(index)}
              >
                <div className="relative w-full h-full text-left">
                  <img src={product.image} className="absolute inset-0 w-full h-full object-cover" alt={product.name} />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-[#0a0e1a]/90 backdrop-blur-md' : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'}`}></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transition-transform duration-500 ${isHovered ? '-translate-y-4' : 'translate-y-0'}`}>
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white mb-4 border border-white/20">
                            {React.cloneElement(product.icon as React.ReactElement, { size: 20 })}
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">{product.name}</h3>
                        <p className="text-[10px] text-[#2563EB] font-black uppercase tracking-widest">{product.subtitle}</p>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? 'auto' : 0,
                        marginTop: isHovered ? 16 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/80 text-xs leading-relaxed mb-6 font-medium">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.capabilities.map((cap, i) => (
                          <span key={i} className="text-[8px] px-2 py-0.5 bg-white/10 rounded-full text-white/80 border border-white/10 uppercase font-black uppercase tracking-tight">
                            {cap}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to="/services" 
                        className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] hover:gap-3 transition-all"
                      >
                        Module Details <ArrowRight size={12} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Nav Controls Removed */}
        </div>

        <div className="mt-8 flex justify-center gap-2">
            {products.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCenterIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                        centerIndex === i ? 'w-10 bg-[#2563EB]' : 'w-2 bg-white/10 hover:bg-white/20'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
