"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActionButtonProps {
  registryPayment: any;
}

const isEmpty = (data: any) => {
  if (Array.isArray(data)) return data.length === 0;
  if (typeof data === "object" && data !== null)
    return Object.keys(data).length === 0;
  return !data;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  registryPayment,
}) => {
  const pathName = usePathname();

  if (isEmpty(registryPayment) && pathName === "/cart") {
    return (
      <Link
        href="/"
        className="z-0 gap-2.5 self-stretch px-12 py-6 my-auto text-blue-600 border-2 border-solid border-[color:var(--Blue-Cain,#1466FF)] rounded-[100px]"
      >
        Volver al inicio
      </Link>
    );
  }

  if (!isEmpty(registryPayment) && pathName === "/") {
    return (
      <Link
        href="/cart"
        className="z-0 gap-2.5 self-stretch px-12 py-6 my-auto text-blue-600 border-2 border-solid border-[color:var(--Blue-Cain,#1466FF)] rounded-[100px]"
      >
        Pagar
      </Link>
    );
  }

  return null;
};
