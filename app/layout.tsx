import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Patel | Full stack Developer",
  description: "I am a Skilled Full stack Developer with expertise in React, Next.js, Node.js, Express, NestJS, AWS.",
  keywords: ["Vaibhav Patel", "Vaibhav", "Vaibhav Patel Portfolio", "Vaibhav", "Patel", "full stack developer", "reactjs", "nextjs", "nodejs", "express", "nestjs", "tailwind css", "portfolio", "AWS", "software engineer", "software developer"],
  authors: { name: "Vaibhav Patel", url: "https://www.linkedin.com/in/vaibhav--patel-/" }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
