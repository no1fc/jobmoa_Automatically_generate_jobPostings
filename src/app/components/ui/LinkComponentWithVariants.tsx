'use client';

import NextLink from 'next/link';
import {ReactNode} from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'highlighted' | 'ghost';
  className?: string;
  target?: string;
}

export default function Link({ 
  href, 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}: LinkProps) {
  const variantClasses = {
    default: "text-[#211922] text-xs font-normal no-underline hover:text-[#5472ff] transition-colors duration-150",
    highlighted: "text-[#5472ff] text-base font-medium no-underline hover:text-[#3b5bdb] hover:underline transition-all duration-150",
    ghost: "text-neutral-500 text-xs font-normal no-underline hover:text-[#211922] transition-colors duration-150"
  };
  
  return (
    <NextLink 
      href={href}
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
}
