import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../lib/motion';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white dark:bg-black transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
};
