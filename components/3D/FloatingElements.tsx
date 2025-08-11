import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('floating-elements')?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x9B59B6 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div id="floating-elements" className="absolute inset-0 z-[-1]"></div>
  );
};

const CleanSSR: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-purple-600">
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-3xl font-bold">CleanSSR</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <FloatingElements />
        <h2 className="text-2xl font-semibold mt-8">Welcome to CleanSSR</h2>
        <p className="mt-4 text-lg">Your technology partner in delivering clean, efficient, and innovative solutions for your cleaning needs.</p>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">Our Services</h3>
          <ul className="list-disc list-inside mt-4">
            <li>Advanced cleaning technologies</li>
            <li>Eco-friendly solutions</li>
            <li>Smart cleaning systems</li>
            <li>Automated maintenance services</li>
          </ul>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">What Our Clients Say</h3>
          <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic">
              "CleanSSR transformed our cleaning process with their innovative technology!"
            </blockquote>
            <p className="mt-2 text-right">- Satisfied Client</p>
          </motion.div>
        </section>
      </main>
      <footer className="bg-purple-600 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CleanSSR;