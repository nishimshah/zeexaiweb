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

  const toggleMobileDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
      isScrolled || mobileMenuOpen 
        ? "border-b border-[#E2E8F0] shadow-sm py-3" 
        : "py-6"
    )}>
      <div className="container-default flex justify-between items-center px-8">
        {/* Logo */}
        <Link to="/" className="relative z-50 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#1E3A8A] flex items-center justify-center border border-[#1E3A8A] shadow-lg">
              <img src="https://i.ibb.co/hJqt2xCz/zeex-ai-logo.png" alt="ZeexAI Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl text-[#0F172A] tracking-tighter uppercase">
                Zeex<span className="text-[#2563EB]">AI</span>
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#475569] mt-0.5">Industrial Infrastructure</span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <div className="flex items-center">
                  <Link 
                    to={item.path}
                    className={cn(
                      "font-black text-[#475569] hover:text-[#2563EB] transition-colors py-2 px-1 text-[11px] uppercase tracking-widest",
                      location.pathname === item.path && "text-[#1E3A8A]"
                    )}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown className="w-3 h-3 ml-1 text-[#475569] group-hover:rotate-180 transition-transform" />
                  )}
                </div>

                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4">
                      <div className="flex flex-col gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-[#F4F7FB] transition-colors"
                          >
                            <div className="text-[#1E3A8A]">
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
          <div className="ml-6 flex items-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-3.5 bg-[#1E3A8A] text-white font-black rounded-lg shadow-lg hover:bg-[#2563EB] transition-all text-xs uppercase tracking-widest border border-transparent hover:-translate-y-0.5"
            >
              Get Demo
            </Link>
          </div>
        </div>

        {/* Mobile menu logic remains same but styles updated */}
        <button
          className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-[#F4F7FB]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-8 lg:hidden overflow-y-auto transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-xl font-bold text-[#0F172A] border-b border-[#E2E8F0] pb-4"
              >
                {item.title}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 px-6 py-4 bg-[#1E3A8A] text-white font-bold rounded-lg text-center uppercase"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;