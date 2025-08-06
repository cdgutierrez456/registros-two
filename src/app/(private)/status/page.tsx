"use client";

import PaymentStatus from "@/components/global/payment/payment-status";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");

  if (!status) {
    return <span>No se encontró el estado del pago</span>;
  }

  return <PaymentStatus status={status} />;
}
