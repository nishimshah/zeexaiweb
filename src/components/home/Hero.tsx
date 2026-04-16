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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a0e1a] pt-40 pb-40">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container-default relative z-10 w-full px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left animate-slide-in-left max-w-2xl">
            <h1 className="font-black text-4xl md:text-5xl text-white leading-[1.1] uppercase tracking-tighter mb-2">
              AI. DATA. IMPACT.
            </h1>
            <h2 className="font-black text-3xl md:text-4xl text-white leading-tight uppercase tracking-tighter mb-8">
              TRANSFORMING INSIGHTS <br /> INTO ACTION
            </h2>

            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-lg font-medium">
              From prevention to performance, Zeex AI turns everyday data into actionable intelligence for safer, smarter management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/contact"
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold px-8 py-3 rounded-xl transition-all text-center text-sm w-full sm:w-auto shadow-lg"
              >
                Get a Demo
              </Link>
              <Link
                to="/solutions"
                className="border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all text-center text-sm w-full sm:w-auto"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Right: Technical Visual Container */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-[#4F46E5]/10 p-1.5 rounded-3xl shadow-2xl border border-white/10 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden rounded-2xl bg-[#0a0e1a]">
                {!isVideoLoaded && (
                  <div 
                    className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                    onClick={handlePlayPause}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#0a0e1a] opacity-30"></div>
                    <img
                      src="https://i.ibb.co/hJqt2xCz/zeex-ai-logo.png"
                      alt="System Architecture"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-0"
                    />
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                      <Play className="w-8 h-8 text-[#4F46E5] fill-current translate-x-1" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown className="text-white" size={20} />
      </div>
    </section>
  );
};


export default Hero;