import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Crown, AlertCircle, Pointer } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface DownloadResultProps {
  status: 'success' | 'quota_exceeded' | 'processing';
  isPro?: boolean;
  remainingDownloads?: number;
  onDownload?: () => void;
  onReset?: () => void;
  onUpgrade?: () => void;
}

const DownloadResult = ({ 
  status, 
  isPro = false, 
  remainingDownloads = 0,
  onDownload,
  onReset,
  onUpgrade
}: DownloadResultProps) => {
  
  if (status === 'processing') {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-resume-purple/10 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-resume-purple border-t-transparent rounded-full animate-spin" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Optimizing Your Resume</h3>
        <p className="text-muted-foreground">
          Our AI is tailoring your resume to match the job description...
        </p>
      </motion.div>
    );
  }

  if (status === 'quota_exceeded') {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
          <AlertCircle className="h-8 w-8 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Monthly Limit Reached</h3>
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
          You've used your free download for this month. Upgrade to Pro for unlimited resume optimizations!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onUpgrade} className="bg-resume-purple hover:bg-resume-purple/90 gap-2">
              <Crown className="h-4 w-4" />
              Upgrade to Pro
            </Button>
{/*           <Button variant="outline" onClick={onReset}>
            Try Different Resume
          </Button> */}
        </div>
        
        <p className="text-xs text-muted-foreground mt-6">
          Pro members enjoy unlimited downloads, priority processing, and premium templates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Your Resume is Ready!</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        We've optimized your resume to match the job description. Download it now!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onDownload}
          className="bg-resume-purple hover:bg-resume-purple/90 gap-2"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
        <Button variant="outline" onClick={onReset}>
          Optimize Another
        </Button>
      </div>
      
      {(!isPro || remainingDownloads<=-1) && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg max-w-sm mx-auto">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{remainingDownloads}</span> free download{remainingDownloads !== 1 ? 's' : ''} remaining this month.{' '}
            <span onClick={onUpgrade} style={{cursor:"pointer"}} className="text-resume-purple hover:underline font-medium">
              Upgrade to Pro
            </span>{' '}
            for unlimited access.
          </p>
        </div>
      )}
      
      {isPro && (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-resume-purple">
          <Crown className="h-4 w-4" />
          <span className="font-medium">Pro Member - Unlimited Downloads</span>
        </div>
      )}
    </motion.div>
  );
};

export default DownloadResult;
