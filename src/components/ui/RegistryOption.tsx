import React from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export interface RegistryOptionProps extends RadioButtonProps {
  title: string;
}

function RegistryOption({
  title,
  id,
  name,
  color,
  defaultChecked,
  disabled,
  value,
  onChange,
  required = false,
}: RegistryOptionProps) {
  return (
    <div className="flex gap-5 items-center justify-start">
      <RadioButton
        id={id}
        color={color}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        value={value}
        onChange={onChange}
        required={required}
      />
      <p className="text-darkBlue font-medium text-lg">{title}</p>
    </div>
  );
}

export default RegistryOption;
