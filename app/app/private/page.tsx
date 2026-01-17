import Link from "next/link";

export default function PrivatePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Private Content</h1>
      <p className="text-center text-gray-600 mb-12">
        This page is reserved for exclusive courses, consulting, and premium content. Access is granted after booking or subscription.
      </p>

      {/* Payment / Booking CTA */}
      <div className="text-center">
        <a
          href="https://flutterwave.com/pay/YOUR_LINK"
          className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
        >
          Pay & Access Content
        </a>
      </div>

      {/* Optional instructions */}
      <p className="mt-12 text-center text-gray-500 text-sm">
        After payment, you will receive access instructions via email.
      </p>
    </main>
  );
}
