import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingCart, 
  Shield,
  Settings,
  Car,
  Microscope
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  title: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  title: string;
  path: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Solutions", path: "/solutions" },
  { title: "Achievements", path: "/achievements" },
  {
    title: "Products",
    path: "/services",
    dropdown: [
      { title: "Z-Audit", path: "/services#z-audit", description: "Speech Intelligence", icon: <Shield size={16} /> },
      { title: "Z-Factory", path: "/services#z-factory", description: "Facility Intelligence", icon: <Settings size={16} /> },
      { title: "Z-Market", path: "/services#z-market", description: "Consumer Intelligence", icon: <ShoppingCart size={16} /> },
      { title: "Z-Tracs", path: "/services#z-tracs", description: "Traffic Management", icon: <Car size={16} /> },
      { title: "Z-Labs", path: "/services#z-labs", description: "Innovation Hub", icon: <Microscope size={16} /> }
    ]
  },
  { title: "Blogs", path: "/blog" },
  { title: "Contact", path: "/contact" },
  { title: "Careers", path: "/careers" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-2 md:top-6 left-0 w-full z-[100] px-4 md:px-6 pointer-events-none">
      <header className={cn(
        "container-default mx-auto flex justify-between items-center px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-700 ease-in-out pointer-events-auto",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
          : "bg-white/40 backdrop-blur-md border border-white/10 shadow-sm"
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img src="/images/zeex_ai_logo.png" alt="Zeex AI" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg shadow-sm" />
          <span className={cn(
            "font-black text-lg md:text-xl tracking-tighter uppercase transition-colors duration-300",
            isScrolled ? "text-black" : "text-white"
          )}>
            ZEEX<span className="text-[#3b82f6]">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link 
                to={item.path}
                className={cn(
                  "font-bold uppercase tracking-widest text-[9px] transition-all duration-300 py-2",
                  isScrolled 
                    ? (location.pathname === item.path ? "text-black" : "text-gray-500 hover:text-black")
                    : (location.pathname === item.path ? "text-white" : "text-white/60 hover:text-white")
                )}
              >
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/20 p-3 grid gap-1 overflow-hidden">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="flex items-center gap-4 rounded-2xl p-3 hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-black/60 group-hover:text-black transition-colors">
                          {dropdownItem.icon}
                        </div>
                        <div>
                          <div className="font-black text-[10px] uppercase tracking-widest text-black">{dropdownItem.title}</div>
                          <div className="text-[9px] font-medium text-gray-400 mt-0.5">{dropdownItem.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/contact"
            className="px-7 py-3 bg-black text-white font-black uppercase tracking-widest text-[9px] rounded-full transition-all hover:bg-gray-800 hover:shadow-lg active:scale-95 shadow-md"
          >
            Get Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay - Premium Dark Theme */}
      <div className={cn(
        "fixed inset-0 bg-[#050810] z-[200] lg:hidden transition-all duration-500 ease-in-out overflow-y-auto px-6 py-24",
        mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"
      )}>
        {/* Abstract Background Glow for Mobile Menu */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_rgba(59,130,246,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50"
        >
          <X size={20} />
        </button>

        <nav className="relative z-10 flex flex-col gap-8 items-center text-center">
          {navItems.map((item) => (
            <div key={item.title} className="w-full flex flex-col items-center gap-4">
              <Link
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white uppercase tracking-widest hover:text-white/60 transition-all duration-300 block"
              >
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="flex flex-col gap-3">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] hover:text-blue-500 transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full max-w-xs mt-6 px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full text-sm shadow-xl text-center transition-transform active:scale-95 hover:bg-gray-200"
          >
            Get Demo
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;