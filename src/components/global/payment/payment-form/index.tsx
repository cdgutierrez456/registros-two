"use client";

import React from "react";

import PaymentMethodSelector from "./payment-method-selector";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import CreditCardForm from "../../form/creditcard";
import PSEForm from "../../form/pse";
import FormRedeemCode from "../../form/code";

export default function PaymentForm() {
  const { paymentMethod } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  return (
    <section className="flex flex-col justify-center px-6 py-7 text-base font-semibold rounded-xl bg-slate-100 max-w-[400px]">
      <h1 className="leading-tight text-sky-950">Detalles de Pago</h1>

      <div className="mt-9 w-full tracking-normal rounded-none max-w-[352px]">
        <PaymentMethodSelector />

        <div className="mt-8">
          {paymentMethod === "card" ? <CreditCardForm /> : paymentMethod === "pse" ? <PSEForm /> : <FormRedeemCode />}
        </div>
      </div>
    </section>
  );
}
