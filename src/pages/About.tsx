import React from 'react';
import Layout from '@/components/layout/Layout';
import { ArrowRight, Shield, Target, Rocket, Calendar, Users, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/shared/SEO';
import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    {
      year: "2024",
      title: "ZeexAI Founded",
      description: "Founded by Gaurav Yadav with a vision to revolutionize security systems using artificial intelligence."
    },
    {
      year: "2024",
      title: "Incubated in IIT Madras",
      description: "Selected for pre-incubation at the prestigious institute of IIT Madras, under the Nirmaan program."
    },
    {
      year: "Present",
      title: "Leading Innovation",
      description: "Today, ZeexAI continues to pioneer advancements in AI-powered security, protecting thousands of locations worldwide."
    }
  ];

  return (
    <Layout showFooter={true}>
      <SEO 
        title="About ZeexAI" 
        description="Redefining security through AI innovation. Our mission is to create intelligent systems that proactively identify and mitigate threats."
      />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#070B12] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-full bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container-default relative z-10 px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/5 text-blue-400 rounded-md text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 mb-8">
              Pioneering AI Security
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
              DRIVING EXCELLENCE <br />VIA <span className="text-blue-500">INNOVATION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── VISION SECTION ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-default px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#F8FAFC] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                OUR VISION
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
                Redefining security through <span className="text-blue-600">AI innovation</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#475569] font-medium leading-relaxed">
                  At ZeexAI, we're transforming security infrastructure with cutting-edge artificial intelligence. Our mission is to create intelligent systems that proactively identify and mitigate threats before they occur, ensuring safer environments for homes, businesses, and public spaces.
                </p>
                <p className="text-lg text-[#475569] font-medium leading-relaxed opacity-80">
                  We combine ethical AI development with advanced computer vision to deliver solutions that protect what matters most—without compromising privacy or performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 p-2 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80" 
                  alt="AI Infrastructure" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#070B12] text-white px-8 py-6 rounded-xl shadow-2xl border border-white/10 hidden md:block">
                <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Engineering the Future</div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-tighter">AI R&D CENTER ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GROWTH / JOURNEY SECTION ── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="container-default px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
              OUR GROWTH
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">Our Journey</h2>
            <p className="text-lg text-[#475569] font-medium">Milestones in our mission to revolutionize security technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="text-3xl font-black text-blue-600 mb-6 flex items-center gap-4">
                  <Calendar className="w-6 h-6 opacity-40" />
                  {m.year}
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-4 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {m.title}
                </h3>
                <p className="text-[#475569] leading-relaxed font-medium">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#070B12] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              THE JOURNEY CONTINUES...
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section className="py-24 bg-white">
        <div className="container-default px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="inline-block px-4 py-2 bg-[#F8FAFC] text-blue-600 rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                ZeexAI Team
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">OUR PEOPLE</h2>
              <p className="text-xl text-[#475569] font-medium max-w-xl">
                A team of visionaries and experts driving innovation in AI security.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] border-l-2 border-blue-600 pl-4">
                Meet Our Leadership
              </span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Team Photo - Enhanced Cinematic Look */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-3 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/40 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/images/team/team-photo.jpg" 
                  alt="ZeexAI Team" 
                  className="w-full h-[600px] object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Floating HUD-style Caption */}
                <div className="absolute bottom-12 left-12 z-20 bg-[#070B12]/80 backdrop-blur-xl px-10 py-8 rounded-3xl border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-[2px] bg-blue-500" />
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Mumbai Workspace</div>
                  </div>
                  <div className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4">THE CORE TEAM</div>
                  <p className="text-gray-400 text-sm font-medium max-w-xs leading-relaxed">
                    Engineering the next generation of industrial intelligence from our new Mumbai innovation hub.
                  </p>
                </div>

                {/* Decorative Tech Corners */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-blue-500/30 rounded-tr-xl pointer-events-none" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-blue-500/30 rounded-bl-xl pointer-events-none invisible group-hover:visible" />
              </div>

              {/* Founder Names Floating (Optional Micro-interaction) */}
              <div className="mt-12 flex flex-wrap justify-center gap-12">
                {[
                  { name: "Gaurav Yadav", role: "Founder & CEO" },
                  { name: "Sujit Laware", role: "CTO" },
                  { name: "Sanidhya Kanhere", role: "CBO" },
                  { name: "Tarun Gangwar", role: "COO" }
                ].map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-center"
                  >
                    <div className="text-lg font-black text-[#0F172A] uppercase tracking-tight mb-1">{m.name}</div>
                    <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{m.role}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-32 bg-[#070B12] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.1)_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="container-default px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
              Join Us in Creating a <span className="text-blue-500">Safer Tomorrow</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
              Partner with ZeexAI and experience the future of security technology.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-12 py-6 bg-blue-600 text-white font-black rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all uppercase tracking-widest text-sm active:scale-95"
            >
              Request a Consultation
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;