import React, { useEffect, useRef } from 'react';
import { Shield, Video, Bell, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPFadeIn from '@/hooks/useGSAPFadeIn';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, linkTo }) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 group">
      <div className="mb-6 w-14 h-14 rounded-lg bg-[#F4F7FB] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-[#0F172A]">{title}</h3>
      
      <p className="text-[#475569] leading-relaxed flex-grow mb-8">{description}</p>
      
      <div className="mt-auto">
        <Link 
          to={linkTo} 
          className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold group/btn"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container-default px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
            AI-Driven <span className="text-[#2563EB]">Infrastructure</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto font-medium">
            High-precision surveillance logic powered by advanced neural architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Shield />}
            title="NEURAL THREAT DETECTION"
            description="Enterprise-grade identification system continuously monitoring operational perimeters with unmatched forensic accuracy."
            linkTo="/solutions"
            delay="0.1s"
          />
          
          <FeatureCard 
            icon={<Video />}
            title="VISUAL INTELLIGENCE"
            description="Autonomous video de-construction detects behavioral anomalies while maintaining rigorous privacy protocols."
            linkTo="/solutions"
            delay="0.2s"
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="REAL-TIME RESPONSE"
            description="Mission-critical telemetry delivered instantly to security nodes with low-latency contextual intelligence."
            linkTo="/solutions"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;