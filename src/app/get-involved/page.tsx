// src/app/get-involved/page.tsx
// import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Get Involved
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-10 leading-relaxed text-center max-w-3xl mx-auto">
          The Global Collective Intelligence Network is a collaborative effort to build essential infrastructure for a rapidly changing world. Creating a more equitable, sustainable, and flourishing future requires diverse perspectives and contributions. We welcome participation from individuals and organizations of all backgrounds and expertise levels. Here&apos;s how you can join us on this journey.
        </p>

        {/* --- Visualization/Image Placeholder --- */}
        <div className="my-10 p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          <p className="font-semibold mb-2">[Image Prompt]</p>
          <p className="text-sm">
            Create an image representing community, collaboration, and diverse contributions. Could show abstract network nodes connecting, diverse stylized hands working together, or a visual metaphor for building something complex collectively. Use the GCIN palette, focusing on inviting colors like Complementary Green (`#2E8B57`) and Accent Orange (`#FF7F50`) alongside the core Blue (`#1A5F7A`). Aspect Ratio: Wide (e.g., 16:9) banner style.
          </p>
          {/* <div className="aspect-video bg-gray-200 rounded mt-4"></div> */}
        </div>
        {/* --- End Placeholder --- */}

        {/* Ways to Contribute Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {/* Contribute Skills & Knowledge */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-blue-50 flex flex-col">
             <div className="h-12 w-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-[#1A5F7A] font-bold text-xl">?</div> {/* Placeholder Icon */}
             <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Contribute Skills & Knowledge</h2>
             <p className="font-['Open_Sans'] text-[#4A4A4A] mb-4 flex-grow"> {/* Added flex-grow */}
               Are you a developer, designer, researcher, AI specialist, domain expert, writer, or translator? We need diverse technical and non-technical skills to build and refine the GCIN platform and knowledge base.
             </p>
             {/* Improved Link Styling */}
             <div className="mt-auto space-y-1"> {/* Added mt-auto to push links down */}
                 <Link href="#" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Explore Contribution Opportunities (Soon) <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link><br/>
                 <Link href="#" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Visit our GitHub (Soon) <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link>
             </div>
          </div>

          {/* Connect & Network */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-green-50 flex flex-col">
             <div className="h-12 w-12 bg-green-100 rounded-full mb-4 flex items-center justify-center text-[#2E8B57] font-bold text-xl">?</div> {/* Placeholder Icon */}
             <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Connect & Network</h2>
             <p className="font-['Open_Sans'] text-[#4A4A4A] mb-4 flex-grow">
               Help grow the network! Introduce us to individuals, organizations, or communities who share our vision or could benefit from GCIN. Share our progress and mission within your networks.
             </p>
             <div className="mt-auto space-y-1">
                 <Link href="#" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Share Our Vision <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link><br/>
                 <Link href="/contact" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Make an Introduction <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link>
             </div>
          </div>

          {/* Fund & Support */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-orange-50 flex flex-col">
             <div className="h-12 w-12 bg-orange-100 rounded-full mb-4 flex items-center justify-center text-[#FF7F50] font-bold text-xl">?</div> {/* Placeholder Icon */}
             <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Fund & Support</h2>
             <p className="font-['Open_Sans'] text-[#4A4A4A] mb-4 flex-grow">
               Support the development and implementation of GCIN through traditional grants or innovative mechanisms. Financial contributions are vital to sustaining our work and accelerating progress.
             </p>
             <div className="mt-auto space-y-1">
                 <Link href="#" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Learn About Funding Opportunities (Soon) <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link>
             </div>
          </div>

          {/* Advocate & Discuss */}
           <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-purple-50 flex flex-col">
             <div className="h-12 w-12 bg-purple-100 rounded-full mb-4 flex items-center justify-center text-[#8A2BE2] font-bold text-xl">?</div> {/* Placeholder Icon */}
             <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Advocate & Discuss</h2>
             <p className="font-['Open_Sans'] text-[#4A4A4A] mb-4 flex-grow">
               Join the conversation! Participate in our community forums, share feedback, discuss the challenges and opportunities of a post-labor future, and help shape the evolution of GCIN.
             </p>
             <div className="mt-auto space-y-1">
                 <Link href="#" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Join the Community Forum (Soon) <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link><br/>
                 <Link href="/blog" className="inline-block text-sm font-semibold text-[#1A5F7A] hover:text-[#FF7F50] transition-colors group">
                    Read and Comment on Updates <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span>
                 </Link>
             </div>
          </div>
        </div>

         {/* --- Icon Prompts --- */}
         <p className="text-xs text-center text-gray-400 mt-10 italic">
             [Icon Prompts]: Create simple, clean, vector-style icons for: Contribute (e.g., code brackets, puzzle piece), Connect (e.g., network nodes, handshake), Fund (e.g., growing plant, coin stack), Advocate (e.g., speech bubble, community icon). Use distinct GCIN palette colors for each icon background/element.
         </p>
         {/* --- End Icon Prompts --- */}

        {/* Closing CTA - Improved Button Style */}
        <section className="mt-16 text-center border-t pt-10">
           <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4">
             Ready to Shape the Future?
           </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed max-w-3xl mx-auto">
            Every contribution, big or small, helps build the momentum needed for this critical transition. Join the Global Collective Intelligence Network today and be part of creating a more equitable, sustainable, and flourishing world for all.
          </p>
           <Link
            href="/contact" // General contact or specific signup form later
            // Changed button style to Primary Blue background
            className="inline-block px-10 py-4 bg-[#1A5F7A] text-white text-lg font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans'] shadow-md"
          >
            Start Contributing Now
          </Link>
        </section>

      </div>
    </main>
  );
}