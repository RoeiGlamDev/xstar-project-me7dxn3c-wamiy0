import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    count: number;
    description: string;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">CleanSSR Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="text-5xl font-bold text-purple-600" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                {achievement.count}
              </motion.h3>
              <h4 className="text-xl font-semibold text-gray-700 mt-2">{achievement.title}</h4>
              <p className="text-gray-500 mt-4">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;