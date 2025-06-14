import React from "react";
import Image from "next/image";

import Logo from "@/assets/logo.png";

export default function FooterLogo() {
  return (
    <article className="flex flex-col items-start w-full max-md:mt-10">
      <header className="flex gap-5 items-start leading-snug text-sky-500">
        <Image
          src={Logo.src}
          alt="Registros Civiles Logo"
          className="object-contain shrink-0 aspect-[0.98] w-[51px]"
          width={51}
          height={51}
          priority
          loading="eager"
          quality={100}
        />
        <div className="flex flex-col">
          <h2 className="text-3xl font-black text-sky-500">
            Registros Civiles
          </h2>
          <p className="self-start mt-3 text-xs font-bold tracking-wider text-sky-500">
            CERTIFICADOS
          </p>
        </div>
      </header>
      <p className="self-stretch mt-3.5 text-base leading-7 text-stone-300">
        Compra, valida y gestiona tu registro civil de manera eficiente y
        segura, sin tener que salir de casa.
      </p>
    </article>
  );
}
