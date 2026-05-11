import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Image, 
  Video, 
  FileText, 
  Headphones, 
  Radar, 
  ShoppingBag, 
  Sparkles, 
  MessageSquare, 
  Boxes,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceOfferings = () => {
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

  const services: ServiceCard[] = [
    {
      icon: <Image className="w-8 h-8" />,
      title: "Image Annotation",
      description: "The accuracy and richness of image annotations play a pivotal role in enhancing the performance of AI and ML models. We enable the training of machine learning and computer vision models to detect and analyse objects, regions, and other features within images through precise image labeling.",
      link: "/services",
      delay: 0.1
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Annotation",
      description: "Accurate video annotation is essential for training AI models. Our video annotation solutions enable machine learning and computer vision models to interpret and analyse video contents accurately. We help you effectively launch your AI initiatives by providing high-quality video training data.",
      link: "/services",
      delay: 0.2
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Text Annotation",
      description: "High-quality annotations are crucial for training and evaluating NLP models. Our text annotation solutions aim to improve machine learning, natural language processing, and data analysis by making text comprehensible and machine-readable.",
      link: "/services",
      delay: 0.3
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Annotation",
      description: "Audio annotation is essential for various applications requiring audio data conversion into machine-readable format. Our audio annotation services add metadata to your recorded sounds or speech to enhance the relevance of human-bot interaction.",
      link: "/services",
      delay: 0.4
    },
    {
      icon: <Radar className="w-8 h-8" />,
      title: "LiDAR Annotation",
      description: "Our LiDAR annotation solutions aim to improve machine learning and computer vision by making 3D LiDAR data interpretable and actionable. Our professional annotators have a thorough understanding of LiDAR technology and 3D perception.",
      link: "/services",
      delay: 0.5
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Product Categorization",
      description: "Data annotation enables precise product categorization by systematically sorting items based on specific attributes. By leveraging human labeling, this methodology streamlines navigation and enriches user experience.",
      link: "/services",
      delay: 0.6
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Generative AI",
      description: "In generative AI, precise data labeling is crucial for refining model accuracy. Accurate labels form the foundation for effective model training, enabling a deeper understanding of context and semantics.",
      link: "/services",
      delay: 0.7
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "NLP",
      description: "Natural language processing applications have broad uses across various industries and domains. Our NLP labeling service specialises in labeling textual data to support various language-related tasks and applications.",
      link: "/services",
      delay: 0.8
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "AR and VR",
      description: "With the help of accurate data labeling, AR and VR deliver enhanced visual experiences for customers. Well-structured, accurately labeled data enables these technologies to recognize objects, environments, and movements with high accuracy.",
      link: "/services",
      delay: 0.9
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="container-default px-8 relative z-10" ref={setRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
            Our Specialized Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter leading-none">
            Expert <span className="text-[#2563EB]">AI Solutions</span>
          </h2>
          <p className="text-base text-[#475569] max-w-3xl mx-auto font-medium leading-relaxed">
            We are committed to enhancing machine learning and AI applications. With dedication to precision and quality, we empower businesses to develop groundbreaking solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                to={service.link}
                className="group block h-full bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#2563EB]"
              >
                <div className="w-16 h-16 rounded-xl bg-[#F4F7FB] flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#475569] mb-6 leading-relaxed line-clamp-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-[#2563EB] font-bold group-hover:gap-2 transition-all">
                  LEARN MORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOfferings;

