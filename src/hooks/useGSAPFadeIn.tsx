import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPFadeInOptions {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  trigger?: string | Element | null;
  start?: string;
  once?: boolean;
}

export const useGSAPFadeIn = (options: UseGSAPFadeInOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const {
    delay = 0,
    duration = 0.8,
    y = 50,
    stagger = 0.1,
    trigger,
    start = 'top 80%',
    once = true
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const children = element.children;

    gsap.set(element.children, {
      opacity: 0,
      y
    });

    const tl = gsap.timeline({
      delay,
      scrollTrigger: trigger ? {
        trigger: trigger === 'self' ? element : trigger,
        start,
        once,
        toggleActions: 'play none none none'
      } : undefined
    });

    if (children.length > 0 && stagger > 0) {
      tl.to(children, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out'
      });
    } else {
      tl.to(element, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out'
      });
    }

    return () => {
      tl.kill();
    };
  }, [delay, duration, y, stagger, trigger, start, once]);

  return ref;
};

export default useGSAPFadeIn;

