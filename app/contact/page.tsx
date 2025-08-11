import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-4xl font-bold text-purple-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            id="message" 
            rows={4} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <motion.div 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-purple-600">Our Location</h2>
        <p className="text-gray-700">123 Clean Street, Tech City, TX 12345</p>
        <h2 className="text-2xl font-semibold text-purple-600 mt-6">Business Hours</h2>
        <p className="text-gray-700">Mon - Fri: 9 AM - 5 PM</p>
        <p className="text-gray-700">Sat: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sun: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;