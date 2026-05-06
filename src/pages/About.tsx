import React from 'react';
import Layout from '@/components/layout/Layout';
import AwardsSection from '@/components/about/AwardsSection';
import { ArrowRight, Shield, Users, Award, Globe, TrendingUp, ChevronRight, Linkedin } from 'lucide-react';
import PartnersMarquee from '@/components/shared/PartnersMarquee';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/shared/SEO';

const About = () => {
  return (
    <Layout showFooter={false}>
      <SEO 
        title="About Our Vision" 
        description="Pioneering AI Security. Zeex AI is redefining global security infrastructure with autonomous neural systems."
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8">
          <div className="max-w-4xl mx-auto text-center animate-scale-in">
            <span className="inline-block px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-8">
              PIONEERING AI SECURITY
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
              DRIVING EXCELLENCE <br />VIA <span className="text-[#2563EB]">INNOVATION</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              We're redefining global security infrastructure with autonomous neural systems designed for industrial-grade precision and real-world impact.
            </p>
          </div>
        </div>
      </section>
        
      {/* Vision Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="container-default px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                OPERATIONAL VISION
              </span>
              <h2 className="text-4xl md:text-7xl font-black mb-10 text-[#0F172A] leading-none uppercase tracking-tighter">
                Redefining the <br />Future of <span className="text-[#2563EB]">Security</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-[#475569] font-medium leading-relaxed">
                  Zeex AI is engineering the next generation of infrastructure surveillance. Our core objective is to replace reactive models with autonomous detection nodes that proactively mitigate threats across complex global environments.
                </p>
                <div className="mt-12">
                  <Link to="/solutions" className="inline-flex items-center px-10 py-5 bg-[#2563EB] text-white font-bold rounded-2xl shadow-xl hover:bg-blue-700 transition-all group">
                    Explore Solutions
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 animate-slide-in-right">
              <div className="relative group">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-[#E2E8F0] bg-[#F4F7FB] p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                    alt="Industrial Innovation" 
                    className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Partners Trail Above Leadership */}
      <PartnersMarquee className="py-8 bg-white" />
 
      {/* Leadership Section */}
      <section className="pt-20 pb-16 bg-[#F4F7FB] border-t border-[#E2E8F0]">
        <div className="container-default px-8 text-center mb-24">
          <span className="inline-block px-4 py-2 bg-white text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
            SYSTEM ARCHITECTS
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter mb-8 tracking-tighter">OUR LEADERSHIP</h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto font-medium">An elite division of experts engineering the future of AI infrastructure.</p>
        </div>

        <div className="container-default px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Gaurav Yadav", role: "Founder & CEO", img: "https://i.ibb.co/9HM6KKrB/gaurav.jpg" },
            { name: "Sujit Laware", role: "CTO", img: "https://i.ibb.co/xSqvrQ8s/1732205528576.jpg" },
            { name: "Sanidhya Kanhere", role: "CBO", img: "https://i.ibb.co/n8cWLpQy/sanidhya.jpg" },
            { name: "Tarun Gangwar", role: "COO", img: "https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight mb-2 leading-none">{member.name}</h3>
                <p className="text-[#2563EB] font-bold text-[10px] uppercase tracking-widest mb-6 border-l-2 border-[#2563EB] pl-3">{member.role}</p>
                <div className="w-10 h-10 rounded-xl bg-[#F4F7FB] flex items-center justify-center text-[#475569] hover:bg-[#2563EB] hover:text-white transition-all cursor-pointer">
                  <Linkedin size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-40 bg-[#0a0e1a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.1)_0%,_transparent_50%)]"></div>
        <div className="container-default px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">
            Ready to Transform <br />Your <span className="text-[#2563EB]">Security?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-12 py-6 bg-[#2563EB] text-white font-black rounded-2xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
          >
            Get in Touch
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};


export default About;