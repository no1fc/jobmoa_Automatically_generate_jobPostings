'use client';

import {ReactNode} from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '' 
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-[#EDF2FF] text-[#5472ff] border border-[#D0DCFF]",
    secondary: "bg-[#F8F9FF] text-[#333333] border border-[#E1E1E1]",
    success: "bg-green-50 text-[#00A876] border border-green-200",
    warning: "bg-orange-50 text-[#FF8C00] border border-orange-200",
    error: "bg-red-50 text-[#FF4757] border border-red-200",
    outline: "bg-transparent text-[#5472ff] border border-[#5472ff] hover:bg-[#5472ff] hover:text-white transition-colors duration-150"
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
