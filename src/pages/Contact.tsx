import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Clock, ChevronDown, ArrowRight, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAPText from '@/hooks/useGSAPText';
import { API_ENDPOINTS } from '@/config/api';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSubmittedEmail(formData.email);

    try {
      if (!formData.name.trim()) {
        setError('Please enter your name');
        setIsLoading(false);
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setError('Please enter a valid email address');
        setIsLoading(false);
        return;
      }
      if (!formData.message.trim()) {
        setError('Please enter a message');
        setIsLoading(false);
        return;
      }

      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        const textResponse = await response.text();
        throw new Error(`Server error: ${textResponse || response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.message || data.error || `Server error: ${response.status} ${response.statusText}`);
      }

      if (!data.success) {
        throw new Error(data.message || data.error || 'Failed to send message');
      }

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setError('');
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const faqItems = [
    {
      question: "What AI safety solutions does Zeex AI offer?",
      answer: "Zeex AI provides cutting-edge AI-powered surveillance solutions that analyze real-time CCTV footage, detect threats, recognize anomalies, and send instant alerts for enhanced security."
    },
    {
      question: "How can I integrate Zeex AI's surveillance technology?",
      answer: "Zeex AI solutions are designed for seamless integration with existing CCTV systems and security infrastructures. We offer cloud-based and edge AI deployment options to suit various requirements."
    },
    {
      question: "Does Zeex AI support cloud and on-premise deployment?",
      answer: "Yes, Zeex AI supports both cloud-based processing on AWS and on-premise AI-powered edge devices, ensuring flexibility based on security and data privacy needs."
    },
    {
      question: "Can Zeex AI solutions be customized for my needs?",
      answer: "Absolutely! Zeex AI offers industry-specific AI models tailored for various sectors including retail, banking, and public infrastructure."
    }
  ];

  const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
      <section className="py-32 bg-white">
        <div className="container-default px-8">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-scale-in">
            <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-8">
              COMMON INQUIRIES
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter mb-8 leading-none">
              FREQUENTLY ASKED <br /><span className="text-[#2563EB]">QUESTIONS</span>
            </h2>
            <p className="text-xl text-[#475569] font-medium">Find answers to common questions about our products and services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all overflow-hidden hover:shadow-2xl group"
              >
                <button 
                  className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors uppercase tracking-tight">
                    {item.question}
                  </h3>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-[#475569] transition-transform duration-300",
                    activeIndex === index && "rotate-180 text-[#2563EB]"
                  )} />
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-[#475569] font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-8 text-center animate-scale-in">
          <span className="inline-block px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-8">
            GLOBAL CONNECT
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
            LET'S <span className="text-[#2563EB]">CONNECT</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Our team of security architects is ready to help you implement enterprise-grade AI infrastructure.
          </p>
        </div>
      </section>

      <section className="py-32 bg-[#F4F7FB] relative -mt-20 z-20">
        <div className="container-default px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-16 lg:p-24 bg-[#0a0e1a] text-white flex flex-col justify-between">
                <div>
                  <span className="text-[#2563EB] font-black text-[10px] uppercase tracking-widest mb-6 block">DEPLOYMENT ADVISORY</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none uppercase tracking-tighter">TALK TO AN <br /><span className="text-[#2563EB]">EXPERT</span></h2>
                  <p className="text-white/60 text-lg font-medium leading-relaxed mb-16">
                    Fill out the form and our industrial security experts will get back to you within 2 business hours for a comprehensive operational briefing.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#2563EB] border border-white/10">
                      <Clock size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase tracking-tight">RAPID RESPONSE</h4>
                      <p className="text-white/50 text-sm font-medium uppercase tracking-widest">Typical reply under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#2563EB] border border-white/10">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase tracking-tight">DIRECT EMAIL</h4>
                      <p className="text-white/50 text-sm font-medium uppercase tracking-widest">admin@zeexai.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-16 lg:p-24 bg-white">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-10">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">REQUEST LOGGED</h3>
                    <p className="text-[#475569] text-lg font-medium">
                      A security specialist will contact you at <span className="text-[#2563EB] font-bold">{submittedEmail}</span> shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                      <div className="p-6 bg-red-50 border border-red-200 rounded-3xl animate-shake">
                        <div className="flex items-center gap-4">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                          <p className="text-sm text-red-600 font-bold uppercase tracking-tight">{error}</p>
                        </div>
                      </div>
                    )}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">FULL IDENTITY</label>
                      <input
                        type="text"
                        className="w-full px-8 py-5 rounded-2xl bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] font-medium focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none"
                        placeholder="e.g., Gaurav Yadav"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">SECURE EMAIL</label>
                      <input
                        type="email"
                        className="w-full px-8 py-5 rounded-2xl bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] font-medium focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none"
                        placeholder="e.g., ga@zeexai.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">MISSION DETAILS</label>
                      <textarea
                        rows={5}
                        className="w-full px-8 py-5 rounded-2xl bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] font-medium focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none resize-none"
                        placeholder="Briefly describe your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#2563EB] text-white font-black py-6 rounded-2xl hover:bg-blue-700 shadow-2xl transition-all uppercase tracking-widest text-sm disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {isLoading ? 'PROTOCOL INITIATING...' : 'SEND MESSAGE'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Strategic Location */}
      <section className="py-32 bg-[#F4F7FB] border-t border-[#E2E8F0]">
        <div className="container-default px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-2 bg-white text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-8">
                HQ TELEMETRY
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter mb-8 leading-none">STRATEGIC <br /><span className="text-[#2563EB]">LOCATION</span></h2>
              <p className="text-xl text-[#475569] font-medium leading-relaxed mb-12">
                Situated at the heart of innovation hub, IIT Madras Research Park.
              </p>
              
              <div className="bg-white p-10 rounded-[2.5rem] border border-[#E2E8F0] shadow-xl">
                 <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#F4F7FB] text-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0F172A] uppercase tracking-tight text-xl mb-4">INNOVATION HUB</h4>
                      <p className="text-[#475569] font-bold text-sm uppercase tracking-wider mb-2">Sudha & Shankar Innovation Hub</p>
                      <p className="text-[#475569] font-medium">IIT Madras, Research Park, Chennai</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6852947612847!2d80.22829580971583!3d12.991969287272374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1fb87ef8d%3A0xa03b5a54521f8c14!2sSudha%20%26%20Shankar%20Innovation%20Hub!5e0!3m2!1sen!2sin!4v1746269051282!5m2!1sen!2sin" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    title="ZeexAI HQ"
                ></iframe>
                {/* Overlay for premium look */}
                <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[3rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
import { cn } from '@/lib/utils';


export default Contact;