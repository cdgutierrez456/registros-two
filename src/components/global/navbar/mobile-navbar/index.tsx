"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { MENU } from "@/constants/menu";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
            {MENU.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg text-white font-normal"
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
