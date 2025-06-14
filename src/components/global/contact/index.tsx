import React from "react";
import { CONTACT_INFO } from "@/constants/contact";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import Badge from "./badge";

export default function Contact() {
  return (
    <main className="flex flex-col gap-2.5 justify-center items-center px-36 py-14 bg-indigo-50 min-h-[694px] max-md:px-20 max-sm:px-5 max-sm:py-10 w-full">
      <div className="flex relative flex-col gap-10 w-full h-auto max-w-[1140px] max-md:flex-col max-sm:gap-8">
        <header className="flex flex-col gap-5 items-start w-full max-w-[560px]">
          <h1 className="w-full text-6xl font-bold leading-[78.4px] text-zinc-800 max-md:text-5xl max-sm:text-4xl">
            Contáctanos
          </h1>
          <p className="w-full text-xl leading-8 text-gray-500 max-md:text-lg max-sm:text-base">
            Si tienes alguna duda o necesitas ayuda con el proceso de compra o
            verificación de tu registro civil, contáctanos.
          </p>
        </header>

        <div className="flex items-center justify-center gap-16 w-full max-md:flex-col max-md:gap-10 max-sm:gap-8">
          <section className="flex flex-col flex-1 gap-11 max-sm:gap-8">
            <div className="grid grid-cols-2 items-center gap-11 max-sm:gap-8">
              <ContactInfo data={CONTACT_INFO} />
            </div>

            <hr className="my-5 w-full h-px border-blue-600 border-1" />

            <div className="flex gap-5 items-center max-sm:gap-4">
              <Badge>24/7</Badge>
              <p className="text-xl leading-8 text-gray-500 max-sm:text-lg">
                Contáctanos
              </p>
            </div>
          </section>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
