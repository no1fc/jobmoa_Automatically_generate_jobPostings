'use client';

import {ReactNode} from 'react';

interface GridProps {
    children: ReactNode,
    className?: string,
    variant?: 'masonry' | 'standard',
    columns?: { default: number; md: number },
    gap?: string
}

export default function Grid({
                                 children,
                                 className = '',
                                 variant = 'standard',
                                 columns,
                                 gap
                             }: GridProps) {
    const variantClasses = {
        oneColumn: "grid grid-cols-1 gap-4",
        masonry: "columns-[236px] gap-4",
        standard: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    };

    return (
        <div className={`${variantClasses[variant]} ${className}`}>
            {children}
        </div>
    );
}
