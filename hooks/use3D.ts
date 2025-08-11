import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to handle 3D interactions for CleanSSR's interactive elements.
 * This hook sets up a basic Three.js scene with a minimal design, 
 * utilizing the CleanSSR brand colors: purple and white.
 * 
 * @returns {object} - Contains the methods to start and stop the 3D interaction.
 */
export const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scene = useRef<THREE.Scene | null>(null);
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Initialize the 3D scene
        if (canvasRef.current) {
            scene.current = new THREE.Scene();
            camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.current.setSize(window.innerWidth, window.innerHeight);

            // Set background color to white
            scene.current.background = new THREE.Color(0xffffff);

            // Create a simple geometry and material
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple color
            const cube = new THREE.Mesh(geometry, material);
            scene.current.add(cube);

            camera.current.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.current?.render(scene.current!, camera.current!);
            };

            animate();
        }

        // Clean up on component unmount
        return () => {
            if (renderer.current) {
                renderer.current.dispose();
            }
        };
    }, []);

    return { canvasRef };
};