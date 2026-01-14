import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-6">
                Resume Optimizer was founded with a simple mission: to help job seekers present their best selves to potential employers. We believe that everyone deserves a fair chance at their dream job, and a well-crafted resume is the first step.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We're on a mission to democratize access to professional resume optimization. Using cutting-edge AI technology, we provide the same level of expertise that was once only available through expensive career coaches.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Started in 2024, Resume Optimizer has helped thousands of job seekers land interviews at top companies. Our team combines expertise in AI, human resources, and career coaching to deliver the best possible resume optimization experience.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• <strong>Transparency:</strong> We believe in honest, clear communication about what our service can do.</li>
                <li>• <strong>Accessibility:</strong> Great resume help should be available to everyone, not just those who can afford expensive consultants.</li>
                <li>• <strong>Innovation:</strong> We continuously improve our AI to provide the most relevant and helpful suggestions.</li>
                <li>• <strong>Privacy:</strong> Your resume contains sensitive information. We treat it with the utmost care and respect.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
