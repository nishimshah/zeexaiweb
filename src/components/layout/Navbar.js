import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ShoppingCart, Banknote, Factory, TrafficCone, Globe, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
const navItems = [
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
                icon: _jsx(ShoppingCart, { size: 16 })
            },
            {
                title: "Bank Security",
                path: "/services/banks-atms-financial",
                description: "Financial institutions",
                icon: _jsx(Banknote, { size: 16 })
            },
            {
                title: "Industry Safety",
                path: "/services/industry-smart-factories",
                description: "Smart factories",
                icon: _jsx(Factory, { size: 16 })
            },
            {
                title: "Traffic Safety",
                path: "/services/traffic-public-safety",
                description: "Public safety",
                icon: _jsx(TrafficCone, { size: 16 })
            },
            {
                title: "Smart Cities",
                path: "/services/smart-cities-infrastructure",
                description: "Government infrastructure",
                icon: _jsx(Globe, { size: 16 })
            },
            {
                title: "Corporate Security",
                path: "/services/corporate-residential",
                description: "Offices & residential",
                icon: _jsx(Building, { size: 16 })
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
    const [openDropdown, setOpenDropdown] = useState(null);
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
    const toggleMobileDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };
    return (_jsx("header", { className: cn("fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white", isScrolled || mobileMenuOpen
            ? "shadow-md py-2 border-b border-gray-100"
            : "py-4"), children: _jsxs("div", { className: "container-default flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "relative z-50 group", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center group-hover:rotate-12 transition-transform", children: _jsx("img", { src: "https://i.ibb.co/hJqt2xCz/zeex-ai-logo.png", alt: "ZeexAI Logo", className: "w-full h-full object-cover" }) }), _jsxs("span", { className: "font-bold text-2xl text-navy-800", children: ["Zeex", _jsx("span", { className: "text-navy-600", children: "AI" })] })] }) }), _jsxs("nav", { className: "hidden lg:flex items-center gap-8", children: [navItems.map((item) => (_jsxs("div", { className: "relative group", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Link, { to: item.path, className: cn("font-medium text-navy-700 hover:text-navy-900 transition-colors py-2 px-1", location.pathname === item.path && "text-navy-900 font-semibold", !item.dropdown && "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-navy-600 after:transition-all hover:after:w-full"), children: item.title }), item.dropdown && (_jsx(ChevronDown, { className: "w-4 h-4 ml-1 text-navy-500 group-hover:rotate-180 transition-transform" }))] }), item.dropdown && (_jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-screen max-w-6xl px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200", children: _jsx("div", { className: "bg-white rounded-xl shadow-xl border border-gray-200 p-4", children: _jsx("div", { className: "grid grid-cols-3 gap-4", children: item.dropdown.map((dropdownItem) => (_jsxs(Link, { to: dropdownItem.path, className: "flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors", children: [_jsx("div", { className: "p-1.5 rounded-md bg-navy-50 border border-navy-100", children: React.cloneElement(dropdownItem.icon, {
                                                            className: "text-navy-600",
                                                            size: 16
                                                        }) }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-navy-800", children: dropdownItem.title }), _jsx("p", { className: "text-xs text-navy-500 mt-1", children: dropdownItem.description })] })] }, dropdownItem.path))) }) }) }))] }, item.title))), _jsx(Link, { to: "/contact", className: "ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all", children: "Get Demo" })] }), _jsx("button", { className: "lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors", onClick: () => setMobileMenuOpen(!mobileMenuOpen), "aria-label": "Toggle Menu", children: mobileMenuOpen ? (_jsx(X, { className: "w-6 h-6 text-navy-800" })) : (_jsx(Menu, { className: "w-6 h-6 text-navy-800" })) }), _jsx("div", { className: cn("fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto transition-all duration-300", mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"), children: _jsxs("nav", { className: "flex flex-col space-y-2 pb-8", children: [navItems.map((item) => (_jsx("div", { className: "border-b border-gray-100 last:border-0", children: item.dropdown ? (_jsxs("div", { children: [_jsxs("button", { className: "flex justify-between items-center w-full text-left py-4 font-medium text-navy-800", onClick: () => toggleMobileDropdown(item.title), children: [item.title, _jsx(ChevronDown, { className: cn("w-5 h-5 text-navy-500 transition-transform", openDropdown === item.title ? "rotate-180" : "") })] }), _jsx("div", { className: cn("pl-4 space-y-3 overflow-hidden transition-all", openDropdown === item.title ? "max-h-[500px] pb-4" : "max-h-0"), children: item.dropdown.map((dropdownItem) => (_jsxs(Link, { to: dropdownItem.path, className: "flex items-center gap-3 py-2.5 text-navy-700 hover:text-navy-900 transition-colors", children: [dropdownItem.icon && (_jsx("div", { className: "w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-navy-600 border border-navy-100", children: dropdownItem.icon })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-medium truncate", children: dropdownItem.title }), _jsx("div", { className: "text-xs text-navy-500 mt-1 truncate", children: dropdownItem.description })] })] }, dropdownItem.path))) })] })) : (_jsx(Link, { to: item.path, className: "block py-4 font-medium text-navy-800 hover:text-navy-600 transition-colors", children: item.title })) }, item.title))), _jsx(Link, { to: "/contact", className: "mt-6 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-center shadow-sm hover:shadow-md transition-all", children: "Request Demo" })] }) })] }) }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map