import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
    }
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Let's Work Together
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500 resize-vertical"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default ContactForm;