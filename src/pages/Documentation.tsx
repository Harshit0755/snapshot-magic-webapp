import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Book, Code, Zap, Shield } from "lucide-react";

const Documentation = () => {
  const sections = [
    {
      icon: Book,
      title: "Introduction",
      description: "Learn the basics of Resume Optimizer and how to get started.",
      items: ["Overview", "Quick Start Guide", "Key Concepts"]
    },
    {
      icon: Zap,
      title: "Features",
      description: "Detailed documentation on all features and capabilities.",
      items: ["Resume Analysis", "Job Matching", "ATS Optimization", "Templates"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "For developers integrating Resume Optimizer into their applications.",
      items: ["Authentication", "Endpoints", "Rate Limits", "Webhooks"]
    },
    {
      icon: Shield,
      title: "Best Practices",
      description: "Tips and recommendations for getting the best results.",
      items: ["Resume Writing Tips", "Keyword Optimization", "Formatting Guidelines"]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about using Resume Optimizer effectively.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <section.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {section.items.map((item) => (
                        <li key={item}>
                          <a href="#" className="text-sm text-primary hover:underline">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
