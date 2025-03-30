// src/app/team/page.tsx
// import Image from 'next/image'; // Import if using Image for placeholders/profiles
import Link from 'next/link';   // Import for links

// Placeholder component for a team member profile card
const TeamMemberCardPlaceholder = ({ role }: { role: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center shadow-sm bg-white">
      <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-3 flex items-center justify-center text-gray-500">
        {/* Placeholder for Photo */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold font-['Montserrat'] text-[#1A5F7A]">[Name Placeholder]</h3>
      <p className="text-sm font-['Open_Sans'] text-[#4A4A4A]">{role}</p>
      {/* Optional: Add brief bio or link placeholder */}
      {/* <p className="text-xs font-['Open_Sans'] text-gray-500 mt-1">[Brief Bio Placeholder]</p> */}
    </div>
  );
};

// Placeholder component for a partner logo
const PartnerLogoPlaceholder = ({ name }: { name: string }) => {
    return (
        <div className="h-20 border border-gray-200 rounded-md flex items-center justify-center p-4 bg-gray-50 text-gray-400 text-sm italic">
            {name} Logo Placeholder
        </div>
    );
};


export default function TeamAndPartnersPage() {
  // Define roles based on planning documents [cite: 885]
  const coreTeamRoles = [
    "Executive Leadership",
    "Technical Lead / Architecture",
    "AI & Research Lead",
    "Community & Comms Lead",
    "Operations & Governance",
    // Add more as team grows...
  ];

  const partnerTypes = [
    "Academic Institutions",
    "Technology Providers",
    "NGOs & Foundations",
    "Community Organizations",
    "Pilot Implementation Partners",
    // Add more...
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Our Team & Partners
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-12 leading-relaxed text-center max-w-3xl mx-auto">
          The Global Collective Intelligence Network is driven by a dedicated core team, guided by experienced advisors, and amplified through strategic partnerships. We believe collaboration across diverse fields and organizations is essential to achieving our ambitious vision.
        </p>

        {/* Core Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-6 border-b pb-2">
            Core Team
          </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
            Our growing core team brings together expertise in AI, economics, software development, governance, climate science, community building, and more. We operate collaboratively to build and manage the GCIN ecosystem. (Specific profiles coming soon).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Render placeholders for now */}
            {coreTeamRoles.map(role => <TeamMemberCardPlaceholder key={role} role={role} />)}
            <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center flex flex-col justify-center items-center min-h-[180px]">
                <p className="text-sm font-semibold text-[#1A5F7A] mb-2">More Coming Soon!</p>
                <Link href="/get-involved" className="text-xs font-semibold text-[#FF7F50] hover:underline">Join Us?</Link>
            </div>
          </div>
            {/* --- Image Prompt --- */}
            <p className="text-xs text-center text-gray-400 mt-6 italic">
                [Image Prompt]: When team members are added, obtain professional headshots with consistent background/lighting if possible.
            </p>
            {/* --- End Prompt --- */}
        </section>

        {/* Advisory Board Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-6 border-b pb-2">
            Advisory Board
          </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
            We are guided by a board of advisors comprised of leading thinkers and practitioners from fields relevant to GCIN&apos;s mission, including technology ethics, economics, complex systems, and global governance. (Advisor profiles coming soon).
          </p>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
             {/* Placeholders for Advisors - reuse TeamMemberCardPlaceholder or similar */}
             <TeamMemberCardPlaceholder role="Economics Advisor" />
             <TeamMemberCardPlaceholder role="AI Ethics Advisor" />
             <TeamMemberCardPlaceholder role="Governance Advisor" />
             {/* Add more placeholders */}
             <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center flex flex-col justify-center items-center min-h-[180px]">
                <p className="text-sm font-semibold text-[#1A5F7A]">Seeking Advisors</p>
             </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-6 border-b pb-2">
            Our Partners
          </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed">
            GCIN thrives on collaboration. We partner with a diverse range of organizations – including academic institutions, technology providers, NGOs, foundations, and community groups – to amplify impact, share knowledge, and implement solutions. (Partner logos coming soon).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
             {/* Render placeholders for now */}
            {partnerTypes.map(ptype => <PartnerLogoPlaceholder key={ptype} name={ptype} />)}
          </div>
             {/* --- Logo Prompt --- */}
            <p className="text-xs text-center text-gray-400 mt-6 italic">
                [Logo Prompt]: Obtain high-resolution logos (preferably SVG) from confirmed partner organizations. Ensure permission for website use.
            </p>
            {/* --- End Prompt --- */}
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 border-t pt-10">
           <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-4">
             Become a Collaborator
           </h2>
          <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-8 leading-relaxed max-w-3xl mx-auto">
            Interested in joining the core team, contributing as an advisor, or exploring partnership opportunities for your organization? We&apos;d love to hear from you.
          </p>
           <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#1A5F7A] text-white text-lg font-semibold rounded-md hover:bg-opacity-80 transition-colors font-['Open_Sans'] shadow-md" // Primary Blue Button
          >
            Contact Us
          </Link>
        </section>

      </div>
    </main>
  );
}