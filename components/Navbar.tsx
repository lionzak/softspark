'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo_no_bg.png"
            alt="SoftSpark Logo"
            width={130}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <Link href="/" className="block md:inline-block px-4 py-2 hover:bg-secondary text-white rounded-lg">Home</Link>
          <Link href="/services" className="block md:inline-block px-4 py-2 hover:bg-secondary text-white rounded-lg">Services</Link>
          <Link href="/portfolio" className="block md:inline-block px-4 py-2 hover:bg-secondary text-white rounded-lg">Portfolio</Link>
          <Link href="/about" className="block md:inline-block px-4 py-2 hover:bg-secondary text-white rounded-lg">About Us</Link>
          <Link href="/contact" className="block md:inline-block px-4 py-2 hover:bg-secondary text-white rounded-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;