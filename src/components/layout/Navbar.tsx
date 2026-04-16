import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingCart, 
  Banknote, 
  Factory, 
  TrafficCone, 
  Globe, 
  Building
} from 'lucide-react';
import { cn } from '@/lib/utils';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

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
  { 
    title: "Home",
    path: "/"
  },
  { 
    title: "About",
    path: "/about"
  },
  {
    title: "Solutions",
    path: "/solutions",
  },
  {
    title: "Services",
    path: "/services",
    dropdown: [
      { 
        title: "Retail Security", 
        path: "/services/retail-wholesale-high-risk",
        description: "Shop & wholesale security",
        icon: <ShoppingCart size={16} />
      },
      { 
        title: "Bank Security", 
        path: "/services/banks-atms-financial",
        description: "Financial institutions",
        icon: <Banknote size={16} />
      },
      { 
        title: "Industry Safety", 
        path: "/services/industry-smart-factories",
        description: "Smart factories",
        icon: <Factory size={16} />
      },
      { 
        title: "Traffic Safety", 
        path: "/services/traffic-public-safety",
        description: "Public safety",
        icon: <TrafficCone size={16} />
      },
      { 
        title: "Smart Cities", 
        path: "/services/smart-cities-infrastructure",
        description: "Government infrastructure",
        icon: <Globe size={16} />
      },
      { 
        title: "Corporate Security", 
        path: "/services/corporate-residential",
        description: "Offices & residential",
        icon: <Building size={16} />
      }
    ]
  },
  { 
    title: "Blogs",
    path: "/blog"
  },
  { 
    title: "Contact",
    path: "/contact"
  },
  { 
    title: "Careers",
    path: "/careers"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen 
        ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3" 
        : "bg-white py-4"
    )}>
      <div className="container-default flex justify-between items-center px-8">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="https://i.ibb.co/hJqt2xCz/zeex-ai-logo.png" alt="ZeexAI" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-2xl text-[#0A0E1A] tracking-tight">
            ZeexAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <div className="flex items-center">
                  <Link 
                    to={item.path}
                    className={cn(
                      "font-bold text-[#1e293b] hover:text-[#2563EB] transition-colors py-2 px-1 text-[15px]",
                      location.pathname === item.path && "text-[#2563EB]"
                    )}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 text-[#475569] group-hover:rotate-180 transition-transform" />
                  )}
                </div>

                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] p-4">
                      <div className="flex flex-col gap-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#F4F7FB] transition-colors"
                          >
                            <div className="text-[#2563EB]">
                              {dropdownItem.icon}
                            </div>
                            <div className="font-bold text-sm text-[#0F172A]">{dropdownItem.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="ml-4">
            <Link 
              to="/contact"
              className="px-10 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-[1.02] text-sm"
            >
              Get Demo
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden relative z-50 p-2 rounded-xl hover:bg-[#F4F7FB]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-8 lg:hidden overflow-y-auto transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
        )}>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  className="text-2xl font-bold text-[#0F172A]"
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 px-6 py-4 bg-[#2563EB] text-white font-bold rounded-2xl text-center"
            >
              Get Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Navbar;