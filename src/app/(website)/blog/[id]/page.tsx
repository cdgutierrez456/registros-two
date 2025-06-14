import React from "react";
import { getBlog } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const blog = await getBlog(id);

  return (
    <article className="w-full flex flex-col md:gap-16 gap-10 md:px-16 md:py-20 px-[20px] py-10">
      <div className="flex flex-col items-center justify-start gap-10 max-w-[1200px] mx-auto w-full">
        <Image
          src={blog.mainImage}
          alt={"icon"}
          width={500}
          height={350}
          loading="lazy"
          className={`object-cover rounded-lg w-full md:h-[500px] h-[350px]`}
        />

        <h3 className={`font-bold text-baseBlue text-3xl`}>{blog.title}</h3>
      </div>

      <div className="flex md:flex-row flex-col gap-5 items-start justify-center">
        <div className="md:w-[70%] w-full text-lg font-light text-lightGray">
          <PortableText value={blog.body} />
        </div>
      </div>
    </article>
  );
}
