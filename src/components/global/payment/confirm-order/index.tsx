"use client";

import React from "react";
import OrderSummary from "./order-summary";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ActionButton } from "./action-button";

export default function ConfirmOrder() {
  const { registryPayment, total } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const formattedTotal = total.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <article className="flex flex-col justify-center items-center rounded-xl max-w-[440px] w-full md:sticky top-10">
      <div className="px-6">
        <h2 className="text-2xl font-semibold leading-tight text-center text-sky-950">
          Confirmar Orden y Pagar
        </h2>
        <p className="mt-5 text-md leading-6 text-sky-950">
          Revisa el contenido de ordenes y registos que has seleccionado y
          procede con el pago.
        </p>
      </div>

      {/* Order summary */}
      <OrderSummary />

      {/* Total summary */}
      <div className="flex flex-col justify-center items-center py-3.5 mt-9 max-w-full whitespace-nowrap bg-sky-500 rounded-xl min-h-[60px] w-[388px]">
        <div className="flex gap-7 justify-center items-center max-w-full w-[367px]">
          <h2 className="self-stretch my-auto text-sm font-semibold text-indigo-50 w-[197px]">
            Total
          </h2>
          <p className="self-stretch my-auto text-2xl font-bold text-center text-white">
            {formattedTotal}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex relative gap-4 items-center mt-9 text-base font-semibold leading-none text-center whitespace-nowrap">
        {/* Desing figma Add button

        <button className="z-0 self-stretch flex items-center gap-3 px-8 py-6 my-auto text-white bg-blue-600 rounded-[100px] w-[169px]">
          Agregar
          <FaPlus size={25} />
        </button> */}

        <ActionButton registryPayment={registryPayment} />
      </div>
    </article>
  );
}
