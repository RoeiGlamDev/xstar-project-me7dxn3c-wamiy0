import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Please select a contact reason';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <motion.div 
        className="text-3xl font-bold text-purple-600 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h2>
      <p className="text-gray-600 mb-4">
        Reach out to us for any technology inquiries or support related to CleanSSR services.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={mt-1 block w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={mt-1 block w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="reason" className="block text-gray-700">Reason for Contact</label>
          <select 
            name="reason" 
            id="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            className={mt-1 block w-full border rounded-md ${errors.reason ? 'border-red-500' : 'border-gray-300'} p-2}
          >
            <option value="">Select a reason</option>
            <option value="inquiry">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea 
            name="message" 
            id="message" 
            value={formData.message} 
            onChange={handleChange} 
            className={mt-1 block w-full border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'} p-2}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-600">Business Information</h3>
        <p className="text-gray-600">CleanSSR</p>
        <p className="text-gray-600">123 Technology Ave, Suite 456</p>
        <p className="text-gray-600">Tech City, TC 12345</p>
        <p className="text-gray-600">Business Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;