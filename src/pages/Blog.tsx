import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "10 Resume Mistakes That Are Costing You Interviews",
      excerpt: "Learn about the most common resume mistakes and how to avoid them to increase your chances of landing interviews.",
      date: "January 10, 2024",
      readTime: "5 min read"
    },
    {
      title: "How to Optimize Your Resume for ATS Systems",
      excerpt: "A comprehensive guide to understanding and beating Applicant Tracking Systems with your resume.",
      date: "January 5, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Power of Action Verbs in Your Resume",
      excerpt: "Discover how using strong action verbs can transform your resume and make your achievements stand out.",
      date: "December 28, 2023",
      readTime: "4 min read"
    },
    {
      title: "Remote Job Applications: What's Different?",
      excerpt: "Tips and strategies for crafting a resume that appeals to remote-first companies.",
      date: "December 20, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Tips, insights, and strategies to help you land your dream job.
            </p>
          </motion.div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-card p-6 rounded-xl border cursor-pointer hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
