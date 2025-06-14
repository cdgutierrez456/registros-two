import React from "react";

import { LuUsersRound } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { FaBox } from "react-icons/fa6";

export default function CTA() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-28 py-14 bg-indigo-50 max-md:px-5">
      <div className="flex flex-col py-6 max-w-full rounded-2xl w-[1116px]">
        <div className="flex flex-col items-center self-center max-w-full font-semibold w-[657px]">
          <div className="gap-2.5 pl-6 text-sm leading-none text-blue-600 uppercase tracking-[5.04px] max-md:pl-5">
            Beneficios y razones
          </div>
          <div className="mt-5 text-6xl leading-snug text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
            Por qué elegirnos
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink justify-center items-start min-w-60 w-[266px]">
            <div className="flex gap-6 items-center text-2xl font-semibold leading-snug text-zinc-800">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[92px] flex flex-col items-center justify-center bg-blueCher rounded-md">
                <LuUsersRound size={25} color="white" />
              </div>
              <div className="self-stretch my-auto text-zinc-800 w-[300px]">
                Pago Seguro
              </div>
            </div>
            <div className="mt-6 max-w-full text-base leading-7 text-gray-500 w-[300px]">
              Usamos medidas de seguridad avanzadas para proteger tus datos
              personales y bancarios durante todo el proceso de pago en línea.
            </div>
          </div>
          <div className="flex flex-col grow shrink justify-center items-start min-w-60 w-[281px]">
            <div className="flex gap-6 justify-between items-center max-w-full text-2xl font-semibold leading-9 text-zinc-800 w-[416px]">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[92px] flex flex-col items-center justify-center bg-blueCher rounded-md">
                <IoMdTime size={25} color="white" />
              </div>
              <div className="self-stretch my-auto text-zinc-800 w-[300px]">
                Protección <br />
                Antifraude
              </div>
            </div>
            <div className="mt-6 max-w-full text-base leading-7 text-gray-500 w-[300px]">
              Contamos con sistemas para detectar y prevenir el fraude en cada
              transacción.
            </div>
          </div>
          <div className="flex flex-col grow shrink justify-center items-start min-w-60 w-[271px]">
            <div className="flex gap-6 items-center text-2xl font-semibold leading-snug text-zinc-800">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[92px] flex flex-col items-center justify-center bg-blueCher rounded-md">
                <FaBox size={25} className="m-auto" color="white" />
              </div>
              <div className="self-stretch my-auto text-zinc-800 w-[300px]">
                Certificado SSL
              </div>
            </div>
            <div className="mt-6 max-w-full text-base leading-7 text-gray-500 w-[300px]">
              Toda la información que se envía está protegida por un certificado
              SSL, asegurando que tu pago sea completamente seguro.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
