import { notFound } from "next/navigation";

interface Post {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
}

// Placeholder posts (can later fetch from a CMS)
const posts: Post[] = [
  {
    slug: "getting-started-with-ai-tools",
    title: "Getting Started with AI Tools",
    excerpt: "Learn how AI can boost productivity and simplify tasks in your online work.",
    content: `
      <p>AI tools can automate repetitive tasks, assist with research, and help you focus on high-value work. 
      Some popular AI tools include ChatGPT, Runway, and Notion AI.</p>
    `,
  },
  {
    slug: "top-freelance-platforms-2026",
    title: "Top Freelance Platforms in 2026",
    excerpt: "Discover the best platforms to find remote work opportunities online.",
    content: `
      <p>Popular platforms include Upwork, Fiverr, Freelancer, and specialized marketplaces. 
      Learn how to create strong profiles, proposals, and deliver top-quality work.</p>
    `,
  },
  {
    slug: "civic-education-made-simple",
    title: "Civic Education Made Simple",
    excerpt: "Understand your rights, responsibilities, and how to actively participate in society.",
    content: `
      <p>Civic education is about understanding your rights and responsibilities, participating in elections, 
      engaging in community activities, and making informed decisions.</p>
    `,
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.excerpt}</p>
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
