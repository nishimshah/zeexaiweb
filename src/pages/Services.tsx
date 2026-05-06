import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, ShoppingCart, Factory, Car, Microscope, Check, ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Product data
const products = [
  {
    id: 'z-audit',
    title: 'Z-Audit',
    subtitle: 'Speech Intelligence',
    description: 'Extract structured intelligence from unstructured voice data using advanced neural speech recognition and emotional analysis. Perfect for compliance, customer service audit, and data-driven training.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1600&auto=format&fit=crop&q=80',
    benefits: [
      'Multilingual Translation & Transcription',
      'Emotional Tone & Sentiment Analysis',
      'Automated Compliance Scoring',
      'Speaker Identification & Diarization',
      'Real-time Alerting for Key Phrases'
    ],
    useCases: [
      'Banking call center compliance monitoring',
      'Customer support quality assurance',
      'Legal and forensic voice analysis',
      'Crisis management and emergency response',
      'Enterprise communications auditing'
    ]
  },
  {
    id: 'z-factory',
    title: 'Z-Factory',
    subtitle: 'Facility Intelligence',
    description: 'Digitize physical operations using AI-powered monitoring for real-time safety enforcement and operational optimization. Transform your factory floor into an intelligent, self-monitoring ecosystem.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1600&auto=format&fit=crop&q=80',
    benefits: [
      'Real-time PPE & Safety Compliance',
      'Machine Utilization & Bottleneck Tracking',
      '3D Digital Twin Integration',
      'Predictive Maintenance Alerts',
      'Intrusion & Zone Violation Detection'
    ],
    useCases: [
      'Smart factory safety enforcement',
      'Warehouse operational optimization',
      'Hazardous zone monitoring',
      'Automated attendance & access control',
      'Quality control on assembly lines'
    ]
  },
  {
    id: 'z-market',
    title: 'Z-Market',
    subtitle: 'Consumer Intelligence',
    description: 'Provide deep insights into customer behavior and retail performance using computer vision and data analytics. Bridge the gap between physical retail and digital precision.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&auto=format&fit=crop&q=80',
    benefits: [
      'Precision Footfall & Traffic Tracking',
      'Heatmap & Customer Journey Analysis',
      'Real-time Shelf Stock Monitoring',
      'Demographic & Sentiment Profiling',
      'Checkout Queue Management'
    ],
    useCases: [
      'Retail store layout optimization',
      'Marketing campaign effectiveness tracking',
      'Loss prevention and shoplifting detection',
      'Staffing level optimization based on traffic',
      'Product placement and A/B testing'
    ]
  },
  {
    id: 'z-tracs',
    title: 'Z-Tracs',
    subtitle: 'Traffic Management',
    description: 'AI-powered traffic monitoring and enforcement solutions designed for modern smart city infrastructure. Enhance public safety while reducing urban congestion.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=1600&auto=format&fit=crop&q=80',
    benefits: [
      'Vehicle Classification & Counting',
      'Real-time Violation Detection (Speed, Signal)',
      'Traffic Density & Flow Estimation',
      'ANPR & Plate Recognition Integration',
      'Emergency Vehicle Priority Detection'
    ],
    useCases: [
      'Smart city traffic management',
      'Highway tolling and enforcement',
      'Parking facility optimization',
      'Urban planning data collection',
      'Incident and accident detection'
    ]
  },
  {
    id: 'z-labs',
    title: 'Z-Labs',
    subtitle: 'Innovation Hub',
    description: 'Our core R&D engine focusing on continuous improvement, experimentation, and model optimization. Custom AI development for unique enterprise challenges.',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80',
    benefits: [
      'Custom Model Training & Fine-tuning',
      'Proprietary Hardware R&D',
      'Enterprise AI Strategy Consulting',
      'Performance Benchmarking Labs',
      'Scalable Deployment Frameworks'
    ],
    useCases: [
      'Solving unique industrial safety problems',
      'Developing niche computer vision models',
      'Optimizing AI performance on edge hardware',
      'Future-proofing enterprise surveillance',
      'Collaborative R&D for government projects'
    ]
  }
];

const ProductsPage = () => {
  return (
    <Layout showFooter={true}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#050810] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-blue-500 backdrop-blur-sm mb-8 border border-white/10"
          >
            <Shield className="w-4 h-4" /> ZEEX AI ECOSYSTEM
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            AI <span className="text-blue-600">PRODUCTS</span> <br /> & MODULES
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Our modular AI ecosystem provides precision-engineered intelligence for every dimension of modern physical and digital operations.
          </p>
        </div>
      </section>
      
      {/* Navigation Shortcuts */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 hidden md:block">
        <div className="container-default px-8">
          <div className="flex items-center justify-center gap-8">
            {products.map(p => (
              <a 
                key={p.id} 
                href={`#${p.id}`}
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          <div className="space-y-40">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className="scroll-mt-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  {/* Image column */}
                  <div className={index % 2 === 0 ? 'order-none' : 'order-none lg:order-last'}>
                    <div className="relative group">
                       <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border border-gray-100 p-2 bg-gray-50">
                          <OptimizedImage 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full aspect-[4/3] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            width={600}
                            height={450}
                          />
                       </div>
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                        <product.icon size={28} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{product.subtitle}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter">
                          {product.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-500 mb-10 font-medium leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600">Key Capabilities</h4>
                        <ul className="space-y-3">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-700 leading-tight">
                              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={12} />
                              </div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600">Real-world Use Cases</h4>
                        <ul className="space-y-3">
                          {product.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-700 leading-tight">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ArrowRight size={12} />
                              </div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact"
                      className="inline-flex items-center px-10 py-5 bg-[#0F172A] text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 transition-all uppercase tracking-widest text-[10px]"
                    >
                      Inquire About {product.title}
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#050810] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container-default px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">
            Ready to <span className="text-blue-600">Deploy</span> <br />Intelligence?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/50 max-w-3xl mx-auto font-medium leading-relaxed">
            Our modular infrastructure is ready to integrate with your existing systems for immediate operational impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-2xl uppercase tracking-widest text-sm"
            >
              Request A Trial
            </Link>
            <Link 
              to="/achievements" 
              className="px-12 py-6 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
            >
              View Our Impact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;