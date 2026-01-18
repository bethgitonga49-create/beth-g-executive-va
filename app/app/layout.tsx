import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Beth G — The Executive Virtual Assistant',
  description:
    'I support founders, consultants, and growing businesses with strategic executive assistance built on clarity, discretion, and results.',
  openGraph: {
    title: 'Beth G — The Executive Virtual Assistant',
    description:
      'I support founders, consultants, and growing businesses with strategic executive assistance built on clarity, discretion, and results.',
    url: 'https://your-vercel-deployment-url.vercel.app',
    siteName: 'Beth G — The Executive VA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beth G — The Executive VA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {/* NAVBAR */}
        <nav className="w-full border-b py-4 px-6 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Beth G — The Executive VA
          </Link>
          <div className="space-x-4">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/learn" className="hover:underline">
              Learn
            </Link>
            <Link href="/civic-education" className="hover:underline">
              Civic Education
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t py-8 px-6">
          <div className="max-w-[1100px] mx-auto text-sm">
            <p className="font-semibold">Beth G — Executive Virtual Assistant</p>
            <p className="mt-2">
              Strategic executive support, online skills education, digital tools
              guidance, and civic education.
            </p>

            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:bethgexecutiveva@gmail.com"
                className="underline"
              >
                bethgexecutiveva@gmail.com
              </a>
            </p>

            <div className="mt-4 space-x-3">
              <a href="https://instagram.com/bethgexecutiveva" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com/bethexecutiveva" target="_blank" rel="noreferrer">X</a>
              <a href="https://www.youtube.com/@BethGExecutiveVA" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.tiktok.com/@bethgexecutiveva" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://www.facebook.com/bethgtheexecutiveva" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/in/beth-g-/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <p className="mt-4 text-gray-500">
              © {new Date().getFullYear()} Beth G. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
