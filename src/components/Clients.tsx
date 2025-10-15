import React, { useState } from "react";
import { CheckCircle2, X, FileText, QrCode } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import {
  SlidingLogoMarquee,
  type SlidingLogoMarqueeItem,
} from "@/components/lightswind/sliding-logo-marquee";

type ClientLogo = {
  name: string;
  logoSrc: string;
  href?: string;
  alt?: string;
};

type Certificate = {
  name: string;
  description: string;
  imagePath: string;
  icon: React.ReactNode;
};

const clients: ClientLogo[] = [
  { name: "ZAMIL STEEL CRAFT", logoSrc: "/logos/zamil_logo.jpg", href: "https://www.zamilsteel.com" },
  { name: "CRAFT", logoSrc: "/logos/craft.png" },
  { name: "AL-BABTAIN POWER & TELECOM", logoSrc: "/logos/OIP.webp" },
  { name: "WESCOSA", logoSrc: "/logos/R.jpg" },
  { name: "INT'L BUILDING SYSTEMS FACTORY CO. LTD.", logoSrc: "/logos/ibsf.jpg" },
  { name: "NADEC", logoSrc: "/logos/nadec-resized.jpg" },
  { name: "General Entertainment Authority", logoSrc: "/logos/381-3814115_saudi-general-entertainment-authority-general-entertainment-authority-saudi.png" },
  { name: "ARCHITECTURAL OASIS", logoSrc: "/logos/1705173973306.jpg" },
  { name: "RIYADH METRO", logoSrc: "/logos/logo2.png" },
  { name: "ORASCOM CONSTRUCTION", logoSrc: "/logos/6.jpg" },
  { name: "NUPOCO", logoSrc: "/logos/OIP (1).webp" },
  { name: "Al Kuhaimi Group", logoSrc: "/logos/7856e2082e5f721bef44474693223b22205.jpg" },
  { name: "Arabian Transformers Co.", logoSrc: "/logos/7aa01a4e33f011efb4532706ac877738.png" },
  { name: "STEEL INDUSTRIES", logoSrc: "/logos/logo_bena.png" },
];

const isocertifications = [
  "ISO 9001:2015 - Quality Management System",
  "ISO 14001:2015 - Environmental Management System",
];

const certificates: Certificate[] = [
  {
    name: "Address Proof",
    description: "Official address verification certificate",
    imagePath: "/Certifications/Addres.jpg",
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  {
    name: "QR Code Commercial",
    description: "Commercial registration QR certificate",
    imagePath: "/Certifications/Qummer.jpg",
    icon: <QrCode className="h-5 w-5 text-primary" />
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    imagePath: "/Certifications/iso900.jpg",
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    imagePath: "/Certifications/iso1400.jpg",
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />
  }
];

const SHOW_MARQUEE_TITLES = true;

const CertificateModal = ({ certificate, onClose }: { certificate: Certificate | null, onClose: () => void }) => {
  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-6 bg-primary text-white">
            <h3 className="text-2xl font-bold">{certificate.name}</h3>
            <p className="text-sm text-white/80 mt-1">{certificate.description}</p>
          </div>
          <div className="p-4 bg-gray-50">
            <img
              src={certificate.imagePath}
              alt={certificate.name}
              className="w-full h-auto rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3ECertificate Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Click outside to close
      </div>
    </div>
  );
};

export const Clients: React.FC = () => {
  const [ref, isInView] = useInView();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    if (!img.dataset.fallback) {
      img.src = "/logos/placeholder.svg";
      img.dataset.fallback = "1";
    }
  };

  const marqueeItems: SlidingLogoMarqueeItem[] = clients.map((c, i) => ({
    id: String(i + 1),
    href: c.href,
    content: (
      <div className="flex-none px-8 py-3">
        <div className="h-16 md:h-20 flex items-center justify-center">
          <img
            src={c.logoSrc}
            alt={c.alt ?? c.name}
            className="max-h-16 md:max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
            loading="lazy"
            onError={handleImgError}
          />
        </div>
        {SHOW_MARQUEE_TITLES && (
          <p className="mt-2 text-xs md:text-sm font-semibold text-center text-foreground/70">
            {c.name}
          </p>
        )}
      </div>
    ),
  }));

  return (
    <>
      <section id="clients" className="py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div ref={ref} className="mx-auto">
            {/* Heading */}
            <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "50ms" }}>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 text-center">
                OUR CLIENTS
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                Trusted by industry leaders across the Kingdom
              </p>

              <SlidingLogoMarquee
                items={marqueeItems}
                speed={40}
                height="200px"
                pauseOnHover={true}
                enableBlur={false}
                showGridBackground={true}
                onItemClick={(item) => console.log("Clicked:", item.id)}
                className={`mt-16 mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}
              />
            </div>

            {/* Certifications */}
            <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
              <h3 className="text-3xl md:text-4xl font-black text-secondary mb-8 text-center">
                CERTIFICATIONS
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCertificate(cert)}
                    className="group cursor-pointer p-6 rounded-xl bg-card border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {cert.icon}
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal 
          certificate={selectedCertificate} 
          onClose={() => setSelectedCertificate(null)} 
        />
      )}
    </>
  );
};

export default Clients;