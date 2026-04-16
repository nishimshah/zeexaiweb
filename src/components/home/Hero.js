import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, Shield, Zap, Eye } from 'lucide-react';
const Hero = () => {
    const scrollRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const videoRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    // Handle play/pause toggle
    const handlePlayPause = () => {
        if (!isVideoLoaded) {
            setIsVideoLoaded(true);
            setTimeout(() => {
                videoRef.current?.play();
                setIsPlaying(true);
            }, 100);
        }
        else if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            }
            else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    // Update progress bar
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
        }
    };
    // Seek video
    const handleSeek = (e) => {
        if (videoRef.current) {
            const value = Number(e.target.value);
            videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
            setProgress(value);
        }
    };
    // Volume control
    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        setVolume(value);
        if (videoRef.current) {
            videoRef.current.volume = value;
        }
    };
    // Sync play/pause state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    // Fullscreen toggle
    const handleFullscreen = () => {
        if (!isFullscreen && videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
            else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            }
            else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        }
        else if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };
    // Set initial volume
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);
    useEffect(() => {
        const onFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);
    // Animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                }
            });
        }, { threshold: 0.1 });
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
        // Add initial animation to hero elements without waiting for scroll
        setTimeout(() => {
            document.querySelectorAll('.hero-element').forEach(el => {
                el.classList.add('animate-fade-up');
            });
        }, 100);
        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
    const scrollToContent = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };
    return (_jsxs("section", { className: "relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 md:pt-24", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-30 animate-gradient-pan" }), _jsx("div", { className: "absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent opacity-25 animate-gradient-pan-reverse" })] }), _jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute top-1/4 left-[15%] w-6 h-6 rounded-full bg-blue-500/40 filter blur-[20px] animate-float-slow" }), _jsx("div", { className: "absolute top-1/3 right-[20%] w-8 h-8 rounded-full bg-indigo-500/40 filter blur-[25px] animate-float-medium" }), _jsx("div", { className: "absolute bottom-1/4 right-[15%] w-10 h-10 rounded-full bg-purple-500/40 filter blur-[30px] animate-float-fast" }), _jsx("div", { className: "absolute bottom-1/3 left-[10%] w-12 h-12 rounded-full bg-cyan-500/40 filter blur-[35px] animate-float-slow" }), _jsx("div", { className: "absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-emerald-500/30 filter blur-[15px] animate-float-medium" })] }), _jsx("div", { className: "container-default relative z-10 pb-24 px-4", children: _jsxs("div", { className: "text-center max-w-6xl mx-auto", children: [_jsxs("div", { className: "inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-blue-200/50 shadow-lg hero-element", children: [_jsx(Shield, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { className: "text-sm font-semibold text-blue-700", children: "Real-Time Intelligence. Real-World Impact" }), _jsx(Zap, { className: "w-4 h-4 text-blue-600" })] }), _jsx("div", { className: "overflow-visible mb-8", children: _jsxs("h1", { className: "font-bold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 gradient-text-safe hero-element leading-[1.2] md:leading-[1.3] pb-4", children: ["AI-Powered Surveillance for", _jsx("span", { className: "block text-4xl md:text-5xl lg:text-6xl mt-2", children: "Safety & Smart Management" })] }) }), _jsxs("p", { className: "text-xl md:text-2xl mb-12 text-gray-700 max-w-4xl mx-auto hero-element leading-relaxed", style: { animationDelay: '0.3s' }, children: ["Zeex AI redefines how businesses, cities, and industries protect and manage their environments using", _jsx("span", { className: "font-semibold text-blue-600", children: " AI-driven surveillance" }), " to detect, respond, and prevent incidents before they escalate."] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 hero-element", style: { animationDelay: '0.4s' }, children: [_jsxs(Link, { to: "/solutions", className: "group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-500/20", children: [_jsx("span", { className: "relative z-10", children: "Explore Solutions" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), _jsx(Link, { to: "/contact", className: "group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 hover:border-blue-200", children: _jsx("span", { className: "relative z-10", children: "Get Started" }) })] }), _jsxs("div", { className: "w-full max-w-5xl mx-auto aspect-video rounded-3xl mb-10 overflow-hidden hero-element relative group shadow-2xl border border-white/20", style: { animationDelay: '0.6s' }, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 opacity-30 rounded-3xl group-hover:opacity-40 transition-opacity duration-300" }), _jsxs("div", { className: "absolute inset-1 rounded-2xl bg-white overflow-hidden", children: [!isVideoLoaded && (_jsxs("div", { className: "w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative", onClick: handlePlayPause, style: { cursor: 'pointer' }, children: [_jsx("img", { src: "/video_thumbnail.png", alt: "Video thumbnail", className: "absolute inset-0 w-full h-full object-cover rounded-2xl z-0" }), _jsx("div", { className: "absolute inset-0 bg-black/40 rounded-2xl z-10" }), _jsxs("div", { className: "text-center relative z-20", children: [_jsx("div", { className: "w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300", children: _jsx(Play, { className: "w-10 h-10 text-blue-600 ml-1" }) }), _jsx("p", { className: "text-white font-medium text-lg", children: "Watch Our Demo" })] })] })), _jsx("video", { ref: videoRef, src: "/video.mp4", className: `w-full h-full object-cover rounded-2xl ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`, poster: "/video_thumbnail.png", onTimeUpdate: handleTimeUpdate, onPlay: handlePlay, onPause: handlePause, onClick: handlePlayPause, tabIndex: 0, style: { outline: 'none' } }), isVideoLoaded && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: handlePlayPause, className: "text-white hover:text-blue-300 transition-colors", children: isPlaying ? (_jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z" }) })) : (_jsx(Play, { className: "w-6 h-6" })) }), _jsx("div", { className: "flex-1", children: _jsx("input", { type: "range", min: "0", max: "100", value: progress, onChange: handleSeek, className: "w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider" }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "range", min: "0", max: "1", step: "0.1", value: volume, onChange: handleVolumeChange, className: "w-16 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider" }), _jsx("button", { onClick: handleFullscreen, className: "text-white hover:text-blue-300 transition-colors", children: _jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }) }) })] })] }) }))] })] }), _jsxs("div", { className: "flex flex-col items-center hero-element", style: { animationDelay: '0.8s' }, children: [_jsx("p", { className: "text-sm text-gray-600 mb-4 font-medium", children: "Discover More" }), _jsx("button", { onClick: scrollToContent, className: "group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50", children: _jsx(ArrowDown, { className: "w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors animate-bounce" }) })] })] }) }), _jsx("div", { ref: scrollRef, className: "absolute bottom-0" })] }));
};
export default Hero;
//# sourceMappingURL=Hero.js.map