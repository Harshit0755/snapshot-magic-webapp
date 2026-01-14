import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <Link to="/" className="flex items-center">
        <div className="h-9 w-9 bg-gray-200 rounded mr-2 flex items-center justify-center text-xs font-medium text-gray-600">
          .io
        </div>
        <span className="font-medium text-lg">Resume Optimizer</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
        <Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
        <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
      </div>
      
      <Button className="bg-black text-white hover:bg-black/90">Get Started</Button>
    </nav>
  );
};

export default NavBar;
