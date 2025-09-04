"use client";

import React, { FormEvent } from "react";
import FormInput from "@/components/ui/FormInput";
import PaymentButton from "@/components/global/payment/payment-form/payment-button";
import { useDispatch } from "react-redux";
import { setIsLoading } from "@/redux/slices/registryPaymentSlice";
import { toast } from "sonner";
import { publicHttpClient } from "@/utils/httpClient";
import { buildPaymentRequest, getCivilRegisters } from "@/utils/object";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CreditCardForm() {
  const { registryPayment, total } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const dispatch = useDispatch();

  const civilRegisters = getCivilRegisters(registryPayment);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(setIsLoading(true));

      const fields = Object.fromEntries(
        new window.FormData(event.target as any)
      );

      const combinedObject = buildPaymentRequest({
        fields,
        total,
        civilRegisters,
      });

      const response = await publicHttpClient.post(
        "/payment-process/pay",
        combinedObject
      );

      console.log(response);

      return response;
    } catch (error) {
      toast.error("Error al conectar con la pasarela");
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        column={true}
        data={[
          {
            id: "fullname",
            name: "fullname",
            placeholder: "Ingresa el nombre",
            type: "text",
            label: "Nombre completo",
            required: true,
          },
          {
            id: "document_type",
            name: "document_type",
            select: true,
            required: true,
            label: "Tipo de documento",
            options: [
              {
                value: "CedulaDeCiudadania",
                label: "Cedula de Ciudadanía",
                id: "CedulaDeCiudadania",
              },
              {
                value: "TarjetaDeIdentidad",
                label: "Tarjeta de Identidad",
                id: "TarjetaDeIdentidad",
              },
              {
                value: "Pasaporte",
                label: "Pasaporte",
                id: "Pasaporte",
              },
              {
                value: "NIT",
                label: "NIT",
                id: "NIT",
              },
            ],
          },
          {
            id: "document_number",
            name: "document_number",
            placeholder: "Numero de documento",
            type: "text",
            label: "Documento",
            required: true,
          },
          {
            id: "card_number",
            name: "card_number",
            placeholder: "Ingresa los digitos",
            type: "text",
            label: "Numero de la tarjeta",
            required: true,
          },
          {
            id: "card_year",
            name: "card_year",
            placeholder: "MM/AAAA",
            type: "text",
            label: "Fecha de vencimiento",
            required: true,
          },
          {
            id: "card_cvv",
            name: "card_cvv",
            placeholder: "Ingresa los digitos",
            type: "text",
            label: "CVC/CVV",
            required: true,
          },
          {
            id: "installments",
            name: "installments",
            select: true,
            required: true,
            label: "Numero de coutas",
            options: [
              {
                value: "1",
                label: "1",
                id: "one",
              },
              {
                value: "2",
                label: "2",
                id: "two",
              },
              {
                value: "3",
                label: "3",
                id: "three",
              },
            ],
          },
          {
            id: "email",
            name: "email",
            placeholder: "Ingresar correo electronico",
            type: "text",
            label: "Correo electronico",
            required: true,
          },
          {
            id: "confirm_email",
            name: "confirm_email",
            placeholder: "Confirmar correo electronico",
            type: "text",
            label: "Correo electronico",
            required: true,
          },
          {
            id: "phone",
            name: "phone",
            placeholder: "Celular",
            type: "text",
            label: "Celular",
            required: true,
          },
        ]}
      />

      <div className="mt-9">
        <PaymentButton total={total} disabled={false} />
      </div>
    </form>
  );
}
