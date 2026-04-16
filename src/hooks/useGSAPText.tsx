import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPTextOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: string | Element | null;
  start?: string;
  once?: boolean;
}

export const useGSAPText = (options: UseGSAPTextOptions = {}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const {
    delay = 0,
    duration = 1,
    stagger = 0.1,
    trigger,
    start = 'top 80%',
    once = true
  } = options;

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const originalText = text.textContent || '';
    const words = originalText.split(' ');
    
    // Clear original text
    text.innerHTML = '';
    
    // Create spans for each word
    words.forEach((word) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(100%)';
      text.appendChild(span);
    });

    // Animate words
    const spans = text.querySelectorAll('span');
    
    const tl = gsap.timeline({
      delay,
      scrollTrigger: trigger ? {
        trigger: trigger === 'self' ? text : trigger,
        start,
        once,
        toggleActions: 'play none none none'
      } : undefined
    });

    tl.to(spans, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out'
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay, duration, stagger, trigger, start, once]);

  return textRef;
};

export default useGSAPText;

