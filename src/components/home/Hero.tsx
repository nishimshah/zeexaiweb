import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Camera } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  // Premium Mouse Follow Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates to -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Map normalized coordinates to dramatic movement ranges
  const cameraX = useTransform(smoothMouseX, [-1, 1], [-300, 300]);
  const cameraY = useTransform(smoothMouseY, [-1, 1], [-200, 200]);
  const cameraRotateX = useTransform(smoothMouseY, [-1, 1], [35, -35]);
  const cameraRotateY = useTransform(smoothMouseX, [-1, 1], [-35, 35]);
  const irisX = useTransform(smoothMouseX, [-1, 1], [15, -15]);
  const irisY = useTransform(smoothMouseY, [-1, 1], [15, -15]);

  // Concrete Grid Data
  const rows = 6;
  const cols = 8;
  const tiles = Array.from({ length: rows * cols });

  return (
    <section 
      className="relative min-h-screen bg-[#050810] overflow-hidden flex flex-col items-center justify-center pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* ── Dark Industrial Grid Background ────────────────── */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      >
        <div className="grid grid-cols-8 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] gap-3 p-3">
          {tiles.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.005 }}
              className="relative aspect-square bg-[#0A0F1A] border border-blue-900/20 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
            >
              {/* Corner Glowing Bolts */}
              <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.3)]"></div>
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.3)]"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.3)]"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.3)]"></div>
              
              {/* Technical Grid Pattern */}
              <div className="w-12 h-12 rounded-full border border-blue-500/5 flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-blue-500/10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Atmospheric Glows ──────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-600/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050810_80%)]"></div>

      {/* ── 'Neural Eye' CCTV Animation (Dark Theme) ────────── */}
      <motion.div
        style={{
          x: cameraX,
          y: cameraY,
          rotateX: cameraRotateX,
          rotateY: cameraRotateY,
          top: "50%",
          left: "50%",
          marginTop: "-140px",
          marginLeft: "-140px"
        }}
        className="absolute z-20 pointer-events-none perspective-1000"
      >
        <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Refined Back-light glows (follows camera) */}
          <div className="absolute inset-[-90px] bg-blue-600/15 blur-[90px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-[-35px] bg-blue-500/25 blur-[35px] rounded-full pointer-events-none"></div>

          {/* Main Housing (Obsidian Finish with Optimized Rim Light) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-black rounded-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),_0_0_50px_rgba(37,99,235,0.2)] border border-white/15"></div>
          
          {/* Eye/Lens Barrel */}
          <div className="relative w-44 h-44 bg-[#0F172A] rounded-full border-[10px] border-[#1E293B] shadow-[inset_0_10px_30px_rgba(0,0,0,0.9),_0_0_25px_rgba(37,99,235,0.25)] flex items-center justify-center overflow-hidden">
             
             {/* Iris/Aperture Elements */}
             <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                {/* Data Veins (Glow) */}
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_transparent_40%,_#2563EB_100%)] animate-pulse"></div>
                
                {/* Central Sensor (Pupil) */}
                <motion.div 
                  style={{ x: irisX, y: irisY }}
                  className="w-16 h-16 bg-black rounded-full border-2 border-blue-500/60 flex items-center justify-center relative shadow-[0_0_50px_rgba(37,99,235,0.6)]"
                >
                   {/* Glowing Core */}
                   <div className="w-8 h-8 bg-blue-600/40 rounded-full blur-[4px] border border-blue-400/70"></div>
                   <div className="absolute w-2 h-2 bg-white/80 rounded-full blur-[1px] top-4 left-4"></div>
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                </motion.div>
             </div>

             {/* Blink Animation */}
             <motion.div 
               animate={{ height: ["0%", "0%", "0%", "100%", "0%"] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.92, 0.95, 1], ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full bg-[#050810] z-40 origin-top"
             />
             <motion.div 
               animate={{ height: ["0%", "0%", "0%", "100%", "0%"] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.92, 0.95, 1], ease: "easeInOut" }}
               className="absolute bottom-0 left-0 w-full bg-[#050810] z-40 origin-bottom"
             />
          </div>

          {/* Technical UI */}
          <div className="absolute inset-[-40px] border border-blue-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_20px_red] animate-pulse"></div>
          
          {/* Target Reticle */}
          <div className="absolute inset-[-30px] flex items-center justify-center opacity-40">
             <div className="w-full h-[1px] bg-blue-500/20 absolute"></div>
             <div className="h-full w-[1px] bg-blue-500/20 absolute"></div>
          </div>
        </div>
      </motion.div>

      {/* ── High-Contrast Content ────────────────────────── */}
      <div className="container-default relative z-30 px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-full mb-10 shadow-lg backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI. DATA. IMPACT.</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tight mb-10 uppercase drop-shadow-2xl">
            TRANSFORMING <br /> <span className="text-blue-600 font-black">INSIGHTS INTO ACTION</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            From prevention to performance, Zeex AI turns everyday data into actionable intelligence for safer, smarter management.
          </p>

          {/* Featured Products Quick Access */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-16"
          >
            {[
              { name: 'Z-Audit', id: 'z-audit' },
              { name: 'Z-Factory', id: 'z-factory' },
              { name: 'Z-Market', id: 'z-market' },
              { name: 'Z-Tracs', id: 'z-tracs' },
              { name: 'Z-Labs', id: 'z-labs' }
            ].map((product, idx) => (
              <React.Fragment key={product.id}>
                <Link 
                  to={`/services#${product.id}`}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-blue-500 transition-all duration-300"
                >
                  {product.name}
                </Link>
                {idx < 4 && <div className="w-1 h-1 rounded-full bg-blue-600/30"></div>}
              </React.Fragment>
            ))}
          </motion.div> */}

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link
              to="/contact"
              className="px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-blue-500 transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-full backdrop-blur-xl hover:bg-white/10 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-spin-slow {
          animation: spin 45s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;