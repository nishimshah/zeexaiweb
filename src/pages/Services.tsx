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
    const criticalImages = services.slice(0, 3).map(service => service.image);
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8 text-center animate-scale-in">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#2563EB] backdrop-blur-sm mb-8 border border-white/10"
          >
            <Shield className="w-4 h-4" /> Enterprise AI Solutions
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            TAILORED <span className="text-[#2563EB]">SECURITY</span> <br /> SERVICES
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Industrial-grade AI surveillance systems engineered to adapt to your specific environment and critical security objectives.
          </p>

          <Link 
            to="/contact" 
            className="inline-flex items-center px-12 py-6 bg-[#2563EB] text-white font-black rounded-2xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
          >
            Get Started
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-[#0F172A] uppercase tracking-tighter leading-tight">
              Security Optimized for <br /><span className="text-[#2563EB]">Every Sector</span>
            </h2>
            <p className="text-xl text-[#475569] font-medium leading-relaxed">
              Every security challenge is unique. Our AI-powered services are designed to adapt to specific environments, providing forensic accuracy and real-time response nodes.
            </p>
          </div>
          
          {/* Services Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-[#E2E8F0] hover:border-[#2563EB]"
              >
                <div className="aspect-video overflow-hidden relative">
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                    width={400}
                    height={240}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent flex items-end p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6 text-[#2563EB]" />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-10">
                  <p className="text-[#475569] mb-8 line-clamp-3 text-sm font-medium leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={`#${service.id}`} 
                    className="inline-flex items-center text-[#2563EB] font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Detailed Services Sections */}
          <div className="space-y-40">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-16">
                  {/* Image column */}
                  <div className={index % 2 === 0 ? 'order-none' : 'order-none lg:order-last'}>
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group border border-[#E2E8F0] p-3 bg-[#F4F7FB]">
                      <OptimizedImage 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div className="animate-slide-in-left">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#F4F7FB] text-[#2563EB] flex items-center justify-center shadow-sm">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-[#475569] mb-12 font-medium leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#2563EB]">Core Benefits</h4>
                        <ul className="space-y-4">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0F172A]">
                              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3" />
                              </div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#2563EB]">Key Use Cases</h4>
                        <ul className="space-y-4">
                          {service.useCases.slice(0, 3).map((useCase, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0F172A]">
                              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="w-3 h-3" />
                              </div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/contact`}
                      className="inline-flex items-center px-10 py-5 bg-[#0F172A] text-white font-black rounded-2xl shadow-xl hover:bg-[#2563EB] transition-all uppercase tracking-widest text-xs"
                    >
                      Request Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#0a0e1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container-default px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none text-white">
            Ready to <span className="text-[#2563EB]">Secure</span> <br />Your Future?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Our team of security architects is ready to help you implement enterprise-grade AI infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-[#2563EB] text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-widest text-sm"
            >
              Get Started Now
            </Link>
            <Link 
              to="/solutions" 
              className="px-12 py-6 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Services;