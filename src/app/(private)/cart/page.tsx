"use client";

import ConfirmOrder from "@/components/global/payment/confirm-order";
import PaymentForm from "@/components/global/payment/payment-form";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Page() {
  const { registryPayment } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-16 md:px-0 px-[20px]">
      <ConfirmOrder />
      {registryPayment.length > 0 && <PaymentForm />}
    </div>
  );
}
