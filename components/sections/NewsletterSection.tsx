import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-3xl font-bold text-purple-600 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated with CleanSSR
        </motion.h2>
        <motion.div 
          className="text-gray-700 text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Join our newsletter for the latest technology updates and cleaning solutions.
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email address"
            required
            className="p-3 border border-purple-600 rounded-lg mb-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.div 
            type="submit"
            className="bg-purple-600 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        {success && (
          <motion.div 
            className="text-green-500 text-center mt-4"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to CleanSSR!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;