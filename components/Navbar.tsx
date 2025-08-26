'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close menu when a link is clicked
  };

  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/logo_no_bg.png"
            alt="SoftSpark Logo"
            width={130}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12' // X icon
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/services" className="hover:text-secondary transition">Services</Link>
          <Link href="/portfolio" className="hover:text-secondary transition">Portfolio</Link>
          <Link href="/about" className="hover:text-secondary transition">About Us</Link>
          <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 bg-primary/95 rounded-lg p-4">
          <Link href="/" onClick={handleLinkClick} className="hover:bg-secondary px-3 py-2 rounded-lg transition">Home</Link>
          <Link href="/services" onClick={handleLinkClick} className="hover:bg-secondary px-3 py-2 rounded-lg transition">Services</Link>
          <Link href="/portfolio" onClick={handleLinkClick} className="hover:bg-secondary px-3 py-2 rounded-lg transition">Portfolio</Link>
          <Link href="/about" onClick={handleLinkClick} className="hover:bg-secondary px-3 py-2 rounded-lg transition">About Us</Link>
          <Link href="/contact" onClick={handleLinkClick} className="hover:bg-secondary px-3 py-2 rounded-lg transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
