import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
  title: string;
  price: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Cloud-based cleaning management',
      'Automated scheduling',
      'Real-time tracking',
      'Email support'
    ]
  },
  {
    title: 'Pro Package',
    price: '$199/month',
    features: [
      'All Basic features',
      'Advanced analytics dashboard',
      'Priority customer support',
      'Custom integrations'
    ]
  },
  {
    title: 'Enterprise Package',
    price: '$299/month',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'On-site consultation',
      'Custom feature development'
    ]
  }
];

const FAQ = [
  {
    question: 'What is CleanSSR?',
    answer: 'CleanSSR is a technology-driven cleaning service that provides comprehensive management solutions for cleaning businesses.'
  },
  {
    question: 'How does the pricing work?',
    answer: 'Our pricing is based on monthly subscriptions with flexibility to upgrade or downgrade as per your business needs.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time without any penalties.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-700 p-10">
      <motion.div 
        className="text-4xl font-bold text-center mb-10" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        CleanSSR Pricing Plans
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-purple-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-xl font-bold">{item.price}</p>
            <ul className="list-disc list-inside">
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-3xl font-bold text-center my-10" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {FAQ.map((item, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;