import React from "react";
import Information from "@/components/global/information";
import Form from "@/components/global/form";
import Introduction from "@/components/global/introduction";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Introduction
        title="Registra tu Matrimonio de Forma Rápida y Legal"
        description="Formaliza tu matrimonio con el Registro Civil digital, disponible de manera segura y rápida para parejas en Colombia."
      />
      <Information
        title="Registra tu Matrimonio de Forma Rápida y Legal - ¡Hazlo en Línea!"
        subtitle="Rápido y Seguro"
        content="El Registro Civil de Matrimonio es necesario para que tu unión tenga validez ante el Estado, otorgando derechos y responsabilidades a los contrayentes. Regístralo hoy mismo sin complicaciones y de manera 100% digital."
      />
      <Form />
    </div>
  );
}
