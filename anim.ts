// Animation primitives with performance optimizations
import { Variants } from 'framer-motion';

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Base animation variants
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion() ? 0 : 12,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion() ? 0.1 : 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.1 : 0.4,
      ease: "easeOut"
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: prefersReducedMotion() ? 1 : 0.95,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: prefersReducedMotion() ? 0.1 : 0.6,
      ease: "easeOut"
    }
  }
};

// Staggered container variants
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.1,
      delayChildren: prefersReducedMotion() ? 0 : 0.1
    }
  }
};

// Viewport animation settings
export const viewportSettings = {
  once: true,
  margin: "-50px 0px",
  amount: 0.3
};

// Gentle entrance variant
export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.6, 0.2, 1] } }
};

// Performance-optimized wrapper component props
export const animatedWrapperProps = {
  style: { 
    transform: 'translateZ(0)',
    willChange: 'transform'
  }
};