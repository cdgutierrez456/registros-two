"use client";

import React from "react";
import Selector from "./selector";
import FormSelector from "./form-selector";
import ConfirmOrder from "../payment/confirm-order";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Form() {
  const { registryPayment } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  return (
    <div
      className="flex flex-col gap-16 py-16 mx-auto w-full max-w-[1240px] px-[20px] md:px-0"
      id="form"
    >
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-medium text-2xl text-black">
          Compra aqui tu registro civil
        </h1>

        <span className="text-gray-500 text-md font-normal">
          1. Seleccione el registro civil que desea comprar
        </span>
      </div>

      <div className="flex md:flex-row flex-col gap-16 items-start justify-center md:gap-10">
        <div className="flex flex-col gap-8">
          <Selector />
          <FormSelector />
        </div>

        {registryPayment.length > 0 && <ConfirmOrder />}
      </div>
    </div>
  );
}
