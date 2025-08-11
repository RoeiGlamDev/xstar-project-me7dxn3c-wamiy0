import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    expertise: 'Technology Strategy',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    expertise: 'Software Development',
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Engineer',
    expertise: 'System Architecture',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-purple-600 text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About CleanSSR
        </motion.h2>
        <motion.div
          className="text-gray-700 text-lg text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          CleanSSR is at the forefront of technological innovation in the cleaning industry. Our journey began with a vision to revolutionize how cleaning services are delivered, harnessing the power of technology to deliver efficiency, reliability, and excellence.
        </motion.p>
        <motion.div
          className="text-purple-600 text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-gray-700 text-lg text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At CleanSSR, our mission is to leverage cutting-edge technology to provide unparalleled cleaning services. We strive to create a cleaner, healthier environment while ensuring that our clients receive the highest level of service possible.
        </motion.p>
        <motion.div
          className="text-purple-600 text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="flex flex-col md:flex-row justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 border border-purple-300 rounded-lg p-6 m-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <h4 className="text-purple-600 text-xl font-bold">{member.name}</h4>
              <p className="text-gray-700">{member.role}</p>
              <p className="text-gray-500">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-gray-700 text-lg text-center mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          At CleanSSR, we value integrity, innovation, and excellence. Our commitment to these values has led us to achieve numerous accolades in the technology sector, and we are dedicated to continuing our journey of growth and improvement.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;