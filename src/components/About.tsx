import { Target, Award, Lightbulb, Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  {
    icon: Award,
    title: "Commitment to quality standards",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Achieving customer satisfaction",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Integrity and reliability",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation and excellence",
    color: "text-primary",
  },
];

export const About = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-24 bg-[#f1eeee]">
      <div className="container px-6 lg:px-8">
        <div ref={ref} className=" mx-auto">
          {/* About Us */}
          <div className={`mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8">
              ABOUT US
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Smart Beams Steel Factory, we believe that the metal industry is not just about 
              products and structures; it is the foundation of industrial development and one of 
              the pillars of the modern renaissance. Since our inception, we have set a clear goal: 
              to provide integrated steel solutions that combine the highest quality standards with 
              the latest technologies, meeting our customers' aspirations & exceeding their expectations.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              With Smart Beams Steel, you don't just receive a product; you gain a partner in success 
              who believes that your satisfaction is our greatest achievement.
            </p>
          </div>

          {/* Our Goal */}
          <div className={`mb-16 ${isInView ? "animate-fade-up delay-100" : "opacity-0"}`}>
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              OUR GOAL
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We strive to provide integrated solutions and services to our clients using the latest 
              innovative technologies, within a work environment that encourages creativity & adheres 
              to the highest quality standards.
            </p>
          </div>

          {/* Our Values */}
          <div className={`${isInView ? "animate-fade-up delay-200" : "opacity-0"}`}>
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-8">
              OUR VALUES
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                  </div>
                  <p className="text-base font-medium text-foreground pt-2">
                    {value.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
