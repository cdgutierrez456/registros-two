import FormInput from "@/components/ui/FormInput";
import React, { useRef, useState } from "react";
import FormSelector from "@/components/ui/FormSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FormButton from "../form-button";

export default function Demise() {
  const formRef = useRef<HTMLFormElement>(null);

  const { registryPayment, selector } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const [formDemise, setFormDemise] = useState<string>();

  const handleOptionMarriage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormDemise(value);
  };

  console.log(registryPayment);

  return (
    <form className="mt-5 flex flex-col gap-7" ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <FormSelector
        header="2. Indica los datos de la persona inscrita en el Registro Civil"
        data={[
          {
            id: "cedula",
            title: "Cédula de Ciudadanía (NUIP)",
            name: "type_search",
            color: "blue",
            onChange: handleOptionMarriage,
            value: "cedula",
            defaultChecked: true,
          },
          {
            id: "serial",
            title: "Serial de registro",
            name: "type_search",
            color: "blue",
            onChange: handleOptionMarriage,
            value: "serial",
          },
          {
            id: "name_lastname",
            title: "Nombres y apellidos",
            name: "type_search",
            color: "blue",
            onChange: handleOptionMarriage,
            value: "name_lastname",
          },
        ]}
      />

      <FormInput
        header="3. Indique los siguientes datos de las personas inscritas en el registro"
        data={[
          {
            id: "name_first_registrant",
            name: "name_first_registrant",
            placeholder: "Primer nombre",
            type: "text",
            required: true,
            label: "Primer nombre",
          },
          {
            id: "name_second_registrant",
            name: "name_second_registrant",
            placeholder: "Segundo nombre",
            type: "text",
            required: false,
            label: "Segundo nombre (opcional)",
          },

          {
            id: "surname_first_registrant",
            name: "surname_first_registrant",
            placeholder: "Primer apellido",
            type: "text",
            required: true,
            label: "Primer apellido",
          },

          {
            id: "surname_second_registrant",
            name: "surname_second_registrant",
            placeholder: "Apellidos",
            type: "text",
            required: true,
            note: "Si no cuenta con segundo apellido, indique el texto NO APLICA",
            label: "Segundo apellido",
          },
          {
            id: formDemise === "serial" ? "serial" : "document_number",
            name: formDemise === "serial" ? "serial" : "document_number",
            placeholder:
              formDemise === "serial"
                ? "Numero"
                : formDemise === "name_lastname"
                  ? "00/00/0000"
                  : "Numero de documento",
            type: "text",
            required: true,
            label:
              formDemise === "serial"
                ? "Indicativo del registro requerido"
                : formDemise === "name_lastname"
                  ? "Fecha de defunción"
                  : "Cédula de ciudadanía (NUIP)",
          },
        ]}
      />

      <FormButton
        formRef={formRef}
        registryPayment={registryPayment}
        selector={selector}
      />
    </form>
  );
}
