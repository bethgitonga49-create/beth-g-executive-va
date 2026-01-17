import Link from "next/link";

export default function BlogPage() {
  // Placeholder posts
  const posts = [
    {
      id: 1,
      title: "Getting Started with AI Tools",
      excerpt: "Learn how AI can boost productivity and simplify tasks in your online work.",
      slug: "getting-started-with-ai-tools"
    },
    {
      id: 2,
      title: "Top Freelance Platforms in 2026",
      excerpt: "Discover the best platforms to find remote work opportunities online.",
      slug: "top-freelance-platforms-2026"
    },
    {
      id: 3,
      title: "Civic Education Made Simple",
      excerpt: "Understand your rights, responsibilities, and how to actively participate in society.",
      slug: "civic-education-made-simple"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Blog</h1>
      <p className="mt-4 text-center text-gray-600 text-lg md:text-xl">
        Insights, guides, and tutorials on online work, AI tools, and civic education.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
