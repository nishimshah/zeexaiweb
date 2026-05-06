import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi, Check, Server ,Smartphone,Monitor,Activity,Box} from 'lucide-react';
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
  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24 text-center">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#2563EB] backdrop-blur-sm mb-8 border border-white/10"
          >
            ENTERPRISE GRADE AI SECURITY
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            ADVANCED <span className="text-[#2563EB]">SOLUTIONS</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Cutting-edge surveillance solutions powered by industrial-grade artificial intelligence to protect your most critical assets.
          </p>
          <Link 
            to="/contact" 
            className="px-12 py-6 bg-[#2563EB] text-white font-black rounded-2xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
      
      {/* Solutions Grid Section */}
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-8">
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
              COMPREHENSIVE <br /><span className="text-[#2563EB]">SOLUTIONS</span>
            </h2>
            <p className="text-xl text-[#475569] font-medium leading-relaxed">
              Our suite of AI-powered security solutions provides complete, proactive protection for every environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="flex flex-col h-full bg-white rounded-[2.5rem] border border-[#E2E8F0] overflow-hidden hover:border-[#2563EB] hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={solution.image} alt={solution.title} className="w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-[#E2E8F0] group-hover:scale-110 transition-transform">
                        <solution.icon className="h-7 w-7 text-[#2563EB]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">{solution.title}</h3>
                    <p className="text-[#475569] text-sm font-medium leading-relaxed mb-10">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 text-xs font-bold text-[#0F172A]">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="mt-auto inline-flex items-center justify-center py-5 bg-[#F4F7FB] text-[#2563EB] font-black rounded-2xl hover:bg-[#2563EB] hover:text-white transition-all uppercase tracking-widest text-[10px]"
                    >
                      Get more details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-40 bg-[#F4F7FB] relative overflow-hidden">
        <div className="container-default px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="inline-block px-4 py-2 bg-white text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
              THE ZEEX ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">BUILT FOR <br /><span className="text-[#2563EB]">PERFORMANCE</span></h2>
            <p className="text-xl text-[#475569] font-medium leading-relaxed">
              Precision-engineered AI systems that work together to provide unmatched security reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Shield />, title: "Proactive Defense", desc: "Machine learning algorithms that predict and prevent incidents before they even happen." },
              { icon: <Video />, title: "Vision Intelligence", desc: "Industrial-grade video analysis that tracks threats across multiple angles and conditions." },
              { icon: <Database />, title: "Secure Infrastructure", desc: "Military-grade encryption securing all data with proprietary protection layers." },
              { icon: <Lock />, title: "Total Control", desc: "Granular access management and monitoring from any authorized mobile or desktop interface." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-[#E2E8F0] shadow-xl hover:shadow-2xl hover:border-[#2563EB] transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#F4F7FB] text-[#2563EB] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-[#475569] text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#0a0e1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container-default px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">
            READY TO <span className="text-[#2563EB]">UPGRADE?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience the future of industrial-grade security technology with Zeex AI.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="px-16 py-8 bg-[#2563EB] text-white font-black rounded-3xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-lg"
            >
              Get started now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Solutions;