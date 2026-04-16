import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  delay: number;
}

const Testimonials = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px 0px' }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  const testimonials: Testimonial[] = [
    {
      quote: "Team Zeex AI is professional, prompt, and scalable. The surveillance teams are very flexible and follow guidelines precisely, paying attention to details. Zeex AI's customer support is brilliant and very responsive at all times.",
      author: "Fariborz",
      company: "Ipsotek",
      delay: 0.1
    },
    {
      quote: "We greatly value our partnership with Zeex AI in the field of image labeling. Their work is not only consistently precise and reliable, but they also go above and beyond to support us, even in challenging and time-sensitive situations.",
      author: "Photovoltaikvision GmbH",
      company: "",
      delay: 0.2
    },
    {
      quote: "At Signality, we have been relying on Zeex AI's services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson",
      company: "Signality",
      delay: 0.3
    },
    {
      quote: "Zeex AI's team is highly professional and efficient in their work. They respond quickly and are extremely prompt in their actions. Our collaboration with them has been fantastic thus far.",
      author: "Sumit Singh",
      company: "Labeller",
      delay: 0.4
    },
    {
      quote: "Zeex AI's attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith",
      company: "AI Innovations",
      delay: 0.5
    },
    {
      quote: "We do a lot of projects with Zeex AI. It's great to see a company doing such good work.",
      author: "Jamsheed Kamardeen",
      company: "Blend",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-[#F4F7FB] relative overflow-hidden border-t border-[#E2E8F0]" ref={setRef}>
      <div className="container-default px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white text-[#1E3A8A] rounded-full text-sm font-bold mb-4 border border-[#E2E8F0]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Trusted by Industry <span className="text-[#2563EB]">Leaders Worldwide</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2563EB] transition-all duration-300 relative group"
            >
              <div className="mb-6 text-[#2563EB]/20 group-hover:text-[#2563EB]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>
              
              <div className="relative z-10">
                <p className="text-[#475569] mb-8 leading-relaxed italic text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-6 border-t border-[#F4F7FB]">
                  <p className="font-bold text-[#0F172A]">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-sm font-bold text-[#2563EB] uppercase tracking-wider mt-1">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

