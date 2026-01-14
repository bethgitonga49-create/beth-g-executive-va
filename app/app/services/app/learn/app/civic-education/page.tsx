export default function CivicEducation() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Civic Education</h1>
        <p className="text-lg md:text-xl">
          Guidance on digital literacy, online awareness, beneficial tools, responsible internet use, and civic participation for everyone — especially timely during the general elections.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Digital Literacy</h3>
          <p>Learn how to navigate the digital world responsibly and effectively.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Civic Awareness</h3>
          <p>Understand your rights, responsibilities, and how to participate in civic life.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Beneficial Tools</h3>
          <p>Access online tools that help you stay informed and organized.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-2xl mb-2">Responsible Internet Use</h3>
          <p>Tips to use the internet safely, ethically, and productively.</p>
        </div>
      </section>
    </main>
  );
}
