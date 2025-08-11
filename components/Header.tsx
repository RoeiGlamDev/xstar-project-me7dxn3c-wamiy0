import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
  navItems: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-purple-600 text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/">{logo || 'CleanSSR'}</a>
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              href={item.href}
              className="text-purple-600 hover:text-purple-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
        <button
          className="md:hidden text-purple-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg p-4"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              href={item.href}
              className="block text-purple-600 hover:text-purple-800 transition duration-300 py-2"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;