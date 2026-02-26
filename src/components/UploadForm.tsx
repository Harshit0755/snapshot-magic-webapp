import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "./FileUpload";
import EmailDialog from "./EmailDialog";
import DownloadResult from "./DownloadResult";
import { motion } from "framer-motion";
import axios from "axios";

type FormStep = "upload" | "processing" | "result";
type ResultStatus = "success" | "quota_exceeded" | "processing";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [userEmail, setUserEmail] = useState<string>("");

  // Dialog and result states
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [formStep, setFormStep] = useState<FormStep>("upload");
  const [resultStatus, setResultStatus] = useState<ResultStatus>("success");
  const [isPro, setIsPro] = useState(false);
  const [remainingDownloads, setRemainingDownloads] = useState(1);
  const [responseBlob, setresponseBlob] = useState(null);

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  
  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
  };

  const handleJobDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setJobDescription(value);
    setCharacterCount(value.length);
  };

  const handleClear = () => {
    setJobDescription("");
    setCharacterCount(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !jobDescription.trim()) {
      return;
    }
    // Open email dialog instead of submitting directly
    setShowEmailDialog(true);
  };

  const handleEmailSubmit = async (email: string) => {
    setUserEmail(email);
    setIsCheckingEmail(true);

    axios.get(
      "http://localhost:8080/api/resume/status",
      { params: { email } }
    ).then((res)=>{
      const mockResponse = {
        isPro: res.data.pro,
        remainingDownloads: res.data.freeChancesLeft,
        canDownload: res.data.pro || res.data.freeChancesLeft>=0,
      };
  
      setIsPro(mockResponse.isPro);
      setRemainingDownloads(mockResponse.remainingDownloads);
      setIsCheckingEmail(false);
      setShowEmailDialog(false);
  
      // Move to processing step
      setFormStep("processing");
      setActiveStep(2);
  
      // Simulate processing
  
      //await new Promise(resolve => setTimeout(resolve, 2000));
  
      const formData = new FormData();
      formData.append("file", file); // MUST match backend
      formData.append("jd", jobDescription);
  
      // Show result based on user status
      if (res?.data?.freeChancesLeft >= 0 || res?.data?.pro) {
        axios
          .post("http://localhost:8080/api/resume/generate", formData, {
            responseType: "blob", // IMPORTANT (PDF)
          })
          .then((resdata) => {
            setresponseBlob(resdata);
            setResultStatus("success");
            setActiveStep(3);
          })
          .catch((err) => console.log(err));
      } else {
        setResultStatus("quota_exceeded");
        setActiveStep(3);
      }
      setFormStep("result");
    }).catch((err)=>{
      setResultStatus("quota_exceeded");
      setActiveStep(3);
      setIsCheckingEmail(false);
      setShowEmailDialog(false);
      setFormStep("result");
    })
  }
    

    // Simulate API call to check user status
    // In production, this would call your backend API
    //await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock response - replace with actual API call


  const handleDownload = () => {
    // In production, this would trigger the actual file download
    console.log("Downloading optimized resume...");
    // Mock download - create a dummy file download
    const blob = new Blob([responseBlob.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", "optimized-resume.pdf");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleReset = () => {
    setFile(null);
    setJobDescription("");
    setCharacterCount(0);
    setActiveStep(1);
    setFormStep("upload");
    setResultStatus("success");
  };

  const handleUpgrade = async () => {
    const loaded = await loadRazorpayScript();
  
    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }
  
    try {
      const orderRes = await axios.post(
        "http://localhost:8080/api/payment/create-order",
        null,
        { params: { email: userEmail } }
      );
  
      const options = {
        key: orderRes.data.key,
        amount: orderRes.data.amount,
        currency: orderRes.data.currency,
        order_id: orderRes.data.orderId,
        name: "Resume AI Pro Plan",
        description: "Monthly Subscription",
  
        handler: async function (response: any) {
          await axios.post(
            "http://localhost:8080/api/payment/verify",
            {
              ...response,
              email: userEmail,
            }
          );
  
          alert("Pro activated!");
  
          setIsPro(true);
          //setRemainingDownloads(Infinity);
          console.log(userEmail);
          
           axios.get("/api/resume/status", { params: { userEmail } }).then((res)=>{
            setRemainingDownloads(res.data.freeChancesLeft)
            setResultStatus("success");
           })
          
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-xl overflow-hidden"
      style={{backgroundColor:"white"}}>
        <div className="p-8">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {formStep === "upload" && "Upload Your Resume"}
            {formStep === "processing" && "Processing Your Resume"}
            {formStep === "result" && "Your Optimized Resume"}
          </motion.h2>

          {formStep === "upload" && (
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
                <label
                  htmlFor="jobDescription"
                  className="block mb-4 text-lg font-medium"
                >
                  Job Description
                </label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste job description here..."
                  className="min-h-[200px] resize-none border-border focus:border-resume-purple focus:ring-resume-purple/20"
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>{characterCount}/5000 characters</span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-muted-foreground hover:text-foreground"
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
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 flex items-center space-x-2"
                  disabled={!file || !jobDescription.trim()}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13.9393L4 15M13.9393 5.06066L15 4M12 7V13L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 10.5858C5 8.71857 6.21212 7.14795 7.9202 6.67346C9.62827 6.19897 11.4599 6.9025 12.4142 8.41421C13.3685 9.92591 13.1778 11.8744 11.9202 13.1744C10.6626 14.4744 8.71244 14.7071 7.16795 13.7958L5 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Analyze & Generate</span>
                </Button>
              </motion.div>
            </form>
          )}

          {formStep === "processing" && <DownloadResult status="processing" />}

          {formStep === "result" && (
            <DownloadResult
              status={resultStatus}
              isPro={isPro}
              remainingDownloads={remainingDownloads}
              onDownload={handleDownload}
              onReset={handleReset}
              onUpgrade={handleUpgrade}
            />
          )}

          <motion.div
            className="flex justify-center mt-8 border-t border-border pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex space-x-12 text-sm">
              <div className="flex items-center">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center ${
                    activeStep >= 1
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-muted-foreground">Upload</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center ${
                    activeStep >= 2
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-muted-foreground">Analyze</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center ${
                    activeStep >= 3
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-muted-foreground">Generate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <EmailDialog
        open={showEmailDialog}
        onOpenChange={setShowEmailDialog}
        onSubmit={handleEmailSubmit}
        isLoading={isCheckingEmail}
      />
    </section>
  );
};

export default UploadForm;
