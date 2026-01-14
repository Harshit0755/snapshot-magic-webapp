import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Updates = () => {
  const updates = [
    {
      date: "January 2024",
      title: "AI Engine 3.0 Release",
      description: "Major improvements to our AI analysis engine, resulting in 40% more accurate suggestions and better ATS compatibility scoring."
    },
    {
      date: "December 2023",
      title: "New Template Library",
      description: "Added 25 new professionally designed resume templates, including specialized formats for tech, creative, and executive roles."
    },
    {
      date: "November 2023",
      title: "Job Description Matching",
      description: "New feature that analyzes job descriptions and provides tailored recommendations to align your resume with specific roles."
    },
    {
      date: "October 2023",
      title: "Resume Score Dashboard",
      description: "Track your resume improvements over time with our new comprehensive scoring dashboard and analytics."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Updates</h1>
            <p className="text-muted-foreground text-lg">
              Stay up to date with the latest features and improvements.
            </p>
          </motion.div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <motion.div
                key={update.title}
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-sm text-muted-foreground">{update.date}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{update.title}</h3>
                <p className="text-muted-foreground">{update.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
