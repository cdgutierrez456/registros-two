import React from "react";

import Link from "next/link";

import { MENU } from "@/constants/menu";
import { SOCIAL_MEDIA } from "@/constants/social";

import FooterLogo from "./footer-logo";

export default function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center px-20 py-14 bg-blueCher max-md:px-5">
      <div className="flex flex-col w-full max-w-[1142px] max-md:max-w-full">
        <div className="self-center max-w-full w-[552px]">
          <div className="flex items-center justify-center gap-5 max-md:flex-col">
            <section className="w-[69%] max-md:ml-0 max-md:w-full">
              <FooterLogo />

              <nav
                className="flex gap-6 items-start mt-4"
                aria-label="Social Media Links"
              >
                {SOCIAL_MEDIA.map((item, index) => (
                  <Link
                    href={item.href}
                    aria-label="Social Media Link"
                    key={index}
                  >
                    <item.icon size={30} color="white" />
                  </Link>
                ))}
              </nav>
            </section>
            <section className="ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <nav
                className="flex flex-col max-md:mt-10"
                aria-label="Quick Links"
              >
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  Quick Links
                </h3>
                <ul className="self-start mt-5 text-base leading-relaxed whitespace-nowrap text-stone-300 flex flex-col gap-2">
                  {MENU.map((item) => (
                    <li
                      key={item.name}
                      className="text-stone-300 hover:text-blue-500"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
        </div>
        <hr className="shrink-0 mt-7 w-full h-px border border-solid bg-stone-300 border-stone-300 max-md:mr-0.5" />
        <div className="flex flex-wrap items-center justify-between mt-5">
          <p className="gap-2.5 self-stretch my-auto text-stone-300 font-normal text-md">
            Copyrigt © 2025 Registros Civiles
          </p>
          <span className="gap-2.5 self-stretch my-auto text-stone-300 font-normal text-md hidden md:block">
            megapagos.com
          </span>

          <div className="flex items-center gap-5">
            <Link
              href="https://www.megapagos.com/"
              className="font-normal text-md text-stone-300 hover:text-blue-500"
            >
              Terminos de uso
            </Link>

            <Link
              href="https://www.megapagos.com/"
              className="border-l pl-5 text-center text-stone-300 font-normal text-md hover:text-blue-500"
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
