import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    role: 'CTO at Tech Innovations',
    photo: '/images/alice.jpg',
    review: 'CleanSSR provided us with exceptional tech cleaning solutions that improved our workflow efficiency by 30%. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Brian Smith',
    role: 'Product Manager at Future Tech',
    photo: '/images/brian.jpg',
    review: 'The CleanSSR team transformed our workspace with their state-of-the-art cleaning technology. Our team feels more productive than ever!',
    rating: 4,
  },
  {
    name: 'Catherine Lee',
    role: 'Operations Lead at Smart Solutions',
    photo: '/images/catherine.jpg',
    review: 'With CleanSSR, we experienced a noticeable reduction in downtime due to their efficient and thorough cleaning services. Truly a game changer!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <motion.div 
        className="text-3xl font-semibold text-purple-600 text-center" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="max-w-6xl mx-auto mt-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-purple-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto"/>
            <h3 className="mt-4 text-lg font-semibold text-purple-600">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
            <p className="mt-2 text-gray-700">{testimonial.review}</p>
            <div className="flex mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;