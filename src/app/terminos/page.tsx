import { getTerms } from "@/utils/sanity";
import { PortableText } from "next-sanity";
import React from "react";

export default async function Page() {
  const terms = await getTerms();

  return (
    <section className="w-full max-w-[1114px] mx-auto">
      <h1 className="text-3xl font-bold text-baseBlue mb-5">
        TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA
      </h1>

      <PortableText value={terms[0].body} />
    </section>
  );
}
