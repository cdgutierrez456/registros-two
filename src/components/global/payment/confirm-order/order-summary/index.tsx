"use client";

import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setDeleteRegistryPayment,
  setEditing,
} from "@/redux/slices/registryPaymentSlice";
import { toast } from "sonner";
import Empty from "@/components/global/empty";
import { useRouter } from "next/navigation";

export default function OrderSummary() {
  const { registryPayment } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const router = useRouter();

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(setDeleteRegistryPayment(id));
    toast.success("Registro eliminado con exito");
  };

  const handleEdit = (id: number) => {
    dispatch(setEditing(id));
    router.push("/");
  };

  if (registryPayment.length === 0) {
    return <Empty />;
  }

  return (
    <section className="flex flex-col gap-3 justify-center items-center py-5 mt-9 max-w-full bg-indigo-50 rounded-xl min-h-[113px] w-[388px]">
      {registryPayment.map(
        (
          {
            registro_civil,
            name,
            first_lastname,
            document_number,
            document_number_1,
            first_name_1,
            first_lastname_1,
            serial,
          },
          index
        ) => (
          <div
            className="flex gap-7 items-start max-w-full w-[346px]"
            key={index}
          >
            <div className="text-xs text-sky-950 w-[199px]">
              <h2 className="text-sm font-semibold text-sky-950">
                {registro_civil === "4"
                  ? " Registro civil de Nacimiento"
                  : registro_civil === "5"
                    ? "Registro civil de Defunción"
                    : registro_civil === "6" && "Registro civil de Matrimonio"}
              </h2>

              {(name || first_name_1) && (
                <p className="mt-2 text-sky-950">
                  {name
                    ? name + " " + first_lastname
                    : first_name_1 + " " + first_lastname_1}
                </p>
              )}

              {document_number ||
                (document_number_1 && (
                  <p className="mt-2 text-sky-950">
                    {document_number || document_number_1}
                  </p>
                ))}

              {serial && <p className="mt-2 text-sky-950">{serial}</p>}
            </div>

            <p className="text-lg font-medium text-center text-neutral-700">
              $30.000
            </p>
            <div className="w-[35px]">
              <button onClick={() => handleEdit(index)}>
                <FaPencilAlt
                  className="object-contain rounded-none aspect-square w-[35px]"
                  size={18}
                />
              </button>

              <button onClick={() => handleDelete(index)}>
                <CiTrash
                  className="object-contain mt-3 w-7 aspect-square"
                  size={18}
                  color="red"
                />
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
}
