import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PaymentButton({
  total,
  disabled,
}: {
  total: number;
  disabled: boolean;
}) {
  const formattedTotal = total.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full tracking-normal text-white whitespace-nowrap rounded-none max-w-[352px]"
    >
      <div className="flex justify-between gap-10 px-5 py-4 w-full bg-blue-600 rounded-lg shadow-lg">
        <span className="text-xl font-semibold">{formattedTotal}</span>

        <div className="flex items-center gap-4">
          <span className="grow">Pagar</span>
          <FaArrowRight size={22} />
        </div>
      </div>
    </button>
  );
}
