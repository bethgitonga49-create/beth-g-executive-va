import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Learn & Grow Online
        </h1>
        <p className="mt-6 text-center text-gray-600 text-lg md:text-xl">
          Explore practical guides, tutorials, and tips for working online, using AI tools,
          digital productivity, and building your online presence.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h2 className="text-xl font-semibold">AI Tools Mastery</h2>
            <p className="mt-2 text-gray-600">
              Learn how to use AI tools to automate tasks, research, and increase efficiency.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Working Online Basics</h2>
            <p className="mt-2 text-gray-600">
              Step-by-step guidance for beginners on finding remote jobs, freelancing, and digital work.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Productivity & Workflow</h2>
            <p className="mt-2 text-gray-600">
              Tips, tools, and systems to stay organized and productive while working online.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Job Sites & Opportunities</h2>
            <p className="mt-2 text-gray-600">
              Guidance on the best sites to find online jobs, freelancing platforms, and digital gigs.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Online Safety</h2>
            <p className="mt-2 text-gray-600">
              Learn how to avoid scams, protect personal information, and work safely online.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Workshops & Tutorials</h2>
            <p className="mt-2 text-gray-600">
              Live and recorded sessions on practical digital skills, OBS, and online tools.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Join a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
