// src/app/blog/page.tsx
import Link from 'next/link';
// import Image from 'next/image'; // If blog cards will have images

// Reusable placeholder component for blog post cards
// (Could be imported from a shared components folder if used elsewhere)
const BlogPostCardPlaceholder = ({ title, excerpt, date }: { title: string, excerpt: string, date: string }) => {
  return (
    <article className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col">
      {/* Placeholder for image */}
      <div className="aspect-video bg-gray-100 mb-4 rounded"></div>
      <h2 className="text-xl font-semibold font-['Montserrat'] text-[#1A5F7A] mb-2">
        {/* We'll eventually link the title: <Link href={`/blog/slug-here`}>{title}</Link> */}
        {title}
      </h2>
      <p className="text-sm text-gray-400 font-['Open_Sans'] mb-3">{date}</p>
      <p className="text-base text-[#4A4A4A] font-['Open_Sans'] mb-4 flex-grow">
        {excerpt}
      </p>
      {/* Placeholder link to full post */}
      <Link href="#" className="text-sm font-semibold text-[#FF7F50] hover:underline mt-auto">
        Read More -&gt;
      </Link>
    </article>
  );
}


export default function BlogIndexPage() {
  // Placeholder data - replace with actual fetched posts later
  const posts = [
    { title: "Welcome to the GCIN Blog: Building the Future, Together", excerpt: "Join us as we embark on the journey of building the Global Collective Intelligence Network. Learn about our mission, approach, and how you can get involved...", date: "March 30, 2025" },
    { title: "Understanding the Post-Labor Transition", excerpt: "Why is the shift driven by AI different, and what challenges does it present? A brief overview of the economic transformation we aim to navigate.", date: "March 28, 2025" },
    { title: "Spotlight: Climate Action Pilot Takes Flight", excerpt: "An update on our flagship initiative focusing on accelerating renewable energy deployment through enhanced coordination.", date: "March 25, 2025" },
    // Add more placeholder posts
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]"> {/* Light background */}
      <div className="container mx-auto max-w-5xl">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-6 text-center">
          GCIN Blog: Updates & Insights
        </h1>

        {/* Introduction */}
        <p className="text-lg text-[#4A4A4A] font-['Open_Sans'] mb-12 leading-relaxed text-center max-w-3xl mx-auto">
          Follow our journey as we build the Global Collective Intelligence Network. Here we&apos;ll share progress updates, insights from our research, explorations of related topics, and ways to get involved.
        </p>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPostCardPlaceholder
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>

        {/* Placeholder for Pagination or Load More Button */}
        <div className="mt-12 text-center text-gray-500 italic">
           [Pagination or Load More Button will go here]
        </div>

      </div>
    </main>
  );
}