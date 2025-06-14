import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/logo.png";

import { MENU } from "@/constants/menu";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-blueCher">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            src={Logo.src}
            alt="Logo"
            width={100}
            height={100}
            className="md:w-20 md:h-20 w-12 h-12"
            priority
            loading="eager"
            quality={100}
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h3 className="md:text-3xl text-xl font-bold text-white">
            Registros Civiles
          </h3>
          <span className="text-sm font-normal text-white">CERTIFICADOS</span>
        </div>
      </div>

      <MobileNavbar />

      <div className="items-center justify-between gap-16 hidden md:flex">
        <ul className="flex items-center gap-5">
          {MENU.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-lg text-white font-normal">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/cart"
          className="text-lg text-white font-normal px-10 py-3 bg-lightBlue rounded-full"
        >
          Carrito de Compras
        </Link>
      </div>
    </nav>
  );
}
