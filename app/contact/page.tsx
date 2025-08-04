import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 bg-backgroundLight">
      <h1 className="text-4xl font-bold text-center text-primary">Contact Us</h1>
      <p className="text-lg text-textMuted text-center mt-4">
        Get in touch with us to discuss your project needs.
      </p>
      <div className="mt-12 max-w-lg mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textPrimary">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-border rounded focus:ring-secondary focus:border-secondary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-textPrimary">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-border rounded focus:ring-secondary focus:border-secondary"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-textPrimary">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-border rounded focus:ring-secondary focus:border-secondary"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-textMuted">Or reach us via:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://wa.me/<your-phone-number>"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size='2x' />
            </a>
            <a
              href="https://facebook.com/<your-page>"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://instagram.com/<your-profile>"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}