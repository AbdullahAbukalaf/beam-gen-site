import { Building2, Users, Package } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/card";

const projects = [
  {
    name: "EMC PROJECT",
    client: "ZAMIL TRADE & SERVICE",
    scope: "Fabrication, Painting & delivery",
    tonnage: "100 T",
  },
  {
    name: "AL-JOUF AIRPORT DEVELOPMENT",
    client: "METCO",
    scope: "Fabrication, Painting & delivery",
    tonnage: "250 T",
  },
  {
    name: "Golden Dunes",
    client: "CRAFT",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "240 T",
  },
  {
    name: "Babtain Power & Telecom",
    client: "Al-Babtain Power & Telecom",
    scope: "CNC Laser cutting",
    tonnage: "1,350 T",
  },
  {
    name: "SHURA ISLAND",
    client: "KIFAH PRECAST",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "320 T",
  },
  {
    name: "FEEDMILL & WAREHOUSE",
    client: "NADEC",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "110 T",
  },
];

export const Projects = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container px-6 lg:px-8">
        <div ref={ref} className={`${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 text-center">
            OUR PROJECTS
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Delivering excellence across diverse industries with proven track record
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-l-4 border-l-primary ${
                  isInView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Package className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Scope:</span>
                      <span>{project.scope}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Total Tonnage
                      </span>
                      <span className="text-2xl font-black text-primary">
                        {project.tonnage}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
