import Spinner from "@/components/ui/spinner";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Spinner text="Cargando recursos..." color="#004884" hideText={false} />
    </div>
  );
}
