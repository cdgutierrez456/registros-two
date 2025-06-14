import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";

import Divider from "./divider";
import PaymentDetails from "./payment-details";

export default function PaymentStatus() {
  return (
    <main className="flex flex-col gap-2.5 justify-center items-center px-5 py-10 w-full bg-white min-h-[screen]">
      <header className="relative mb-10 w-full h-10 text-3xl font-extrabold leading-normal text-center text-black flex-[shrink] max-w-[840px] max-md:text-3xl max-sm:text-2xl">
        Registro Civil Digital
      </header>

      <section className="flex gap-10 justify-center w-full max-w-[1321px] max-md:gap-8 max-sm:gap-5">
        <div className="flex relative flex-col gap-12 items-center max-sm:gap-8">
          <div className="flex justify-center items-center">
            <FaRegCheckCircle size={50} color="green" />
          </div>

          <div className="flex relative flex-col gap-4 items-center">
            <h1 className="text-4xl font-semibold text-center leading-[54px] text-neutral-900 max-md:text-3xl max-sm:text-3xl">
              Pago Exitoso!
            </h1>
            <p className="text-base leading-6 text-center max-w-[600px] text-neutral-500 max-sm:text-sm">
              La Orden de compra se ha enviado con éxito al correo
              alma.lawson@example.com
            </p>
          </div>

          <div className="flex relative flex-col gap-10 items-center w-full max-sm:gap-8">
            <div className="flex justify-between items-center px-5 w-full max-w-[800px] max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <div className="flex gap-6 max-sm:gap-4">
                <div className="flex relative flex-col gap-3">
                  <h2 className="w-full text-2xl font-semibold leading-9 max-w-[343px] text-stone-800 max-md:text-2xl max-sm:text-xl">
                    Registro Civil de Nacimiento
                  </h2>
                  <div className="flex items-center gap-[4px] relative">
                    <span className="text-[#7A7A7A] font-medium text-lg">
                      Rosario Torres
                    </span>
                    <span className="w-1 h-1 bg-[#D7D7D7] rounded-full"></span>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-semibold leading-9 text-stone-800 max-md:text-2xl max-sm:text-xl">
                $50.000
              </p>
            </div>

            <Divider />

            <PaymentDetails
              paymentId="0000000000"
              email="correo@correo.com"
              date="Tuesday, 13 June 2023"
              time="13:00"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
