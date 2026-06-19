// import * as React from 'react';
// import { Slot } from '@radix-ui/react-slot';
// import { cva, type VariantProps } from 'class-variance-authority';

// import { cn } from '../../lib/utils';

// const buttonVariants = cva(
//   'inline-flex items-center justify-center whitespace-nowrap rounded-card text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
//   {
//     variants: {
//       variant: {
//         default: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
//         outline: 'border border-brand-border bg-white text-brand-dark hover:bg-brand-surface',
//         ghost: 'text-brand-dark hover:bg-brand-surface',
//       },
//       size: {
//         default: 'h-10 px-4 py-2',
//         sm: 'h-9 rounded-card px-3',
//         icon: 'h-9 w-9',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   },
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : 'button';
//     return (
//       <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
//     );
//   },
// );
// Button.displayName = 'Button';

// export { Button, buttonVariants };
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-card text-sm font-semibold focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
        outline: 'border border-brand-border bg-white text-brand-dark hover:bg-brand-surface',
        ghost: 'text-brand-dark hover:bg-brand-surface',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-card px-3',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Inject styles once to avoid duplication
let stylesInjected = false;

const injectButtonStyles = () => {
  if (stylesInjected) return;
  stylesInjected = true;

  const style = document.createElement('style');
  style.textContent = `
    @property --gradient-angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    @property --gradient-angle-offset {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    @property --gradient-percent {
      syntax: "<percentage>";
      initial-value: 5%;
      inherits: false;
    }

    .shiny-button {
      --shiny-highlight: #3b82f6;
      --shiny-highlight-subtle: rgba(59, 130, 246, 0.5);
      --duration: 3s;
      --transition: 600ms cubic-bezier(0.25, 1, 0.5, 1);
      
      position: relative;
      isolation: isolate;
      cursor: pointer;
      outline-offset: 4px;
      transition: box-shadow var(--transition), filter var(--transition);
    }

    .shiny-button::before {
      content: "";
      pointer-events: none;
      position: absolute;
      inset: -2px;
      border-radius: inherit;
      padding: 2px;
      background: conic-gradient(
        from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
        transparent 0deg,
        var(--shiny-highlight) calc(var(--gradient-percent) * 0.5),
        white var(--gradient-percent),
        var(--shiny-highlight) calc(var(--gradient-percent) * 1.5),
        transparent calc(var(--gradient-percent) * 2)
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity var(--transition);
      z-index: 1;
    }

    .shiny-button::after {
      content: "";
      pointer-events: none;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: radial-gradient(
        circle at 30% 20%,
        rgba(59, 130, 246, 0.4) 0%,
        rgba(59, 130, 246, 0.1) 40%,
        transparent 70%
      );
      opacity: 0;
      transition: opacity var(--transition);
      z-index: 0;
    }

    .shiny-button:hover::before,
    .shiny-button:focus-visible::before {
      opacity: 1;
      animation: gradient-rotate var(--duration) linear infinite;
    }

    .shiny-button:hover::after,
    .shiny-button:focus-visible::after {
      opacity: 1;
      animation: glow-pulse 2s ease-in-out infinite;
    }

    .shiny-button:hover,
    .shiny-button:focus-visible {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }

    .shiny-button:active {
      transform: scale(0.98);
    }

    @keyframes gradient-rotate {
      0% {
        --gradient-angle: 0deg;
      }
      100% {
        --gradient-angle: 360deg;
      }
    }

    @keyframes glow-pulse {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.8;
      }
    }
  `;
  document.head.appendChild(style);
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Inject styles on first mount
    React.useEffect(() => {
      injectButtonStyles();
    }, []);

    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }), 'shiny-button')} 
        ref={ref} 
        {...props} 
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };