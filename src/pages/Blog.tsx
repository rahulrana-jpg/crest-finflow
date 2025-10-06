import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Digital Payments in 2025",
    excerpt: "Explore the emerging trends shaping the future of digital payments and how businesses can stay ahead.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
  },
  {
    title: "Security Best Practices for Fintech Companies",
    excerpt: "Essential security measures every fintech company should implement to protect customer data.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Security",
  },
  {
    title: "How AI is Transforming Financial Services",
    excerpt: "Discover how artificial intelligence is revolutionizing fraud detection, customer service, and more.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    title: "Global Payment Solutions: A Complete Guide",
    excerpt: "Everything you need to know about accepting international payments and expanding globally.",
    date: "February 28, 2024",
    readTime: "10 min read",
    category: "Guides",
  },
  {
    title: "Building Trust in Digital Banking",
    excerpt: "How transparency and security create lasting customer relationships in the digital age.",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "Customer Success",
  },
  {
    title: "The Rise of Embedded Finance",
    excerpt: "Why non-financial companies are integrating financial services into their platforms.",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Industry Insights",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Insights, updates, and resources for the modern fintech landscape
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] cursor-pointer border-border bg-card"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
