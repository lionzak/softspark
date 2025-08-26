'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => setIsOpen(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-white p-4 shadow-md relative z-50">
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
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`transition ${isActive ? 'text-secondary font-semibold' : 'hover:text-secondary'
                    }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-secondary"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div

          className="md:hidden mt-4 flex flex-col space-y-3 bg-primary/95 rounded-lg p-4"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`px-3 py-2 rounded-lg transition ${isActive ? 'bg-secondary/80' : 'hover:bg-secondary/50'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
