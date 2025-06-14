"use client";

import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { RiErrorWarningFill } from "react-icons/ri";

function ViewInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShowModal = () => {
      const modalTimestamp = localStorage.getItem("modalTimestamp") as any;
      const now = Date.now() as any;
      const fifteenDaysInMs = 3 * 24 * 60 * 60 * 1000;

      if (!modalTimestamp || now - modalTimestamp > fifteenDaysInMs) {
        setIsOpen(true);
        localStorage.setItem("modalTimestamp", now);
      } else {
        setIsOpen(false);
      }
    };

    handleShowModal();
  }, []);

  return (
    <Modal
      onClose={() => setIsOpen(!isOpen)}
      show={isOpen}
      buttonsVisible={false}
      onOk={() => setIsOpen(!isOpen)}
      size="lg"
      type="info"
    >
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-3 items-center justify-center">
          <RiErrorWarningFill color="#A32029" size={100} />
          <h1 className="text-baseBlue font-bold capitalize text-3xl">
            TEN EN CUENTA
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-medium text-baseBlue text-md">
            - La solicitud del Registro Civil de Nacimiento de menores de edad
            no está disponible para ser tramitado por este medio
          </p>
          <p className="font-medium text-baseBlue text-md">
            - La solicitud del Registro Civil de Nacimiento para mayores de 25
            años estará sujeto a disponibilidad de acuerdo a la oficina donde se
            encuentra el registro
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ViewInfoModal;
