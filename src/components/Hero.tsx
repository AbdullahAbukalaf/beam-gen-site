import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Smart Beams Steel Factory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      {/* Diamond decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rotate-45 blur-2xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-accent/30 rotate-45 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-8 py-20">
        <div className="max-w-4xl animate-fade-up">
          {/* Logo/Brand Name */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              SBSIF
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Smart Beams Steel Industrials Factory
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 leading-tight">
            QUALITY,
            <br />
            PRECISION,
            <br />
            TRUST
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            FOR STEEL FABRICATION
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-medium">
            & SHEAR STUD SOLUTIONS
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm shadow-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
