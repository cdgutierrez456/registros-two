import React, { FormEvent, useState } from "react";
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
import { FormSchema } from "@/schemas/pse-schema";
import z from "zod";

export default function PSEForm() {
  const { banksPse, total, registryPayment } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const [errors, setErrors] = useState({});

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
      const formData = new FormData(event.target as HTMLFormElement);
      const fields = Object.fromEntries(formData.entries());

      const parsed = FormSchema.parse(fields);
      setErrors({});

      const { civilRegisters } = buildPaymentRequest(
        registryPayment as registryPayment[]
      );

      const combinedObject = {
        request: {
          type_product: 1,
          payment_method: "pse",
          document_type: parsed.document_type || null,
          document_number: parsed.document_number,
          email: parsed.email === parsed.confirm_email ? parsed.email : null,
          phone: parsed.phone || null,
          bank: parsed.bank || null,
          person_type: parsed.type_person || null,
          fullname: parsed.name || null,
          total_amount: total,
          redirect_url: "http://localhost:3333/status",
          civil_registers: civilRegisters,
          address: null,
          redeem_codes: {
            value_redeem_code: fields.reedem_code || null,
            amount_pay: null,
          },
        },
      };

      const response = await publicHttpClient.post(
        "/payment-process/pay",
        combinedObject
      );

      console.log(response);

      // return response;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};

        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Error al enviar el formulario");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        column={true}
        errors={errors}
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
        <PaymentButton total={total} disabled={false} />
      </div>
    </form>
  );
}
