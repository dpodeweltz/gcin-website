// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    // Using Neutral Gray background [cite: 7]
    <footer className="bg-[#4A4A4A] text-[#F5F7FA] p-8 mt-16"> {/* Added top margin */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold font-['Montserrat'] mb-3">Quick Links</h3> {/* Montserrat Heading [cite: 8] */}
          <nav className="flex flex-col space-y-2 font-['Open_Sans']"> {/* Open Sans Body [cite: 8] */}
            <Link href="/vision" className="hover:text-[#FF7F50]">Vision</Link>
            <Link href="/roadmap" className="hover:text-[#FF7F50]">Roadmap</Link>
            <Link href="/get-involved" className="hover:text-[#FF7F50]">Get Involved</Link>
            <Link href="/contact" className="hover:text-[#FF7F50]">Contact</Link>
          </nav>
        </div>

        {/* Column 2: Resources & Connect */}
        <div>
           <h3 className="text-lg font-semibold font-['Montserrat'] mb-3">Resources</h3>
          <nav className="flex flex-col space-y-2 font-['Open_Sans']">
            <Link href="/resources" className="hover:text-[#FF7F50]">Resource Library</Link>
            <Link href="/blog" className="hover:text-[#FF7F50]">Blog</Link>
            <Link href="/faq" className="hover:text-[#FF7F50]">FAQ</Link> {/* Added link to FAQ doc */}
          </nav>
           <h3 className="text-lg font-semibold font-['Montserrat'] mt-4 mb-3">Connect</h3>
           {/* Placeholder for Social Media Icons */}
           <div className="flex space-x-4">
             {/* Replace with actual icons from a library like react-icons */}
             <a href="#" aria-label="Social Media Link 1" className="hover:text-[#FF7F50]">SM1</a>
             <a href="#" aria-label="Social Media Link 2" className="hover:text-[#FF7F50]">SM2</a>
             <a href="#" aria-label="Social Media Link 3" className="hover:text-[#FF7F50]">SM3</a>
           </div>
        </div>


        {/* Column 3: Newsletter Signup */}
        <div>
           <h3 className="text-lg font-semibold font-['Montserrat'] mb-3">Join Our Newsletter</h3>
           {/* Simple form placeholder - requires backend integration later */}
           <form className="flex flex-col space-y-2 font-['Open_Sans']">
                <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                <input
                    id="newsletter-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="p-2 rounded text-gray-800" // Style the input
                 />
                 <button
                    type="submit"
                    // Style the button using project colors [cite: 7]
                    className="bg-[#2E8B57] hover:bg-opacity-80 text-white p-2 rounded transition-colors"
                 >
                     Subscribe
                 </button>
           </form>
        </div>
      </div>

      {/* Bottom Bar: Legal Info */}
      <div className="container mx-auto text-center border-t border-gray-600 pt-4 mt-8 font-['Open_Sans'] text-sm">
        <p>&copy; {new Date().getFullYear()} Global Collective Intelligence Network. All Rights Reserved.</p>
        {/* Add links to Privacy Policy, Terms of Service if applicable */}
        <div className="space-x-4 mt-1">
            <Link href="/privacy" className="hover:text-[#FF7F50]">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#FF7F50]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}