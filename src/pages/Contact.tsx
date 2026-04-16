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

const HeroContent = () => {
  const titleRef = useGSAPText({ delay: 0.3, duration: 1, stagger: 0.05 });
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <>
      <h1 
        ref={titleRef}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
      >
        Let's <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
      </h1>
      <p 
        ref={subtitleRef}
        className="text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto"
      >
        Our team is ready to help you with any questions about our AI solutions.
      </p>
    </>
  );
};

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
      // Validate form data
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

      // Check if response is ok before parsing JSON
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        // If JSON parsing fails, try to get text response
        const textResponse = await response.text();
        throw new Error(`Server error: ${textResponse || response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.message || data.error || `Server error: ${response.status} ${response.statusText}`);
      }

      if (!data.success) {
        throw new Error(data.message || data.error || 'Failed to send message');
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true);
      setError('');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error('Submission error:', err);
      const errorMessage = err.message || err.toString() || 'Failed to send message. Please try again later.';
      setError(errorMessage);
      
      // Also log to console for debugging
      if (process.env.NODE_ENV === 'development') {
        console.error('Full error:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const faqItems: { question: string; answer: string }[] = [
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
      answer: "Absolutely! Zeex AI offers industry-specific AI models tailored for Home, office, Society, ATMs, banks, retail stores, warehouses, and traffic surveillance. We work closely with clients to meet their unique security challenges."
    },
    {
      question: "What are the technical requirements for integration?",
      answer: "Zeex AI's solutions are compatible with IP-based and analog CCTV systems. They require a stable network connection and, for edge AI devices, sufficient power and processing capabilities."
    }
  ];

  const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="container-default">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-navy-800 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all overflow-hidden hover:shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#1E3A8A] overflow-hidden">
        <div className="container-default relative z-10 px-8 text-center">
          <HeroContent />
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container-default px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 border-r border-[#F4F7FB]">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Send us a message</h2>
                <p className="text-[#475569] mb-12 leading-relaxed">
                  Fill out the form and our industrial security experts will get back to you within 2 business hours.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F4F7FB] p-4 rounded-xl">
                      <Clock className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">Global Response</h4>
                      <p className="text-[#475569]">Typically replies within 2 business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F4F7FB] p-4 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">Sales Inquiries</h4>
                      <p className="text-[#475569]">Contact our team at admin@zeexai.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 md:p-16 bg-white">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Request Received</h3>
                    <p className="text-[#475569] mb-8">
                      Thank you for reaching out. A security specialist will contact you at <span className="font-bold text-[#1E3A8A]">{submittedEmail}</span> shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <p className="text-sm text-red-600 font-bold">{error}</p>
                        </div>
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-6 py-4 rounded-lg bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-2">Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-4 rounded-lg bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-6 py-4 rounded-lg bg-[#F4F7FB] border border-[#E2E8F0] text-[#0F172A] focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all outline-none resize-none"
                        placeholder="Project requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#1E3A8A] text-white font-bold py-5 px-8 rounded-lg hover:bg-[#2563EB] shadow-lg transition-all uppercase tracking-widest disabled:opacity-70"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Send Message'}
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

      {/* Contact Cards */}
      <section className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-default px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Mail />, title: "Email Support", desc: "Corporate inquiries", detail: "admin@zeexai.com", link: "mailto:admin@zeexai.com" },
              { icon: <Phone />, title: "Direct Line", desc: "Security consultants", detail: "+91 8709221636", link: "tel:+918709221636" },
              { icon: <MapPin />, title: "Headquarters", desc: "Innovation hub", detail: "IIT Madras, Chennai", link: "#" }
            ].map((card, idx) => (
              <div key={idx} className="group text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#F4F7FB] text-[#1E3A8A] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-[#475569] mb-4 text-sm font-bold uppercase tracking-widest">{card.desc}</p>
                <a href={card.link} className="text-[#2563EB] font-bold text-lg hover:underline transition-all">
                  {card.detail}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#F4F7FB]">
        <div className="container-default px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Strategic Location</h2>
            <p className="text-lg text-[#475569]">Sudha & Shankar Innovation Hub, IIT Madras</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[#E2E8F0] h-[500px]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6852947612847!2d80.22829580971583!3d12.991969287272374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1fb87ef8d%3A0xa03b5a54521f8c14!2sSudha%20%26%20Shankar%20Innovation%20Hub!5e0!3m2!1sen!2sin!4v1746269051282!5m2!1sen!2sin" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                title="ZeexAI HQ"
              ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;