'use client';

import {TextareaHTMLAttributes} from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function TextArea({ 
  label, 
  error, 
  helperText,
  className = '', 
  ...props 
}: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#333333] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 border-2 border-[#E1E1E1] rounded-xl text-sm resize-none
          focus:border-[#5472ff] focus:shadow-[0_0_0_3px_rgba(84,114,255,0.1)] focus:outline-none
          transition-all duration-150 ease-out min-h-[100px]
          ${error ? 'border-[#FF4757]' : ''}
          ${className}
        `}
        {...props}
      />
      {helperText && !error && (
        <p className="mt-1 text-xs text-[#919191]">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-[#FF4757]">{error}</p>
      )}
    </div>
  );
}
