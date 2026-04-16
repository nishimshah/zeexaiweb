import React from 'react';
import Layout from '@/components/layout/Layout';
import { ArrowRight, Shield, Users, Award, Globe, TrendingUp, ChevronRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#F4F7FB] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-default relative z-10 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
              PIONEERING AI SECURITY
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-8 leading-[1.05] uppercase tracking-tighter">
              The Architecture of <br /><span className="text-[#2563EB]">Intelligent Vision</span>
            </h1>
            <p className="text-xl text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed">
              We're redefining global security infrastructure with autonomous neural systems designed for industrial-grade precision.
            </p>
          </div>
        </div>
      </section>
        
      {/* Vision Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
        <div className="container-default px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6">
              <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                OPERATIONAL VISION
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-10 text-[#0F172A] leading-none uppercase tracking-tighter">
                Redefining <span className="text-[#2563EB]">Security</span>
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-[#475569] font-medium leading-relaxed">
                  ZeexAI is engineering the next generation of infrastructure surveillance. Our core objective is to replace reactive models with autonomous detection nodes that proactively mitigate threats across complex global environments.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <Link to="/solutions" className="bg-[#1E3A8A] text-white font-black px-10 py-5 rounded-xl uppercase tracking-widest text-xs shadow-xl hover:bg-[#2563EB] transition-all text-center">
                    Explore Infrastructure
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(30,58,138,0.2)] border border-[#E2E8F0] bg-[#F4F7FB] p-2">
                  <img 
                    src="https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg" 
                    alt="Industrial Lab" 
                    className="w-full h-full object-cover rounded-[1.5rem] grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-32 bg-[#F4F7FB] border-t border-[#E2E8F0]">
        <div className="container-default px-8 text-center mb-24">
          <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
            DEPLOYMENT TIMELINE
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter">THE JOURNEY</h2>
        </div>
          
        <div className="container-default px-8 max-w-5xl mx-auto space-y-10">
          {[
            { year: "2024", title: "NODE INCEPTION", desc: "ZeexAI established with core neural surveillance IP.", icon: <Users /> },
            { year: "2024", title: "NIRMAAN INCUBATION", desc: "Pre-incubation selection under IIT Madras infrastructure.", icon: <Award /> },
            { year: "PRESENT", title: "GLOBAL EXPANSION", desc: "Autonomous security units active across international hubs.", icon: <Shield /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-12 items-center group bg-white p-10 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
              <div className="w-20 h-20 rounded-xl bg-[#F4F7FB] text-[#1E3A8A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all shadow-sm">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="text-center md:text-left flex-grow">
                <span className="text-[#2563EB] font-black text-xs uppercase tracking-[0.3em] mb-3 block">{item.year}</span>
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#475569] font-medium text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-white border-t border-[#E2E8F0]">
        <div className="container-default px-8 text-center mb-24">
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-md text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
            SYSTEM ARCHITECTS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter mb-8">LEADERSHIP</h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto font-medium">An elite division of experts engineering the future of AI infrastructure.</p>
        </div>

        <div className="container-default px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { name: "Gaurav Yadav", role: "Founder & CEO", img: "https://i.ibb.co/9HM6KKrB/gaurav.jpg" },
            { name: "Sujit Laware", role: "CTO", img: "https://i.ibb.co/xSqvrQ8s/1732205528576.jpg" },
            { name: "Sanidhya Kanhere", role: "CBO", img: "https://i.ibb.co/n8cWLpQy/sanidhya.jpg" },
            { name: "Tarun Gangwar", role: "COO", img: "https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#2563EB] transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#1E3A8A]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-[#0F172A] uppercase tracking-tighter mb-2 leading-none">{member.name}</h3>
                <p className="text-[#2563EB] font-black text-[10px] uppercase tracking-widest mb-6 border-l-2 border-[#2563EB] pl-3">{member.role}</p>
                <div className="w-8 h-8 rounded-md bg-[#F4F7FB] flex items-center justify-center text-[#475569] hover:bg-[#1E3A8A] hover:text-white transition-all cursor-pointer">
                  <Linkedin size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#1E3A8A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-default px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-none">
            Join the Next <br /><span className="text-[#2563EB]">Security Revolution</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-[#1E3A8A] font-black rounded-xl shadow-2xl hover:bg-[#F4F7FB] transition-all uppercase tracking-widest text-sm"
          >
            Operational Briefing
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;