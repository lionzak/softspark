'use client';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function DiscountBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-yellow-100 text-blue-900 text-center px-4 py-2 flex items-center justify-between shadow-sm">
      <p className="text-sm md:text-base font-medium">
        🎉 Get <span className="font-bold text-red-600">15% OFF</span> on your first project!
        <span className="ml-2">Valid until <b>Sep 30, 2025</b> 🚀</span>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-blue-900 hover:text-red-600 transition"
        aria-label="Close banner"
      >
        <X size={20} />
      </button>
    </div>
  );
}
