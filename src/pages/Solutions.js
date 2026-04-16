import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi, Check, Server, Smartphone, Monitor, Activity, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Solution data - now including solutions from solutionsDetails
const solutions = [
    {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
        icon: Shield,
        image: 'https://i.ibb.co/fzVMPrbJ/a6993bc4-9261-4f71-a131-b07b5049cec5-1.png',
        features: [
            '24/7 continuous monitoring',
            'AI-powered anomaly detection',
            'Real-time risk assessment',
            'Automated threat classification',
            'Historical pattern analysis'
        ]
    },
    {
        id: 'visual-surveillance-analytics',
        title: 'AI-Visual Surveillance Analytics',
        description: 'Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.',
        icon: Video,
        image: 'https://i.ibb.co/spm2G7g9/5c92a250-b494-45c4-8859-49a854098999-1.png',
        features: [
            'Real-time video processing',
            'Privacy-preserving analytics',
            'Custom detection rules',
            'Multi-camera tracking',
            'Behavioral analysis'
        ]
    },
    {
        id: 'smart-alert-system',
        title: 'Multi-Layered Smart Alert System',
        description: 'Configure alert priorities and customize who gets notified—ensuring the right people respond at the right time.',
        icon: Bell,
        image: 'https://i.ibb.co/nqWX0h64/e29f07c7-f73b-49c0-aee9-9b8c2170ede8-1.png',
        features: [
            'Add multiple notification recipients (family, staff, law enforcement)',
            'Multi-channel alerts via SMS, WhatsApp, Email, and Dashboard',
            'Alert-level customization (minor vs. critical events)',
            'Real-time escalation protocols for high-risk events',
            'Easy configuration from your dashboard'
        ]
    },
    {
        id: 'mobile-app-services',
        title: 'Mobile-Based App Services',
        description: 'Access and control your security ecosystem from anywhere.',
        icon: Smartphone,
        image: 'https://i.ibb.co/Jj9fpXFj/26204326-fd4c-4380-92f5-e042d6b9371d-1.png',
        features: [
            'Real-time security alerts',
            'Live camera feed access',
            'User-based access permissions',
            'Instant incident notifications',
            'Seamless mobile experience'
        ]
    },
    {
        id: 'web-ai-dashboard',
        title: 'Web-Based AI Dashboard',
        description: 'Monitor, manage, and analyze operations through our AI-powered control center.',
        icon: Monitor,
        image: 'https://i.ibb.co/6cpxL5XM/84510116-7cd3-4a1e-b191-2e87184e570d-1.png',
        features: [
            'Real-time activity tracking',
            'AI model control panel',
            'Incident logs & analytics',
            'Multi-location support',
            'Visual heatmaps & trends'
        ]
    },
    {
        id: 'device-health-check',
        title: 'Integrated Device Health Check',
        description: 'Stay informed with automated hardware diagnostics and alerts.',
        icon: Activity,
        image: 'https://i.ibb.co/JRvXfL31/bedf5cd9-4580-4a6f-870c-1b3256cd89e5-1.png',
        features: [
            'Offline device detection',
            'Thermal & battery diagnostics',
            'Predictive maintenance alerts',
            'Health metrics dashboard',
            'Scheduled status reporting'
        ]
    },
    {
        id: 'deployment-options',
        title: 'Cloud & On-Premise Deployment',
        description: 'Choose the infrastructure that fits your enterprise—flexible and secure.',
        icon: Server,
        image: 'https://i.ibb.co/NgYW9J4q/71fe4e0b-776a-4592-9b28-6887518d9314-1.png',
        features: [
            'Scalable cloud hosting',
            'On-premise AI integration',
            'Encrypted data processing',
            'Edge computing capabilities',
            'Full control & data ownership'
        ]
    },
    {
        id: 'custom-ai-models',
        title: 'Custom AI Model Allocation per Camera',
        description: 'Deploy and manage different AI models for specific camera locations—tailored to your security priorities.',
        icon: Box,
        image: 'https://i.ibb.co/ZRS59sQ6/74b47f80-b038-4ac8-88c8-6c948bbd7ee6-1.png',
        features: [
            'Assign AI models per camera',
            'Location-specific intelligence',
            'Real-time model switching',
            'Unified dashboard for all model insights',
            'Efficient resource usage with task-optimized models'
        ]
    },
    {
        id: 'activity-analytics',
        title: 'Real-Time Activity Analytics Dashboard',
        description: 'Visualize and compare AI insights across customer behavior, employee activity, safety events, and operational metrics—all in one unified dashboard.',
        icon: Activity,
        image: 'https://i.ibb.co/ZRYJQTXN/4ae8fd9a-763d-44e5-ac7f-660411ab178d-1.png',
        features: [
            'Real-time graphs for customer flow',
            'Timeline-based activity heatmaps',
            'Category-wise breakdown',
            'Location-wise performance trends',
            'AI-backed forecasting and anomaly detection'
        ]
    },
    {
        id: 'data-protection',
        title: 'Smart Data Protection',
        description: 'Secure storage and encryption of all your surveillance data with advanced protection measures.',
        icon: Database,
        image: 'https://i.ibb.co/v6NZSDZS/Chat-GPT-Image-May-14-2025-11-42-22-AM-1.png',
        features: [
            'Military-grade encryption',
            'Role-based access controls',
            'Automated retention policies',
            'Tamper-proof audit logs',
            'Geofenced data storage'
        ]
    },
    {
        id: 'access-control',
        title: 'Remote Access Control',
        description: 'Manage and control your security system from anywhere with our secure mobile platform.',
        icon: Lock,
        image: 'https://i.ibb.co/5hV9qZQD/94d5cc0e-35f5-43bb-a29d-1f12f825d863-1.png',
        features: [
            'Mobile app control',
            'Biometric authentication',
            'Temporary access grants',
            'Usage analytics',
            'Emergency lockdown'
        ]
    },
    {
        id: 'network-security',
        title: 'Network Security',
        description: 'Protect your surveillance network from cyber threats with our advanced security measures.',
        icon: Wifi,
        image: 'https://i.ibb.co/679BRfLp/4c28a068-e2d4-42c6-be10-65b5387cc720-1.png',
        features: [
            'Intrusion prevention',
            'Device authentication',
            'Encrypted communications',
            'Vulnerability scanning',
            'Anomaly detection'
        ]
    }
];
// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const Solutions = () => {
    return (_jsxs(Layout, { showFooter: false, children: [_jsxs("section", { className: "relative min-h-[70vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-900/90" })] }), _jsx("div", { className: "container-default relative z-10 transform translate-y-4 animate-slideUp px-4 sm:px-6", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6", children: [_jsx(Shield, { className: "w-4 h-4" }), " AI Security Solutions"] }), _jsxs("h1", { className: "text-5xl sm:text-5xl lg:text-[3rem] font-bold text-white mb-5 leading-tight tracking-tight", children: ["Advanced ", _jsx("span", { className: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Security Solutions" })] }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto", children: "Cutting-edge surveillance solutions powered by artificial intelligence to protect what matters most" }), _jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8 }, className: "flex flex-col sm:flex-row justify-center gap-3 sm:gap-4", children: _jsxs(Link, { to: "/contact", className: "inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg text-sm sm:text-base", children: ["Request a Demo", _jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })] }) })] }) }), _jsx("style", { children: `
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
        ` })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container-default", children: [_jsxs(motion.div, { initial: "hidden", whileInView: "visible", variants: staggerContainer, viewport: { once: true }, className: "text-center max-w-4xl mx-auto mb-16", children: [_jsxs(motion.h2, { variants: fadeInUp, className: "text-4xl font-bold mb-6 text-gray-900", children: ["Comprehensive ", _jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Security Solutions" })] }), _jsx(motion.p, { variants: fadeInUp, className: "text-xl text-gray-600", children: "Our complete suite of AI-powered security solutions designed to protect your assets and provide peace of mind." })] }), _jsx(motion.div, { initial: "hidden", whileInView: "visible", variants: staggerContainer, viewport: { once: true }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: solutions.map((solution, index) => (_jsxs(motion.div, { variants: fadeInUp, whileHover: { y: -5 }, transition: { type: "spring", stiffness: 400, damping: 10 }, className: "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: solution.image, alt: solution.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end", children: _jsx("div", { className: "p-6 w-full", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md", children: _jsx(solution.icon, { className: "h-5 w-5 text-blue-600" }) }), _jsx("h3", { className: "text-xl font-bold text-white", children: solution.title })] }) }) })] }), _jsxs("div", { className: "p-6 flex-grow flex flex-col", children: [_jsxs("div", { className: "flex-grow", children: [_jsx("p", { className: "text-gray-600 mb-6", children: solution.description }), _jsx("h4", { className: "font-semibold text-lg mb-3 text-gray-800", children: "Key Features" }), _jsx("ul", { className: "space-y-3 mb-6", children: solution.features.map((feature, i) => (_jsxs(motion.li, { className: "flex items-start gap-2", initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: 0.1 * i }, viewport: { once: true }, children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: feature })] }, i))) })] }), _jsx(Link, { to: "/contact", className: "mt-auto inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] w-full text-center", children: "Get Started" })] })] }, solution.id))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container-default", children: [_jsxs(motion.div, { initial: "hidden", whileInView: "visible", variants: staggerContainer, viewport: { once: true }, className: "text-center max-w-4xl mx-auto mb-16", children: [_jsxs(motion.h2, { variants: fadeInUp, className: "text-4xl font-bold mb-6 text-gray-900", children: ["Why Choose Our ", _jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Security Solutions" })] }), _jsx(motion.p, { variants: fadeInUp, className: "text-xl text-gray-600", children: "Integrated features that work together to provide complete protection for your property" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs(motion.div, { variants: fadeInUp, className: "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto", children: _jsx(Shield, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "text-xl font-bold text-center mb-3", children: "AI-Powered Protection" }), _jsx("p", { className: "text-gray-600 text-center", children: "Advanced machine learning algorithms detect and prevent threats before they occur." })] }), _jsxs(motion.div, { variants: fadeInUp, className: "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto", children: _jsx(Video, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "text-xl font-bold text-center mb-3", children: "24/7 Monitoring" }), _jsx("p", { className: "text-gray-600 text-center", children: "Continuous surveillance with real-time alerts for any suspicious activity." })] }), _jsxs(motion.div, { variants: fadeInUp, className: "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto", children: _jsx(Database, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "text-xl font-bold text-center mb-3", children: "Secure Data Storage" }), _jsx("p", { className: "text-gray-600 text-center", children: "Encrypted cloud storage with military-grade protection for all your footage." })] }), _jsxs(motion.div, { variants: fadeInUp, className: "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto", children: _jsx(Lock, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "text-xl font-bold text-center mb-3", children: "Access Control" }), _jsx("p", { className: "text-gray-600 text-center", children: "Manage permissions and access from anywhere with our secure platform." })] })] })] }) }), _jsxs("section", { className: "py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-10" }), _jsx("div", { className: "absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500 opacity-10" })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "container-default text-center relative z-10", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h2", { className: "text-5xl font-bold mb-6", children: "Ready to Enhance Your Security?" }), _jsx("p", { className: "text-xl mb-10 text-blue-100", children: "Our team is ready to help you implement the perfect security solution for your needs." }), _jsx("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: _jsx(Link, { to: "/contact", className: "px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl", children: "Request a Consultation" }) })] }) })] })] }));
};
export default Solutions;
//# sourceMappingURL=Solutions.js.map