import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    content: string;
    review: string;
}

const Card: React.FC<CardProps> = ({ title, content, review }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-purple-600 text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{content}</p>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600">
                "{review}"
            </blockquote>
        </motion.div>
    );
};

export default Card;