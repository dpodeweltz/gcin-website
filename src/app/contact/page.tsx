// src/app/contact/page.tsx
import Link from 'next/link';
// Import an icon library if you want to use icons (e.g., react-icons)
// import { HiOutlineMail, HiOutlineChatAlt2, HiOutlineCode } from 'react-icons/hi'; // Example using react-icons/hi

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-3xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Contact Us
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-10 leading-relaxed text-center max-w-2xl mx-auto">
          We welcome questions, feedback, partnership inquiries, and contribution interest. Please use the methods below to connect with the GCIN team and community. We look forward to hearing from you!
        </p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">

          {/* General Inquiries (Email) */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-blue-50">
            <div className="h-12 w-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center text-[#1A5F7A] text-2xl">
               {/* <HiOutlineMail /> */} ? {/* Icon Placeholder */}
            </div>
            <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">General Inquiries</h2>
            <p className="font-['Open_Sans'] text-[#4A4A4A] mb-3">For general questions, press, or information:</p>
            {/* Added break-words for long email */}
            <a href="mailto:info@globalcollectiveintelligence.org" className="font-semibold text-[#FF7F50] hover:underline break-words">
              info@globalcollectiveintelligence.org
            </a>
          </div>

          {/* Community Forum */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-green-50">
             <div className="h-12 w-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center text-[#2E8B57] text-2xl">
               {/* <HiOutlineChatAlt2 /> */} ? {/* Icon Placeholder */}
            </div>
            <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Community Forum</h2>
            <p className="font-['Open_Sans'] text-[#4A4A4A] mb-3">Join discussions with the community and team:</p>
            {/* Added break-words for potentially long URL */}
            <Link href="#" className="font-semibold text-[#FF7F50] hover:underline break-words">
              community.globalcollectiveintelligence.org (Coming Soon)
            </Link>
          </div>

           {/* Social Media */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-purple-50">
             <div className="h-12 w-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center text-[#8A2BE2] text-2xl">
               {/* Icon for social? */} @ {/* Icon Placeholder */}
            </div>
            <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Social Media</h2>
            <p className="font-['Open_Sans'] text-[#4A4A4A] mb-3">Follow updates and engage with us on:</p>
             <p className="font-semibold text-[#4A4A4A] break-words">@GlobalCollectiveIntelligence</p>
             {/* Example Links:
             <Link href="https://twitter.com/..." className="...">Twitter</Link> <br/>
             <Link href="https://linkedin.com/..." className="...">LinkedIn</Link> */}
          </div>

           {/* GitHub */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-br from-white to-orange-50">
             <div className="h-12 w-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center text-[#FF7F50] text-2xl">
               {/* <HiOutlineCode /> */} ? {/* Icon Placeholder */}
            </div>
            <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">Technical / Code</h2>
            <p className="font-['Open_Sans'] text-[#4A4A4A] mb-3">For code contributions, issues, or technical discussion:</p>
            {/* *** ADDED break-words class HERE *** */}
            <a href="https://github.com/GCIN" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#FF7F50] hover:underline break-words">
              github.com/GCIN
            </a>
          </div>

        </div>

        {/* --- Icon Prompts --- */}
        <p className="text-xs text-center text-gray-400 mt-4 mb-12 italic">
            [Icon Prompts]: Create simple icons for Email, Forum/Chat, Social Media (@ symbol?), Code/GitHub. Use GCIN palette colors.
        </p>
        {/* --- End Icon Prompts --- */}

        {/* Inquiry Form Section */}
        <section className="mt-12 border-t pt-10">
          <h2 className="text-3xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
            Send Us a Message
          </h2>
          {/* Adjusted Form Spacing */}
          <form className="space-y-4 max-w-xl mx-auto"> {/* Changed space-y-6 to space-y-4 */}
            {/* Added mb-4 to each field container div */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] font-['Open_Sans'] mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] font-['Open_Sans'] mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm"
              />
            </div>
             <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-[#4A4A4A] font-['Open_Sans'] mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] font-['Open_Sans'] mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF7F50] focus:border-[#FF7F50] sm:text-sm"
              ></textarea>
            </div>
            {/* Added mt-8 to button container */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#1A5F7A] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A5F7A]"
              >
                Send Message
              </button>
               <p className="text-xs text-gray-500 mt-2 italic">(Note: Form submission requires backend setup)</p>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}