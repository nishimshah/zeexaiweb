import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import PageTransition from './PageTransition';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const contentRef = useRef<HTMLDivElement>(null);
  const prevLocationRef = useRef(location);

  useEffect(() => {
    if (location.pathname !== prevLocationRef.current.pathname) {
      if (window.innerWidth < 768) {
        // Instant navigation on mobile
        setDisplayLocation(location);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(true);
      }
    }
    prevLocationRef.current = location;
  }, [location]);

  const handleTransitionComplete = () => {
    setDisplayLocation(location);
    setIsTransitioning(false);
    
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  return (
    <>
      {isTransitioning && <PageTransition onComplete={handleTransitionComplete} />}
      <div
        ref={contentRef}
        key={displayLocation.pathname}
        className="page-content"
      >
        {children}
      </div>
    </>
  );
};

export default PageTransitionWrapper;

