import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
  description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {/ Add 3D Model or Interactive Elements Here /}
        <OrbitControls />
      </Canvas>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <motion.div
          className="text-6xl font-bold text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          CleanSSR
        </motion.h1>
        <motion.div
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default Scene;