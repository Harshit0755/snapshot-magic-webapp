
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import UploadForm from '@/components/UploadForm';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const controls = useAnimation();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    if (location.state?.scrollToUpload) {
      setTimeout(() => {
        document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 700);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <UploadForm />
      <Footer />
    </motion.div>
  );
};

export default Index;
