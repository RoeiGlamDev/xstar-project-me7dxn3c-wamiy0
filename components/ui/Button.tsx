import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded transition duration-200 ease-in-out focus:outline-none';
  const primaryStyles = 'bg-purple-600 text-white hover:bg-purple-700';
  const secondaryStyles = 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white';

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.div
      className={`${baseStyles`} ${buttonStyles}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={children.toString()}
    >
      {children}
    </motion.button>
  );
};

export default Button;