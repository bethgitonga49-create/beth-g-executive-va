import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (<>
  <Head>
    <title>Beth G - The Executive VA | Online Skills & Civic Education</title>
    <meta
      name="description"
      content="Learn online skills, AI tools, remote work tips, civic education, and blog insights with Beth G, The Executive VA."
    />
    <meta property="og:title" content="Beth G - The Executive VA" />
    <meta
      property="og:description"
      content="Online skills, blog, civic education, and guidance for working online."
    />
    <meta property="og:type" content="website" />
  </Head>

    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Beth G — The Executive VA
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Empowering individuals to work online, master digital tools,
          understand civic education, and build sustainable income in the
          digital world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/learn"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Start Learning
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition"
          >
            Work With Me
          </Link>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What I Help You With
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">Online Skills & Tools</h3>
            <p className="mt-3 text-gray-600">
              Learn practical digital tools, AI platforms, productivity systems,
              and online workflows for real-world use.
            </p>
          </div>

          <div className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">Work Online Guidance</h3>
            <p className="mt-3 text-gray-600">
              Clear guidance on working online, finding opportunities,
              avoiding scams, and building digital confidence.
            </p>
          </div>

          <div className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">Civic Education</h3>
            <p className="mt-3 text-gray-600">
              Simple, clear civic education for everyone — rights,
              responsibilities, governance, and informed participation.
            </p>
          </div>
        </div>
      </section>

      {/* TEACHING & IMPACT */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Teaching for Impact
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            I teach Virtual Assistants, beginners, job seekers, and anyone
            struggling to navigate the online world — with a strong focus on
            ethical growth, civic awareness, and sustainable digital income.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-gray-600">
          Explore learning resources, book a consultation, or follow my work.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Read the Blog
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
 </main>
</>
);
}

