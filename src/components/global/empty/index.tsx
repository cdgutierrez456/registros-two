import Link from "next/link";
import React from "react";

import { FaRobot } from "react-icons/fa";

type Props = {
  message?: string;
};

export default function Empty({
  message = "No tienes productos agregados al carrito todavia. 😔",
}: Props) {
  return (
    <div className="px-10 py-10 md:w-[400px] w-full flex flex-col justify-center items-center gap-5 border border-lightGray border-separate rounded-sm mt-10">
      <FaRobot size={50} className="rounded-full px-1 py-1" color="black" />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-500 text-md font-light text-center">
          {message}
        </p>

        <Link href="/" className="text-blue-600 text-center">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
