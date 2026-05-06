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

  return (
    <div className="fixed top-6 left-0 w-full z-[100] px-6 pointer-events-none">
      <header className={cn(
        "container-default mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-700 ease-in-out pointer-events-auto",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
          : "bg-white/40 backdrop-blur-md border border-white/10 shadow-sm"
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/zeex_ai_logo.png" alt="Zeex AI" className="w-10 h-10 object-contain rounded-lg shadow-sm" />
          <span className={cn(
            "font-black text-xl tracking-tighter uppercase transition-colors duration-300",
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
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-blue-600">
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
            className="px-7 py-3 bg-black text-white font-black uppercase tracking-widest text-[9px] rounded-full transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95 shadow-md"
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
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white/95 backdrop-blur-2xl z-[90] flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-700 ease-in-out",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible scale-110"
      )}>
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-black text-black uppercase tracking-tighter hover:text-blue-600 transition-colors"
          >
            {item.title}
          </Link>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setMobileMenuOpen(false)}
          className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest rounded-full text-lg shadow-2xl"
        >
          Get Demo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;