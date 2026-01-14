import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-muted-foreground text-lg">
              Help us revolutionize how people present themselves to the world. We're always looking for talented individuals who share our passion for helping job seekers succeed.
            </p>
          </motion.div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                className="bg-card p-6 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div>
                  <h3 className="text-lg font-semibold">{position.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {position.department} • {position.location} • {position.type}
                  </p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-muted p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Don't see a role that fits?</h3>
            <p className="text-muted-foreground mb-4">
              We're always interested in hearing from talented people. Send us your resume!
            </p>
            <Button>Send General Application</Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
