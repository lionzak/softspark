'use client'
import React, { useState, FormEvent } from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/softspark.software@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission',
          _template: 'table', // or 'box' for different email templates
          _captcha: 'false' // set to 'true' if you want to enable captcha
        })
      });

      const data = await response.json();
      
      if (data.success === "true") {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Get in touch with us to discuss your project needs.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-lg shadow p-8">
        <div className="space-y-4 mb-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={5}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {/* Rest of your contact information remains the same */}
      <div className="text-center border-t pt-6 max-w-lg mx-auto">
        <div className="mb-4">
          <div className="flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-900 font-medium">Email us directly:</span>
          </div>
          <Link href="mailto:softspark.software@gmail.com">
            <p className="text-blue-600">softspark.software@gmail.com</p>
          </Link>
        </div>

        <p className="text-gray-600 mb-4">Or reach us via:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/+201224213669"
            className="text-green-600 hover:text-green-700 transition-colors"
            aria-label="Contact us on WhatsApp"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/share/1EBfHEmSJy/?mibextid=wwXIfr"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Follow us on Facebook"
            target="_blank"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/softspark_solutions/"
            className="text-pink-600 hover:text-pink-700 transition-colors"
            aria-label="Follow us on Instagram"
            target="_blank"
          >
            <Instagram size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;