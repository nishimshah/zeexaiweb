import React, { useEffect, lazy, Suspense, useState, useCallback } from 'react';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import Features from '@/components/home/Features';
import ServiceOfferings from '@/components/home/ServiceOfferings';
import Industries from '@/components/home/Industries';
import Achievements from '@/components/home/Achievements';
import TrustedBy from '@/components/home/TrustedBy';
import Testimonials from '@/components/home/Testimonials';
import LetsTalk from '@/components/home/LetsTalk';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/shared/SEO';

// Remove motion imports and use more efficient IntersectionObserver directly
const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const setObserverRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setRef(node);
    }
  }, []);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, { threshold: 0.1, rootMargin: '200px 0px', ...options });
      
      observer.observe(ref);
      
      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [ref, options]);

  return [setObserverRef as (node: HTMLDivElement | null) => void, isInView];
};

// Use dynamic import with prefetch hint
const SolutionsPreview = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "solutions-preview" */ 
  '@/components/home/SolutionsPreview'
));

// Memoized blog post component 
interface BlogPost {
  link: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

const BlogPostCard: React.FC<{ post: BlogPost }> = React.memo(({ post }) => (
  <div className="group h-full">
    <Link to={post.link} className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <OptimizedImage 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
          width={500}
          height={300}
        />
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
          <span className="text-[#2563EB] text-[10px] font-black uppercase tracking-widest">{post.date}</span>
        </div>
        <h3 className="text-2xl font-black mb-6 text-[#0F172A] uppercase tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-10 font-medium line-clamp-3">
          {post.description}
        </p>
        <div className="mt-auto flex items-center text-[#2563EB] text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
          Read more
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  </div>
));


// Animation component to reduce code duplication
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  // Preload critical images for better performance
  React.useEffect(() => {
    const criticalImages = [
      'https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563790617029-80a94f39b35e?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=80'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  const supportedBy = [
    {
      name: "IIT Madras",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/400px-IIT_Madras_Logo.svg.png",
      url: "https://www.iitm.ac.in"
    },
    {
      name: "Nirmaan (Pre-Incubator, IITM)",
      logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png?w=200&h=80&fit=contain&q=80",
      url: "https://nirmaan.iitm.ac.in"
    },
    {
      name: "AWS for Startups",
      logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png?w=200&h=80&fit=contain&q=80",
      url: "https://aws.amazon.com/startups"
    },
    {
      name: "NVIDIA Inception",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyI3Qf_YPBBh5ZVZxIg3YpbKpQYuIdZfg9A&s&w=200&h=80&fit=contain&q=80",
      url: "https://www.nvidia.com/en-in/startups/"
    }
  ];

  const blogPosts = [
    {
      link: "/blog/ai-advancements",
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop",
      title: "AI Advancements in Modern Surveillance",
      date: "April 15, 2025",
      description: "Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes."
    },
    {
      link: "/blog/privacy-security",
      image: "https://images.unsplash.com/photo-1617772718763-f4ddab89311b?q=80&w=1170&auto=format&fit=crop",
      title: "Balancing Privacy with Security in AI Surveillance",
      date: "April 8, 2025",
      description: "How modern AI-powered security systems protect privacy while enhancing safety measures."
    },
    {
      link: "/blog/future-trends",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
      title: "5 Future Trends in AI Security for 2025",
      date: "April 1, 2025",
      description: "Discover emerging trends in AI security technology and how they will shape the future of surveillance."
    }
  ];

  const implementationSteps = [
    {
      title: "Discovery Audit",
      description: "Analyze current setup and define surveillance goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Solution Architecture",
      description: "Design a tailored, AI-ready surveillance blueprint.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Precision Deployment",
      description: "Hardware/software installation with zero downtime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Validation Testing",
      description: "Test performance, accuracy, and system stability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Ongoing Excellence",
      description: "Provide 24/7 monitoring, updates, and support.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <SEO 
        title="ZeexAI — Industrial AI for Safety & Operations" 
        description="Zeex AI deploys real-time computer vision and predictive intelligence across factories, energy and infrastructure — turning every camera into a safety officer."
      />
      <div className="overflow-hidden bg-white">
        <Hero />
        <TrustedBy />
        
        <Suspense fallback={<div className="h-screen bg-white"></div>}>
          <SolutionsPreview />
        </Suspense>

        <ProductShowcase />

        {/* Implementation Workflow Section */}
        <section className="py-16 bg-[#F4F7FB] overflow-hidden border-t border-[#E2E8F0]">
          <div className="container-default px-6">
            <FadeInSection className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-white text-[#2563EB] rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-[#E2E8F0]">
                Our Methodology
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter leading-none">
                Precision <span className="text-[#2563EB]">Implementation</span> Process
              </h2>
              <p className="text-base text-[#475569] max-w-2xl mx-auto font-medium">
                A meticulously crafted 5-phase approach ensuring flawless integration of our AI surveillance solutions.
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {implementationSteps.map((step, index) => (
                <FadeInSection key={index} delay={index * 100} className="h-full">
                  <div className="flex flex-col bg-white rounded-2xl p-6 border border-[#E2E8F0] h-full shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                      {React.cloneElement(step.icon as React.ReactElement, { className: 'h-5 w-5' })}
                    </div>
                    <span className="text-[8px] font-black text-[#2563EB] uppercase tracking-widest mb-2">Phase 0{index + 1}</span>
                    <h3 className="text-lg font-black text-[#0F172A] mb-2 uppercase tracking-tight leading-tight">{step.title}</h3>
                    <p className="text-[#475569] text-[10px] font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] opacity-90"></div>
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 blur-[80px] rounded-full translate-x-1/2"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container-default text-center relative z-10"
          >
            <div className="max-w-2xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">Ready to Enhance Your Security?</h2>
              <p className="text-base md:text-lg mb-8 text-white/80 font-medium">
                Our team is ready to help you implement the perfect security solution for your needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 bg-white text-[#1E3A8A] font-black rounded-lg hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-xs"
              >
                Request a Consultation
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="container-default px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <FadeInSection>
                <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-2">Latest Insights</h2>
                <p className="text-base text-[#475569] font-medium">Stay updated with the latest in AI security technology</p>
              </FadeInSection>
              <FadeInSection delay={200}>
                <Link to="/blog" className="inline-flex items-center text-[#2563EB] font-black uppercase tracking-widest text-[9px] group mb-2">
                  View all blog posts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <BlogPostCard post={post} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};


// Use memo to prevent unnecessary re-renders
export default React.memo(Index);