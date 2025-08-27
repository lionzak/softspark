'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What's included in the website development packages?",
    answer: "Our packages include everything you need for a professional online presence: responsive design, SEO optimization, contact forms, hosting setup, domain registration, and ongoing support. Each package is tailored to different business needs, from simple landing pages to complex web applications."
  },
  {
    id: 2,
    question: "How long does it take to complete a website?",
    answer: "Development time varies by package: Starter websites take 3-5 days, Business websites take 7-10 days, and Pro System applications take 17-20 days. We provide regular updates throughout the development process and ensure quality delivery within the specified timeframe."
  },
  {
    id: 3,
    question: "Do you provide hosting and domain services?",
    answer: "Yes! All our packages include free hosting and domain registration for the first year. We handle all the technical setup, SSL certificates, and ensure your website is secure and fast. After the first year, hosting and domain renewal fees apply at competitive rates."
  },
];

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  faqs = defaultFAQs,
  className = ""
}) => {

  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const isOpen = (id: number) => openItems.has(id);

  return (
    <section className={` ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={isOpen(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {isOpen(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <Link href="/contact">
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can&#39;t find the answer you&#39;re looking for? Our team is here to help.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Support
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;