// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or import Montserrat/Open Sans if setting up font properly
import "./globals.css";
import Header from "@/components/Header"; // Import Header (using alias)
import Footer from "@/components/Footer"; // Import Footer (using alias)

const inter = Inter({ subsets: ["latin"] }); // Default font setup

export const metadata: Metadata = {
  title: "GCIN - Global Collective Intelligence Network", // Example Title
  description: "Building the infrastructure for a post-labor economy.", // Example Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Apply default font or your custom font classes */}
        <Header /> {/* Add Header here */}
        <main>{children}</main> {/* Your page content renders here */}
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}