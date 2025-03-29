// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        {/* Logo and Acronym Link */}
        <Link href="/" className="flex items-center gap-3"> {/* Added gap-3 for spacing */}
          {/* Logo Image */}
          <Image
            src="/logo.svg"
            alt="GCIN Logo"
            width={500} // Use actual aspect ratio width
            height={500} // Use actual aspect ratio height
            priority
            className="h-10 w-auto" // Adjusted height slightly, you can fine-tune h-10 or h-11
          />
          {/* Acronym Text Added Here */}
          <span className="font-['Montserrat'] text-2xl font-bold"> {/* Use Montserrat, bold, adjust size (text-2xl/3xl) */}
            GCIN
          </span>
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