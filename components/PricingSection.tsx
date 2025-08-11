import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Basic Package',
        price: '$99/month',
        features: [
            'Basic Tech Support',
            'Monthly System Check',
            'Email Support',
            'Access to Knowledge Base',
        ],
    },
    {
        title: 'Standard Package',
        price: '$199/month',
        features: [
            'Priority Tech Support',
            'Weekly System Check',
            'Phone & Email Support',
            'Advanced Reporting Tools',
        ],
    },
    {
        title: 'Premium Package',
        price: '$299/month',
        features: [
            '24/7 Tech Support',
            'Daily System Check',
            'Dedicated Account Manager',
            'Custom Solutions & Integrations',
        ],
    },
];

const PricingSection: React.FC = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-purple-600 mb-6">CleanSSR Pricing Plans</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Choose the right plan for your technology needs.
                </p>
                <div className="flex justify-center space-x-4">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className="bg-purple-50 border border-purple-200 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold text-purple-600 mb-4">{tier.title}</h3>
                            <p className="text-lg font-bold text-purple-800 mb-4">{tier.price}</p>
                            <ul className="list-disc list-inside mb-6">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;