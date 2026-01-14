import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, FileText, CreditCard, Settings, User, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const HelpCenter = () => {
  const categories = [
    {
      icon: FileText,
      title: "Getting Started",
      articles: ["How to upload your resume", "Understanding your resume score", "Using the optimizer"]
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      articles: ["Managing your subscription", "Payment methods", "Refund policy"]
    },
    {
      icon: Settings,
      title: "Account Settings",
      articles: ["Updating your profile", "Changing your password", "Deleting your account"]
    },
    {
      icon: User,
      title: "Privacy & Security",
      articles: ["How we protect your data", "Data retention policy", "GDPR compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to your questions and learn how to get the most out of Resume Optimizer.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-muted p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
