import React, { FormEvent } from "react";
import FormInput from "@/components/ui/FormInput";
import { useEffect } from "react";
import { fetcher, publicHttpClient } from "@/utils/httpClient";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setBanksPse } from "@/redux/slices/registryPaymentSlice";
import { RootState } from "@/redux/store";
import PaymentButton from "../../payment/payment-form/payment-button";
import buildPaymentRequest from "../combined-object";
import { registryPayment } from "@/types/payment";

export default function PSEForm() {
  const { banksPse, total, registryPayment } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const dispath = useDispatch();

  useEffect(() => {
    const banksPse = async () => {
      try {
        const { data } = await fetcher(`/payment-process/banks`);
        dispath(setBanksPse(data));
      } catch (error) {
        toast.error("Error al cargar bancos");
        throw error;
      }
    };

    banksPse();
  }, [dispath]);

  const listBanks = banksPse?.map(({ bankCode, bankName }: any, index) => {
    return {
      id: `id-${index}`,
      label: bankName,
      value: bankCode,
    };
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const fields = Object.fromEntries(
        new window.FormData(event.target as any)
      );

      const { civilRegisters } = buildPaymentRequest(
        registryPayment as registryPayment[]
      );

      const combinedObject = {
        request: {
          type_product: 1,
          payment_method: "pse",
          document_type: fields.document_type || null,
          document_number: fields.document_number,
          email: fields.email === fields.confirm_email ? fields.email : null,
          phone: fields.phone || null,
          bank: fields.bank || null,
          person_type: fields.type_person || null,
          fullname: fields.name || null,
          total_amount: total,
          redirect_url: "http://localhost:3333/status",
          civil_registers: civilRegisters,
          biller_address: null, // This field doesn't exist
          redeem_codes: {
            value_redeem_code: fields.reedem_code || null,
            amount_pay: null,
          },
        },
      };

      // console.log(combinedObject);

      const response = await publicHttpClient.post(
        "/payment-process/pay",
        combinedObject
      );

      console.log(response);

      // return response;
    } catch (error) {
      toast.error("Error al enviar el formulario");
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        column={true}
        data={[
          {
            id: "type_person",
            name: "type_person",
            placeholder: "natural o juridico",
            type: "text",
            select: true,
            label: "Tipo de persona",
            options: [
              {
                value: "person",
                label: "Persona Natural",
                id: "person",
              },
              {
                value: "company",
                label: "Persona Juridica",
                id: "company",
              },
            ],
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
            id: "name",
            name: "name",
            placeholder: "Ingresar el nombre",
            type: "text",
            label: "Nombre completo",
            required: true,
          },
          {
            id: "bank",
            select: true,
            label: "Escoge tu banco",
            options: listBanks,
            required: true,
            name: "bank",
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
            placeholder: "Ingresar correo electronico",
            type: "text",
            label: "Confirmar correo electronico",
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
        <PaymentButton total={total} />
      </div>
    </form>
  );
}
