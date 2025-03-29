// src/app/roadmap/page.tsx
// import Image from 'next/image'; // Import if using Image for placeholders
// import Link from 'next/link';   // Import if adding links

export default function RoadmapPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Our Roadmap
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed text-center max-w-3xl mx-auto">
          Building the Global Collective Intelligence Network is a complex, evolving journey. Rather than adhering to rigid timelines, we employ a flexible, milestone-based roadmap. This allows us to adapt, learn, and incorporate feedback as we progress through distinct phases, ensuring we build robust and relevant infrastructure for a post-labor future. Progress can accelerate when certain key conditions or breakthroughs are met.
        </p>

        {/* --- Visualization Placeholder 1 --- */}
        <div className="my-12 p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          <p className="font-semibold mb-2">[Interactive Roadmap Visualization Placeholder]</p>
          <p className="text-sm">
            Create an interactive timeline or flow diagram visualization. It should depict the major phases (Foundation, Pilot Implementation, Expansion, Transformation, Maturity). Allow users to perhaps click on a phase to see key milestones or deliverables associated with it. Indicate the current approximate progress. Use the GCIN palette, emphasizing clarity and exploration. Could potentially incorporate subtle animations to show progress or connections. Aspect Ratio: Wide (e.g., 16:9 or wider) to suit timeline format.
          </p>
          {/* Example using <Image> if you have a static placeholder */}
          {/* <div className="aspect-video bg-gray-200 rounded mt-4"></div> */}
        </div>
        {/* --- End Placeholder 1 --- */}

        {/* Phase Summaries */}
        <div className="space-y-10 mt-10">

          {/* Phase 0: Foundation Building */}
          <section>
            <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Phase 0: Foundation Building (Completed)
            </h2>
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-4 leading-relaxed">
              This initial phase focused on establishing the core legal, conceptual, and organizational groundwork for GCIN.
            </p>
            <ul className="list-disc list-inside space-y-2 font-['Open_Sans'] text-[#4A4A4A]">
              <li>Established the Swiss Association legal structure with initial hybrid governance plans.</li>
              <li>Finalized core system architecture concepts and initial technical specifications.</li>
              <li>Developed foundational ethical frameworks and core principles.</li>
              <li>Built the initial core team and advisory network.</li>
              <li>Secured necessary seed funding through diverse mechanisms.</li>
              <li>Launched the initial informational website and community channels.</li>
            </ul>
          </section>

          {/* Phase 1: Pilot Implementation */}
          <section>
            <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Phase 1: Pilot Implementation (Current Phase)
            </h2>
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-4 leading-relaxed">
              We are currently focused on building and testing the core platform infrastructure through parallel pilot projects in key domains, demonstrating value and refining our approach.
            </p>
            <ul className="list-disc list-inside space-y-2 font-['Open_Sans'] text-[#4A4A4A]">
              <li>Deploying the flagship Climate Action initiative (Renewable Energy Coordination).</li>
              <li>Launching complementary pilots in Food Systems Transformation and Education Resource Optimization.</li>
              <li>Developing the core AI agent ecosystem and orchestration system.</li>
              <li>Implementing the foundational knowledge graph and visualization framework.</li>
              <li>Testing initial token-based governance mechanisms and AI Auditors in advisory roles.</li>
               <li>Building user interfaces for dashboards, project management, and collaboration.</li>
            </ul>
          </section>

          {/* Phase 2: Expansion and Enhancement */}
          <section>
             <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Phase 2: Expansion & Enhancement
            </h2>
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-4 leading-relaxed">
              Based on learnings from Phase 1, this phase involves scaling the platform&apos;s capabilities, geographic reach, and domain coverage while increasing governance decentralization.
            </p>
            <ul className="list-disc list-inside space-y-2 font-['Open_Sans'] text-[#4A4A4A]">
              <li>Enhancing AI capabilities (e.g., multi-agent collaboration, cross-domain optimization).</li>
              <li>Expanding pilot projects to new regions and adding 2-3 new domains.</li>
              <li>Implementing advanced visualization tools, including immersive environments.</li>
              <li>Accelerating the transition towards DAO governance (e.g., wider quadratic voting).</li>
              <li>Deploying robust token economics (Impact NFTs, prediction markets).</li>
            </ul>
          </section>

          {/* Phase 3 & 4 Summaries (Brief) */}
          <section>
             <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Future Phases: Transformation & Maturity
            </h2>
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-4 leading-relaxed">
              Subsequent phases will focus on completing the transition to a fully decentralized DAO, achieving global scale across dozens of domains, deploying advanced autonomous coordination capabilities, establishing self-sustaining funding, and supporting the emergence of post-labor economic models and cultural evolution. The system itself will incorporate meta-learning and self-improvement capabilities.
            </p>
          </section>

         </div>
         {/* Optional: Add a section on Acceleration Triggers or link to Get Involved */}

      </div>
    </main>
  );
}