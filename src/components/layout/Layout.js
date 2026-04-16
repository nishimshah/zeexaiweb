import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
const Layout = ({ children, showFooter = true }) => {
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.hero-element').forEach((el) => {
                el.classList.add('animate-fade-up');
            });
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('animate-fade-up');
                }
            });
        }, 100);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("main", { className: "min-h-screen", children: children }), showFooter && _jsx(Footer, {}), " "] }));
};
export default Layout;
//# sourceMappingURL=Layout.js.map