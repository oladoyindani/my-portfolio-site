
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WorkGrid />
      <About />
      <Contact />
      <Toaster position="top-right" />
    </main>
  );
};

export default Index;
