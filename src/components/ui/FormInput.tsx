import React from "react";
import Input from "./Input";
import Select from "./Select";

interface FormInputProps {
  header?: string;
  column?: boolean;
  errors?: Record<string, string>;
  data: {
    icon?: React.ReactElement;
    iconPosition?: "left" | "right";
    iconFunction?: () => void;
    id?: string;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    defaultValue?: string;
    label?: string;
    type?: "text" | "email" | "password" | "number" | "tel" | "url";
    size?: "full" | "auto";
    value?: string;
    readonly?: boolean;
    required?: boolean;
    isDisabled?: boolean;
    pattern?: string;
    select?: boolean;
    note?: string;
    options?: {
      value: string;
      label: string;
      id: string;
    }[];
  }[];
}

function FormInput({ header, data, column, errors }: FormInputProps) {
  return (
    <div className="flex flex-col gap-8">
      {header && (
        <h2 className="border-b py-3 text-baseBlue font-bold text-lg">
          {header}
        </h2>
      )}

      <div
        className={
          column
            ? "grid md:grid-cols-1 grid-cols-1 gap-5 w-full"
            : "grid md:grid-cols-2 grid-cols-1 gap-8 w-full"
        }
      >
        {data.map(
          ({
            id,
            name,
            placeholder,
            type,
            required,
            label,
            select,
            options,
            note,
          }) =>
            select ? (
              <div key={id} className="w-full">
                <Select
                  options={options ? options : []}
                  key={id}
                  name={name}
                  label={label}
                  required={required}
                  id={id}
                />
                {errors?.[name as string] && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors[name as string]}
                  </span>
                )}
              </div>
            ) : (
              <div key={id}>
                <Input
                  key={id}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  required={required}
                  label={label}
                />

                {errors?.[name as string] && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors[name as string]}
                  </span>
                )}

                {note !== undefined && note.length > 0 && (
                  <span className="text-red-500 text-sm font-normal">
                    {note}
                  </span>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FormInput;
