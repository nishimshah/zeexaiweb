import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link, useParams } from 'react-router-dom';
import { Home, Building, MapPin, ArrowRight, Check, Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

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

// Service details data
const servicesDetails = {
  'advanced-threat-detection': {
    title: 'Advanced Threat Detection',
    description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    headerImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    features: [
      '24/7 continuous monitoring',
      'AI-powered anomaly detection',
      'Real-time risk assessment',
      'Automated threat classification',
      'Historical pattern analysis'
    ],
    content: `
      <h2>Proactive Security Monitoring</h2>
      <p>Our Advanced Threat Detection system uses cutting-edge artificial intelligence to identify potential security threats before they impact your operations. Unlike traditional security systems that react to incidents, our solution anticipates and prevents them.</p>
      
      <h3>How It Works</h3>
      <p>The system analyzes multiple data streams in real-time, including:</p>
      <ul>
        <li>Video surveillance feeds</li>
        <li>Access control logs</li>
        <li>Network activity</li>
        <li>Environmental sensors</li>
      </ul>
    `,
    useCases: [
      {
        title: 'Perimeter Security',
        description: 'Detects unauthorized access attempts before intruders reach sensitive areas'
      },
      {
        title: 'Internal Threat Detection',
        description: 'Identifies suspicious behavior patterns within your facilities'
      },
      {
        title: 'Network Protection',
        description: 'Monitors for cybersecurity threats in integrated systems'
      }
    ]
  },
  // Other service details...
};

// Solution details data
const solutionsDetails = {
  'residential': {
    title: 'Residential Security',
    description: 'Comprehensive AI-powered security solutions designed specifically for homes to protect your family and property.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    headerImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff',
    benefits: [
      'Intelligent perimeter protection',
      'Family member recognition',
      'Mobile app control and monitoring',
      'Integration with smart home systems',
      'Customizable alert settings'
    ],
    content: `
      <h2>Smart Security for Your Home</h2>
      <p>Your home is your sanctuary. ZeexAI's residential security solutions use advanced artificial intelligence to protect what matters most to you - your family, your home, and your belongings.</p>
      
      <p>Our residential systems are designed specifically for home environments, with easy setup, intuitive controls, and seamless integration with your existing smart home ecosystem.</p>
      
      <h3>Comprehensive Protection</h3>
      <p>ZeexAI's residential security solution provides multi-layered protection:</p>
      <ul>
        <li><strong>Perimeter Security:</strong> Our AI-powered cameras monitor the exterior of your home, detecting and classifying potential threats before they reach your door.</li>
        <li><strong>Entry Point Monitoring:</strong> Intelligent monitoring of doors and windows with advanced motion analytics that can distinguish between normal activity and potential break-ins.</li>
        <li><strong>Indoor Security:</strong> Indoor cameras with privacy features that activate only when you're away or during security events.</li>
      </ul>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
        icon: Shield
      },
      {
        id: 'visual-surveillance-analytics',
        title: 'AI-Visual Surveillance Analytics',
        description: 'Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.',
        icon: Video
      },
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Instant notifications with contextual information delivered to your preferred devices.',
        icon: Bell
      },
      {
        id: 'cctv-integration',
        title: 'Seamless CCTV Integration',
        description: 'Easy setup, multi-device support, and customizable dashboard for all your surveillance needs.',
        icon: Cpu
      },
      {
        id: 'data-protection',
        title: 'Smart Data Protection',
        description: 'Secure storage and encryption of all your surveillance data with advanced protection measures.',
        icon: Database
      },
      {
        id: 'access-control',
        title: 'Remote Access Control',
        description: 'Manage and control your security system from anywhere with our secure mobile platform.',
        icon: Lock
      }
    ],
    workflow: [
      {
        title: 'Comprehensive Monitoring',
        description: 'AI-powered cameras continuously monitor your property, analyzing every movement and potential security event.'
      },
      {
        title: 'Smart Event Classification',
        description: 'Our AI distinguishes between routine activities (mail delivery, family returning home) and suspicious behavior.'
      },
      {
        title: 'Instant Notifications',
        description: 'When potential threats are detected, you receive immediate alerts on your smartphone with video verification.'
      },
      {
        title: 'Response Options',
        description: 'Respond directly through the app with two-way communication, contact authorities, or dispatch security services.'
      }
    ]
  },
  'commercial': {
    title: 'Commercial Surveillance',
    description: 'Enterprise-grade security solutions designed for businesses of all sizes to protect assets, employees, and customers.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    headerImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    benefits: [
      'Multi-site monitoring and management',
      'Employee access control',
      'Theft prevention and inventory protection',
      'Business intelligence analytics',
      'Regulatory compliance features'
    ],
    content: `
      <h2>Enterprise Security Reinvented</h2>
      <p>Modern businesses face complex security challenges, from protecting physical assets to securing sensitive areas and ensuring employee safety. ZeexAI's commercial surveillance solutions leverage artificial intelligence to transform traditional security into an intelligent system that both protects and provides valuable insights.</p>
      
      <p>Our scalable platform is designed for businesses of all sizes, from single retail locations to multi-site enterprises with complex security requirements.</p>
      
      <h3>Comprehensive Business Protection</h3>
      <p>ZeexAI's commercial solution addresses multiple security needs:</p>
      <ul>
        <li><strong>Exterior Surveillance:</strong> AI-powered perimeter monitoring with advanced object detection and classification.</li>
        <li><strong>Access Control:</strong> Facial recognition-based access management that eliminates the need for keycards and creates detailed access logs.</li>
        <li><strong>Interior Monitoring:</strong> Smart cameras that can detect unusual behavior, restricted area violations, or safety incidents.</li>
      </ul>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered system continuously monitors your premises for potential security risks before they escalate.',
        icon: Shield
      },
      // Other services...
    ],
    workflow: [
      {
        title: 'Multi-layer Surveillance',
        description: 'Comprehensive monitoring of perimeter, entry points, and interior spaces with AI-powered cameras.'
      },
      // Other workflow steps...
    ]
  },
  'public-safety': {
    title: 'Public Safety',
    description: 'Advanced surveillance solutions for public spaces that enhance safety while respecting privacy and civil liberties.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    headerImage: 'https://images.unsplash.com/photo-1580977251946-3f8c48548cf6',
    benefits: [
      'Crowd behavior analysis',
      'Privacy-preserving monitoring',
      'Incident detection and prediction',
      'Emergency response coordination',
      'Scalable deployment options'
    ],
    content: `
      <h2>Enhancing Public Safety with Responsible AI</h2>
      <p>Public spaces present unique security challenges that require balancing effective surveillance with respect for individual privacy and civil liberties. ZeexAI's public safety solutions are designed specifically for these environments, with privacy-preserving technology that enhances security without creating a surveillance state.</p>
      
      <p>Our systems help identify potential threats before they escalate, enabling proactive security measures and faster emergency response times.</p>
      
      <h3>Smart Monitoring for Public Spaces</h3>
      <p>ZeexAI's public safety solution includes specialized capabilities:</p>
      <ul>
        <li><strong>Crowd Analysis:</strong> Monitor crowd density and movement patterns to identify potential safety issues or unusual behavior.</li>
        <li><strong>Anomaly Detection:</strong> Identify unusual activities or behaviors that may indicate security threats or safety concerns.</li>
        <li><strong>Emergency Situation Recognition:</strong> Automatically detect incidents such as fights, falls, or medical emergencies to enable rapid response.</li>
      </ul>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'AI-powered system continuously monitors public spaces for potential security risks and threats.',
        icon: Shield
      },
      // Other services...
    ],
    workflow: [
      {
        title: 'Wide-Area Monitoring',
        description: 'AI-powered cameras monitor public spaces, focusing on behavioral patterns rather than individual identities.'
      },
      // Other workflow steps...
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const [solution, setSolution] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (solutionId && solutionsDetails[solutionId]) {
      setSolution(solutionsDetails[solutionId]);
    }
    setIsLoading(false);
  }, [solutionId]);

  if (isLoading) {
    return (
      <Layout showFooter={false}>
        <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a]">
          <div className="w-12 h-12 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (!solution) {
    return (
      <Layout showFooter={false}>
        <div className="container-default py-40 text-center px-8 bg-white">
          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter">Solution Not Found</h1>
          <p className="mb-12 text-xl text-[#475569] font-medium max-w-2xl mx-auto italic">The security protocol you're looking for doesn't exist or has been archived.</p>
          <Link 
            to="/solutions" 
            className="inline-flex items-center px-10 py-5 bg-[#2563EB] text-white font-black rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs"
          >
            View All Protocols
          </Link>
        </div>
      </Layout>
    );
  }

  const SolutionIcon = solution.icon;

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8 text-center">
           <Link to="/solutions" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-8 hover:bg-white/10 transition-all">
            <ArrowRight className="rotate-180 w-4 h-4" /> Back to Intelligence
          </Link>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            {solution.title.split(' ')[0]} <span className="text-[#2563EB]">{solution.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            {solution.description}
          </p>
        </div>
      </section>
      
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-[3rem] shadow-2xl mb-16 border border-[#E2E8F0] relative group">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/20 to-transparent"></div>
              </div>
              
              <div className="prose prose-2xl max-w-none industrial-prose-detail">
                <style>{`
                  .industrial-prose-detail h2 {
                    font-size: 3rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.025em;
                    color: #0F172A;
                    margin-bottom: 2rem;
                    line-height: 1;
                  }
                  .industrial-prose-detail h3 {
                    font-size: 1.5rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    color: #2563EB;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                  }
                  .industrial-prose-detail p {
                    font-size: 1.25rem;
                    color: #475569;
                    line-height: 1.8;
                    font-weight: 500;
                    margin-bottom: 2rem;
                  }
                  .industrial-prose-detail ul {
                    list-style: none;
                    margin-bottom: 3rem;
                    padding-left: 0;
                  }
                  .industrial-prose-detail li {
                    position: relative;
                    padding-left: 2rem;
                    margin-bottom: 1.5rem;
                    font-size: 1.125rem;
                    color: #475569;
                    font-weight: 600;
                  }
                  .industrial-prose-detail li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0.6em;
                    width: 0.75rem;
                    height: 2px;
                    background: #2563EB;
                  }
                  .industrial-prose-detail strong { color: #0F172A; font-weight: 900; }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: solution.content }} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-10 sticky top-32">
              <div className="bg-[#F4F7FB] rounded-[2.5rem] p-12 border border-[#E2E8F0] shadow-xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-[#E2E8F0]">
                    <SolutionIcon className="h-10 w-10 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter leading-none">{solution.title}</h3>
                </div>
                
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] mb-8">SECURE BENEFITS</h4>
                <ul className="space-y-6 mb-12">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <span className="text-sm font-bold text-[#475569]">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full h-16 flex items-center justify-center bg-[#2563EB] text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl transition-all uppercase tracking-widest text-xs"
                >
                  Request a Demo
                </Link>
              </div>
              
              <div className="bg-white rounded-[2.5rem] p-12 border border-[#E2E8F0] shadow-xl">
                <h3 className="text-xl font-black mb-8 text-[#0F172A] uppercase tracking-tighter">RELATED PROTOCOLS</h3>
                <div className="space-y-6">
                  {Object.entries(solutionsDetails)
                    .filter(([key]) => key !== solutionId)
                    .map(([key, otherSolution]) => {
                      const OtherIcon = otherSolution.icon;
                      return (
                        <Link 
                          key={key}
                          to={`/services/${key}`} 
                          className="flex items-center gap-4 group transition-all"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-[#F4F7FB] flex items-center justify-center border border-[#E2E8F0] group-hover:border-[#2563EB] transition-all">
                            <OtherIcon className="h-6 w-6 text-[#2563EB]" />
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-[#0F172A] uppercase tracking-widest group-hover:text-[#2563EB] transition-all">{otherSolution.title}</h4>
                            <p className="text-[10px] text-[#475569] font-bold mt-1">ACTIVE MISSION</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#E2E8F0] group-hover:text-[#2563EB] ml-auto transition-all translate-x-0 group-hover:translate-x-1" />
                        </Link>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recommended Services */}
      <section className="bg-[#F4F7FB] py-32 rounded-[4rem] mx-8 mb-32 border border-[#E2E8F0]">
        <div className="container-default px-12">
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-2 bg-white text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
              DEPCOYMENT CORE
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter leading-tight">RECOMMENDED <br /><span className="text-[#2563EB]">SERVICES</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solution.services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Link 
                  key={index}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col border border-[#E2E8F0] hover:border-[#2563EB]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#F4F7FB] flex items-center justify-center mb-10 group-hover:bg-[#2563EB] transition-all">
                    <ServiceIcon className="h-7 w-7 text-[#2563EB] group-hover:text-white transition-all" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-[#0F172A] uppercase tracking-tight group-hover:text-[#2563EB] transition-all">{service.title}</h3>
                  <p className="text-[#475569] text-sm font-medium leading-relaxed mb-10 flex-grow">{service.description}</p>
                  <div className="text-[#2563EB] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Deploy Protocol
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Solution Workflow */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-default px-8">
          <div className="text-center mb-32">
             <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
              MISSION EXECUTION
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter mb-8 leading-none">HOW IT <span className="text-[#2563EB]">WORKS</span></h2>
            <p className="text-xl text-[#475569] font-medium max-w-2xl mx-auto">
              Our {solution.title.toLowerCase()} solution follows a streamlined workflow to ensure optimal security.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent hidden md:block -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {solution.workflow.map((step, index) => (
                <div key={index} className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-[#0a0e1a] text-white flex items-center justify-center font-black text-2xl mx-auto mb-10 shadow-2xl border border-white/10 group hover:bg-[#2563EB] transition-all">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-sm font-medium text-[#475569] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-40 bg-[#0a0e1a] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container-default px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">READY TO <br /><span className="text-[#2563EB]">COMMENCE?</span></h2>
          <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Protect your assets with industrial-grade AI. Contact us to initiate your security assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-[#2563EB] text-white font-black rounded-3xl hover:bg-blue-700 shadow-2xl transition-all uppercase tracking-widest text-sm"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/solutions" 
              className="px-12 py-6 bg-white/5 text-white border border-white/10 font-black rounded-3xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default SolutionDetail;