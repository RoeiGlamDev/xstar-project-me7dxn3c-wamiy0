import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Cloud-Based Solutions',
    description: 'Leverage the power of cloud technology to optimize your cleaning processes with scalable and efficient solutions.',
    icon: <i className="fas fa-cloud text-purple-500"></i>,
  },
  {
    id: 2,
    title: 'Real-Time Monitoring',
    description: 'Utilize IoT technology for real-time monitoring of cleaning services, ensuring quality and efficiency.',
    icon: <i className="fas fa-eye text-purple-500"></i>,
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Harness the power of data analytics to track performance and improve service delivery for your cleaning needs.',
    icon: <i className="fas fa-chart-line text-purple-500"></i>,
  },
  {
    id: 4,
    title: 'Automated Scheduling',
    description: 'Streamline your cleaning operations with automated scheduling technology that saves time and resources.',
    icon: <i className="fas fa-calendar-alt text-purple-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CleanSSR Technology Services
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our innovative cleaning technology solutions designed for efficiency and effectiveness.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <motion.div
              key={feature.id}
              className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;