import React from "react";

import Form from "@/components/global/form";
import Information from "@/components/global/information";
import Introduction from "@/components/global/introduction";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Introduction
        title="Registra el Nacimiento de tu Hijo en Línea - Rápido y Seguro"
        description="El Registro Civil de Nacimiento es un documento fundamental que valida la existencia legal de un recién nacido. Este registro garantiza derechos como la salud, la educación y la identidad de tu hijo en Colombia."
      />
      <Information
        title="Solicita Registra el Nacimiento de tu Hijo en Línea - Rápido y Seguro"
        subtitle="Rápido y Seguro"
        content="El Registro Civil de Nacimiento es un documento fundamental que valida la existencia legal de un recién nacido. Este registro garantiza derechos como la salud, la educación y la identidad de tu hijo en Colombia."
      />
      <Form />
    </div>
  );
}
