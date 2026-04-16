import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Home, Building, MapPin, Check, ArrowRight, Shield, ShoppingCart, Factory, TrafficCone } from 'lucide-react';
import { motion, } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage';
// Service data
const services = [
    {
        id: 'residential',
        title: 'Residential Security',
        description: 'Comprehensive AI-powered security systems designed specifically for homes and residential properties. Our service integrates seamlessly with your existing smart home setup, providing unparalleled protection for your family and property.',
        icon: Home,
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&auto=format&q=80',
        benefits: [
            'Smart perimeter protection',
            'Family facial recognition',
            'Mobile app monitoring',
            'Integration with existing security systems',
            'Custom alert settings'
        ],
        useCases: [
            'Detecting unknown individuals approaching your property',
            'Distinguishing family members from visitors',
            'Monitoring entrance points and vulnerable areas',
            'Receiving alerts when children arrive home from school',
            'Identifying package delivery personnel'
        ]
    },
    {
        id: 'commercial',
        title: 'Commercial Surveillance',
        description: 'Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system combines AI analytics with scalable infrastructure to protect your assets, employees, and customers around the clock.',
        icon: Building,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&auto=format&q=80',
        benefits: [
            'Multi-site monitoring',
            'Employee access management',
            'Theft prevention',
            'Business intelligence gathering',
            'Regulatory compliance'
        ],
        useCases: [
            'Retail loss prevention with product recognition',
            'Office building access control',
            'Warehouse inventory and security management',
            'Banking and financial institution security',
            'Retail customer behavior analysis'
        ]
    },
    {
        id: 'public-safety',
        title: 'Public Safety',
        description: 'Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our public safety systems help identify potential threats before they escalate, enabling proactive security measures.',
        icon: MapPin,
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop&auto=format&q=80',
        benefits: [
            'Crowd anomaly detection',
            'Privacy-focused monitoring',
            'Emergency situation recognition',
            'Integration with emergency services',
            'Scalable deployment options'
        ],
        useCases: [
            'Transportation hub security',
            'Public event monitoring',
            'Parks and recreation area safety',
            'School and campus security',
            'Emergency response coordination'
        ]
    },
    {
        id: 'retail',
        title: 'Retail Security',
        description: 'Specialized AI surveillance for retail environments that prevents theft while enhancing customer experience. Our retail security solutions provide real-time analytics and automated threat detection.',
        icon: ShoppingCart,
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=500&fit=crop&auto=format&q=80',
        benefits: [
            'Theft prevention and detection',
            'Customer behavior analytics',
            'Inventory monitoring',
            'Queue management',
            'Loss prevention reporting'
        ],
        useCases: [
            'Shoplifting detection and prevention',
            'Customer flow analysis',
            'Employee theft monitoring',
            'Queue length optimization',
            'Product placement insights'
        ]
    },
    {
        id: 'industrial',
        title: 'Industrial Security',
        description: 'Robust security solutions for industrial facilities and manufacturing plants. Our industrial security systems ensure worker safety and protect valuable equipment and processes.',
        icon: Factory,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&auto=format&q=80',
        benefits: [
            'Worker safety monitoring',
            'Equipment protection',
            'Process compliance',
            'Hazard detection',
            '24/7 facility monitoring'
        ],
        useCases: [
            'Safety protocol compliance monitoring',
            'Equipment malfunction detection',
            'Unauthorized access prevention',
            'Emergency evacuation coordination',
            'Quality control monitoring'
        ]
    },
    {
        id: 'traffic',
        title: 'Traffic Management',
        description: 'Intelligent traffic monitoring and management systems for cities and highways. Our traffic solutions reduce congestion, improve safety, and provide real-time traffic analytics.',
        icon: TrafficCone,
        image: 'https://images.unsplash.com/photo-1597762333765-cbcd63dd8acc?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        benefits: [
            'Traffic flow optimization',
            'Accident detection',
            'Congestion monitoring',
            'Signal timing optimization',
            'Traffic pattern analysis'
        ],
        useCases: [
            'Real-time traffic monitoring',
            'Accident detection and response',
            'Traffic signal optimization',
            'Congestion prediction',
            'Emergency vehicle routing'
        ]
    }
];
const Services = () => {
    // Preload critical images for better performance
    React.useEffect(() => {
        // Preload first 3 images for better perceived performance
        const criticalImages = services.slice(0, 3).map(service => service.image);
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }, []);
    return (_jsxs(Layout, { showFooter: false, children: [_jsxs("section", { className: "relative min-h-[70vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-900/90" })] }), _jsx("div", { className: "container-default relative z-10 transform translate-y-4 animate-slideUp px-4 sm:px-6", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6", children: [_jsx(Shield, { className: "w-4 h-4" }), " AI Security Services"] }), _jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 leading-tight tracking-tight", children: ["Tailored ", _jsx("span", { className: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Security Services" })] }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto", children: "AI-powered surveillance systems designed specifically for your environment and security needs" }), _jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8 }, className: "flex flex-col sm:flex-row justify-center gap-3 sm:gap-4", children: _jsxs(Link, { to: "/contact", className: "inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg text-sm sm:text-base", children: ["Get Started", _jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })] }) })] }) }), _jsx("style", { children: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    .animate-slideUp {
      animation: slideUp 1.2s ease-out forwards;
    }
  ` })] }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container-default", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsxs("h2", { className: "text-4xl font-bold mb-6 text-gray-900", children: ["Security Tailored to ", _jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Your Environment" })] }), _jsx("p", { className: "text-xl text-gray-600", children: "Every security challenge is unique. Our AI-powered services are designed to adapt to specific environments and security needs." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-20", children: services.map((service, index) => (_jsxs("div", { className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group", children: [_jsxs("div", { className: "min-h-[180px] h-auto overflow-hidden relative", children: [_jsx(OptimizedImage, { src: service.image, alt: service.title, className: "w-full h-auto min-h-[180px] object-cover transition-transform duration-500 group-hover:scale-105", width: 400, height: 240, priority: index < 3 }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end", children: _jsx("div", { className: "p-4 md:p-6", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-white flex items-center justify-center", children: _jsx(service.icon, { className: "h-5 w-5 text-blue-600" }) }), _jsx("h3", { className: "text-lg md:text-2xl font-bold text-white", children: service.title })] }) }) })] }), _jsxs("div", { className: "p-4 md:p-6", children: [_jsx("p", { className: "text-gray-600 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base", children: service.description }), _jsxs(Link, { to: `#${service.id}`, className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm md:text-base", children: ["Learn more", _jsx(ArrowRight, { className: "ml-1 w-4 h-4" })] })] })] }, service.id))) }), _jsx("div", { className: "space-y-20 md:space-y-32", children: services.map((service, index) => (_jsxs("div", { id: service.id, className: "scroll-mt-24", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4 mb-8", children: [_jsx("div", { className: "h-1 w-full md:w-auto flex-grow rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" }), _jsxs("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3 whitespace-nowrap", children: [_jsx(service.icon, { className: "h-7 w-7 md:h-8 md:w-8 text-blue-600" }), service.title] }), _jsx("div", { className: "h-1 w-full md:w-auto flex-grow rounded-full bg-gradient-to-r from-indigo-600 to-blue-600" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16", children: [_jsx("div", { className: index % 2 === 0 ? 'order-none' : 'order-none lg:order-last', children: _jsxs("div", { className: "rounded-2xl overflow-hidden shadow-xl relative group", children: [_jsx(OptimizedImage, { src: service.image, alt: service.title, className: "w-full h-auto min-h-[220px] transform transition-transform duration-700 group-hover:scale-105", width: 600, height: 400 }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }) }), _jsxs("div", { children: [_jsx("p", { className: "text-base md:text-lg text-gray-600 mb-6 md:mb-8", children: service.description }), _jsx("h4", { className: "text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800", children: "Key Benefits" }), _jsx("ul", { className: "space-y-3 md:space-y-4 mb-6 md:mb-8", children: service.benefits.map((benefit, i) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx("div", { className: "p-1 rounded-full bg-blue-100 text-blue-600 mt-0.5", children: _jsx(Check, { className: "w-5 h-5" }) }), _jsx("span", { className: "text-gray-700", children: benefit })] }, i))) }), _jsxs(Link, { to: `/services/${service.id}`, className: "inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm md:text-base", children: ["Learn More", _jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] })] })] }), _jsxs("div", { className: "bg-gray-50 p-4 md:p-8 rounded-2xl overflow-x-auto", children: [_jsxs("h4", { className: "text-lg md:text-2xl font-semibold mb-6 md:mb-8 text-gray-800 text-center", children: ["How ", service.title, " Works in Practice"] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6", children: service.useCases.map((useCase, i) => (_jsxs("div", { className: "bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold", children: i + 1 }), _jsx("h5", { className: "font-medium text-gray-700 text-sm md:text-base", children: "Use Case" })] }), _jsx("p", { className: "text-gray-600 text-sm md:text-base", children: useCase })] }, i))) })] })] }, service.id))) })] }) }), _jsxs("section", { className: "py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 -translate-x-1/2 -translate-y-1/2" }), _jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 opacity-10 translate-x-1/2 translate-y-1/2" })] }), _jsx("div", { className: "container-default text-center relative z-10", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h2", { className: "text-5xl font-bold mb-6", children: "Ready to Explore the Right Service?" }), _jsx("p", { className: "text-xl mb-10 text-blue-100", children: "Our team of security experts is ready to help you find the perfect AI surveillance service for your needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [_jsx(Link, { to: "/contact", className: "px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl", children: "Schedule a Consultation" }), _jsx(Link, { to: "/solutions", className: "px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:shadow-xl", children: "Learn About Our Solutions" })] })] }) })] })] }));
};
export default Services;
//# sourceMappingURL=Services.js.map