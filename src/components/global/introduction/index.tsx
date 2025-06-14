import React from "react";
import ContentSection from "./introduction-content";
import Image from "next/image";

import Acerca from "@/assets/acerca-registros.png";

interface IntroductionProps {
  title?: string;
  description?: string;
}

export default function Introduction({
  title,
  description,
}: IntroductionProps) {
  return (
    <section className="flex flex-col gap-2.5 items-start px-36 py-16 w-full bg-white max-md:px-20 max-md:py-10 max-sm:px-5 max-sm:py-6">
      <div className="flex gap-10 items-start justify-center w-full h-auto max-w-[1140px] max-md:flex-col max-md:h-auto max-sm:flex-col max-sm:gap-6 max-sm:h-auto mx-auto">
        <ContentSection title={title} description={description} />
        <Image
          src={Acerca.src}
          alt="icon"
          width={580}
          height={580}
          priority
          loading="eager"
          quality={100}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
