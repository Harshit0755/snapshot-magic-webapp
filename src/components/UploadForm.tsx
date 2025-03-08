
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from './FileUpload';
import { motion } from "framer-motion";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  
  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
  };
  
  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJobDescription(value);
    setCharacterCount(value.length);
  };
  
  const handleClear = () => {
    setJobDescription('');
    setCharacterCount(0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', { file, jobDescription });
    // In a real app, this would send the data to the backend
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upload Your Resume
          </motion.h2>
          
          <form onSubmit={handleSubmit}>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FileUpload onFileChange={handleFileChange} />
            </motion.div>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="jobDescription" className="block mb-4 text-lg font-medium">
                Job Description
              </label>
              <Textarea
                id="jobDescription"
                placeholder="Paste job description here..."
                className="min-h-[200px] resize-none border-gray-300 focus:border-resume-purple focus:ring-resume-purple/20"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{characterCount}/5000 characters</span>
                <button 
                  type="button" 
                  onClick={handleClear}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                type="submit" 
                className="bg-black hover:bg-black/90 px-8 py-6 flex items-center space-x-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13.9393L4 15M13.9393 5.06066L15 4M12 7V13L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 10.5858C5 8.71857 6.21212 7.14795 7.9202 6.67346C9.62827 6.19897 11.4599 6.9025 12.4142 8.41421C13.3685 9.92591 13.1778 11.8744 11.9202 13.1744C10.6626 14.4744 8.71244 14.7071 7.16795 13.7958L5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Analyze & Generate</span>
              </Button>
            </motion.div>
          </form>
          
          <motion.div 
            className="flex justify-center mt-8 border-t pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex space-x-12 text-sm">
              <div className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="ml-2 text-gray-600">Upload</span>
              </div>
              
              <div className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="ml-2 text-gray-600">Analyze</span>
              </div>
              
              <div className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="ml-2 text-gray-600">Generate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UploadForm;
