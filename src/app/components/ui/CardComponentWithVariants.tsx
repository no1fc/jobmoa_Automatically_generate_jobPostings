'use client';

import {ReactNode} from 'react';

interface CardProps {
    children: ReactNode,
    className?: string,
    variant?: 'default' | 'pin' | 'hover',
    onClick?: () => void,
    style?: { height: string },
    id?: string
}

export default function Card({
                                 children,
                                 className = '',
                                 variant = 'default',
                                 onClick,
                                 style,
                                 id
                             }: CardProps) {
    const baseClasses = "bg-white border border-[#E1E1E1] transition-all duration-200 ease-out";

    const variantClasses = {
        default: "rounded-2xl p-4",
        pin: "w-[236px] h-[350px] rounded-2xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(84,114,255,0.15)] hover:border-[#5472ff]",
        hover: "rounded-2xl p-4 hover:shadow-[0_4px_8px_rgba(84,114,255,0.12)] hover:transform hover:-translate-y-1"
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
            style={style}
            id={id}
        >
            {children}
        </div>
    );
}
