import Link from "next/link";
import React from "react";

interface LearnContentProps {
  title: string;
  content: string;
  subtitle: string;
  subContent: string;
  background: string;
  href: string;
}

export default function LearnContent({
  title,
  content,
  subtitle,
  subContent,
  background,
  href,
}: LearnContentProps) {
  return (
    <section className="flex flex-col min-w-60 w-[580px] max-md:max-w-full">
      <h2
        className={`text-5xl font-bold capitalize leading-[64px] ${background === "white" ? "text-blueCher" : "text-neutral-100"}  max-md:max-w-full max-md:text-4xl max-md:leading-[60px] `}
      >
        {title}
      </h2>
      <div
        className={`mt-7 text-lg leading-7 text-neutral-200 max-md:max-w-full`}
      >
        <p
          className={background === "white" ? "text-black" : "text-neutral-100"}
        >
          {content}
        </p>

        {subtitle.length > 0 && subContent.length > 0 && (
          <>
            <p
              className={`mt-4 font-bold ${background === "white" ? "text-black" : "text-neutral-100"}`}
            >
              {subtitle}
            </p>
            <p
              className={`mt-4 ${background === "white" ? "text-black" : "text-neutral-100"}`}
            >
              {subContent}
            </p>
          </>
        )}
      </div>
      <Link
        href={href}
        className={`gap-2.5 self-start px-10 py-4 mt-7 text-base font-semibold ${background === "white" ? "text-white" : "text-neutral-100"} bg-sky-500 rounded-[100px] max-md:px-5 hover:bg-sky-600 transition-colors`}
      >
        Comprar Ahora
      </Link>
    </section>
  );
}
