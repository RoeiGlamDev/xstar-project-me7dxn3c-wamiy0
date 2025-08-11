import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold text-purple-600">Welcome to CleanSSR</h1>
      <p className="mt-4 text-xl text-gray-700">
        Revolutionizing cleaning technology for a cleaner tomorrow.
      </p>
    </motion.div>
  </div>
);

const Features = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-purple-600">Our Features</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-purple-100 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-purple-600">Eco-Friendly Solutions</h3>
          <p className="mt-2 text-gray-600">
            Our technology uses sustainable methods to ensure an eco-friendly clean.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-purple-100 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-purple-600">Smart Scheduling</h3>
          <p className="mt-2 text-gray-600">
            Utilize our advanced app for effortless scheduling and tracking of services.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-purple-100 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-purple-600">Real-Time Updates</h3>
          <p className="mt-2 text-gray-600">
            Stay informed with real-time notifications about your cleaning services.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-purple-600">What Our Clients Say</h2>
      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 border-l-4 border-purple-600 bg-purple-50"
        >
          <p className="text-lg italic text-gray-700">
            "CleanSSR has transformed our office. The cleanliness is unparalleled!"
          </p>
          <cite className="block mt-2 text-purple-600">- Sarah J.</cite>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 border-l-4 border-purple-600 bg-purple-50"
        >
          <p className="text-lg italic text-gray-700">
            "The smart scheduling feature is a game changer. Highly recommend!"
          </p>
          <cite className="block mt-2 text-purple-600">- John D.</cite>
        </motion.div>
      </div>
    </div>
  </div>
);

const CleanSSR: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Reviews />
    </div>
  );
};

export default CleanSSR;