// src/data/services.data.ts
export type Service = {
  id: number;
  slug: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  galleryImages: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "design-manufacturing",
    number: "1",
    title: "Design, Manufacturing & Painting",
    description:
      "We are your comprehensive partner in structural steel excellence. From initial design and precise manufacturing to advanced protective painting, we manage the entire process with meticulous accuracy and exceptional quality.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    tags: ["Design", "Manufacturing", "Painting", "Quality Control"],
    galleryImages: [
"/Factoring/IMG-20251011-WA0003.jpg",
"/Factoring/IMG-20251011-WA0004.jpg",
"/Factoring/IMG-20251011-WA0005.jpg",
"/Factoring/IMG-20251011-WA0008.jpg",
"/Factoring/IMG-20251011-WA0009.jpg",
"/Factoring/IMG-20251011-WA0010.jpg",
"/Factoring/IMG-20251011-WA0012.jpg",
"/Factoring/IMG-20251011-WA0013.jpg",
"/Factoring/IMG-20251011-WA0017.jpg",
"/Factoring/IMG-20251011-WA0019.jpg",
"/Factoring/IMG-20251011-WA0023.jpg",
"/Factoring/IMG-20251011-WA0031.jpg",
"/Factoring/IMG-20251015-WA0011.jpg",
    ],
  },
  {
    id: 2,
    slug: "cnc-laser-cutting",
    number: "2",
    title: "CNC Laser Cutting",
    description:
      "CNC laser cutting with extreme precision. Specialized in sheet metal cutting with high thickness, art metal cutting, punching and laser combination, panel bending, corner forming, engraving, and laser marking.",
    imageUrl: "/ServiceImage/covercnc.jpg",
    tags: ["Precision", "CNC", "Laser", "Metal Cutting"],
    galleryImages: [
      "/ServiceImage/IMG-20251011-WA0070.jpg",
      "/ServiceImage/IMG-20251011-WA0071.jpg",
      "/ServiceImage/IMG-20251011-WA0073.jpg",
      "/ServiceImage/IMG-20251011-WA0074.jpg",
      "/ServiceImage/IMG-20251011-WA0075.jpg",
      "/ServiceImage/IMG-20251011-WA0076.jpg",
      "/ServiceImage/IMG-20251011-WA0078.jpg",
      "/ServiceImage/IMG-20251011-WA0079.jpg",
      "/ServiceImage/IMG-20251011-WA0081.jpg",
      "/ServiceImage/IMG-20251011-WA0083.jpg",
      "/ServiceImage/IMG-20251011-WA0084.jpg",
      "/ServiceImage/IMG-20251011-WA0085.jpg",
      "/ServiceImage/IMG-20251011-WA0086.jpg",
      "/ServiceImage/IMG-20251011-WA0088.jpg",
      "/ServiceImage/IMG-20251011-WA0089.jpg",
      "/ServiceImage/IMG-20251011-WA0091.jpg",
      "/ServiceImage/IMG-20251011-WA0092.jpg",
      "/ServiceImage/IMG-20251011-WA0093.jpg",
      "/ServiceImage/IMG-20251011-WA0094.jpg",
      "/ServiceImage/IMG-20251011-WA0095.jpg",
      "/ServiceImage/IMG-20251011-WA0098.jpg",
      "/ServiceImage/IMG-20251011-WA0099.jpg",
      "/ServiceImage/IMG-20251011-WA0100.jpg",
      "/ServiceImage/WhatsApp Image 2025-10-11 at 17.08.19_0978473f.jpg",
      "/ServiceImage/WhatsApp Image 2025-10-11 at 17.44.25_bd73045c.jpg",
            "/ServiceImage/IMG-20251011-WA0072.jpg",
      "/ServiceImage/IMG-20251011-WA0077.jpg",
      "/ServiceImage/IMG-20251011-WA0080.jpg",
      "/ServiceImage/IMG-20251011-WA0082.jpg",
      "/ServiceImage/IMG-20251011-WA0087.jpg",
      "/ServiceImage/IMG-20251011-WA0090.jpg",
      "/ServiceImage/IMG-20251011-WA0096.jpg",
      "/ServiceImage/IMG-20251011-WA0097.jpg",

    ],
  },
  {
    id: 3,
    slug: "shear-stud-solutions",
    number: "3",
    title: "Shear Stud Solutions",

    description:
      "Manufacturing, supply & welding of shear studs on-site using the latest specialized machinery. Significantly enhance the strength of connections in steel beams and concrete columns.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    tags: ["Welding", "On-Site", "Structural", "Strength"],
    galleryImages: [
      "/ServiceImage/WhatsApp Image 2025-10-11 at 17.28.25_069ad6d1.jpg",

        "/ServiceImage/shearstud3.jpg",
        "/ServiceImage/shearstud4.jpg",
        "/ServiceImage/shearstud5.jpg",
        "/ServiceImage/shearstud6.jpg",
        "/ServiceImage/shearstud7.jpg",
         "/ServiceImage/shearstud8.jpg",
          "/ServiceImage/shearstud9.jpg",
    ],
  },
];