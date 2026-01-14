export default function Learn() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Online Skills & Tools</h1>
        <p className="text-lg md:text-xl">
          Practical guidance for anyone interested in working online, using AI tools, and improving productivity.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Getting Started Online</h3>
          <p>Step-by-step guidance for beginners to start working online confidently.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">AI Tools & Productivity</h3>
          <p>Learn how to leverage AI tools and other digital resources to save time and improve results.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Digital Organization</h3>
          <p>Tips to stay organized, track tasks, and manage digital workflows efficiently.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Online Safety & Best Practices</h3>
          <p>Guidance on using online tools safely, responsibly, and effectively.</p>
        </div>
      </section>
    </main>
  );
}
