import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
