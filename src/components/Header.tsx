// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import the next/image component
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Vision', href: '/vision' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Team & Partners', href: '/team' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Visualization Hub', href: '/visualization-hub' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // Using primary blue for background
    <header className="bg-[#1A5F7A] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Use next/image component with SVG */}
          <Image
            src="/logo.svg" // *** UPDATED: Path to your SVG logo in the public folder ***
            alt="GCIN Logo" // **Important:** Descriptive alt text
            width={500} // **Required:** Specify a width (controls aspect ratio & prevents layout shift)
            height={500} // **Required:** Specify a height (controls aspect ratio & prevents layout shift)
                       // Choose width/height that match your SVG's intended display aspect ratio
            priority // Good for logos in the header
            className="h-11 w-auto" // Example sizing using Tailwind - adjust as needed
                                     // This controls the actual rendered size
          />
          {/* Optional: Add text next to logo if desired */}
          {/* <span className="ml-3 text-2xl font-bold font-['Montserrat']">GCIN</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-['Open_Sans'] hover:text-[#FF7F50] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>

      </div>

        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 left-0 w-full bg-[#1A5F7A] transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <nav className="flex flex-col items-center space-y-4 p-8 pt-20">
             {navItems.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="font-['Open_Sans'] text-lg hover:text-[#FF7F50] transition-colors"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
           </nav>
         </div>
    </header>
  );
}