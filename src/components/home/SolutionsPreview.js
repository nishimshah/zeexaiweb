import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, ShoppingCart, ArrowRight, Car, Building2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/ui/OptimizedImage';
const SolutionsPreview = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: '200px 0px'
    });
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };
    const solutionCards = [
        {
            id: 1,
            title: "Shops & Supermarkets",
            description: "Retail security solutions with theft prevention and customer behavior analytics.",
            icon: _jsx(ShoppingCart, { className: "text-green-600", size: 24 }),
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=320&fit=crop&auto=format&q=80",
            link: "/services/retail-wholesale-high-risk",
            colorClass: "group-hover:bg-green-50",
            textColor: "group-hover:text-green-300",
            delay: 0.1,
        },
        {
            id: 2,
            title: "Traffic Monitoring",
            description: "AI-powered traffic management with real-time analytics and violation detection.",
            icon: _jsx(Car, { className: "text-red-600", size: 24 }),
            image: "https://images.unsplash.com/photo-1597762333765-cbcd63dd8acc?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/services/traffic-public-safety",
            colorClass: "group-hover:bg-red-50",
            textColor: "group-hover:text-red-300",
            delay: 0.2,
        },
        {
            id: 3,
            title: "Corporate & Residential",
            description: "Surveillance for homes and offices with intelligent alerts and remote access.",
            icon: _jsx(Home, { className: "text-blue-600", size: 24 }),
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=320&fit=crop&auto=format&q=80",
            link: "/services/corporate-residential",
            colorClass: "group-hover:bg-blue-50",
            textColor: "group-hover:text-blue-300",
            delay: 0.3,
        },
        {
            id: 4,
            title: "Industrial Surveillance",
            description: "Surveillance systems for factories and warehouses to ensure safety.",
            icon: _jsx(Building2, { className: "text-gray-700", size: 24 }),
            image: "https://plus.unsplash.com/premium_photo-1661962513763-05ff8b984285?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/services/traffic-public-safety",
            colorClass: "group-hover:bg-gray-100",
            textColor: "group-hover:text-gray-400",
            delay: 0.4,
        },
    ];
    return (_jsx("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white", ref: ref, children: _jsxs("div", { className: "container-default px-4", children: [_jsxs(motion.div, { initial: "hidden", animate: controls, variants: fadeInUp, className: "text-center mb-20", children: [_jsx(motion.span, { variants: fadeInUp, className: "inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4", children: "Industry Services" }), _jsxs(motion.h2, { variants: fadeInUp, className: "text-4xl font-bold text-gray-900 mb-5 max-w-3xl mx-auto", children: ["AI Security for ", _jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Every Environment" })] }), _jsx(motion.p, { variants: fadeInUp, className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Customized surveillance solutions that adapt to your specific security requirements and infrastructure." })] }), _jsx(motion.div, { initial: "hidden", animate: controls, variants: {
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: solutionCards.map((card, index) => (_jsx(motion.div, { variants: fadeInUp, custom: card.delay, style: { willChange: 'transform, opacity' }, children: _jsxs("div", { className: "group relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" }), _jsx("div", { className: "absolute inset-0 backdrop-blur-2xl z-0" }), _jsx(OptimizedImage, { src: card.image, alt: card.title, className: "w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500", width: 400, height: 320, priority: index < 2 }), _jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 z-20", children: [_jsx("div", { className: `p-3 bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md ${card.colorClass} transition-colors`, children: card.icon }), _jsx("h3", { className: "text-white text-2xl font-bold mb-3", style: { textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 2px #fff' }, children: card.title }), _jsx("p", { className: "text-white text-base font-semibold mb-6", style: { textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 2px #fff' }, children: card.description }), _jsxs(Link, { to: card.link, className: `inline-flex items-center text-white font-medium ${card.textColor} transition-colors`, children: ["Explore solution", _jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })] })] })] }) }, card.id))) }), _jsx(motion.div, { initial: "hidden", animate: controls, variants: fadeInUp, className: "text-center mt-16", children: _jsxs(Link, { to: "/services", className: "inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5", children: ["View all services", _jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] }) })] }) }));
};
export default React.memo(SolutionsPreview);
//# sourceMappingURL=SolutionsPreview.js.map