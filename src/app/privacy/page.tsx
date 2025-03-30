// src/app/privacy/page.tsx
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 30, 2025"; // Placeholder Date
  const orgName = "The GCIN Association (or final legal name)"; // Placeholder Name
  const contactEmail = "info@globalcollectiveintelligence.org"; // Placeholder Email
  const dpoContact = "[Data Protection Officer Contact Email/Address - If Applicable]"; // Placeholder DPO

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          Privacy Policy
        </h1>

        {/* --- LEGAL DISCLAIMER --- */}
        <div className="p-4 mb-8 text-sm text-red-800 bg-red-100 border border-red-300 rounded-md">
          <p className="font-bold">IMPORTANT: Placeholder Content</p>
          <p>This is template text and not legal advice. This Privacy Policy must be reviewed, drafted, and approved by qualified legal counsel familiar with relevant data protection laws (e.g., GDPR, etc.) before website launch.</p>
        </div>
        {/* --- END DISCLAIMER --- */}

        <div className="prose prose-lg max-w-none font-['Open_Sans'] text-[#4A4A4A] space-y-4">
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to the Global Collective Intelligence Network (GCIN). {orgName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website globalcollectiveintelligence.org (the &quot;Site&quot;) and use our services (the &quot;Services&quot;). Please read this policy carefully.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the Services includes:</p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you subscribe to our newsletter, use the contact form, or potentially when you register for an account or participate in community features (future).
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site. [Specify if using analytics tools like Google Analytics, Plausible, etc., and what they collect - consult lawyer].
            </li>
            <li>
              <strong>User Contributions (Future):</strong> If you contribute content or participate in forums, we may collect the information you provide in such submissions. [Details on handling user-generated content privacy to be added by legal counsel].
            </li>
             <li>
              <strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Services and improve your experience. [Details on specific cookies used, purpose, and opt-out mechanisms required by law - consult lawyer].
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:</p>
           <ul>
             <li>Send you a newsletter or other targeted communications.</li>
             <li>Respond to your comments, inquiries, and support requests.</li>
             <li>Monitor and analyze usage and trends to improve your experience with the Services.</li>
             <li>Maintain the security and operation of our Services.</li>
             <li>[Future] Create and manage your account.</li>
             <li>[Future] Facilitate user-to-user communication or collaboration.</li>
             <li>Comply with legal obligations.</li>
             <li>[Add other specific uses relevant to GCIN - consult lawyer].</li>
           </ul>

          <h2>4. How We Share Your Information</h2>
          <p>We do not share your personal information with third parties except in the circumstances described below or with your consent:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., email delivery service for newsletters, hosting providers). [List specific types of providers and potentially names - consult lawyer].
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
            </li>
            <li>
               <strong>[Future - Community Features]:</strong> Information you post in public community areas may be visible to other users. [Details on visibility and sharing in community features - consult lawyer].
            </li>
          </ul>
           <p>We do not sell your personal information.</p>


          <h2>5. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. [Details on specific security measures may be required - consult lawyer].
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). [Define specific retention periods or criteria - consult lawyer].
          </p>

          <h2>7. Your Data Protection Rights (Example: GDPR/CCPA)</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information under applicable data protection laws, such as the GDPR or CCPA. These may include the right to access, correct, update, or request deletion of your personal information. [Specific rights and how users can exercise them must be detailed based on applicable laws and legal advice].
          </p>
          <p>To exercise these rights, please contact us using the contact information below.</p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our Services are not directed to individuals under the age of [e.g., 13 or 16, depending on jurisdiction]. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. Our operations are based primarily in [e.g., Switzerland and other locations]. [Specific details on transfer mechanisms (e.g., SCCs, adequacy decisions) are required if transferring data internationally, especially from regions like the EU - consult lawyer].
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: <a href={`mailto:${contactEmail}`} className="text-[#FF7F50] hover:underline">{contactEmail}</a></li>
            <li>[If applicable, add DPO contact]: {dpoContact}</li>
            <li>[If applicable, add mailing address]</li>
          </ul>
           <p>Please also review our <Link href="/terms" className="text-[#FF7F50] hover:underline">Terms and Conditions</Link>.</p>
        </div>
      </div>
    </main>
  );
}
