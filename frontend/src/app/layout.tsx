import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased min-h-screen space-y-10`}>
        <Navbar />
        <ToastContainer />
        <div className="content-container">{children}</div>
        <footer className="space-y-5 flex justify-between text-xs items-center text-left px-28 py-10">
          <div>
            <h1 className="text-xl">ClubNet</h1>
            <p className="py-2 text-left">
              © 2023 ClubNet. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col space-between">
              <Link href={`/clubs`}>Resources</Link>
              <Link href={`/events`}>Official Website</Link>
              <Link href={`/login`}>About Developers</Link>
            </div>
            <div className="flex flex-col space-between">
              <Link href={`/events`}>Events</Link>
              <Link href={`/clubs`}>Clubs</Link>
              <Link href={`/about`}>About</Link>
              <Link href={`/register`}>Register</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
