import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Services I Offer
        </h1>
        <p className="mt-6 text-center text-gray-600 text-lg md:text-xl">
          I provide professional Virtual Assistant services, online guidance, and digital support
          to help you streamline your work and grow your online presence.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h2 className="text-xl font-semibold">Calendar Management</h2>
            <p className="mt-2 text-gray-600">
              Organize your schedule, appointments, and reminders efficiently.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Gmail & Email Management</h2>
            <p className="mt-2 text-gray-600">
              Keep your inbox organized, respond to emails, and manage communication professionally.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Travel & Booking</h2>
            <p className="mt-2 text-gray-600">
              Book flights, accommodations, and manage travel itineraries seamlessly.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Data Entry</h2>
            <p className="mt-2 text-gray-600">
              Accurate and efficient data entry and management for your business needs.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Project Management</h2>
            <p className="mt-2 text-gray-600">
              Track projects, deadlines, and collaborate effectively with your team.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Research & Analysis</h2>
            <p className="mt-2 text-gray-600">
              In-depth online research, market insights, and reporting to support your decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
