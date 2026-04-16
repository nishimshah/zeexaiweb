import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { gsap } from 'gsap';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    // Toggle immediately for responsive feel
    toggleDarkMode();
    
    // Add a subtle scale animation on click for visual feedback
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 border border-gray-200 dark:border-navy-700 transition-all duration-300 group shadow-sm hover:shadow-md flex items-center justify-center min-w-[40px] min-h-[40px] z-10"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{ display: 'flex', visibility: 'visible', opacity: 1 }}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-yellow-500 dark:text-yellow-400 transition-all duration-500 ease-in-out ${
            isDarkMode 
              ? 'opacity-0 rotate-180 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-600 dark:text-blue-400 transition-all duration-500 ease-in-out ${
            isDarkMode 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle; 