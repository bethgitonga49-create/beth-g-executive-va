import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Beth G — The Executive VA',
  description: 'Professional Virtual Assistance, online tips & tools, digital skills training, and civic guidance for everyone.',
  keywords: ['Virtual Assistant', 'VA', 'Online Work', 'Digital Skills', 'Civic Education', 'AI Tools'],
  openGraph: {
    title: 'Beth G — The Executive VA',
    description: 'Professional virtual assistance and online work education for anyone wanting to improve skills, productivity, and civic engagement.',
    url: 'https://YOURDOMAIN.vercel.app',
    siteName: 'Beth G — The Executive VA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beth G — The Executive VA'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">

        {/* HEADER */}
        <header className="bg-black text-white px-6 py-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="font-bold text-xl">Beth G — The Executive VA</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/learn" className="hover:underline">Learn</a>
              <a href="/civic-education" className="hover:underline">Civic Education</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">FAQ & Contact</a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-gray-700 px-6 py-8 mt-20 text-center">
          <p>© {new Date().getFullYear()} Beth G — The Executive VA</p>
          <p>Email: <a href="mailto:Bethgexecutiveva@gmail.com" className="underline">Bethgexecutiveva@gmail.com</a></p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/bethgexecutiveva" target="_blank" className="underline">LinkedIn</a>
            <a href="https://www.instagram.com/bethgexecutiveva" target="_blank" className="underline">Instagram</a>
            <a href="https://x.com/bethexecutiveva" target="_blank" className="underline">X</a>
            <a href="https://www.youtube.com/@BethGExecutiveVA" target="_blank" className="underline">YouTube</a>
            <a href="https://www.tiktok.com/@BETHGEXECUTIVEVA" target="_blank" className="underline">TikTok</a>
            <a href="https://www.facebook.com/beth.g.the.executive.va" target="_blank" className="underline">FB Page</a>
            <a href="https://www.facebook.com/beth.gitongava" target="_blank" className="underline">FB Profile</a>
          </div>
        </footer>

      </body>
    </html>
  );
}

