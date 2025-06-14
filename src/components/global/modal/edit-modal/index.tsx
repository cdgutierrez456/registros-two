"use client";

import React from "react";
import Modal from "@/components/ui/Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FormSelector from "@/components/global/form/form-selector";

export default function EditModal() {
  const { isEditing } = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  return (
    <Modal onClose={() => {}} show={true} size="md" buttonsVisible={false}>
      <FormSelector />
    </Modal>
  );
}
