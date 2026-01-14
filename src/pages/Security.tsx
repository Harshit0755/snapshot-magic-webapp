import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transmitted between your browser and our servers is encrypted using TLS 1.3."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our servers are hosted in SOC 2 Type II compliant data centers with 24/7 monitoring."
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "We follow privacy-by-design principles and minimize data collection to what's necessary."
    },
    {
      icon: Shield,
      title: "Regular Security Audits",
      description: "We conduct regular third-party security audits and penetration testing."
    }
  ];

  const certifications = [
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "CCPA Compliant",
    "ISO 27001 Certified"
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
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your resume contains sensitive personal information. We take its security seriously and have implemented multiple layers of protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-muted p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Certifications & Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 bg-background p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-muted-foreground">
              Have security concerns? Contact our security team at{" "}
              <a href="mailto:security@resumeoptimizer.io" className="text-primary hover:underline">
                security@resumeoptimizer.io
              </a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
