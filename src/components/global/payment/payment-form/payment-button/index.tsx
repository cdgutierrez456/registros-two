import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PaymentButton({total}: {total: number}) {
  return (
    <button
      type="submit"
      className="w-full tracking-normal text-white whitespace-nowrap rounded-none max-w-[352px]"
    >
      <div className="flex gap-10 px-5 py-4 w-full bg-blue-600 rounded-lg shadow-lg">
        <span>{total}</span>
        <div className="flex flex-1 gap-1.5 text-center">
          <span className="grow">Pagar</span>
          <FaArrowRight size={22} />
        </div>
      </div>
    </button>
  );
}
