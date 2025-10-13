// src/pages/ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services.data";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-black mb-4">Service not found</h1>
        <Link to="/#services" className="text-primary underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-secondary mb-6">
          {service.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow"
            loading="lazy"
          />

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <Link to="/#services" className="inline-block text-primary font-semibold hover:underline">
              ← Back to all services
            </Link>
          </div>
        </div>

        {/* Optional: add static sections unique to each service if needed */}
        {/* e.g., features, FAQ, gallery — keyed by service.slug */}
      </div>
    </section>
  );
}
