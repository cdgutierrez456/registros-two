import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function GalleryCard({
  image,
  title,
  subtitle,
}: GalleryCardProps) {
  return (
    <article className="max-md:mx-auto max-md:my-0 max-md:w-full max-md:h-auto max-md:max-w-[400px] max-sm:max-w-[350px]">
      <Image
        src={image}
        alt={title}
        width={401}
        height={401}
        className="rounded-2xl shadow-sm h-[401px] w-[401px] max-md:w-full max-md:h-auto object-cover"
        priority
        loading="eager"
        quality={100}
      />
      <h3 className="shrink-0 h-7 text-xl font-medium text-neutral-500 max-md:w-full max-md:text-center max-sm:text-base text-center">
        {subtitle}
      </h3>
      <h2 className="left-0 shrink-0 text-3xl font-semibold leading-10 text-center h-[46px] text-zinc-800 w-[401px] max-md:w-full max-md:text-center max-md:top-[30px] max-sm:text-2xl max-sm:leading-8">
        {title}
      </h2>
    </article>
  );
}
