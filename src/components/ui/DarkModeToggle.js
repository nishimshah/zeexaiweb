import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (_jsx("button", { onClick: toggleDarkMode, className: "relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group", "aria-label": isDarkMode ? 'Switch to light mode' : 'Switch to dark mode', children: _jsxs("div", { className: "relative w-5 h-5", children: [_jsx(Sun, { className: `absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}` }), _jsx(Moon, { className: `absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}` })] }) }));
};
export default DarkModeToggle;
//# sourceMappingURL=DarkModeToggle.js.map