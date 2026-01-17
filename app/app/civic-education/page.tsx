import Link from "next/link";

export default function CivicEducationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Civic Education for Everyone
        </h1>
        <p className="mt-6 text-center text-gray-600 text-lg md:text-xl">
          Learn about your rights, responsibilities, governance, and how to participate effectively in society.
          Clear guidance for all ages, especially in times of elections.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h2 className="text-xl font-semibold">Your Rights & Duties</h2>
            <p className="mt-2 text-gray-600">
              Understand your civic rights and responsibilities, and how to exercise them.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Government & Governance</h2>
            <p className="mt-2 text-gray-600">
              Learn how governments work, key structures, and how to engage with them effectively.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Voting & Elections</h2>
            <p className="mt-2 text-gray-600">
              Guidance on participating responsibly in elections, understanding candidates, and making informed decisions.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Youth & Civic Engagement</h2>
            <p className="mt-2 text-gray-600">
              Inspiring young people to participate ethically in civic matters while learning from past mistakes.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Community & Social Impact</h2>
            <p className="mt-2 text-gray-600">
              Learn how to make a positive difference in your community through volunteering, awareness, and digital advocacy.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Resources & Tools</h2>
            <p className="mt-2 text-gray-600">
              Access practical resources, websites, and guides for civic education and participation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Ask a Question / Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
