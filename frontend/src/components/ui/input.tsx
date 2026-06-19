import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  error?: string;
  className?: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    y: 0,
    color: 'inherit',
  },
  animate: {
    y: '-130%',
    color: 'rgb(0, 85, 128)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export const Input: React.FC<InputProps> = ({
  label,
  className = '',
  value,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={cn('relative', className)}>
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? 'animate' : 'initial'}
      >
        {label.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-sm font-semibold"
            variants={letterVariants}
            style={{ willChange: 'transform' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className={cn(
          'outline-none border-b-2 pt-5 pb-2 w-full text-base font-medium text-brand-dark bg-transparent transition-colors duration-150',
          error ? 'border-red-400' : 'border-brand-border focus:border-brand-blue',
          showLabel ? 'placeholder-brand-muted/60' : 'placeholder-transparent',
        )}
      />

      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
};