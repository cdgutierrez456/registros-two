import FormInput from "@/components/ui/FormInput";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PaymentButton from "@/components/global/payment/payment-form/payment-button";

function FormRedeemCode() {
  const { total } = useSelector((state: RootState) => state.PaymentReducer);

  return (
    <form className="flex flex-col w-full mt-6">
      <FormInput
        column={true}
        data={[
          {
            id: "name",
            name: "name",
            placeholder: "Ingresa el nombre",
            type: "text",
            label: "Nombre completo",
            required: true,
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
            id: "redeem_code",
            name: "reedem_code",
            placeholder: "Ingresar los digitos",
            type: "text",
            label: "Digita el código",
            required: true,
          },
          {
            id: "phone_number",
            name: "phone_number",
            placeholder: "Ingresar los digitos",
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

export default FormRedeemCode;
