// src/app/terms/page.tsx
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  const lastUpdated = "March 30, 2025"; // Placeholder Date
  const orgName = "The GCIN Association (or final legal name)"; // Placeholder Name
  const contactEmail = "info@globalcollectiveintelligence.org"; // Placeholder Email
  const governingLaw = "[Consult Legal Counsel for Appropriate Jurisdiction - e.g., Switzerland]"; // Placeholder Jurisdiction

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Terms and Conditions
        </h1>

        {/* --- LEGAL DISCLAIMER --- */}
        <div className="p-4 mb-8 text-sm text-red-800 bg-red-100 border border-red-300 rounded-md">
          <p className="font-bold">IMPORTANT: Placeholder Content</p>
          <p>This is template text and not legal advice. These Terms and Conditions must be reviewed, drafted, and approved by qualified legal counsel before website launch.</p>
        </div>
        {/* --- END DISCLAIMER --- */}


        <div className="prose prose-lg max-w-none font-['Open_Sans'] text-[#4A4A4A] space-y-4">
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>

          <h2>1. Introduction & Agreement</h2>
          <p>
            Welcome to the Global Collective Intelligence Network (GCIN) website, operated by {orgName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website located at globalcollectiveintelligence.org (the &quot;Site&quot;) and any related services, features, content, or applications we offer (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy (linked below). If you do not agree to these Terms, please do not access or use the Services.
          </p>

          <h2>2. Use of the Website and Services</h2>
          <p>
            You agree to use the Site and Services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the Services. You may be required to comply with specific contribution guidelines or community standards if you participate in certain features (like forums or collaborative tools) that may be offered now or in the future.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The content on the Site, including text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, is the property of {orgName} or its content suppliers and protected by international copyright laws. The GCIN name, logo, and related marks are trademarks of {orgName}. You may not use these marks without our prior written permission.
          </p>
          <p>
            We may make certain materials available under open-source or Creative Commons licenses; such materials will be clearly marked, and their use will be governed by the terms of the specified license.
          </p>

          <h2>4. User Accounts (Future Feature)</h2>
          <p>
            Certain features of the Services may require you to register for an account. If you create an account, you agree to provide accurate, current, and complete information. You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account. [Details about account termination, responsibilities, etc., to be added by legal counsel].
          </p>

          <h2>5. User Contributions (Future Feature)</h2>
          <p>
            If the Services allow you to post, link, store, share, or otherwise make available certain information, text, graphics, videos, or other material (&quot;User Content&quot;), you are responsible for the User Content that you post. By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such User Content in any and all media or distribution methods. [Details about content ownership, moderation, prohibited content, and specific licenses (e.g., Creative Commons for contributions) to be added by legal counsel].
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding the operation of the Services or the information, content, materials, or products included on the Site. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components. [Further specific disclaimers to be added by legal counsel].
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {orgName}, its affiliates, officers, directors, employees, agents, suppliers, or licensors will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage. [Specific limitations and exclusions to be determined by legal counsel].
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of {governingLaw}, without regard to its conflict of law provisions. [Specifics regarding dispute resolution, jurisdiction, etc., to be determined by legal counsel, considering the Swiss Association structure].
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least [e.g., 30 days&apos;] notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmail}`} className="text-[#FF7F50] hover:underline">{contactEmail}</a>.
          </p>

          <p>Please also review our <Link href="/privacy" className="text-[#FF7F50] hover:underline">Privacy Policy</Link>.</p>
        </div>
      </div>
    </main>
  );
}
