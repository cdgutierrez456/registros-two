"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "@/assets/logo.png";

import { MENU } from "@/constants/menu";
import MobileNavbar from "./mobile-navbar";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [openMegamenu, setOpenMegamenu] = useState(false);

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
          {MENU.map((item) =>
            item.megamenu ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setOpenMegamenu(!openMegamenu)}
                  className="text-lg text-white font-normal flex items-center gap-2"
                >
                  {item.name}
                  <IoIosArrowDown
                    size={25}
                    color="white"
                    className={`transition-all duration-300 ${openMegamenu ? "rotate-180" : ""}`}
                  />
                </button>

                {openMegamenu && (
                  <div className="absolute top-10 left-0 z-10 w-[260px] bg-blue-500 rounded-md shadow-sm px-5 py-5">
                    <ul className="flex flex-col gap-5 p-2 w-full text-center">
                      {item.items.map((subItem) => (
                        <li key={subItem.name} className="w-full ">
                          <Link
                            href={subItem.href}
                            className="text-lg text-white font-normal w-full hover:underline transition-all duration-300 hover:text-blue-800/80"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg text-white font-normal hover:underline transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
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
