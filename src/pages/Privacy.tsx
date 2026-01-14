import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, upload a resume, or contact us for support. This may include your name, email address, resume content, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, to process your resume optimizations, to communicate with you about your account, and to respond to your requests and questions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Your resume data is encrypted both in transit and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your resume data for as long as your account is active or as needed to provide you services. You can request deletion of your data at any time through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your personal information. You can also object to processing of your data or request data portability. Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@resumeoptimizer.io.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
