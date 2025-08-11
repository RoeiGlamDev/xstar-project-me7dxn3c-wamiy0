import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-20 px-6">
      <motion.div
        className="text-4xl font-bold text-purple-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;