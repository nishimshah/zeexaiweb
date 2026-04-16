import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LetsTalk = () => {
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

  return (
    <section className="py-32 bg-[#1E3A8A] text-white relative overflow-hidden" ref={setRef}>
      {/* Abstract Industrial Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563EB]/10 -skew-x-12 translate-x-1/4"></div>
      
      <div className="container-default px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-md text-[10px] font-black uppercase tracking-widest border border-white/20 mb-8">
            SYSTEM INTEGRATION
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter leading-none">
            Scale your infrastructure <br />
            <span className="text-[#2563EB]">with Zeex AI</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center px-12 py-6 bg-white text-[#1E3A8A] font-black rounded-xl shadow-2xl hover:bg-[#F4F7FB] transition-all uppercase tracking-widest text-sm"
            >
              Request System Audit
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;

