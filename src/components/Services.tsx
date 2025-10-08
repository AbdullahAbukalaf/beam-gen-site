import { Zap, Settings, Wrench } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    number: "1",
    icon: Settings,
    title: "Design, Manufacturing & Painting",
    description:
      "We are your comprehensive partner in structural steel excellence. From initial design and precise manufacturing to advanced protective painting, we manage the entire process with meticulous accuracy and exceptional quality.",
  },
  {
    number: "2",
    icon: Zap,
    title: "CNC Laser Cutting",
    description:
      "CNC laser cutting with extreme precision. Specialized in sheet metal cutting with high thickness, art metal cutting, punching and laser combination, panel bending, corner forming, engraving, and laser marking.",
  },
  {
    number: "3",
    icon: Wrench,
    title: "Shear Stud Solutions",
    description:
      "Manufacturing, supply & welding of shear studs on-site using the latest specialized machinery. Significantly enhance the strength of connections in steel beams and concrete columns.",
  },
];

const materials = [
  { name: "Carbon Steel", color: "bg-secondary" },
  { name: "Stainless Steel", color: "bg-primary" },
  { name: "Aluminum", color: "bg-accent" },
  { name: "Hardox", color: "bg-secondary" },
  { name: "Super Duplex", color: "bg-primary" },
  { name: "Brass", color: "bg-accent" },
];

export const Services = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div ref={ref} className={` mx-auto ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 text-center">
            OUR SERVICES
          </h2>
          <p className="text-lg text-dark text-center mb-16">
            We offer a wide range of products & services in the field of steel structures, 
            carefully designed to suit various industrial applications
          </p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-card border border-border p-8 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${
                  isInView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rotate-45" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Materials */}
          <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">
              SERVICES FOR THE FOLLOWING MATERIALS
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full border-2 border-border bg-card hover:border-primary hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default"
                >
                  <span className="font-semibold text-foreground">
                    {material.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
