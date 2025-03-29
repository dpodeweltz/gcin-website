// src/app/projects/food/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectSelector from '@/components/ProjectSelector'; // Import the selector

export default function FoodProjectPage() {
  return (
    // Main container, includes selector then page content div
    <main className="flex min-h-screen flex-col items-center bg-gray-50 pt-0">
       <ProjectSelector /> {/* Selector added here */}

       {/* Page content container */}
       <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-lg mt-8 mb-16"> {/* Added top/bottom margin */}
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8 text-center">
          Food Systems Transformation Initiative
        </h1>

        {/* Top Section: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex-shrink-0">
             <div className="rounded-lg overflow-hidden shadow-md aspect-video relative">
                <Image
                  src="/food.jpg"
                  alt="Image representing sustainable food systems, e.g., vertical farming or plant-based products"
                  fill
                  className="object-cover"
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
             </div>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <div className="text-lg text-[#4A4A4A] font-['Open_Sans'] leading-relaxed space-y-4">
              <p>
                Our global food system sits at the nexus of climate change, human health, and economic equity. Current systems face challenges in sustainability, resilience, and fair distribution. This GCIN initiative aims to catalyze the shift towards more sustainable practices by focusing on key leverage points within the system.
              </p>
              <p>
                We are developing tools and coordination mechanisms to support the adoption of promising innovations like alternative proteins (plant-based and cultivated) and regenerative agriculture. By enhancing supply chain transparency, helping innovators navigate regulations, and promoting consumer awareness, we seek to create a food system that is better for both people and the planet.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Our Approach
        </h2>
        <ul className="list-disc list-inside space-y-3 font-['Open_Sans'] text-[#4A4A4A] mb-8">
          <li><span className="font-semibold">Supply Chain Coordination:</span> Improving efficiency and transparency from farm to table.</li>
          <li><span className="font-semibold">Alternative Protein Acceleration:</span> Supporting innovation and market access for sustainable proteins.</li>
          <li><span className="font-semibold">Regenerative Agriculture:</span> Promoting practices that enhance soil health and biodiversity.</li>
          <li><span className="font-semibold">Regulatory Navigation:</span> Assisting innovators in the complex food regulation landscape.</li>
          <li><span className="font-semibold">Consumer Engagement:</span> Building demand for sustainable and healthy food options.</li>
        </ul>

        {/* Status/Progress */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Current Status
        </h2>
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
          As a key complementary project in GCIN&apos;s Phase 1, the Food Systems Transformation initiative is establishing initial partnerships within the alternative protein and regenerative agriculture sectors, developing initial supply chain coordination prototypes, and establishing baseline metrics in pilot regions.
        </p>

        {/* Call to Participate */}
        <div className="text-center mt-10 p-6 bg-gradient-to-r from-[#1A5F7A] to-[#2E8B57] rounded-lg">
           <h2 className="text-2xl font-semibold font-['Montserrat'] text-white mb-4">
            Shape the Future of Food
          </h2>
          <p className="text-lg text-gray-100 font-['Open_Sans'] mb-6">
            Collaborate with us to build more sustainable, equitable, and resilient food systems for everyone.
          </p>
          <Link
            href="/get-involved"
            className="inline-block px-8 py-3 bg-[#FF7F50] text-white font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans']"
          >
            Learn How to Participate
          </Link>
        </div>
       </div>
    </main>
  );
}