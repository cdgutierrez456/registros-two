import React from "react";

import { getBlogs } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/sanity";

export default async function page() {
  const blog = await getBlogs();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-16 md:px-16 px-[20px] max-w-[1200px] w-full mx-auto">
      {blog.map(({ alt, mainImage, slug, title, _id, description }: Blog) => (
        <div
          className="rounded-md flex flex-col justify-between items-center gap-0 border border-gray-500/40 "
          key={_id}
        >
          <Image
            src={mainImage}
            alt={alt}
            width={500}
            height={500}
            className="rounded-t-md w-full h-[300px] object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-5 px-5 py-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-base">{description}</p>
            </div>

            <Link
              href={`/blog/${slug}`}
              className="w-full rounded-md border border-blueCher text-blueCher text-lg font-semibold py-3 text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
