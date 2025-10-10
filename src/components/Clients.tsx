// src/components/Clients.tsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
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

const certifications = [
  "ISO 9001:2015 - Quality Management System",
  "ISO 14001:2015 - Environmental Management System",
  "Design & Steel Fabrication Certified",
  "CNC Laser Cutting Excellence",
];

// 👇 set this to false if you don't want captions under logos in the marquee
const SHOW_MARQUEE_TITLES = true;

export const Clients: React.FC = () => {
  const [ref, isInView] = useInView();

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    if (!img.dataset.fallback) {
      img.src = "/logos/placeholder.svg";
      img.dataset.fallback = "1";
    }
  };

  // Bigger, non-shrinking logo items with a fixed slot height
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

            {/* Marquee – bigger track height, no blur, no pause */}
            <SlidingLogoMarquee
              items={marqueeItems}
              speed={40}
              height="200px"            // ↑ make the track taller
              pauseOnHover={true}
              enableBlur={false}
              showGridBackground={true}
              onItemClick={(item) => console.log("Clicked:", item.id)}
              className={`mt-16 mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            />
          </div>

          {/* Optional grid below (also bigger logos) */}
          {/* <div
            className={`mt-16 mb-20 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.map((c, idx) => (
                <a
                  key={idx}
                  href={c.href ?? "#"}
                  aria-label={c.name}
                  className="group p-6 rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-[var(--shadow-card)] transition"
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener noreferrer" : undefined}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-16 md:h-20 flex items-center justify-center">
                      <img
                        src={c.logoSrc}
                        alt={c.alt ?? c.name}
                        className="max-h-16 md:max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition"
                        loading="lazy"
                        onError={handleImgError}
                      />
                    </div>
                    <p className="text-xs md:text-sm font-bold text-center text-foreground/70 group-hover:text-foreground uppercase tracking-wide">
                      {c.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div> */}

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

export default Clients;
