import React from "react";

import Information from "@/components/global/information";
import Form from "@/components/global/form";
import Introduction from "@/components/global/introduction";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Introduction
        title="Obtén el Registro Civil de Defunción"
        description="Gestiona el Registro Civil de Defunción en línea y realiza el trámite de manera rápida, sin complicaciones y con validez legal."
      />
      <Information
        title="Obtén el Registro Civil de Defunción - Formaliza la Partida de un Ser Querido"
        subtitle="Rápido y Seguro"
        content="El Registro Civil de Defunción es un documento que certifica el fallecimiento de una persona y formaliza su salida del registro civil, extinguiendo sus derechos y obligaciones legales. Este trámite es esencial para procesos legales posteriores como la herencia."
      />
      <Form />
    </div>
  );
}
