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
  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 left-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8 text-center animate-scale-in">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#2563EB] backdrop-blur-sm mb-8 border border-white/10"
          >
            <Shield className="w-4 h-4" /> Zeex AI Intelligence
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            BLOG & <span className="text-[#2563EB]">INSIGHTS</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            The latest technical perspectives on artificial intelligence, surveillance engineering, and enterprise security architecture.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          {/* Blog filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                PUBLICATIONS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">Latest <br /><span className="text-[#2563EB]">Insights</span></h2>
              <p className="text-xl text-[#475569] font-medium">Deep dives into the technology driving modern industrial security.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {['All', 'Technology', 'Trends', 'Case Studies'].map((cat, i) => (
                <button key={i} className={cn(
                  "px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border",
                  i === 0 
                    ? "bg-[#2563EB] text-white border-[#2563EB] shadow-xl" 
                    : "bg-[#F4F7FB] text-[#475569] border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                )}>
                  {cat}
                </button>
              ))}
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
                className="group h-full"
              >
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-[#0F172A] uppercase tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed mb-10 font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-[#2563EB] text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read more
                      <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-24 gap-4">
            {[1, 2, 3].map(page => (
              <button key={page} className="w-14 h-14 flex items-center justify-center border border-[#E2E8F0] rounded-2xl font-black text-[#475569] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all">
                {page}
              </button>
            ))}
            <button className="px-10 h-14 flex items-center justify-center border border-[#E2E8F0] rounded-2xl font-black text-[#475569] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all uppercase text-[10px] tracking-widest">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-[#F4F7FB] border-t border-[#E2E8F0]">
        <div className="container-default px-8">
          <div className="bg-[#0a0e1a] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center border border-white/5 relative">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
            <div className="p-16 lg:p-24 lg:w-3/5 text-white relative z-10">
              <span className="inline-block px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-white/10 uppercase">
                STAY INFORMED
              </span>
              <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-none uppercase tracking-tighter">Subscribe to <br /><span className="text-[#2563EB]">Zeex Intelligence</span></h2>
              <p className="text-xl text-white/60 mb-12 max-w-lg font-medium leading-relaxed">
                Receive mission-critical updates on industrial AI advancements directly in your inbox. No marketing fluff.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <input 
                  type="email" 
                  placeholder="Enter your enterprise email" 
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:bg-white focus:text-[#0F172A] focus:outline-none transition-all font-medium"
                />
                <button className="px-12 py-5 bg-[#2563EB] hover:bg-white hover:text-[#2563EB] text-white font-black rounded-2xl transition-all uppercase tracking-widest text-[10px] shadow-2xl">
                  Join Protocol
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block lg:w-2/5 p-24">
              <div className="w-full aspect-square bg-[#2563EB]/10 rounded-full flex items-center justify-center border border-[#2563EB]/20 relative group">
                <div className="absolute inset-0 bg-[#2563EB]/10 rounded-full animate-pulse transition-transform duration-1000 group-hover:scale-110"></div>
                <Mail size={120} className="text-[#2563EB] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
import { cn } from '@/lib/utils';


export default Blog;