
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume <span className="text-resume-purple">Optimizer</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-powered resume tailoring for your dream job
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-resume-lightPurple rounded-xl p-6 flex flex-col items-center transition-transform hover:scale-105">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-medium mb-1">Fast Analysis</h3>
            <p className="text-sm text-gray-600">Get results in seconds</p>
          </div>
          
          <div className="bg-resume-lightBlue rounded-xl p-6 flex flex-col items-center transition-transform hover:scale-105">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-medium mb-1">AI-Powered</h3>
            <p className="text-sm text-gray-600">Smart keyword matching</p>
          </div>
          
          <div className="bg-resume-lightGreen rounded-xl p-6 flex flex-col items-center transition-transform hover:scale-105">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-medium mb-1">Higher Success</h3>
            <p className="text-sm text-gray-600">Improve interview chances</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
