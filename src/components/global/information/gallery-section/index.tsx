import React from "react";
import GalleryCard from "../gallery-card";

import Rapido from "@/assets/rapido-filas.jpg";
import Seguro from "@/assets/proceso-seguro.jpg";
import Valido from "@/assets/valido.jpg";

export default function GallerySection() {
  const galleryItems = [
    {
      image: Rapido.src,
      title: "Rápido y sin filas",
      subtitle: "Registros",
    },
    {
      image: Seguro.src,
      title: "Proceso 100% seguro",
      subtitle: "Registros",
    },
    {
      image: Valido.src,
      title: "Válido en todo el país",
      subtitle: "Registros",
    },
  ];
  return (
    <section className="inline-flex gap-10 items-center h-[523px] w-[1284px] max-md:flex-col max-md:gap-8 max-md:mt-12 max-md:w-full max-md:h-auto max-sm:gap-6">
      {galleryItems.map((item, index) => (
        <GalleryCard
          key={index}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
}
