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
      setIsTransitioning(true);
    }
    prevLocationRef.current = location;
  }, [location]);

  const handleTransitionComplete = () => {
    setDisplayLocation(location);
    
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setIsTransitioning(false);
        }
      });
    } else {
      setIsTransitioning(false);
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

