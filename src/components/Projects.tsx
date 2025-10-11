import { Building2, Users, Package, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";

const projects = [
  {
    name: "EMC PROJECT",
    client: "ZAMIL TRADE & SERVICE",
    scope: "Fabrication, Painting & delivery",
    tonnage: "100 T",
    images: ["/Project/EMC1.jpg", "/Project/EMC2.jpg", "/Project/EMC3.jpg"]
  },
  {
    name: "AL-JOUF AIRPORT DEVELOPMENT",
    client: "METCO",
    scope: "Fabrication, Painting & delivery",
    tonnage: "250 T",
    images: ["/Project/EQUIPMENT1.jpg", "/Project/EQUIPMENT2.jpg", "/Project/EQUIPMENT3.jpg"]
  },
  {
    name: "Golden Dunes",
    client: "CRAFT",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "240 T",
    images: ["/Project/GOLDEN1.jpg", "/Project/GOLDEN2.jpg", "/Project/GOLDEN3.jpg"]
  },
  {
    name: "Babtain Power & Telecom",
    client: "Al-Babtain Power & Telecom",
    scope: "CNC Laser cutting",
    tonnage: "1,350 T",
    images: ["/Project/BABTIN1.jpg", "/Project/BABTIN2.jpg", "/Project/BABTIN3.jpg"]
  },
  {
    name: "SHURA ISLAND",
    client: "KIFAH PRECAST",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "320 T",
    images: ["/Project/SHURA1.jpg", "/Project/SHURA2.jpg", "/Project/SHURA3.jpg"]
  },
  {
    name: "FEEDMILL & WAREHOUSE",
    client: "NADEC",
    scope: "Design, Fabrication, Painting & delivery",
    tonnage: "110 T",
    images: ["/Project/FFDMIL2.jpg", "/Project/FFDMIL3.jpg"]
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0], index: number, onClick: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const tonnageNum = parseInt(project.tonnage.replace(/[^0-9]/g, ""));

  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 cursor-pointer"
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 1,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3EProject Image%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Image navigation dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === idx 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Tonnage badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          {tonnageNum.toLocaleString()} T
        </div>

        {/* Project icon */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Building2 className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-white">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300 group-hover:w-24" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Client</p>
              <p className="text-sm font-semibold text-gray-900 truncate">{project.client}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Package className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Scope</p>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">{project.scope}</p>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</span>
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-700">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ThreeDGalleryModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getItemStyle = (index: number): React.CSSProperties => {
    const isActive = activeIndex === index;
    
    return {
      width: isActive ? '45vw' : 'calc(12vw + 10px)',
      height: 'calc(20vw + 20vh)',
      backgroundImage: `url(${project.images[index]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: 'pointer',
      filter: isActive ? 'inherit' : 'grayscale(1) brightness(0.5)',
      transform: isActive ? 'translateZ(calc(15vw + 15vh))' : 'none',
      transition: 'transform 1.25s cubic-bezier(.1, .7, 0, 1), filter 3s cubic-bezier(.1, .7, 0, 1), width 1.25s cubic-bezier(.1, .7, 0, 1)',
      willChange: 'transform, filter, width',
      zIndex: isActive ? 100 : 'auto',
      margin: isActive ? '0 0.45vw' : '0',
      borderRadius: '0.5rem',
    };
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Project Info */}
      <div className="absolute top-6 left-6 z-50 text-white">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm text-gray-300">{project.client}</p>
      </div>

      {/* 3D Gallery */}
      <div
        ref={containerRef}
        className="flex justify-center items-center w-full"
        style={{
          perspective: 'calc(50vw + 50vh)',
          gap: '1.2rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative will-change-transform rounded-lg shadow-lg"
            style={getItemStyle(index)}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            role="button"
            aria-label={`Image ${index + 1} of ${project.images.length}`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Hover over images to explore • Click outside to close
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                OUR PROJECTS
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering excellence across diverse industries with proven track record
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* 3D Gallery Modal */}
      {selectedProject && (
        <ThreeDGalleryModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};