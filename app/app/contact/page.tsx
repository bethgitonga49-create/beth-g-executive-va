export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Contact & FAQ</h1>
      <p className="text-gray-600 text-center mb-10">
        Have a question or want to book a session? Reach out or browse through frequently asked questions.
      </p>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              How can I book a consultation?
            </summary>
            <p className="mt-2 text-gray-600">
              You can book via the "Book a Consultation" button on the Services or Learn pages, or directly through our contact form below.
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              What payment methods do you accept?
            </summary>
            <p className="mt-2 text-gray-600">
              Payments are processed securely via Flutterwave or other integrated online payment links.
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Can I schedule private sessions?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes! Private sessions are available. Please contact us to schedule your preferred time slot.
            </p>
          </details>
        </div>
      </section>

      {/* Contact & Newsletter Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Send a Message / Subscribe</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Send Message / Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
