import React, { useRef } from "react";

import FormSelector from "@/components/ui/FormSelector";
import MarriageFields from "./marriage-fields";
import FormButton from "../form-button";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { setDetailSelector } from "@/redux/slices/registryPaymentSlice";

export default function MarriageForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    registryPayment,
    selector,
  } = useSelector((state: RootState) => state.PaymentReducer);

  const dispatch = useDispatch();

  const handleOptionMarriage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setDetailSelector(value));
  };

  console.log(registryPayment);

  return (
    <form
      className="mt-5 flex flex-col gap-7"
      ref={formRef}
      onSubmit={(e) => e.preventDefault()}
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

      <MarriageFields />

      <FormButton
        formRef={formRef}
        registryPayment={registryPayment}
        selector={selector}
      />
    </form>
  );
}
