export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Beth G — The Executive VA
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Executive Virtual Assistance • Online Work Education • Digital Empowerment
        </p>

        <p className="max-w-3xl mx-auto mb-10">
          I help executives and businesses stay organized through professional
          virtual assistance — while also teaching individuals, beginners, and
          youth how to work online, use digital tools, and build practical
          digital skills.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Work With Me
          </a>
          <a
            href="/learn"
            className="border border-black px-6 py-3 rounded-lg"
          >
            Learn Digital Skills
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-xl mb-2">Executive VA Services</h3>
          <p>
            Calendar management, inbox organization, travel booking, data entry,
            project coordination, and online research.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">Online Skills Education</h3>
          <p>
            Beginner-friendly guidance on working online, AI tools, productivity
            tools, and digital organization for anyone.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">Youth & Civic Empowerment</h3>
          <p>
            Digital literacy, online awareness, beneficial tools, and responsible
            internet use for youth and communities.
          </p>
        </div>
      </section>
    </main>
  );
}
