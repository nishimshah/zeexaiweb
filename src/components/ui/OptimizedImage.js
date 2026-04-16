import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
const OptimizedImage = ({ src, alt, className = '', width, height, loading = 'lazy', priority = false, onLoad, onError }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef(null);
    useEffect(() => {
        // If priority is true, load immediately
        if (priority) {
            setIsInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, {
            rootMargin: '200px 0px',
            threshold: 0.1
        });
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => observer.disconnect();
    }, [priority]);
    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };
    const handleError = () => {
        setHasError(true);
        onError?.();
    };
    if (hasError) {
        return (_jsx("div", { className: `bg-gray-200 flex items-center justify-center ${className}`, style: { width, height }, children: _jsx("span", { className: "text-gray-500 text-sm", children: "Image unavailable" }) }));
    }
    return (_jsxs("div", { className: `relative ${className}`, ref: imgRef, children: [!isLoaded && (_jsx("div", { className: "absolute inset-0 bg-gray-200 animate-pulse", style: { width, height } })), isInView && (_jsx("img", { src: src, alt: alt, className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`, width: width, height: height, loading: priority ? 'eager' : loading, decoding: "async", onLoad: handleLoad, onError: handleError }))] }));
};
export default OptimizedImage;
//# sourceMappingURL=OptimizedImage.js.map