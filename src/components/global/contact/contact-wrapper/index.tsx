"use client";

import { usePathname } from "next/navigation";
import Contact from "../index";

import React from "react";

export default function ContactWrapper() {
  const path = usePathname();

  const isContactPage = path === "/contacto";

  if (isContactPage) return null;

  return <Contact />;
}
