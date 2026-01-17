import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Beth G — The Executive VA',
  description:
    'Empowering individuals with online skills, work guidance, and civic education. Learn digital tools, AI platforms, and build sustainable income online.',
  openGraph: {
    title: 'Beth G — The Executive VA',
    description:
      'Empowering individuals with online skills, work guidance, and civic education. Learn digital tools, AI platforms, and build sustainable income online.',
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content="website" />
      </Head>
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
        <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Beth G — The Executive VA. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bethgexecutiveva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/bethexecutiveva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X
              </a>
              <a
                href="https://www.youtube.com/@BethGExecutiveVA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@BETHGEXECUTIVEVA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/bethg.theexecutiveva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
