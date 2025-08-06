import React, { useRef } from "react";

import FormSelector from "@/components/ui/FormSelector";
import MarriageFields from "./marriage-fields";
import FormButton from "../form-button";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { setDetailSelector } from "@/redux/slices/registryPaymentSlice";
import { useFormValidation } from "@/hooks/useFormValidation";
import { marriageFormSchema } from "@/schemas/marriage-schema";
import { toast } from "sonner";

export default function MarriageForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const { registryPayment, selector } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const dispatch = useDispatch();

  const { errors, validateForm, clearErrors } =
    useFormValidation(marriageFormSchema);

  const handleOptionMarriage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setDetailSelector(value));
    clearErrors();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      const validatedData = validateForm(formData);

      if (validatedData) {
        toast.success("Datos del formulario válidos");
      } else {
        toast.error("Por favor, corrija los errores en el formulario");
      }
    }
  };

  return (
    <form
      className="mt-5 flex flex-col gap-7"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <FormSelector
        header="2. Indica los datos de la persona inscrita en el Registro Civil"
        data={[
          {
            id: "cedula",
            title: "Cédula de Ciudadanía (NUIP)",
            name: "type_marriage",
            color: "blue",
            onChange: handleOptionMarriage,
            value: "cedula",
            defaultChecked: true,
          },
          {
            id: "serial",
            title: "Serial de registro",
            name: "type_marriage",
            color: "blue",
            onChange: handleOptionMarriage,
            value: "serial",
          },
        ]}
      />

      <MarriageFields errors={errors} />

      <FormButton
        formRef={formRef}
        registryPayment={registryPayment}
        selector={selector}
      />
    </form>
  );
}
