"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";

import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

import Divider from "./divider";
import PaymentDetails from "./payment-details";
import { toast } from "sonner";
import { publicHttpClient } from "@/utils/httpClient";

export default function PaymentStatus({ status }: { status: string }) {
  const [paymentStatus, setPaymentStatus] = useState<any>(null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const { data } = await publicHttpClient.get(
          `/payment-process/transaction/${status}`
        );

        const { request } = data;

        // await publicHttpClient.post(
        //   `/payment-process/sendPDF/${request.pay_id}`
        // );

        setPaymentStatus(data);

        toast.success("La orden de compra se ha enviado con éxito al correo");
      } catch (error) {
        toast.error("Error al obtener el estado del pago");
        throw error;
      }
    };

    fetchPaymentStatus();
  }, [status]);

  const { request } = paymentStatus || {};

  const info = useCallback(() => {
    if (!request) return {};

    return {
      address: request.address,
      email: request.email,
      name: request.fullname,
      total: request.amount,
      date: request.created_at,
      paymentId: request.pay_id,
      phone: request.phone,
    };
  }, [request]);

  const { address, email, name, total, date, paymentId, phone } = info();

  const dateFormatted = useMemo(() => {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }, [date]);

  const timeFormatted = useMemo(() => {
    return new Date(date).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [date]);

  return (
    <main className="flex flex-col gap-2.5 justify-center items-center px-5 py-10 w-full bg-white min-h-[screen]">
      <header className="relative mb-10 w-full h-10 text-3xl font-extrabold leading-normal text-center text-black flex-[shrink] max-w-[840px] max-md:text-3xl max-sm:text-2xl">
        Registro Civil Digital
      </header>

      <section className="flex gap-10 justify-center w-full max-w-[1321px] max-md:gap-8 max-sm:gap-5">
        <div className="flex relative flex-col gap-12 items-center max-sm:gap-8">
          <div className="flex justify-center items-center">
            {paymentStatus?.ok === true ? (
              <FaRegCheckCircle size={50} color="green" />
            ) : (
              <FaRegTimesCircle size={50} color="red" />
            )}
          </div>

          <div className="flex relative flex-col gap-4 items-center">
            <h1 className="text-4xl font-semibold text-center leading-[54px] text-neutral-900 max-md:text-3xl max-sm:text-3xl">
              {paymentStatus?.ok === true ? "Pago Exitoso!" : "Pago Fallido!"}
            </h1>
            <p className="text-base leading-6 text-center max-w-[600px] text-neutral-500 max-sm:text-sm">
              {paymentStatus?.ok === true
                ? `La Orden de compra se ha enviado con éxito al correo ${email}`
                : "No se pudo enviar la orden de compra al correo"}
            </p>
          </div>

          <div className="flex relative flex-col gap-10 items-center w-full max-sm:gap-8">
            <div className="flex justify-between items-center px-5 w-full max-w-[800px] max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <div className="flex gap-6 max-sm:gap-4">
                <div className="flex relative flex-col gap-3">
                  <div className="flex items-start justify-between gap-[4px] relative">
                    <span className="text-[#7A7A7A] font-medium text-lg">
                      {name}
                    </span>

                    <span className="w-1 h-1 bg-[#D7D7D7] rounded-full"></span>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-semibold leading-9 text-stone-800 max-md:text-2xl max-sm:text-xl">
                {total?.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>

            <Divider />

            <PaymentDetails
              paymentId={paymentId}
              email={email}
              date={dateFormatted}
              time={timeFormatted}
              address={address}
              phone={phone}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
