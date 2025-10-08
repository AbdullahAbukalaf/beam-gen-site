import { Building, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const clients = [
  "ZAMIL STEEL CRAFT",
  "AL-BABTAIN POWER & TELECOM",
  "WESCOSA",
  "INT'L BUILDING SYSTEMS FACTORY CO. LTD.",
  "NADEC",
  "General Entertainment Authority",
  "ARCHITECTURAL OASIS",
  "RIYADH METRO",
  "ORASCOM CONSTRUCTION",
  "NUPOCO",
  "Al Kuhaimi Group",
  "Arabian Transformers Co.",
  "STEEL INDUSTRIES",
];

const certifications = [
  "ISO 9001:2015 - Quality Management System",
  "ISO 14001:2015 - Environmental Management System",
  "Design & Steel Fabrication Certified",
  "CNC Laser Cutting Excellence",
];

export const Clients = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div ref={ref}>
          {/* Clients */}
          <div className={`mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 text-center">
              OUR CLIENTS
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Trusted by industry leaders across the Kingdom
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 ${
                    isInView ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground line-clamp-2">
                      {client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`max-w-4xl mx-auto ${isInView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-8 text-center">
              CERTIFICATIONS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
