import FormInput from "@/components/ui/FormInput";
import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import FormButton from "../form-button";
import { useFormValidation } from "@/hooks/useFormValidation";
import { civilRegistryFormSchema } from "@/schemas/civil-registry-schema";
import { toast } from "sonner";
import {
  setRegistryPayment,
  RegistryPayment,
  setSelector,
} from "@/redux/slices/registryPaymentSlice";

export default function CivilRegistryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const { registryPayment, selector } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const { errors, validateForm } = useFormValidation(civilRegistryFormSchema);

  const dispatch = useDispatch();

  const handleValidationSuccess = (data: any) => {
    try {
      const registryPaymentData: RegistryPayment = {
        registro_civil: selector.toString(),
        ...data,
      };

      // Add to Redux store
      dispatch(setRegistryPayment(registryPaymentData));
      dispatch(setSelector(4));

      toast.success("Registro agregado exitosamente");

      return registryPaymentData;
    } catch (error) {
      toast.error("Error al enviar los datos del formulario");
      throw error;
    }
  };

  const handleValidationError = (errors: Record<string, string>) => {
    toast.error("Por favor, corrija los errores en el formulario");
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const validatedData = validateForm(formData);

      if (validatedData) {
        handleValidationSuccess(validatedData);
      } else {
        handleValidationError(errors);
      }
    }
  };

  return (
    <form
      className="mt-5 flex flex-col gap-12"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <FormInput
        errors={errors}
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
            note: "Si no cuenta con segundo nombre, indique el texto NO APLICA",
            type: "text",
            required: true,
            label: "Segundo nombre",
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
        onValidationSuccess={handleValidationSuccess}
        onValidationError={handleValidationError}
      />
    </form>
  );
}
