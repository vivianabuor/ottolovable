import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import EarlyAccess from "@/components/EarlyAccess";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <EarlyAccess />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
