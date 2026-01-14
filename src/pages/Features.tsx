import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Target, Zap, Shield, BarChart, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered Analysis",
      description: "Our advanced AI scans your resume and identifies areas for improvement, ensuring you present your best self to potential employers."
    },
    {
      icon: Target,
      title: "Job Matching",
      description: "Upload a job description and get tailored suggestions to align your resume with specific role requirements."
    },
    {
      icon: Zap,
      title: "Instant Optimization",
      description: "Get real-time suggestions and improvements. No waiting, no delays - just immediate, actionable feedback."
    },
    {
      icon: Shield,
      title: "ATS Compatibility",
      description: "Ensure your resume passes through Applicant Tracking Systems with our ATS-friendly formatting recommendations."
    },
    {
      icon: BarChart,
      title: "Score Tracking",
      description: "Track your resume's improvement over time with our comprehensive scoring system and analytics."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your optimized resume in minutes, not days. Perfect for time-sensitive job applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to create a standout resume that gets you noticed by employers and passes ATS systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
