"use client";

import Image from "next/image";
import React from "react";
import { SELECTOR_OPTIONS } from "@/constants/selector";
import { useDispatch } from "react-redux";
import { setSelector } from "@/redux/slices/registryPaymentSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Selector() {
  const { selector } = useSelector((state: RootState) => state.PaymentReducer);

  const dispatch = useDispatch();

  const handleSelector = (index: number) => {
    dispatch(setSelector(index));
  };


  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10 m-auto">
      {SELECTOR_OPTIONS.map((option, index) => (
        <div
          className={`${selector === option.value ? "bg-blueCher" : "bg-iceBlue"} flex cursor-pointer flex-col items-center justify-center gap-5 px-5 py-6 rounded-lg text-center relative`}
          key={index}
          onClick={() => handleSelector(option.value)}
        >
          <Image
            src={option.icon}
            alt="icon"
            width={120}
            height={120}
            priority
            loading="eager"
            quality={100}
            className="mx-auto absolute -top-12 md:z-10 z-0"
          />

          <div className="bg-white p-6 rounded-lg mt-16">
            <span className="font-medium text-md">{option.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
