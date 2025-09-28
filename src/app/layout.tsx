import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammed Ashique PK - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack. Turning code into high-performance experiences.",
  keywords:
    "Full Stack Developer, MERN Stack, React, Node.js, Next.js, TypeScript",
  authors: [{ name: "Muhammed Ashique PK" }],
  openGraph: {
    title: "Muhammed Ashique PK - Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack. Turning code into high-performance experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ashique PK - Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack. Turning code into high-performance experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-background text-foreground custom-scrollbar overflow-x-hidden ${poppins.className} antialiased`}>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
