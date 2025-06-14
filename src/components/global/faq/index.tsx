import React from "react";
import Image from "next/image";
import FAQuestion from "./faq-question";

import Faq from "@/assets/faq.png";
import { FAQ_INFO } from "@/constants/faq";

export default function FAQ() {
  return (
    <section className="flex gap-16 items-center justify-center px-36 py-32 w-full bg-white min-h-[811px] max-md:gap-12 max-md:px-24 max-md:py-20 max-sm:flex-col max-sm:gap-8 max-sm:px-5 max-sm:py-10">
      <figure className="flex-[shrink] h-[696px] w-[436px] max-md:h-[550px] max-md:w-[350px] max-sm:w-full max-sm:h-[400px]">
        <div className="flex overflow-hidden relative flex-col justify-end items-center rounded-xl size-full">
          <Image
            src={Faq.src}
            alt="icon"
            className="w-[600px] max-lg:w-[500px] max-sm:w-[400px] h-[701px] max-lg:h-[550px] max-sm:h-[400px] flex-shrink-0 absolute top-[0px] object-cover"
            width={600}
            height={701}
            priority
            loading="eager"
            quality={100}
          />
        </div>
      </figure>

      <div className="flex-[shrink] h-[684px] w-[649px] max-md:w-[500px] max-sm:w-full max-sm:h-auto">
        <div className="inline-flex flex-col gap-8 items-start w-full max-sm:gap-6">
          <header className="inline-flex flex-col gap-5 items-start w-full max-sm:gap-4">
            <p className="gap-2.5 text-sm font-semibold leading-4 text-sky-500 uppercase max-sm:text-xs">
              FAQ
            </p>
            <h2 className="w-full text-6xl font-semibold leading-[78.4px] text-zinc-800 max-md:text-5xl max-sm:text-3xl">
              Preguntas frecuentes
            </h2>
          </header>

          <div className="inline-flex flex-col gap-8 items-start w-full max-sm:gap-5">
            <FAQuestion data={FAQ_INFO} />
          </div>
        </div>
      </div>
    </section>
  );
}
