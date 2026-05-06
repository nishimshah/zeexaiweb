import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container-default px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/zeex_ai_logo.png" alt="ZeexAI" className="w-8 h-8 object-contain rounded-md" />
              <span className="font-bold text-xl tracking-tight uppercase">ZeexAI</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Transforming workplaces and cities with intelligent safety and management powered by AI and data.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563EB] transition-all" aria-label="Social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Solutions', 'Blogs', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Core Services</h3>
            <ul className="space-y-3">
              {['Retail Intelligence', 'Bank Security', 'Industrial Monitoring', 'Public Infrastructure'].map((link, i) => (
                <li key={i}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#2563EB]" />
                <span className="text-gray-400 text-sm font-medium">+91 8709221636</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#2563EB]" />
                <span className="text-gray-400 text-sm font-medium">admin@zeexai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium tracking-tight">
            © {new Date().getFullYear()} ZeexAI. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium tracking-tight">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;