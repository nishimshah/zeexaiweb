import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-32 pb-16 border-t border-[#1E3A8A]/30">
      <div className="container-default px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                <span className="text-white font-black text-2xl uppercase">Z</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter uppercase">ZeexAI</span>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#475569] mt-0.5">Industrial AI</span>
              </div>
            </div>
            <p className="text-[#475569] leading-relaxed font-medium">
              Industrial-grade AI surveillance infrastructure engineered for modern operational perimeters.
            </p>
            <div className="flex space-x-6">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-[#475569] hover:text-[#2563EB] transition-colors" aria-label="Social">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest text-[#2563EB]">Infrastructure</h3>
            <ul className="space-y-5">
              {['Home', 'Mission & Vision', 'AI Solutions', 'Technical Blog', 'Contact Support'].map((link, i) => (
                <li key={i}>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-[#475569] hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest text-[#2563EB]">Core Sectors</h3>
            <ul className="space-y-5">
              {['Retail Intelligence', 'Bank Security', 'Industrial Monitoring', 'Public Infrastructure'].map((link, i) => (
                <li key={i}>
                  <Link to="/services" className="text-[#475569] hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest text-[#2563EB]">Telemetry</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Phone size={18} className="flex-shrink-0 text-[#2563EB] mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Direct Line</span>
                  <span className="text-[#475569] font-bold">+91 8709221636</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail size={18} className="flex-shrink-0 text-[#2563EB] mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Secure Email</span>
                  <span className="text-[#475569] font-bold">admin@zeexai.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#475569] text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} ZeexAI Global. Deployment Node: 0.1.4
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest">
            <Link to="/privacy" className="text-[#475569] hover:text-white transition-colors">Privacy Protocol</Link>
            <Link to="/terms" className="text-[#475569] hover:text-white transition-colors">Operational Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;