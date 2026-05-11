import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&auto=format&fit=crop&q=80', // Tech circuit bg
    mockup: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80', // Robust tech mockup
    label: 'Z-TRACS · Behavior Intelligence',
    heading1: 'Behavioral',
    heading2: 'Intelligence',
    tagline: 'Proactive. Precise. Real-time.',
    description: 'Zeex AI converts your existing CCTV infrastructure into an intelligent safety layer. Our models analyze body language, crowd density, and anomalous movement — alerting before incidents escalate.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&auto=format&fit=crop&q=80', // Bright Retail
    mockup: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=900&auto=format&fit=crop&q=80', // Shopping / POS
    label: 'Z-AUDIT · Retail Intelligence',
    heading1: 'Retail',
    heading2: 'Operations',
    tagline: 'Loss Prevention. Smarter Operations.',
    description: 'From shelf analytics to theft detection, Z-AUDIT gives retail and commercial spaces a complete behavioral overview — no additional hardware, zero disruption to existing infrastructure.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1800&auto=format&fit=crop&q=80', // Cityscape Night
    mockup: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&auto=format&fit=crop&q=80', // Analytics chart / City
    label: 'Smart Cities · Traffic AI',
    heading1: 'Smart City',
    heading2: 'Safety',
    tagline: 'Safe Cities. Smarter Tomorrow.',
    description: 'Zeex AI powers urban surveillance at scale — from traffic violation detection to crowd heat-mapping in public spaces. Trusted by government authorities for real-world smart city pilots.',
  },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -60]);

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-[#070B12] overflow-hidden flex flex-col">

      {/* ── Full-bleed BG ── */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <motion.img
            key={i}
            src={s.bg}
            alt=""
            animate={{ opacity: i === current ? 0.45 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B12] via-[#070B12]/70 to-[#070B12]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-[#070B12]/30" />
      </motion.div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Glows ── */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-default px-6 md:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full min-h-screen pt-24 pb-16">

          {/* ── LEFT ── */}
          <div className="flex-[0_0_auto] lg:w-[52%] order-2 lg:order-1">

            {/* Small label */}
            <motion.div
              key={`label-${current}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
                {slide.label}
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              <motion.div
                key={`h1-${current}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Highlighted block */}
                <span className="inline-block bg-blue-600 px-5 py-2 mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase">
                    {slide.heading1}
                  </span>
                </span>
              </motion.div>

              <motion.div
                key={`h2-${current}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
                  {slide.heading2}
                </span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              key={`tag-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-400 font-medium mb-10 tracking-wide"
            >
              {slide.tagline}
            </motion.p>

            {/* Slide Description */}
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm text-gray-500 max-w-md font-medium leading-relaxed mb-10"
            >
              {slide.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-0 mb-16"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.25)]"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/80 font-black uppercase tracking-widest text-[11px] hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Bottom label */}
            <div className="text-[10px] text-gray-600 font-mono tracking-widest">
              www.zeexai.com
            </div>
          </div>

          {/* ── RIGHT: Product Mockup Image ── */}
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2 relative w-full">
            <motion.div
              key={`mockup-${current}`}
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg lg:max-w-none"
            >
              {/* Glow behind image */}
              <div className="absolute inset-[-40px] bg-blue-600/10 blur-[80px] rounded-3xl pointer-events-none" />

              {/* Main image frame */}
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-blue-900/10">
                <img
                  src={slide.mockup}
                  alt="Zeex AI Surveillance"
                  className="w-full h-64 md:h-96 object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80';
                  }}
                />
                {/* Overlay UI elements on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Live badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 border border-white/10 backdrop-blur-sm px-3 py-1.5 rounded">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Live</span>
                </div>

                {/* Bottom overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Zeex AI · {slide.heading1}</div>
                  <div className="text-base font-black text-white uppercase tracking-tight">{slide.heading2} Intelligence</div>
                </div>
              </div>

              {/* Small floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-5 -left-5 md:-left-10 bg-[#070B12]/90 border border-white/10 backdrop-blur-md px-5 py-4 rounded-lg shadow-2xl"
              >
                <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">AI Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[11px] font-black text-white">Threat Analysis Active</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="relative z-10 flex justify-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>

      {/* ── Bottom environment ticker ── */}
      <div className="relative z-10 border-t border-white/5">
        <div className="relative overflow-hidden py-3 bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#070B12] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#070B12] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-16 whitespace-nowrap items-center" style={{ animation: 'tickerScroll 28s linear infinite' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {['Supermarkets','Airports','Hospitals','Schools','Warehouses','Malls','Factories','Smart Cities','Banks','Hotels','Stadiums','Residential'].map(env => (
                  <div key={env} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{env}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;