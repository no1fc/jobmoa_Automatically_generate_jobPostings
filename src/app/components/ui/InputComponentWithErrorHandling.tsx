'use client';

import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode,
    error?: string
}

export default function Input({
                                  label,
                                  error,
                                  className = '',
                                  ...props
                              }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-[#333333] mb-2">
                    {label}
                </label>
            )}
            <input
                className={`
          w-full px-4 py-3 border-2 border-[#E1E1E1] rounded-xl text-sm
          focus:border-[#5472ff] focus:shadow-[0_0_0_3px_rgba(84,114,255,0.1)] focus:outline-none
          transition-all duration-150 ease-out
          ${error ? 'border-[#FF4757]' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-xs text-[#FF4757]">{error}</p>
            )}
        </div>
    );
}
