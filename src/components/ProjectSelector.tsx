// src/components/ProjectSelector.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ProjectSlug = 'climate' | 'food' | 'education';

const projects = [
  { slug: 'climate' as ProjectSlug, name: 'Climate Action', href: '/projects/climate' },
  { slug: 'food' as ProjectSlug, name: 'Food Systems', href: '/projects/food' },
  { slug: 'education' as ProjectSlug, name: 'Education Resources', href: '/projects/education' },
];

// Define styles for active and inactive tabs
const activeStyle = "bg-[#FF7F50] text-white font-semibold shadow-md"; // Accent Orange background for active
const inactiveStyle = "bg-gray-200 hover:bg-gray-300 text-[#1A5F7A] hover:text-[#1A5F7A]"; // Gray background, blue text for inactive

export default function ProjectSelector() {
  const pathname = usePathname();

  let activeSlug: ProjectSlug | null = null;
  if (pathname?.startsWith('/projects/climate')) {
    activeSlug = 'climate';
  } else if (pathname?.startsWith('/projects/food')) {
    activeSlug = 'food';
  } else if (pathname?.startsWith('/projects/education')) {
    activeSlug = 'education';
  }

  return (
    // Container - Non-sticky. Added explicit mb-0 just in case.
    <div className="w-full bg-white border-b border-gray-200 mb-0">
       <div className="container mx-auto max-w-5xl px-6 md:px-10">
          <nav className="flex justify-center space-x-2 sm:space-x-4 p-3" aria-label="Project Selector">
             {projects.map((project) => {
                 const isActive = project.slug === activeSlug;
                 return (
                   <Link
                     key={project.slug}
                     href={project.href}
                     className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-['Open_Sans'] transition-colors text-center ${isActive ? activeStyle : inactiveStyle}`}
                     aria-current={isActive ? 'page' : undefined}
                   >
                     {project.name}
                   </Link>
                 );
             })}
          </nav>
       </div>
    </div>
  );
}