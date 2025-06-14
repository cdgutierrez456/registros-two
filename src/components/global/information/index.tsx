import React from "react";
import HeroSection from "./hero";
import GallerySection from "./gallery-section";

interface InformationProps {
  title: string;
  subtitle: string;
  content: string;
}

export default function Information({
  title,
  subtitle,
  content,
}: InformationProps) {
  return (
    <main className="flex w-full justify-center items-center pr-20 pb-14 pl-20 py-20 bg-white max-md:p-5 max-sm:p-4">
      <div className="h-[1202px] w-[1284px] max-md:h-auto flex flex-col gap-16">
        <HeroSection title={title} subtitle={subtitle} content={content} />
        <GallerySection />
      </div>
    </main>
  );
}
