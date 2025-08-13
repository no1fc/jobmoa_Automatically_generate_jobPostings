'use client';

import {ReactNode} from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-[32px] font-semibold leading-normal text-[#333333] ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-[24px] font-semibold leading-normal text-[#333333] ${className}`}>
      {children}
    </h2>
  );
}

export function H2Large({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-[70px] font-semibold leading-normal text-white ${className}`}>
      {children}
    </h2>
  );
}

export function Body({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-xs font-normal leading-relaxed text-[#333333] ${className}`}>
      {children}
    </p>
  );
}

export function BodyMuted({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-xs font-normal leading-relaxed text-[#919191] ${className}`}>
      {children}
    </p>
  );
}
