
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WorkGrid />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
