import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FormInput from "@/components/ui/FormInput";

interface MarriageFieldsProps {
  errors?: Record<string, string>;
}

export default function MarriageFields({ errors }: MarriageFieldsProps) {
  const { detailSelector } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  switch (detailSelector) {
    case "serial":
      return (
        <FormInput
          header="3. Indique los siguientes datos de las personas inscritas en el registro"
          errors={errors}
          data={[
            {
              id: "first_name_1",
              name: "first_name_1",
              placeholder: "Nombre",
              type: "text",
              required: true,
              label: "Nombre del inscrito 1",
            },
            {
              id: "first_lastname_1",
              name: "first_lastname_1",
              placeholder: "Apellidos",
              type: "text",
              required: true,
              label: "Apellidos inscritos 1",
            },

            {
              id: "second_name_2",
              name: "second_name_2",
              placeholder: "Nombre",
              type: "text",
              required: true,
              label: "Nombre del inscrito 2",
            },

            {
              id: "second_lastname_2",
              name: "second_lastname_2",
              placeholder: "Apellidos",
              type: "text",
              required: true,
              label: "Apellidos inscrito 2",
            },

            {
              id: "serial",
              name: "serial",
              placeholder: "Numero",
              type: "text",
              required: true,
              label: "Indicativo serial del registro requerido",
            },
          ]}
        />
      );

    case "cedula":
      return (
        <FormInput
          header="3. Indique los siguientes datos de las personas inscritas en el registro"
          errors={errors}
          data={[
            {
              id: "document_number_1",
              name: "document_number_1",
              placeholder: "Numero de documento 1 (NUIP)",
              type: "text",
              required: true,
              label: "Cédula de Ciudadanía 1 (NUIP)",
            },
            {
              id: "document_number_2",
              name: "document_number_2",
              placeholder: "Numero de documento 2 (NUIP)",
              type: "text",
              required: true,
              label: "Cédula de Ciudadanía 2 (NUIP)",
            },
          ]}
        />
      );
  }
}
