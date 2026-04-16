import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, Shield, Zap, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPText from '@/hooks/useGSAPText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!isVideoLoaded) {
      setIsVideoLoaded(true);
      setTimeout(() => {
        videoRef.current?.play();
        setIsPlaying(true);
      }, 100);
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const scrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#F4F7FB] pt-32 pb-24">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container-default relative z-10 w-full px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white rounded-lg border border-[#E2E8F0] shadow-sm">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-widest">Enterprise AI Intelligence</span>
            </div>

            <h1 className="font-black text-5xl md:text-7xl text-[#0F172A] leading-[1.05] mb-8 uppercase tracking-tighter">
              Securing Innovation <br />
              <span className="text-[#2563EB]">at Scale</span>
            </h1>

            <p className="text-xl text-[#475569] mb-12 leading-relaxed max-w-xl font-medium">
              Industrial-grade AI surveillance infrastructure designed for modern environments. Real-time detection, forensic analysis, and proactive incident mitigation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-black px-12 py-6 rounded-xl transition-all text-center uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Connect with Experts
              </Link>
              <button
                onClick={scrollToContent}
                className="border-2 border-[#1E3A8A] text-[#1E3A8A] font-black px-12 py-6 rounded-xl hover:bg-[#1E3A8A] hover:text-white transition-all text-center uppercase tracking-widest text-sm"
              >
                View Infrastructure
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 opacity-50 grayscale">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0F172A]">99.8%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Detection Accuracy</span>
              </div>
              <div className="w-px h-10 bg-[#E2E8F0]"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0F172A]">50ms</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Processing Latency</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Visual Container */}
          <div className="relative">
            <div className="relative bg-[#0F172A] p-1.5 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(30,58,138,0.25)] border border-[#E2E8F0]/10 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden rounded-[2rem] bg-[#0F172A]">
                {!isVideoLoaded && (
                  <div 
                    className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                    onClick={handlePlayPause}
                  >
                    <img
                      src="/video_thumbnail.png"
                      alt="System Architecture"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:bg-[#2563EB] group-hover:scale-110 transition-all duration-500">
                      <Play className="w-10 h-10 text-white fill-current translate-x-1" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="text-white">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Live Demonstrations</p>
                        <p className="text-lg font-black uppercase tracking-tight">AI Surveillance Platform</p>
                      </div>
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                        02:45
                      </div>
                    </div>
                  </div>
                )}
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  className={`w-full h-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  poster="/video_thumbnail.png"
                  onTimeUpdate={handleTimeUpdate}
                />
                
                {isVideoLoaded && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F172A]/80 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <button onClick={handlePlayPause} className="text-white hover:text-[#2563EB] transition-colors">
                        {isPlaying ? <span className="font-black text-xs">PAUSE</span> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#2563EB]" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-black text-white/60 tracking-widest">LIVE</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Technical Detail Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#1E3A8A]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="absolute bottom-0 w-full flex justify-center pb-8 animate-bounce">
        <ArrowDown className="text-[#1E3A8A] opacity-20" size={24} />
      </div>
    </section>
  );
};

export default Hero;