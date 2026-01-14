import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Beth G — The Executive VA',
  description: 'Executive Virtual Assistance, online skills education, and youth digital empowerment',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <header className="bg-black text-white px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="font-bold text-xl">Beth G — The Executive VA</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/learn" className="hover:underline">Learn</a>
              <a href="/civic-education" className="hover:underline">Civic Education</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-100 text-gray-700 px-6 py-6 mt-20 text-center">
          © {new Date().getFullYear()} Beth G — The Executive VA | 
          Email: <a href="mailto:Bethgexecutiveva@gmail.com" className="underline">Bethgexecutiveva@gmail.com</a>
        </footer>
      </body>
    </html>
  );
}
