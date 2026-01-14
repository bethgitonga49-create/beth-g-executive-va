export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-lg md:text-xl">
          I provide reliable, detail-oriented support tailored to busy professionals and organizations.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Calendar Management</h3>
          <p>Organizing schedules, reminders, and appointments so you never miss a task.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Gmail Inbox Management</h3>
          <p>Sorting, responding, and decluttering your inbox efficiently.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Travel & Booking</h3>
          <p>Managing flights, accommodations, and itineraries for seamless travel.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Data Entry & Project Management</h3>
          <p>Accurate data handling and task coordination for your projects.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Online Research</h3>
          <p>Providing clear and organized findings for informed decision-making.</p>
        </div>
      </section>
    </main>
  );
}
