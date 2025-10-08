import { Building, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Target, Award, Lightbulb, Shield } from "lucide-react";
const clients = [
  { name: "ZAMIL STEEL CRAFT", icon: Target },
  { name: "AL-BABTAIN POWER & TELECOM", icon: Award },
  { name: "WESCOSA", icon: Lightbulb },
  { name: "INT'L BUILDING SYSTEMS FACTORY CO. LTD.", icon: Shield },
  { name: "NADEC", icon: Target },
  { name: "General Entertainment Authority", icon: Award },
  { name: "ARCHITECTURAL OASIS", icon: Lightbulb },
  { name: "RIYADH METRO", icon: Shield },
  { name: "ORASCOM CONSTRUCTION", icon: Target },
  { name: "NUPOCO", icon: Award },
  { name: "Al Kuhaimi Group", icon: Lightbulb },
  { name: "Arabian Transformers Co.", icon: Shield },
  { name: "STEEL INDUSTRIES", icon: Target },
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
        <div ref={ref} className="] mx-auto">
          {/* Clients */}
          <div className={`mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 text-center">
              OUR CLIENTS
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Trusted by industry leaders across the Kingdom
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 grayscale hover:grayscale-0 ${isInView ? "animate-scale-in" : "opacity-0"
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-center justify-center h-16 gap-2">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary/80" />
                      <p className="text-xs font-bold text-center text-foreground/60 group-hover:text-foreground uppercase tracking-wider line-clamp-3">
                        {client.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-8 text-center">
              CERTIFICATIONS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-5 rounded-lg bg-primary/10 border-2 border-primary/30 hover:border-primary hover:bg-primary/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
