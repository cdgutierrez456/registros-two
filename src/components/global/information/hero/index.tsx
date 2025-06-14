import React from "react";
import Image from "next/image";

import Seguro from "@/assets/seguro.jpg";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  content: string;
}

export default function Hero({ title, subtitle, content }: HeroProps) {
  return (
    <section className="flex flex-col items-center h-[625px] w-[1280px] max-md:w-full max-md:h-auto">
      <h1 className="relative h-52 text-5xl font-semibold text-center leading-[64px] text-zinc-800 w-[1037px] max-md:mb-2 max-md:w-full max-md:h-auto max-md:text-4xl max-md:leading-10 max-sm:px-2.5 max-sm:py-0 max-sm:text-3xl max-sm:leading-9">
        {title}
      </h1>

      <div className="flex relative gap-20 items-center self-stretch max-md:flex-col max-md:gap-8 max-sm:gap-5">
        <div className="relative h-[417px] w-[630px] max-md:w-full max-md:max-w-[500px]">
          <Image
            src={Seguro.src}
            alt="Icon main image"
            width={630}
            height={417}
            priority
            loading="eager"
            quality={100}
            className="absolute top-0 left-0 rounded-2xl h-[417px] w-[630px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-md:h-auto"
          />
        </div>

        <article className="flex relative flex-col gap-5 items-start w-[547px] max-md:items-center max-md:w-full max-md:text-center">
          <h2 className="relative self-stretch text-4xl font-semibold h-[76px] text-zinc-800 max-md:h-auto max-md:text-3xl max-sm:text-2xl">
            {subtitle}
          </h2>
          <p className="relative text-xl text-neutral-500 w-[547px] max-md:w-full max-md:text-center max-sm:px-2.5 max-sm:py-0 max-sm:text-base">
            {content}
          </p>

          <Link
            href="#form"
            className="bg-blueCain px-10 py-3 text-base text-white font-semibold rounded-full mt-2"
          >
            Solicita tu Registro
          </Link>
        </article>
      </div>
    </section>
  );
}
