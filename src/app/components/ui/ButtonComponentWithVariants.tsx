'use client';

import {ButtonHTMLAttributes, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-normal cursor-pointer transition-all duration-200 ease-out";
  
  const variantClasses = {
    primary: "bg-[#5472ff] text-white border-2 border-transparent hover:bg-[#3b5bdb] hover:transform hover:-translate-y-px hover:shadow-[0_4px_8px_rgba(84,114,255,0.3)]",
    secondary: "bg-[#E5E7FF] text-[#5472ff] border-2 border-[#5472ff] hover:bg-[#D0DCFF]",
    outline: "bg-transparent text-[#5472ff] border-2 border-[#5472ff] hover:bg-[#5472ff] hover:text-white",
    ghost: "text-neutral-500 text-xs font-normal no-underline hover:text-[#211922] transition-colors duration-150"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs rounded-lg",
    md: "px-[14px] py-[6px] text-xs rounded-2xl",
    lg: "px-6 py-3 text-sm rounded-2xl"
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
