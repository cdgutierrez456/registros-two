import React from "react";
import FormInput from "@/components/ui/FormInput";
import { useEffect } from "react";
import { fetcher } from "@/utils/httpClient";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setBanksPse } from "@/redux/slices/registryPaymentSlice";
import { RootState } from "@/redux/store";
import PaymentButton from "../../payment/payment-form/payment-button";

export default function PSEForm() {
  const { banksPse, total } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const dispath = useDispatch();

  useEffect(() => {
    const banksPse = async () => {
      try {
        const response = await fetcher(`/payment-process/banks`);
        dispath(setBanksPse(response.data.banks));
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

  return (
    <form>
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
