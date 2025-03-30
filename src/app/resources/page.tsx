// src/app/resources/page.tsx
// import Image from 'next/image'; // Import if using Image for placeholders/icons
import Link from 'next/link';   // Import for links

// Placeholder data - replace with actual fetched data later
const featuredResearch = [
  { title: "Towards a Global Collective Intelligence Network for Post-Labor Economics", href: "#", description: "Our foundational research paper outlining the theoretical basis and architectural principles of GCIN." },
  // Add more public papers/summaries here
];

const recommendedReading = [
    { title: "The Second Machine Age", author: "Erik Brynjolfsson & Andrew McAfee", category: "Post-Labor Economics" },
    { title: "The Alignment Problem", author: "Brian Christian", category: "AI Governance" },
    { title: "Governing the Commons", author: "Elinor Ostrom", category: "Decentralized Governance" },
    { title: "Thinking in Systems", author: "Donella Meadows", category: "Complex Systems" },
    { title: "Envisioning Information", author: "Edward Tufte", category: "Visualization" },
    { title: "Drawdown", author: "Paul Hawken (Editor)", category: "Climate Action" },
    // Add a few more key Priority 1 books if desired
];

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Resources & Knowledge Hub
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-12 leading-relaxed text-center max-w-3xl mx-auto">
          Explore research, articles, and educational materials related to the Global Collective Intelligence Network and the broader challenges and opportunities we address. We believe in transparency and sharing knowledge as we build towards a post-labor future.
        </p>

        {/* --- Visualization/Image Placeholder --- */}
        <div className="my-10 p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          <p className="font-semibold mb-2">[Image Prompt]</p>
          <p className="text-sm">
            Create an image representing a knowledge hub or library. Could be an abstract network of interconnected documents/ideas, a stylized digital library interface, or a metaphor for accessible knowledge. Use the GCIN palette, perhaps with Visualization Highlight (`#8A2BE2`) and Primary Blue (`#1A5F7A`). Aspect Ratio: Wide (e.g., 16:9) banner style.
          </p>
          {/* <div className="aspect-video bg-gray-200 rounded mt-4"></div> */}
        </div>
        {/* --- End Placeholder --- */}

        {/* Login Callout Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-gray-200 my-12 text-center">
           <h2 className="text-2xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-3">Access the Full Knowledge Base</h2>
           <p className="font-['Open_Sans'] text-[#4A4A4A] mb-4">
             Registered contributors and partners can access more detailed documentation, technical specifications, internal discussions, and project management resources.
           </p>
           {/* Link to future login page */}
           <Link href="#" className="inline-block px-6 py-2 bg-[#1A5F7A] text-white font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans'] shadow-md">
             Contributor Login (Coming Soon)
           </Link>
        </div>


        {/* Resource Categories */}
        <div className="space-y-12 mt-12">

          {/* Featured Research Section */}
          <section>
            <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Featured Research & Papers
            </h2>
            <div className="space-y-4">
              {featuredResearch.map((item, index) => (
                <div key={index} className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold font-['Montserrat'] text-[#2E8B57] mb-1">{item.title}</h3>
                  <p className="text-sm font-['Open_Sans'] text-[#4A4A4A] mb-2">{item.description}</p>
                  <Link href={item.href} className="text-sm font-semibold text-[#FF7F50] hover:underline">Read More (Link Placeholder)</Link>
                </div>
              ))}
              {/* Add link to a potential /research page if many papers */}
            </div>
          </section>


          {/* *** ADDED FAQ Link Section *** */}
          <section>
             <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
                Frequently Asked Questions
             </h2>
             <div className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow bg-gradient-to-r from-white to-gray-50">
                 <h3 className="text-xl font-semibold font-['Montserrat'] text-[#2E8B57] mb-1">Have Questions?</h3>
                 <p className="text-sm font-['Open_Sans'] text-[#4A4A4A] mb-2">Find answers to common questions about GCIN&apos;s vision, approach, technology, and governance.</p>
                 <Link href="/faq" className="text-sm font-semibold text-[#FF7F50] hover:underline">Read the FAQ</Link>
              </div>
          </section>
          {/* *** END FAQ Link Section *** */}

          {/* Blog Insights Section */}
          <section>
            <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Blog Insights
            </h2>
             <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-4 leading-relaxed">
               Explore our latest articles, updates, and reflections on the project&apos;s progress and the broader themes we engage with.
             </p>
             {/* Link to main blog page */}
             <Link href="/blog" className="inline-block px-6 py-2 bg-[#2E8B57] text-white font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans'] shadow-md">
                Visit the Blog
             </Link>
          </section>

           {/* Recommended Reading Section */}
          <section>
            <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2">
              Recommended Reading
            </h2>
             <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-6 leading-relaxed">
               Foundational and cutting-edge works relevant to the concepts behind GCIN. (Based on Priority 1 selections from our internal list).
             </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedReading.map((book, index) => (
                <div key={index} className="p-4 border rounded-md shadow-sm text-sm">
                  <h4 className="font-semibold font-['Montserrat'] text-[#1A5F7A]">{book.title}</h4>
                  <p className="font-['Open_Sans'] text-gray-600">by {book.author}</p>
                  <p className="font-['Open_Sans'] text-gray-500 text-xs mt-1">({book.category})</p>
                </div>
              ))}
            </div>
             {/* Add link to a potential full /reading-list page */}
             <div className="mt-6 text-center">
                 <Link href="#" className="text-sm font-semibold text-[#FF7F50] hover:underline">View Full Curated List (Coming Soon)</Link>
             </div>
          </section>

          {/* Placeholders for Future Sections */}
          <section>
              <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2 opacity-50">
                Case Studies (Coming Soon)
              </h2>
              <p className="italic text-gray-500 font-['Open_Sans']">Detailed examples from our pilot projects will be shared here as they become available.</p>
          </section>
           <section>
              <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4 border-b pb-2 opacity-50">
                Tutorials & Guides (Coming Soon)
              </h2>
              <p className="italic text-gray-500 font-['Open_Sans']">Resources for contributors and users on how to utilize GCIN tools and platforms will be added here.</p>
          </section>

        </div>

      </div>
    </main>
  );
}