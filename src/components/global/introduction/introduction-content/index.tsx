import Link from "next/link";
import React from "react";

interface IntroductionContentProps {
  title?: string;
  description?: string;
}

export default function IntroductionContent({
  title = "Conoce acerca de los Registros Civiles en Colombia",
  description = "Y Disfruta de la Comodidad de hacerlo en Línea. Accede a los servicios más rápidos, fáciles y seguros para obtener tus registros civiles en formato digital.",
}: IntroductionContentProps) {
  return (
    <article className="flex flex-col gap-7 items-start h-auto w-[590px] max-md:w-full max-sm:w-full">
      <header className="gap-2.5 pl-2 text-sm font-semibold leading-4 text-blue-600 uppercase max-sm:text-xs">
        REGISTRO CIVIL
      </header>
      <h1 className="w-full text-6xl font-semibold leading-[78.4px] text-zinc-800 max-md:text-5xl max-sm:text-3xl">
        {title}
      </h1>
      <p className="w-full text-xl leading-8 text-gray-500 max-md:text-lg max-sm:text-base">
        {description}
      </p>
      <Link
        href="#form"
        className="px-10 py-6 mt-4 text-base font-bold leading-4 text-center text-white bg-blue-600 h-[59px] rounded-[100px] w-[205px] max-sm:px-8 max-sm:py-5 max-sm:w-full max-sm:text-sm max-sm:h-[52px]"
      >
        Comprar Ahora
      </Link>
    </article>
  );
}
