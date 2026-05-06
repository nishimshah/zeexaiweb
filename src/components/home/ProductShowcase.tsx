import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  ShoppingCart, 
  Car, 
  Microscope,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'z-audit',
    name: 'Z-Audit',
    subtitle: 'Speech Intelligence',
    icon: <Shield />,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1600&auto=format&fit=crop&q=80',
    description: 'Extract structured intelligence from unstructured voice data using advanced neural speech recognition and emotional analysis.',
    capabilities: ['Multilingual Translation', 'Emotional Tone Analysis', 'Compliance scoring'],
    color: '#2563EB'
  },
  {
    id: 'z-factory',
    name: 'Z-Factory',
    subtitle: 'Facility Intelligence',
    icon: <Settings />,
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1600&auto=format&fit=crop&q=80',
    description: 'Digitize physical operations using AI-powered monitoring for real-time safety enforcement and operational optimization.',
    capabilities: ['PPE Detection', 'Machine Utilization', '3D Digital Twin'],
    color: '#10B981'
  },
  {
    id: 'z-market',
    name: 'Z-Market',
    subtitle: 'Consumer Intelligence',
    icon: <ShoppingCart />,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&auto=format&fit=crop&q=80',
    description: 'Provide deep insights into customer behavior and retail performance using computer vision and data analytics.',
    capabilities: ['Footfall Tracking', 'Heatmap Analysis', 'Shelf Monitoring'],
    color: '#F59E0B'
  },
  {
    id: 'z-tracs',
    name: 'Z-Tracs',
    subtitle: 'Traffic Management',
    icon: <Car />,
    image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=1600&auto=format&fit=crop&q=80',
    description: 'AI-powered traffic monitoring and enforcement solutions designed for modern smart city infrastructure.',
    capabilities: ['Density Estimation', 'Violation Detection', 'Vehicle Classification'],
    color: '#6366F1'
  },
  {
    id: 'z-labs',
    name: 'Z-Labs',
    subtitle: 'Innovation Hub',
    icon: <Microscope />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80',
    description: 'Continuous improvement, experimentation, and model optimization across all AI modules.',
    capabilities: ['Model Training', 'R&D Experimentation', 'Performance Benchmarking'],
    color: '#EC4899'
  }
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const activeProduct = products[currentIndex];

  // Stable handleNext for auto-play
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAnimating]); // Re-sync interval when animation state changes

  const resetAutoPlay = () => {
    // No-op or minor logic here as useEffect [isAnimating] will handle it
  };

  // Get the products to display as cards (next items)
  const getCardItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(products[(currentIndex + i) % products.length]);
    }
    return items;
  };

  const cardItems = getCardItems();

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#050810] flex items-center py-12 lg:py-0">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center saturate-125"
              style={{ backgroundImage: `url(${activeProduct.image})` }}
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-[#050810]/40" />
            <div className="absolute inset-0 backdrop-blur-[12px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container-default relative z-10 px-6 w-full h-full flex flex-col justify-between py-12 lg:py-20">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8 lg:mb-0"
        >
          <div className="w-8 h-[1px] bg-[#2563EB]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">ZeexAI Ecosystem</span>
        </motion.div>

        {/* Main Content Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow">
          {/* Left: Text Content - Centered on mobile */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start"
              >
                <div>
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 text-[#2563EB] mb-2"
                  >
                    <span className="text-xs font-black uppercase tracking-widest">{activeProduct.subtitle}</span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
                  >
                    {activeProduct.name}
                  </motion.h2>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-md text-white/70 text-base md:text-xl font-medium leading-relaxed"
                >
                  {activeProduct.description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 pt-2 md:pt-4"
                >
                   {activeProduct.capabilities.map((cap, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] md:text-[10px] text-white/80 border border-white/10 font-bold uppercase tracking-tight">
                      {cap}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 md:pt-8"
                >
                  <Link 
                    to="/services" 
                    className="group inline-flex items-center gap-4 text-white text-sm font-black uppercase tracking-[0.2em]"
                  >
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    Explore Module
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Card Gallery - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-7 items-center gap-4 md:gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
            <AnimatePresence mode="popLayout" initial={false}>
              {cardItems.map((product, idx) => (
                <motion.div
                  key={`${product.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ 
                    opacity: 1 - idx * 0.3, 
                    scale: idx === 0 ? 1.05 : 1 - idx * 0.08, 
                    x: 0,
                    zIndex: idx === 0 ? 30 : 20 - idx,
                    filter: `blur(${idx * 2}px)`
                  }}
                  exit={{ opacity: 0, scale: 1.1, x: -100 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="relative flex-none w-[200px] md:w-[300px] aspect-[3.2/4.5] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
                  onClick={() => {
                      resetAutoPlay();
                      setCurrentIndex((currentIndex + idx) % products.length);
                  }}
                >
                  <img 
                    src={product.image} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={product.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[9px] md:text-[10px] text-[#2563EB] font-black uppercase tracking-widest mb-1">{product.subtitle}</p>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">{product.name}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom: Navigation and Progress */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          {/* Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => { resetAutoPlay(); handlePrev(); }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => { resetAutoPlay(); handleNext(); }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {/* Counter */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-white leading-none">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-xs font-black text-white/40 uppercase">/ {products.length.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
