import Contact from "@/components/global/contact";
import Introduction from "@/components/global/introduction";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center w-full">
      <Contact />
      <Introduction
        title="Reserva tu Registro Civil ahora"
        description="Y Disfruta de la Comodidad de hacerlo en Línea. Accede a los servicios más rápidos, fáciles y seguros para obtener tus registros civiles en formato digital."
      />
    </div>
  );
}
