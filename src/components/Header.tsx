// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

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

  // Style definitions for clarity
  const baseLinkStyle = "font-['Open_Sans'] transition-colors";
  const inactiveLinkStyle = "hover:text-[#FF7F50]"; // Standard hover effect
  const activeLinkStyle = "text-[#FF7F50] font-semibold"; // Active state: Orange text, bold

  return (
    <header className="bg-[#1A5F7A] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Acronym Link */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="GCIN Logo"
            width={500} // Use actual aspect ratio width
            height={500} // Use actual aspect ratio height
            priority
            className="h-10 w-auto"
          />
          <span className="font-['Montserrat'] text-2xl font-bold">
            GCIN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            // Determine if this link is active
            // Use exact match for home, startsWith for others to handle potential sub-routes
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                // Combine base style with active or inactive style
                className={`${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
                // Add aria-current for accessibility
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* ... hamburger icon spans ... */}
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
             {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname?.startsWith(item.href);

               return (
                 <Link
                   key={item.name}
                   href={item.href}
                   // Apply active style here too
                   className={`font-['Open_Sans'] text-lg transition-colors ${isActive ? activeLinkStyle : 'hover:text-[#FF7F50]'}`}
                   onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                   aria-current={isActive ? 'page' : undefined}
                 >
                   {item.name}
                 </Link>
               );
              })}
           </nav>
         </div>
    </header>
  );
}
