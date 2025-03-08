
import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Updates"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"]
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Documentation"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-medium mb-4 text-gray-800">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          © 2024 Resume Optimizer. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
