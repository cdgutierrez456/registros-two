import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { getValidatedFormFields } from "@/utils/validate";
import { toast } from "sonner";
import {
  setDeleteIsEditing,
  setRegistryPayment,
  setSelector,
  setUpdateRegistryPayment,
} from "@/redux/slices/registryPaymentSlice";
import { RegistryPayment } from "@/redux/slices/registryPaymentSlice";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface FormButtonProps {
  formRef: React.RefObject<HTMLFormElement>;
  registryPayment: RegistryPayment[];
  selector: number;
  onValidationSuccess?: (data: any) => void;
  onValidationError?: (errors: Record<string, string>) => void;
}

export default function FormButton({
  formRef,
  registryPayment,
  selector,
  onValidationSuccess,
  onValidationError,
}: FormButtonProps) {
  const { isEditing } = useSelector((state: RootState) => state.PaymentReducer);

  console.log("selector: ", selector);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (isEditing && formRef.current) {
      const form = formRef.current;

      Object.keys(isEditing).forEach((key) => {
        const input = form.elements.namedItem(key) as HTMLInputElement;

        if (input) {
          input.value = isEditing[key as keyof typeof isEditing] || "";
        }
      });
    }
  }, [isEditing, formRef]);

  const handleAdd = () => {
    try {
      if (formRef.current) {
        // If we have a custom validation handler, trigger form submission
        if (onValidationSuccess && onValidationError) {
          formRef.current.requestSubmit();
          return;
        }

        // Fallback to the old validation method
        const fields = getValidatedFormFields(formRef.current);

        if (!fields) return;

        const registryPaymentData: RegistryPayment = {
          registro_civil: selector.toString(),
          ...fields,
        };

        dispatch(setRegistryPayment(registryPaymentData));
        dispatch(setSelector(4));

        toast.success("Registro agregado exitosamente");

        return registryPaymentData;
      }
    } catch (error) {
      toast.error("Error al enviar los datos del formulario");
      throw error;
    }
  };

  const handlePay = () => {
    if (formRef.current && registryPayment.length === 0) {
      // If we have a custom validation handler, trigger form submission
      if (onValidationSuccess && onValidationError) {
        formRef.current.requestSubmit();
        return;
      }

      // Fallback to the old validation method
      const fields = getValidatedFormFields(formRef.current);

      if (!fields) return;

      const registryPaymentData = handleAdd();

      if (registryPaymentData) {
        router.push("/cart");
      }
    } else if (registryPayment.length >= 1) {
      router.push("/cart");
    }
  };

  const handleEditRecord = () => {
    try {
      if (isEditing && formRef.current) {
        // If we have a custom validation handler, trigger form submission
        if (onValidationSuccess && onValidationError) {
          formRef.current.requestSubmit();
          return;
        }

        // Fallback to the old validation method
        const fields = getValidatedFormFields(formRef.current);

        if (!fields) return;

        const updatedRecord = {
          ...isEditing,
          ...fields,
        };

        const index = registryPayment.findIndex(
          (record: any) => record === isEditing
        );

        if (index === -1) {
          toast.error("Registro no encontrado para editar");
          return;
        }

        dispatch(
          setUpdateRegistryPayment({ index, updatedData: updatedRecord as any })
        );

        dispatch(setDeleteIsEditing());

        toast.success("Registro actualizado exitosamente ✅");
      }
    } catch (error) {
      toast.error("Error al editar los datos del formulario");
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center gap-5">
      {isEditing && Object.keys(isEditing).length > 0 ? (
        <button
          type="button"
          className="rounded-full border border-lightBlue bg-lightBlue pl-4 pr-3 py-2 flex items-center justify-center gap-2 text-center font-normal text-white hover:bg-blueCher"
          onClick={handleEditRecord}
        >
          Editar
        </button>
      ) : (
        <button
          type="button"
          className="rounded-full border border-lightBlue bg-lightBlue pl-4 pr-3 py-2 flex items-center justify-center gap-2 text-center font-normal text-white hover:bg-blueCher"
          onClick={handleAdd}
        >
          Agregar
          <FaPlus
            size={25}
            className="px-2 bg-white rounded-full"
            color="black"
          />
        </button>
      )}

      <button
        type="button"
        className="rounded-full border border-lightBlue text-blueCher px-6 py-2 hover:border-blueCher"
        onClick={handlePay}
      >
        Pagar
      </button>
    </div>
  );
}
