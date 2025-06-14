"use client";

import React from "react";
import BannerImage from "@/assets/banner.png";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();

  let title;

  switch (pathname) {
    case "/contacto":
      title = "Contáctanos";
      break;
    case "/blog":
      title = "Blog";
      break;
    case "/registros/civiles":
      title = "Registro Civil de Nacimiento";
      break;
    case "/registros/defuncion":
      title = "Registro Civil de Defunción";
      break;
    case "/registros/matrimonio":
      title = "Registro Civil de matrimonio";
      break;
    default:
      title = "Blog";
  }

  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[339px] flex flex-col items-start justify-center md:px-20 px-[20px]"
    >
      <span className="text-5xl font-semibold text-white">{title}</span>
    </div>
  );
}
