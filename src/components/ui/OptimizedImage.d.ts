import React from 'react';
interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
    onLoad?: () => void;
    onError?: () => void;
}
declare const OptimizedImage: React.FC<OptimizedImageProps>;
export default OptimizedImage;
//# sourceMappingURL=OptimizedImage.d.ts.map