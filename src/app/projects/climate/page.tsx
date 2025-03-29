// src/app/projects/climate/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectSelector from '@/components/ProjectSelector'; // Import the selector

export default function ClimateProjectPage() {
  return (
    // Main container, includes selector then page content div
    <main className="flex min-h-screen flex-col items-center bg-gray-50 pt-0">
      <ProjectSelector /> {/* Selector added here */}

      {/* Page content container */}
      <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-lg mt-8 mb-16"> {/* Added top/bottom margin */}
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8 text-center">
          Flagship Initiative: Climate Action
        </h1>

        {/* Top Section: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-md aspect-video relative">
              <Image
                src="/climate.jpg"
                alt="Conceptual image representing renewable energy coordination or climate action data analysis"
                fill
                className="object-cover"
                priority
                // sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <div className="text-lg text-[#4A4A4A] font-['Open_Sans'] leading-relaxed space-y-4">
              <p>
                The climate crisis represents one of humanity&apos;s most complex and urgent challenges, requiring unprecedented levels of global coordination. While many solutions exist, bottlenecks in deployment, resource allocation, and information sharing often hinder progress. The Global Collective Intelligence Network (GCIN) addresses this head-on through its flagship Climate Action initiative.
              </p>
              <p>
                We are building a unique platform that uses advanced AI and collective intelligence principles to enhance coordination across the climate action ecosystem. Starting with a focus on accelerating the deployment of distributed renewable energy solutions, we aim to demonstrate how better data integration, stakeholder alignment, and resource optimization can make a tangible difference.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Our Approach
        </h2>
        <ul className="list-disc list-inside space-y-3 font-['Open_Sans'] text-[#4A4A4A] mb-8">
          <li><span className="font-semibold">Mapping & Optimization:</span> Using data analysis to identify high-impact renewable energy opportunities.</li>
          <li><span className="font-semibold">Stakeholder Coordination:</span> Creating platforms for seamless collaboration and information sharing.</li>
          <li><span className="font-semibold">Resource Matching:</span> Connecting funding, technology, and local needs efficiently.</li>
          <li><span className="font-semibold">Transparent M&V:</span> Ensuring accountability and tracking real-world impact using reliable data.</li>
          <li><span className="font-semibold">Cross-Domain Integration:</span> Linking climate solutions with sustainable food systems, education, and economic equity.</li>
        </ul>

        {/* Status/Progress */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Current Status
        </h2>
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
          The Climate Action initiative is actively establishing partnerships and deploying initial coordination tools within selected pilot regions as part of GCIN&apos;s Phase 1 implementation. We are focused on gathering data, refining our models, and demonstrating measurable impact through early projects.
        </p>

        {/* Call to Participate */}
        <div className="text-center mt-10 p-6 bg-gradient-to-r from-[#1A5F7A] to-[#2E8B57] rounded-lg">
          <h2 className="text-2xl font-semibold font-['Montserrat'] text-white mb-4">
            Get Involved with Climate Action
          </h2>
          <p className="text-lg text-gray-100 font-['Open_Sans'] mb-6">
            Join the collective effort. Contribute your expertise, data, or resources to help accelerate the transition to a sustainable energy future.
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