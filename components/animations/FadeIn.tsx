import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const CleanSSR: React.FC = () => {
  return (
    <div className="bg-white text-purple-600 min-h-screen flex flex-col">
      <header className="p-6 bg-purple-600 text-white">
        <h1 className="text-3xl font-bold">CleanSSR</h1>
        <p className="text-lg">Leading the way in technology-driven cleaning solutions</p>
      </header>
      <main className="flex-grow p-6">
        <FadeIn>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p>
              At CleanSSR, we leverage cutting-edge technology to provide exceptional cleaning services tailored to your needs.
            </p>
          </section>
        </FadeIn>
        <FadeIn>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Customer Reviews</h2>
            <div className="border-l-4 border-purple-600 pl-4">
              <p className="italic">"CleanSSR transformed our office space with their innovative cleaning solutions!" - TechCorp</p>
              <p className="italic">"We love the efficiency and professionalism of CleanSSR." - InnovateX</p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section>
            <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
            <p>
              Our team is dedicated to using the latest technology to enhance cleanliness and hygiene. We offer:
              <ul className="list-disc pl-5">
                <li>Smart cleaning schedules</li>
                <li>Automated quality checks</li>
                <li>Eco-friendly products</li>
              </ul>
            </p>
          </section>
        </FadeIn>
      </main>
      <footer className="p-6 bg-purple-600 text-white text-center">
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CleanSSR;