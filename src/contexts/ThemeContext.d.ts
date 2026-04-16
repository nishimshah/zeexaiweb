import React from 'react';
interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
export declare const useTheme: () => ThemeContextType;
interface ThemeProviderProps {
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map