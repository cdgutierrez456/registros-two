"use client";

import React from "react";
import { CiCreditCard1 } from "react-icons/ci";

import PSE from "@/assets/pse.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "@/redux/slices/registryPaymentSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function PaymentMethodSelector() {
  const { paymentMethod } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const dispatch = useDispatch();

  const onMethodSelect = (method: string) => {
    dispatch(setPaymentMethod(method));
  };

  return (
    <div className="flex gap-3.5 text-sm font-semibold tracking-normal">
      <button
        onClick={() => onMethodSelect("card")}
        className={`flex gap-2 px-5 py-4 rounded-md border-[1.4px] ${
          paymentMethod === "card"
            ? "text-blue-600 bg-white border-[#1466FF]"
            : "text-sky-950 bg-white border-transparent"
        }`}
      >
        <CiCreditCard1 size={23} />
        <span className="text-blue-600 basis-auto">Tarjeta Débito/Crédito</span>
      </button>
      <button
        onClick={() => onMethodSelect("pse")}
        className={`flex gap-1.5 px-5 py-2 whitespace-nowrap rounded-md ${
          paymentMethod === "pse"
            ? "text-blue-600 bg-white border-[#1466FF] border-[1.4px]"
            : "text-sky-950 bg-white"
        }`}
      >
        <Image
          src={PSE.src}
          alt="PSE icon"
          className="object-contain shrink-0 aspect-square w-[43px]"
          width={43}
          height={43}
          loading="lazy"
          quality={100}
        />
        <span className="my-auto text-sky-950">PSE</span>
      </button>
    </div>
  );
}
