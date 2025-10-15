// src/pages/ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services.data";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-secondary mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The service you're looking for doesn't exist.
        </p>
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all services
        </Link>

        {/* Service Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-black text-primary/20">
              {service.number}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-secondary">
              {service.title}
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              {tag}
            </span>
          ))}
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
            loading="eager"
          />
        </div>

        {/* Gallery Section */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-black text-secondary mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {service.galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`${service.title} - Image ${idx + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">View Image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Features (Optional - Customize per service) */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-black text-secondary mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.slug === "design-manufacturing" && (
              <>
                <FeatureItem
                  title="Complete Solutions"
                  description="From concept to completion, we handle every stage of your project."
                />
                <FeatureItem
                  title="Quality Assurance"
                  description="Rigorous testing and inspection ensure the highest standards."
                />
                <FeatureItem
                  title="Advanced Painting"
                  description="Protective coatings that extend the life of your structures."
                />
                <FeatureItem
                  title="Expert Team"
                  description="Skilled professionals with decades of combined experience."
                />
              </>
            )}
            {service.slug === "cnc-laser-cutting" && (
              <>
                <FeatureItem
                  title="Precision Engineering"
                  description="Accuracy within microns for perfect results every time."
                />
                <FeatureItem
                  title="High-Speed Processing"
                  description="Rapid turnaround without compromising quality."
                />
                <FeatureItem
                  title="Material Versatility"
                  description="Cut various metals and thicknesses with ease."
                />
                <FeatureItem
                  title="Complex Designs"
                  description="Handle intricate patterns and artistic metal work."
                />
              </>
            )}
            {service.slug === "shear-stud-solutions" && (
              <>
                <FeatureItem
                  title="On-Site Service"
                  description="We bring our specialized equipment directly to your location."
                />
                <FeatureItem
                  title="Structural Integrity"
                  description="Enhance connections for maximum strength and safety."
                />
                <FeatureItem
                  title="Latest Technology"
                  description="State-of-the-art welding machinery for optimal results."
                />
                <FeatureItem
                  title="Experienced Crew"
                  description="Certified welders with extensive field experience."
                />
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-secondary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free quote.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

// Feature Item Component
function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-secondary mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}