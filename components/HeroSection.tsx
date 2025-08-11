import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to CleanSSR", 
  subtitle = "Revolutionizing Cleaning Solutions with Advanced Technology", 
  ctaText = "Get Started", 
  ctaLink = "#services" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-purple-600">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
      </motion.div>
      <motion.div 
        href={ctaLink} 
        className="mt-6 px-8 py-3 text-white bg-purple-600 rounded hover:bg-purple-700 transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-12 flex space-x-4">
        <span className="text-sm text-gray-500">Trusted by</span>
        <img src="/path/to/logo1.png" alt="Trusted Partner 1" className="h-8" />
        <img src="/path/to/logo2.png" alt="Trusted Partner 2" className="h-8" />
        <img src="/path/to/logo3.png" alt="Trusted Partner 3" className="h-8" />
      </div>
    </section>
  );
};

export default HeroSection;