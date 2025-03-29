// src/app/projects/education/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectSelector from '@/components/ProjectSelector'; // Import the selector

export default function EducationProjectPage() {
  return (
    // Main container, includes selector then page content div
    <main className="flex min-h-screen flex-col items-center bg-gray-50 pt-0">
       <ProjectSelector /> {/* Selector added here */}

       {/* Page content container */}
       <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-lg mt-8 mb-16"> {/* Added top/bottom margin */}
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8 text-center">
          Education Resource Optimization Initiative
        </h1>

        {/* Top Section: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          {/* Image Column */}
           <div className="w-full md:w-1/2 flex-shrink-0">
             <div className="rounded-lg overflow-hidden shadow-md aspect-video relative">
                <Image
                  src="/education.jpg"
                  alt="Image representing learning pathways, knowledge sharing, or diverse educational settings"
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
                The transition to a post-labor economy necessitates a fundamental shift in how we approach learning and skill development. Continuous adaptation and lifelong learning become paramount. This GCIN initiative aims to create an open, accessible, and intelligent ecosystem for education, empowering individuals to navigate their learning journeys effectively.
              </p>
              <p>
                We are building tools that leverage AI to provide personalized learning pathway recommendations, connecting learners with high-quality, curated resources from diverse sources. By optimizing the distribution of educational materials and fostering connections between learning, contribution, and opportunity, we aim to equip everyone with the knowledge and skills needed to thrive in a rapidly evolving world.
              </p>
            </div>
          </div>
        </div>

        
        {/* Our Approach Section */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Our Approach
        </h2>
        <ul className="list-disc list-inside space-y-3 font-['Open_Sans'] text-[#4A4A4A] mb-8">
          <li><span className="font-semibold">Personalized Pathways:</span> AI-driven guidance for individual learning journeys.</li>
          <li><span className="font-semibold">Resource Curation:</span> Aggregating and organizing quality educational content.</li>
          <li><span className="font-semibold">Opportunity Matching:</span> Connecting skills developed to real-world application.</li>
          <li><span className="font-semibold">Educator Empowerment:</span> Providing tools to support teaching and mentorship.</li>
          <li><span className="font-semibold">Novel Credentialing:</span> Exploring new ways to recognize diverse skills and learning.</li>
        </ul>

        {/* Status/Progress */}
        <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mt-10 mb-4">
          Current Status
        </h2>
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
          This initiative, part of GCIN&apos;s Phase 1, is currently focused on building the core resource library architecture and developing the initial algorithms for learning pathway recommendations. Partnerships are being formed to source content and test the platform within specific learning communities.
        </p>

        {/* Call to Participate */}
        <div className="text-center mt-10 p-6 bg-gradient-to-r from-[#1A5F7A] to-[#2E8B57] rounded-lg">
           <h2 className="text-2xl font-semibold font-['Montserrat'] text-white mb-4">
            Contribute to Lifelong Learning
          </h2>
          <p className="text-lg text-gray-100 font-['Open_Sans'] mb-6">
            Help build the future of education by contributing resources, expertise, or participating as a learner or educator.
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