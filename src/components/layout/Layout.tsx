import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransitionWrapper from '../transitions/PageTransitionWrapper';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const location = useLocation();

  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    setTimeout(() => {
      document.querySelectorAll('.hero-element').forEach((el) => {
        el.classList.add('animate-fade-up');
      });
      
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('animate-fade-up');
        }
      });
    }, 100);
  }, [location]);

  return (    
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;