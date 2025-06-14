import FormInput from "@/components/ui/FormInput";
import React, { useRef } from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import FormButton from "../form-button";

export default function CivilRegistryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const { registryPayment, selector } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  console.log(registryPayment);

  return (
    <form
      className="mt-5 flex flex-col gap-12"
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput
        data={[
          {
            id: "name",
            name: "name",
            placeholder: "Primer nombre",
            type: "text",
            required: true,
            label: "Primer nombre",
          },
          {
            id: "second_name",
            name: "second_name",
            placeholder: "Segundo nombre",
            type: "text",
            required: false,
            label: "Segundo nombre (opcional)",
          },
          {
            id: "first_lastname",
            name: "first_lastname",
            placeholder: "Primer apellido",
            type: "text",
            required: true,
            label: "Primer apellido",
          },
          {
            id: "second_lastname",
            name: "second_lastname",
            placeholder: "Apellidos",
            type: "text",
            required: true,
            note: "Si no cuenta con segundo apellido, indique el texto NO APLICA",
            label: "Segundo apellido",
          },
          {
            id: "document_number",
            name: "document_number",
            placeholder: "Numero de documento",
            type: "text",
            required: true,
            label: "Cédula de ciudadanía (NUIP)",
          },
          {
            id: "serial_number",
            name: "serial_number",
            placeholder: "Serial del registro",
            type: "text",
            required: false,
            label: "Serial del registro (opcional)",
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
