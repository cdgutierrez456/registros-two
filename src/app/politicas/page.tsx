import { getPolicies } from "@/utils/sanity";
import { PortableText } from "next-sanity";
import React from "react";

export default async function Page() {
  const terms = await getPolicies();

  return (
    <section className="w-full max-w-[1114px] mx-auto">
      <h1 className="text-3xl font-bold text-baseBlue text-center mb-5">
        POLITICA DE TRATAMIENTO DE DATOS PERSONALES
      </h1>

      <PortableText value={terms[0].body} />
    </section>
  );
}
