import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, ArrowRight, Mail, Bell } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Mock blog data
const blogPosts = [
  {
    id: 'ai-advancements',
    title: 'AI Advancements in Modern Surveillance',
    excerpt: 'Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes.',
    date: 'April 15, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Technology'
  },
  {
    id: 'privacy-security',
    title: 'Balancing Privacy with Security in AI Surveillance',
    excerpt: 'How modern AI-powered security systems protect privacy while enhancing safety measures.',
    date: 'April 8, 2025',
    image: 'https://images.unsplash.com/photo-1617772718763-f4ddab89311b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Privacy'
  },
  {
    id: 'future-trends',
    title: '5 Future Trends in AI Security for 2025',
    excerpt: 'Discover emerging trends in AI security technology and how they will shape the future of surveillance.',
    date: 'April 1, 2025',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    category: 'Trends'
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition: Myths and Realities',
    excerpt: 'Debunking common myths about facial recognition technology and explaining how it actually works.',
    date: 'March 25, 2025',
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506',
    category: 'Technology'
  },
  {
    id: 'smart-home',
    title: 'Integrating AI Security into Your Smart Home',
    excerpt: 'A comprehensive guide on how to enhance your smart home with AI security solutions.',
    date: 'March 18, 2025',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    category: 'Residential'
  },
  {
    id: 'case-study',
    title: 'Case Study: How ZeexAI Protected a Major Retail Chain',
    excerpt: 'An in-depth look at how our AI surveillance solutions reduced theft by 65% for a national retail company.',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    category: 'Case Study'
  }
];

const NewsletterSignup = ({ premium }: { premium?: boolean }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    try {
      const res = await fetch('https://zeex-website-backend-1.onrender.com/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Subscription failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={premium ? "flex flex-col w-full items-center" : "flex flex-col sm:flex-row gap-3 items-center mt-12 justify-center"}>
      <div className={premium ? "flex flex-row w-full gap-4" : "flex flex-row w-full gap-2"}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className={
            premium
              ? "flex-1 px-6 py-4 rounded-lg border border-blue-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
              : "border rounded px-4 py-2"
          }
        />
        <button
          type="submit"
          className={
            premium
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow transition-colors"
              : "bg-blue-600 text-white px-6 py-2 rounded font-semibold"
          }
        >
          Subscribe
        </button>
      </div>
      {status === 'success' && (
        <span className="text-green-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
      {status === 'error' && (
        <span className="text-red-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
    </form>
  );
};

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
        delay: 0.2
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#1E3A8A] overflow-hidden">
        <div className="container-default relative z-10 px-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-white/20"
          >
            ZEEX AI INTELLIGENCE
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Blog & <span className="text-[#2563EB]">Insights</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            The latest technical perspectives on artificial intelligence, surveillance engineering, and enterprise security architecture.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 bg-white">
        <div className="container-default px-8">
          {/* Blog filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-sm font-bold mb-4">
                PUBLICATIONS
              </span>
              <h2 className="text-4xl font-black text-[#0F172A] mb-4">Latest Engineering Insights</h2>
              <p className="text-lg text-[#475569]">Deep dives into the technology driving modern industrial security.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-3 bg-[#1E3A8A] text-white font-bold rounded-lg text-sm uppercase tracking-widest transition-all">
                All
              </button>
              <button className="px-6 py-3 bg-[#F4F7FB] text-[#1E3A8A] font-bold rounded-lg text-sm uppercase tracking-widest hover:bg-[#E2E8F0] transition-all">
                Technology
              </button>
              <button className="px-6 py-3 bg-[#F4F7FB] text-[#1E3A8A] font-bold rounded-lg text-sm uppercase tracking-widest hover:bg-[#E2E8F0] transition-all">
                Trends
              </button>
              <button className="px-6 py-3 bg-[#F4F7FB] text-[#1E3A8A] font-bold rounded-lg text-sm uppercase tracking-widest hover:bg-[#E2E8F0] transition-all">
                Case Studies
              </button>
            </div>
          </div>
          
          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-widest">{post.category}</span>
                      <span className="text-xs font-bold text-[#475569]">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#2563EB] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[#475569] mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-[#1E3A8A] font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                      Read Technical Article
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-20 gap-3">
            <button className="w-12 h-12 flex items-center justify-center border border-[#E2E8F0] rounded-lg font-bold text-[#0F172A] hover:bg-[#F4F7FB] transition-all">1</button>
            <button className="w-12 h-12 flex items-center justify-center border border-[#E2E8F0] rounded-lg font-bold text-[#0F172A] hover:bg-[#F4F7FB] transition-all">2</button>
            <button className="w-12 h-12 flex items-center justify-center border border-[#E2E8F0] rounded-lg font-bold text-[#0F172A] hover:bg-[#F4F7FB] transition-all">3</button>
            <button className="px-6 h-12 flex items-center justify-center border border-[#E2E8F0] rounded-lg font-bold text-[#0F172A] hover:bg-[#F4F7FB] transition-all uppercase text-xs tracking-widest">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#F4F7FB] border-t border-[#E2E8F0]">
        <div className="container-default px-8">
          <div className="bg-[#1E3A8A] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
            <div className="p-12 lg:p-20 lg:w-3/5 text-white">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-xs font-bold mb-6 tracking-widest border border-white/20 uppercase">
                STAY INFORMED
              </span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Subscribe to Zeex Intelligence</h2>
              <p className="text-xl text-white/70 mb-10 max-w-lg">
                Receive mission-critical updates on industrial AI advancements directly in your inbox. No marketing fluff.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <input 
                  type="email" 
                  placeholder="Enter your enterprise email" 
                  className="flex-grow px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:bg-white focus:text-[#0F172A] focus:outline-none transition-all"
                />
                <button className="px-10 py-5 bg-[#2563EB] hover:bg-white hover:text-[#1E3A8A] text-white font-bold rounded-xl transition-all uppercase tracking-widest whitespace-nowrap">
                  Join Newsletter
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block lg:w-2/5 p-20">
              <div className="w-full aspect-square bg-[#2563EB] rounded-2xl flex items-center justify-center shadow-inner">
                <Mail size={120} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;