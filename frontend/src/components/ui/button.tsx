// src/components/ui/button.tsx
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = ({ className, variant = 'default', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-semibold transition',
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'outline' && 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        className
      )}
      {...props}
    />
  );
};
