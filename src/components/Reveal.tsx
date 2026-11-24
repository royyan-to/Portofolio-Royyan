import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SWISS_EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: SWISS_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-[2px] bg-transparent"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-[#425D78] dark:bg-[#7E9BB8]"
      />
    </div>
  );
}
