"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { MENU } from "@/constants/menu";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const [openMegamenu, setOpenMegamenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden block">
      <button onClick={() => setOpen(!open)}>
        <GiHamburgerMenu size={25} color="white" />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-auto bg-blueCher flex flex-col gap-10 py-10 z-10 px-[20px]"
        >
          <ul className="flex flex-col items-center gap-5">
            {MENU.map(
              (item) =>
                item.megamenu ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setOpenMegamenu(!openMegamenu)}
                      className="text-lg text-white font-normal flex items-center gap-2 mx-auto text-center"
                    >
                      {item.name}
                      <IoIosArrowDown
                        size={25}
                        color="white"
                        className={`transition-all duration-300 ${openMegamenu ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openMegamenu && (
                      <div className="w-full mt-3 bg-blue-500 px-3 py-3 rounded-md shadow-sm">
                        <ul className="flex flex-col gap-5 w-full text-center">
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

              // <li key={item.name}>
              //   <Link
              //     href={item.href}
              //     className="text-lg text-white font-normal"
              //   >
              //     {item.name}
              //   </Link>
              // </li>
            )}
          </ul>

          <Link
            href="/cart"
            className="text-lg text-white font-normal px-10 py-3 bg-lightBlue rounded-full text-center"
          >
            Carrito de Compras
          </Link>
        </div>
      )}
    </div>
  );
}
