import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { useFrame } from 'react-three-fiber';
import { ParticleProps } from './types';
import { motion } from 'framer-motion';

const Particle = ({ position }: ParticleProps) => {
  useFrame(() => {
    // Animation logic for particle movement can be added here.
  });

  return (
    <mesh position={position}>
      <sphereBufferGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 100 }, () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {particles.map((position, index) => (
          <Particle key={index} position={position} />
        ))}
      </Canvas>
    </div>
  );
};

const CleanSSR: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center justify-center">
      <ParticleBackground />
      <motion.header
        className="text-center p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-purple-600">Welcome to CleanSSR</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your trusted technology partner for a cleaner tomorrow. Specializing in innovative cleaning solutions tailored for the tech industry.
        </p>
      </motion.header>
      <motion.section
        className="p-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-purple-600">Our Services</h2>
        <ul className="mt-4 list-disc list-inside">
          <li className="text-gray-700 hover:text-purple-600 transition duration-200">Smart Cleaning Technologies</li>
          <li className="text-gray-700 hover:text-purple-600 transition duration-200">Eco-Friendly Solutions</li>
          <li className="text-gray-700 hover:text-purple-600 transition duration-200">Customized Cleaning Plans</li>
        </ul>
      </motion.section>
      <motion.section
        className="p-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-purple-600">Customer Reviews</h2>
        <div className="mt-4">
          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700">
            "CleanSSR transformed our workspace with their innovative cleaning solutions!" - TechCorp
          </blockquote>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 mt-4">
            "Their team is professional and efficient, highly recommend!" - Innovatech
          </blockquote>
        </div>
      </motion.section>
    </div>
  );
};

export default CleanSSR;