import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
  return (
    <footer className="bg-white text-purple-700 py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            {links.map(link => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href={link.url} className="text-purple-600 hover:text-purple-800">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="text-center mb-4">
          <p className="text-sm">Innovating cleaning solutions with technology.</p>
          <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {socialMedia.map(social => (
            <motion.div
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-purple-600 hover:text-purple-800"
            >
              {social.platform}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;