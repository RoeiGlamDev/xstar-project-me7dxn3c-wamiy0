import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: FC<InputProps> = ({ label, type, placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-purple-600 text-sm mb-1">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={border-2 rounded-md p-2 focus:outline-none transition duration-300 ${
          error ? 'border-red-500' : 'border-purple-300'
        } focus:border-purple-600}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
      />
      {error && (
        <span id="error-message" className="text-red-500 text-xs mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;