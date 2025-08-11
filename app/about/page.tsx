import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Alice Johnson',
        role: 'CEO & Founder',
        image: '/images/alice.jpg',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        image: '/images/bob.jpg',
    },
    {
        name: 'Charlie Brown',
        role: 'Lead Developer',
        image: '/images/charlie.jpg',
    },
];

const CleanSSR: React.FC = () => {
    return (
        <div className="bg-white text-purple-800 min-h-screen">
            <motion.header
                className="py-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold">About CleanSSR</h1>
                <p className="mt-4 text-lg">
                    At CleanSSR, we are redefining how technology enhances the cleaning industry.
                </p>
            </motion.header>

            <motion.section
                className="py-10 px-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-3xl font-semibold">Company History</h2>
                <p className="mt-4">
                    Founded in 2020, CleanSSR emerged as a solution to the inefficiencies in cleaning service management.
                    Our innovative approach combines advanced technology with user-centric design, ensuring seamless service delivery.
                </p>
            </motion.section>

            <motion.section
                className="py-10 px-5 bg-purple-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-3xl font-semibold">Our Values</h2>
                <ul className="list-disc list-inside mt-4">
                    <li>Innovation: Embracing cutting-edge technology to enhance our services.</li>
                    <li>Integrity: Upholding transparency and trust in all our operations.</li>
                    <li>Customer-Centric: Focusing on the needs of our clients to deliver superior results.</li>
                </ul>
            </motion.section>

            <motion.section
                className="py-10 px-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-3xl font-semibold">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300">
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                            <h3 className="text-xl font-medium">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default CleanSSR;