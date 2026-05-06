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
      className="relative min-h-screen bg-[#050810] overflow-hidden flex flex-col items-center justify-center pt-2"
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

      {/* ── Neural Eye (Interactive Camera) ───────────────── */}
      <motion.div
        style={{
          x: cameraX,
          y: cameraY,
          rotateX: cameraRotateX,
          rotateY: cameraRotateY,
          translateY: yParallax
        }}
        className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-[50%] md:-translate-y-[50%] z-20 pointer-events-none perspective-1000 mb-6 md:mb-0"
      >
        <div className="relative w-32 h-32 sm:w-40 h-40 md:w-72 md:h-72 flex items-center justify-center">
          {/* Intense Back-light glows (follows camera) */}
          <div className="absolute inset-[-40px] md:inset-[-90px] bg-blue-600/15 blur-[40px] md:blur-[90px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-[-15px] md:inset-[-35px] bg-blue-500/25 blur-[15px] md:blur-[35px] rounded-full pointer-events-none"></div>

          {/* Main Housing */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-black rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.8),_0_0_30px_rgba(37,99,235,0.2)] border border-white/15"></div>

          {/* Eye/Lens Barrel */}
          <div className="relative w-24 h-24 sm:w-28 h-28 md:w-44 md:h-44 bg-[#0F172A] rounded-full border-[4px] md:border-[10px] border-[#1E293B] shadow-[inset_0_10px_30px_rgba(0,0,0,0.9),_0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center overflow-hidden">

            {/* Iris/Aperture Elements */}
            <div className="absolute inset-1 md:inset-2 bg-black rounded-full flex items-center justify-center">
              {/* Data Veins (Glow) */}
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_transparent_40%,_#2563EB_100%)] animate-pulse"></div>

              {/* Central Sensor (Pupil) */}
              <motion.div
                style={{ x: irisX, y: irisY }}
                className="w-8 h-8 sm:w-10 h-10 md:w-16 md:h-16 bg-black rounded-full border-2 border-blue-500/60 flex items-center justify-center relative shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                {/* Glowing Core */}
                <div className="w-4 h-4 sm:w-5 h-5 md:w-8 md:h-8 bg-blue-600/40 rounded-full blur-[2px] md:blur-[4px] border border-blue-400/70"></div>
              </motion.div>
            </div>

            {/* Shutter/Blink Animation */}
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
          <div className="absolute inset-[-20px] md:inset-[-40px] border border-blue-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-6 md:top-10 right-6 md:right-10 w-2 md:w-2.5 h-2 md:h-2.5 bg-red-600 rounded-full shadow-[0_0_20px_red] animate-pulse"></div>

          {/* Target Reticle */}
          <div className="absolute inset-[-15px] md:inset-[-30px] flex items-center justify-center opacity-40">
            <div className="w-full h-[1px] bg-blue-500/20 absolute"></div>
            <div className="h-full w-[1px] bg-blue-500/20 absolute"></div>
          </div>
        </div>
      </motion.div>

      {/* ── High-Contrast Content ────────────────────────── */}
      <div className="container-default relative z-30 px-6 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 text-white/60 rounded-full mb-8 md:mt-12 md:mb-10 shadow-lg backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI. DATA. IMPACT.</span>
          </div>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tight mb-6 md:mb-10 uppercase drop-shadow-2xl">
            TRANSFORMING <br /> <span className="text-[#3b82f6] font-black">INSIGHTS INTO ACTION</span>
          </h1>

          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10 md:mb-12">
            From prevention to performance, Zeex AI turns everyday data into actionable intelligence for safer, smarter management.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link
              to="/contact"
              className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-gray-200 transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg"
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