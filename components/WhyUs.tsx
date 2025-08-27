'use client'
import { useEffect } from 'react';
import { BackgroundGradient } from './ui/background-gradient';

export default function WhyUs() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.classList.add('scale-105', 'transition-transform', 'duration-300');
      });
      card.addEventListener('mouseout', () => {
        card.classList.remove('scale-105', 'transition-transform', 'duration-300');
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 animate-bounce">
        Why Choose <span className='border-b-4 border-yellow-400'>SoftSpark</span> for Web Development?
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BackgroundGradient>
            <div className="card p-6 bg-white rounded-3xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Quality Design</h2>
              <p className="text-gray-600">Clean, modern, and user-friendly designs tailored to your brand identity with a splash of fun!</p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="card p-6 bg-white rounded-3xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Fast Delivery</h2>
              <p className="text-gray-600">Get your project live in days, not weeks, with our streamlined development process—zip zap zoom!</p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="card p-6 bg-white rounded-3xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Affordable Pricing</h2>
              <p className="text-gray-600">Competitive packages designed for businesses of all sizes and budgets—fun for your wallet!</p>
            </div>
          </BackgroundGradient>
        </div>
    </div>
  );
}