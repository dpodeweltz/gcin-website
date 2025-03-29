// src/app/page.tsx
import Link from 'next/link';
// Removed Image import as it's no longer used directly on this page
// If you use images in BlogPostCardPlaceholder later, re-import it there.

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

      {/* Hero Section - Using RGBA Overlay */}
      <section
        className="w-full relative text-center py-24 md:py-36 px-4 text-white"
        style={{
          backgroundImage: `url('/5.png')`, // Ensure 5.png is in /public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay div - Using direct RGBA which is confirmed working */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Adjust 0.3 (30%) as needed
        ></div>

        {/* Content container - positioned above the overlay */}
        <div className="container mx-auto max-w-4xl relative z-10">
             <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-4">
               GLOBAL COLLECTIVE INTELLIGENCE NETWORK
             </h1>
             <p className="text-lg md:text-xl font-['Open_Sans'] mb-8 max-w-2xl mx-auto">
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
                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1A5F7A] transition-colors font-['Open_Sans']"
               >
                 Get Involved
               </Link>
             </div>
        </div>
      </section>
      {/* End of Hero Section */}

      {/* Current Focus Section - UPDATED CONTENT */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8">
             Current Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"> {/* Adjusted grid for potentially 3 main items */}

            {/* Card 1: Climate Action (Flagship) */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Climate Action: Renewable Energy Coordination</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4 flex-grow">Our flagship initiative, leveraging collective intelligence and AI to accelerate the deployment of distributed renewable energy solutions globally.</p>
               <Link href="/projects/climate" className="text-[#FF7F50] hover:underline font-semibold mt-auto">Learn More</Link>
            </div>

             {/* Card 2: Food Systems Transformation */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Food Systems Transformation</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4 flex-grow">Coordinating efforts to accelerate the adoption of sustainable food sources, including alternative proteins and regenerative agriculture.</p>
               <Link href="/projects/food" className="text-[#FF7F50] hover:underline font-semibold mt-auto">Learn More</Link>
            </div>

             {/* Card 3: Education Resource Optimization */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Education Resource Optimization</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4 flex-grow">Democratizing access to learning by optimizing educational pathways and resource distribution for a post-labor world.</p>
               <Link href="/projects/education" className="text-[#FF7F50] hover:underline font-semibold mt-auto">Learn More</Link>
            </div>

             {/* Card 4: Building Local Resilience (Optional 4th Card or merge concept elsewhere) */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Building Local Resilience</h3>
               <p className="text-[#4A4A4A] font-['Open_Sans'] mb-4 flex-grow">Empowering communities to adapt and thrive through decentralized coordination and shared resource management.</p>
               <Link href="/get-involved" className="text-[#FF7F50] hover:underline font-semibold mt-auto">Get Involved</Link>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Current Focus Section */}

       {/* Latest Updates Section (Remains the same structure) */}
       <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8">
             Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             {/* Placeholder Blog Post Cards - Replace with dynamic data later */}
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