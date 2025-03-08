
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Resume",
      description: "Submit your current resume in PDF format"
    },
    {
      number: 2,
      title: "Add Job Description",
      description: "Paste the job posting you're targeting"
    },
    {
      number: 3,
      title: "Get Optimized Results",
      description: "Receive your tailored resume with enhanced matching"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
          <motion.div 
            className="bg-gray-100 rounded-lg w-full max-w-md aspect-[4/3] flex items-center justify-center text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Image</span>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 md:pl-12">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number} 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="mr-4 mt-1">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
