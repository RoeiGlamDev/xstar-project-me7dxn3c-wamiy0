import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <h2 className="text-purple-600 text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;