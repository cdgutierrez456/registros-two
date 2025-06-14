"use client";

import Image from "next/image";
import LearnContent from "./learn-content";
import React, { useEffect } from "react";
import { LEARNMORE } from "@/constants/learnmore";

export default function LearnMore() {
  const background = {
    blue: "bg-blueCher",
    white: "bg-white",
  };

  return LEARNMORE.map((item, index) => (
    <article
      className={`flex overflow-hidden flex-col justify-center px-36 py-16 max-md:px-5 ${background[item.background as keyof typeof background]}`}
      key={index}
    >
      <div
        className={`md:flex items-center gap-12 justify-center max-md:max-w-full ${item.position === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        <Image
          src={item.image}
          alt={item.alt}
          width={580}
          height={580}
          priority
          loading="eager"
          quality={100}
          className="rounded-md object-cover"
        />
        <LearnContent {...item} />
      </div>
    </article>
  ));
}
