import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Patel | Full stack Developer",
  description: "I am a full stack developer with a passion for building modern, responsive, and user - friendly websites using the latest technologies. With expertise in Javascript, Typescript, React, Next.js, Node.js, Express, NestJS, AWS.",
  keywords: ["Vaibhav Patel", "Vaibhav", "Vaibhav Patel Portfolio", "Vaibhav", "Patel", "full stack developer", "reactjs", "nextjs", "nodejs", "express", "nestjs", "tailwind css", "portfolio", "AWS", "software engineer", "software developer"],
  authors: { name: "Vaibhav Patel", url: "https://www.linkedin.com/in/vaibhav--patel-/", },
  alternates: {
    canonical: `https://vaibhav-patel.vercel.app/`,
  },
  openGraph: {
    title: "Vaibhav Patel | Full stack Developer",
    description: "I am a full stack developer with a passion for building modern, responsive, and user-friendly websites using the latest technologies. With expertise in Javascript, Typescript, React, Next.js, Node.js, Express, NestJS, AWS.",
    type: 'website',
    siteName: "Portfolio",
    url: 'https://vaibhav-patel.vercel.app/',
    images: [
      {
        url: 'https://vaibhav-patel.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Vaibhav Patel',
      },
    ],
  }
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Vaibhav Patel",
  url: "https://vaibhav-patel.vercel.app/",
  image: "https://vaibhav-patel.vercel.app/og-image.png",
  sameAs: [
    "https://www.linkedin.com/in/vaibhav--patel-/",
    "https://github.com/vaibhavpatel-7",
    "https://vaibhav-patel.vercel.app/"
  ],
  jobTitle: "Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
