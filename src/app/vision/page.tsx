// src/app/vision/page.tsx
// import Image from 'next/image'; // Import if you use <Image> for placeholders
import Link from 'next/link';   // Import if you add links/buttons

export default function VisionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-8 text-center">
          Our Vision
        </h1>

        {/* --- Visualization Placeholder 1 --- */}
        <div className="my-8 p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          <p className="font-semibold mb-2">[Image/Visualization Prompt 1]</p>
          <p className="text-sm">
            Create a compelling, perhaps abstract, visualization depicting the societal shift towards a post-labor economy. Could show stylized representations of automation/AI integrating with human activity, changing economic flows, and hinting at both the challenges (disruption, inequality) and opportunities (freedom, creativity). Use GCIN palette, especially Primary Blue (`#1A5F7A`) and Accent Orange (`#FF7F50`) highlights. Aspect Ratio: 16:9 or similar wide format.
          </p>
          {/* Example using <Image> if you have a static placeholder */}
          {/* <div className="aspect-video bg-gray-200 rounded mt-4"></div> */}
        </div>
        {/* --- End Placeholder 1 --- */}

        {/* The Challenge Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4">
            The Great Transformation: Navigating a Post-Labor Future
          </h2>
          <div className="text-lg text-[#4A4A4A] font-['Open_Sans'] leading-relaxed space-y-4">
            <p>
              We stand at the cusp of a profound economic shift, driven by rapid advancements in artificial intelligence and automation. Unlike past technological waves, today&apos;s AI can increasingly perform complex cognitive tasks, fundamentally altering the nature of work and challenging the traditional link between labor and economic value. This isn&apos;t just about automating routine tasks; it&apos;s about transforming entire industries and potentially displacing roles across all sectors, including knowledge work.
            </p>
            <p>
              This transition presents both immense opportunities and significant challenges. While automation promises unprecedented productivity and potential abundance, it also risks exacerbating inequality, concentrating power, and disrupting the social fabric if not managed wisely. Traditional economic models and governance structures struggle to cope with the scale and complexity of these changes and interconnected global issues like climate change. Relying solely on existing solutions like basic income or job retraining, while potentially helpful, may be insufficient to navigate this complex transition equitably.
            </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4">
            Our Approach: Collective Intelligence for a New Era
          </h2>
          <div className="text-lg text-[#4A4A4A] font-['Open_Sans'] leading-relaxed space-y-4">
            <p>
              The Global Collective Intelligence Network (GCIN) offers a bold, necessary alternative. We believe the key to navigating the post-labor transition lies in harnessing the power of collective intelligence—combining the unique strengths of human wisdom, values, and creativity with the analytical and coordinating power of advanced AI.
            </p>
            <p>
              GCIN is building the infrastructure—a new kind of socio-technical operating system—designed for this future. Our approach is rooted in decentralization, transparency, and participation. We utilize an ecosystem of specialized AI agents not to replace human judgment, but to augment our collective ability to understand complex systems, coordinate large-scale action (like our climate initiative), verify information, and allocate resources effectively and equitably. We aim to move beyond outdated economic assumptions and build new mechanisms for value creation and distribution fit for the 21st century and beyond.
            </p>
          </div>
        </section>

        {/* Core Principles Section - UPDATED CARD STYLING */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {/* Principle 1: Decentralization */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 1]</div>
              <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Decentralization</h3>
              <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Distributing power and decision-making; avoiding single points of failure or control.</p>
            </div>
            {/* Principle 2: Transparency */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 2]</div>
              <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Transparency</h3>
              <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Operating openly by default; ensuring processes and data are visible and auditable.</p>
            </div>
            {/* Principle 3: Accountability */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 3]</div>
              <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Accountability</h3>
              <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Ensuring clear responsibility and consequences for actions within the network.</p>
            </div>
            {/* Principle 4: Disintermediation */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
               <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 4]</div>
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Disintermediation</h3>
               <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Minimizing unnecessary intermediaries between value creation and those who benefit.</p>
            </div>
             {/* Principle 5: Equity */}
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
               <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 5]</div>
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Equity</h3>
               <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Striving for fair distribution of resources, opportunities, and outcomes for all participants.</p>
            </div>
             {/* Principle 6: Human-Centered */}
             <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-gray-50"> {/* Applied Style */}
               <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 text-xs italic">[Icon 6]</div>
               <h3 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Human-Centered</h3>
               <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">Prioritizing human flourishing, values, well-being, and dignity in all system design.</p>
             </div>
             {/* Consider adding Agility, Sustainability if defined as core principles */}
          </div>
            {/* --- Icon Prompt --- */}
            <p className="text-xs text-center text-gray-400 mt-4 italic">
                [Icon Prompts 1-6]: Create simple, clean, vector-style icons for each principle (Decentralization, Transparency, Accountability, Disintermediation, Equity, Human-Centered). Use Primary Blue (`#1A5F7A`) or Complementary Green (`#2E8B57`) as the main color. Icons should be abstract but conceptually related to the principle.
            </p>
            {/* --- End Icon Prompt --- */}
        </section>

        {/* Call to Action Section (Optional - based on mockup) */}
         <section className="text-center mt-12 border-t pt-8">
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-6">
                Learn more about the research and thinking behind GCIN.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 {/* Placeholder links - Update if/when these resources are public */}
                 <Link
                   href="/resources" // Link to general resources or a specific paper if available
                   className="px-8 py-3 bg-[#1A5F7A] text-white font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans'] shadow-md" // Using Primary Blue Button Style
                 >
                   Explore Research
                 </Link>
                 <Link
                     href="#" // Link to a downloadable whitepaper if available
                     className="px-8 py-3 bg-transparent border-2 border-[#2E8B57] text-[#2E8B57] font-semibold rounded-md hover:bg-[#2E8B57] hover:text-white transition-colors font-['Open_Sans']" // Complementary Green outline
                 >
                   Download Whitepaper (Coming Soon)
                 </Link>
            </div>
         </section>

      </div>
    </main>
  );
}