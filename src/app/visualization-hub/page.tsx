// src/app/visualization-hub/page.tsx
import Link from 'next/link';

// Placeholder for the actual interactive visualization component
const InteractiveNetworkVisualization = () => {
  // Implementation requires significant JavaScript/visualization expertise.
  return (
    // Added min-h-[400px] for a better minimum size
    <div className="w-full min-h-[400px] h-[60vh] md:h-[70vh] bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 relative overflow-hidden shadow-inner">
      <p className="z-10 text-lg">[Interactive Network Visualization Placeholder]</p>
      <p className="absolute bottom-4 left-4 text-xs z-10">[Controls like zoom/pan would be part of this component]</p>
      {/* Basic background pattern */}
      <div className="absolute inset-0 opacity-5"> {/* Reduced opacity */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/> {/* Lighter gray */}
             </pattern>
             <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
               <rect width="100" height="100" fill="url(#smallGrid)"/>
               <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D1D5DB" strokeWidth="1"/> {/* Lighter gray */}
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>
    </div>
  );
};

// Placeholder for Detail Panel content
const DetailPanelPlaceholder = () => {
    return (
        // Added more padding, consistent styling
        <div className="h-full bg-white p-4 rounded-lg border border-gray-200 shadow-md text-sm text-[#4A4A4A]">
            <h3 className="font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2 border-b pb-1">Details</h3>
            <p className="font-['Open_Sans']">Select a node or connection in the visualization above to see more details here.</p>
            {/* Content will be dynamically loaded */}
        </div>
    );
};

export default function VisualizationHubPage() {
  return (
    // Adjusted top/bottom padding
    <main className="flex min-h-screen flex-col items-center py-12 md:py-20 bg-[#F5F7FA]">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Page Title & Intro */}
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-4">
            Visualization Hub
            </h1>
            <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] max-w-3xl mx-auto leading-relaxed">
            Explore the interconnected network of challenges, solutions, projects, and concepts within the GCIN ecosystem. Our goal is to make complexity accessible and reveal insights through interactive visualization – like a Wikipedia rabbit hole, but focused on building the future.
            </p>
        </div>

        {/* Main Layout - Adjusted gap and structure */}
        <div className="flex flex-col lg:flex-row gap-8"> {/* Increased gap */}

            {/* Control Panel / Filters (Left Sidebar) */}
            <div className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0"> {/* Adjusted width slightly */}
                {/* Added consistent styling */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
                    <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-5 border-b pb-2">Controls</h2>
                    <div className="space-y-5"> {/* Increased internal spacing */}
                        {/* Improved Form Element Styling */}
                        <div>
                            <label htmlFor="domain-filter" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-1">Filter by Domain:</label>
                            {/* *** ADDED text-gray-900 for select text color *** */}
                            <select
                                id="domain-filter"
                                name="domain-filter"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm rounded-md shadow-sm"
                            >
                                <option>All Domains</option>
                                <option>Climate Action</option>
                                <option>Food Systems</option>
                                <option>Education Resources</option>
                                {/* Add other domains */}
                            </select>
                        </div>
                         <div>
                            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-1">Filter by Type:</label>
                            {/* *** ADDED text-gray-900 for select text color *** */}
                            <select
                                id="type-filter"
                                name="type-filter"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm rounded-md shadow-sm"
                            >
                                <option>All Types</option>
                                <option>Concept</option>
                                <option>Project</option>
                                <option>Challenge</option>
                                <option>Organization</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="search-nodes" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-1">Search:</label>
                            {/* *** ADDED placeholder:text-gray-600 for placeholder color *** */}
                            <input
                                type="search"
                                id="search-nodes"
                                name="search-nodes"
                                placeholder="Search nodes..."
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-500 focus:ring-1 focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm"
                             />
                         </div>
                         <p className="text-xs text-gray-500 italic font-['Open_Sans'] pt-2">Note: Filters and search require interactive visualization implementation.</p>
                    </div>
                </div>
            </div>

            {/* Main Visualization Area & Detail Panel (Right Side) */}
            {/* Wrapped in a container div to manage internal spacing */}
            <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-8"> {/* Increased gap */}
                {/* Visualization Component Placeholder */}
                <div className="flex-grow"> {/* Allows visualization to take available space */}
                    <InteractiveNetworkVisualization />
                </div>
                {/* Detail Panel Placeholder */}
                <div className="h-48 lg:h-56 flex-shrink-0"> {/* Adjusted height slightly */}
                    <DetailPanelPlaceholder />
                </div>
            </div>

        </div>

         {/* How to Use / Guides Section */}
         <section className="mt-16 text-center border-t pt-10">
           <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4">
             How to Explore
           </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed max-w-3xl mx-auto">
            Interact with the visualization above (coming soon!) by clicking and dragging nodes, zooming in and out, and using the filters on the left. Selecting elements will display more information in the details panel below the main view. Explore the connections and discover new insights!
          </p>
           <Link href="#" className="font-semibold text-[#FF7F50] hover:underline font-['Open_Sans']">
             View Detailed Guides (Coming Soon)
           </Link>
        </section>

      </div>
    </main>
  );
}
