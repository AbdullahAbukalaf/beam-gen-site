// src/data/services.data.ts
export type Service = {
  id: number;
  slug: string;        // ← add a slug
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
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
  },
  {
    id: 2,
    slug: "cnc-laser-cutting",
    number: "2",
    title: "CNC Laser Cutting",
    description:
      "CNC laser cutting with extreme precision. Specialized in sheet metal cutting with high thickness, art metal cutting, punching and laser combination, panel bending, corner forming, engraving, and laser marking.",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    tags: ["Precision", "CNC", "Laser", "Metal Cutting"],
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
  },
];
