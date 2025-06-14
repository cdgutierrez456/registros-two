"use client";

import React from "react";
import CivilRegistryForm from "../civil-registry";
import DemiseForm from "../demise";
import MarriageForm from "../marriage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function FormSelector() {

  const { selector, isEditing }: any = useSelector(
    (state: RootState) => state.PaymentReducer
  );

  const registroCivil = isEditing?.["registro_civil"];

  if (registroCivil && Object.keys(isEditing).length > 0) {
    switch (registroCivil) {
      case "6":
        return <MarriageForm />;
      case "5":
        return <DemiseForm />;
      default:
        return <CivilRegistryForm />;
    }
  }

  switch (selector) {
    case 4:
      return <CivilRegistryForm />;

    case 5:
      return <DemiseForm />;

    case 6:
      return <MarriageForm />;

    default:
      return <CivilRegistryForm />;
  }
}
