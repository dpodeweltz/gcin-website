// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Make sure Image is imported

// *** REMOVED the InteractiveVisualizationPlaceholder component function ***

// Placeholder component for blog post cards (Remains the same)
const BlogPostCardPlaceholder = ({ title }: { title: string }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      {/* Placeholder for image */}
      <div className="aspect-video bg-gray-100 mb-3 rounded"></div>
      <h3 className="font-semibold font-['Montserrat'] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 font-['Open_Sans'] mb-3">Excerpt placeholder...</p>
      <Link href="#" className="text-[#1A5F7A] hover:text-[#FF7F50] text-sm font-semibold">Read More</Link>
    </div>
  );
}

export default function HomePage() {
  return (
    // Using the light background color from the design system
    <main className="flex min-h-screen flex-col items-center bg-[#F5F7FA]">

      {/* Hero Section */}
      <section className="w-full text-center py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F5F7FA]">
        <div className="container mx-auto max-w-4xl">

          {/* === Visualization Image Replaces Placeholder === */}
          <div className="my-8 rounded-lg overflow-hidden shadow-lg"> {/* Optional: Add container styling */}
            <Image
              src="/5.png" // Path relative to the public folder
              alt="Abstract visualization of the GCIN interconnected network with glowing nodes and data streams" // ** Important: Descriptive Alt Text **
              width={1920} // ** Required: Replace with ACTUAL width of 5.png **
              height={1080} // ** Required: Replace with ACTUAL height of 5.png **
                           // (Using 1920x1080 as a 16:9 placeholder)
              priority // Good for hero images (LCP)
              className="w-full h-auto" // Make image responsive within its container
            />
          </div>
          {/* =============================================== */}

          {/* Headline & Sub-headline */}
          <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-4">
            GLOBAL COLLECTIVE INTELLIGENCE NETWORK
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] font-['Open_Sans'] mb-8 max-w-2xl mx-auto">
            Building the infrastructure for a post-labor economy through collective intelligence and decentralized governance.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/visualization-hub"
              className="px-8 py-3 bg-[#FF7F50] text-white font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans']"
            >
              Explore the Network
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-transparent border-2 border-[#1A5F7A] text-[#1A5F7A] font-semibold rounded-md hover:bg-[#1A5F7A] hover:text-white transition-colors font-['Open_Sans']"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Current Focus Section (Remains the same) */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8">
             Current Focus: Climate Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1: Solar Deployment */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Solar Deployment Coordination</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4">Placeholder text describing the solar deployment initiative.</p>
               <Link href="#" className="text-[#FF7F50] hover:underline font-semibold">Learn More</Link>
            </div>
             {/* Card 2: Food Systems */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Food Systems Transformation</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4">Placeholder text describing the food systems transformation initiative.</p>
               <Link href="#" className="text-[#FF7F50] hover:underline font-semibold">Learn More</Link>
            </div>
             {/* Card 3: Community Resilience */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Community Resilience</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4">Placeholder text about community resilience efforts.</p>
               <Link href="#" className="text-[#FF7F50] hover:underline font-semibold">Learn More</Link>
            </div>
             {/* Card 4: Join the Movement */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Join the Movement</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4">Placeholder text inviting users to join.</p>
               <Link href="/get-involved" className="text-[#FF7F50] hover:underline font-semibold">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

       {/* Latest Updates Section (Remains the same) */}
       <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8">
             Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <BlogPostCardPlaceholder title="Update Title One" />
            <BlogPostCardPlaceholder title="Another Interesting Update" />
            <BlogPostCardPlaceholder title="Progress on Milestone X" />
          </div>
          <div className="mt-12">
             <Link
               href="/blog"
               className="px-6 py-2 bg-transparent border-2 border-[#1A5F7A] text-[#1A5F7A] font-semibold rounded-md hover:bg-[#1A5F7A] hover:text-white transition-colors font-['Open_Sans']"
             >
               View All Updates
             </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section (Remains the same) */}
      <section className="w-full py-16 px-4">
         <div className="container mx-auto max-w-2xl text-center">
           <h2 className="text-3xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-4">
             Join Our Newsletter
           </h2>
           <p className="text-[#4A4A4A] font-['Open_Sans'] mb-6">Stay updated on GCIN progress and opportunities.</p>
           <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
               <label htmlFor="home-newsletter-email" className="sr-only">Email Address</label>
                <input
                    id="home-newsletter-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="p-3 flex-grow rounded border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#FF7F50] focus:outline-none"
                 />
                 <button
                    type="submit"
                    className="px-6 py-3 bg-[#2E8B57] text-white font-semibold rounded hover:bg-opacity-80 transition-colors font-['Open_Sans']"
                 >
                     Subscribe
                 </button>
           </form>
         </div>
      </section>

    </main>
  );
}