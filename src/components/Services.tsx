import { Zap, Settings, Wrench, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Service } from "@/data/services.data"; // ← use shared data
import { Link } from "react-router-dom"
const services = [
  {
    id: 1,
    number: "1",
    icon: Settings,
    title: "Design, Manufacturing & Painting",
    description:
      "We are your comprehensive partner in structural steel excellence. From initial design and precise manufacturing to advanced protective painting, we manage the entire process with meticulous accuracy and exceptional quality.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    link: "/services/design-manufacturing",
    tags: ["Design", "Manufacturing", "Painting", "Quality Control"],
    slug: "design-manufacturing",
  },
  {
    id: 2,
    number: "2",
    icon: Zap,
    title: "CNC Laser Cutting",
    description:
      "CNC laser cutting with extreme precision. Specialized in sheet metal cutting with high thickness, art metal cutting, punching and laser combination, panel bending, corner forming, engraving, and laser marking.",
    imageUrl: "/ServiceImage/covercnc.jpg",
    link: "/services/cnc-laser-cutting",
    tags: ["Precision", "CNC", "Laser", "Metal Cutting"],
    slug: "cnc-laser-cutting",
  },
  {
    id: 3,
    number: "3",
    icon: Wrench,
    title: "Shear Stud Solutions",
    description:
      "Manufacturing, supply & welding of shear studs on-site using the latest specialized machinery. Significantly enhance the strength of connections in steel beams and concrete columns.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    link: "/services/shear-stud-solutions",
    tags: ["Welding", "On-Site", "Structural", "Strength"],
    slug: "shear-stud-solutions",
  },
];

const materials = [
  { name: "Carbon Steel" },
  { name: "Stainless Steel" },
  { name: "Aluminum" },
  { name: "Hardox" },
  { name: "Super Duplex" },
  { name: "Brass" },
];

export function Services() {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % services.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const getCardAnimationClass = (index) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % services.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + services.length) % services.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  const handleCardClick = (slug: string) => {
    // Simulate navigation - in real app this would use Next.js router or window.location
    // alert(`Navigating to: ${link}\n\nIn a real application, this would open a new page with detailed service information.`);
    window.location.href = `/services/${slug}`;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of products & services in the field of steel structures,
            carefully designed to suit various industrial applications
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden h-[600px] mb-16"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                >
                  <div
                    className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[520px] flex flex-col cursor-pointer"
                    onClick={() => handleCardClick(service.slug)}
                  >
                    {/* Image Header */}
                    <div
                      className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                      style={{
                        backgroundImage: `url(${service.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          SERVICE {service.number}
                        </h3>
                        <div className="w-12 h-1 bg-white mx-auto" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      {/* <button
                        className="text-primary flex items-center font-medium hover:text-primary/90 relative group"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(service.slug);
                        }}
                      >
                        <span className="relative z-10"><Link to={`/services/${service.slug}`} className="...">Learn more</Link></span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button> */}
                      {/* Learn More Link */}
                    <div className="mt-2 flex justify-center md:justify-start">
                      <button
                        className="text-primary flex items-center font-medium hover:text-primary/90 relative group"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(service.slug);
                        }}
                      >
                        <span className="relative z-10">
                          <Link to={`/services/${service.slug}`} className="">Learn more</Link>
                        </span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          {/* <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white z-30 shadow-lg transition-all hover:scale-110"
            onClick={() => setActive((prev) => (prev - 1 + services.length) % services.length)}
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white z-30 shadow-lg transition-all hover:scale-110"
            onClick={() => setActive((prev) => (prev + 1) % services.length)}
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}
          {/* Navigation Buttons */}
          <button
            className=" absolute left-4 top-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 top-auto bottom-20 translate-y-0
                       w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white
                       z-30 shadow-lg transition-all hover:scale-110"
            onClick={() => setActive((prev) => (prev - 1 + services.length) % services.length)}
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 top-auto bottom-20 translate-y-0
                      w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white
                      z-30 shadow-lg transition-all hover:scale-110"
            onClick={() => setActive((prev) => (prev + 1) % services.length)}
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>


          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${active === idx
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            SERVICES FOR THE FOLLOWING MATERIALS
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border-2 border-gray-200 bg-white hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <span className="font-semibold text-gray-800">
                  {material.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}