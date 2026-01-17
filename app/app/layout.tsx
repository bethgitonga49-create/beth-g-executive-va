import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Beth G — The Executive Virtual Assistant',
  description:
    'I support founders, consultants, and growing businesses with strategic executive assistance built on clarity, discretion, and results.
',
  openGraph: {
    title: 'Beth G — The Executive Virtual Assistant',
    description:
      'I support founders, consultants, and growing businesses with strategic executive assistance built on clarity, discretion, and results.
',
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

       <footer style={{ marginTop: "4rem", padding: "2rem", borderTop: "1px solid #e5e7eb" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <p><strong>Beth G — Executive Virtual Assistant</strong></p>
    <p>
      Strategic executive support, online skills education, digital tools guidance,
      and civic education.
    </p>

    <p>
      Email: <a href="mailto:bethgexecutiveva@gmail.com">bethgexecutiveva@gmail.com</a>
    </p>

    <div style={{ marginTop: "1rem" }}>
      <a href="https://instagram.com/bethgexecutiveva" target="_blank">Instagram</a> ·{" "}
      <a href="https://twitter.com/bethexecutiveva" target="_blank">X</a> ·{" "}
      <a href="https://www.youtube.com/@BethGExecutiveVA" target="_blank">YouTube</a> ·{" "}
      <a href="https://www.tiktok.com/@bethgexecutiveva" target="_blank">TikTok</a> ·{" "}
      <a href="https://www.facebook.com/bethgtheexecutiveva" target="_blank">Facebook</a> ·{" "}
      <a href="https://www.linkedin.com/in/beth-g-/" target="_blank">LinkedIn</a>
    </div>

    <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#6b7280" }}>
      © {new Date().getFullYear()} Beth G. All rights reserved.
    </p>
  </div>
</footer>

      </body>
    </html>
  );
}
