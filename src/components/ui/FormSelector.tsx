import React, { useState } from "react";
import RegistryOption from "./RegistryOption";

interface FormSelectorProps {
  header?: string;
  data: {
    id: string;
    name?: string;
    color: "blue" | "purple";
    value?: string | number | boolean | null | undefined;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    title: string;
    formComponent?: React.ReactNode;
  }[];
  column?: boolean;
}

function FormSelector({ header, data, column = false }: FormSelectorProps) {
  const [selectedValue, setSelectedValue] = useState<
    string | number | boolean | null | undefined
  >("");

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
            ? "flex flex-col gap-7"
            : "grid md:grid-cols-3 grid-cols-1 gap-7"
        }
      >
        {data.map(
          (
            {
              id,
              title,
              color,
              name,
              defaultChecked,
              disabled,
              value,
              onChange,
              required,
              formComponent,
            },
            index
          ) => (
            <div key={`${id}-${index}`}>
              <RegistryOption
                key={`${id}-${index}`}
                id={id}
                color={color}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
                value={value}
                onChange={(e) => {
                  setSelectedValue(value);
                  if (onChange) {
                    onChange(e);
                  }
                }}
                required={required}
                title={title}
              />
              {selectedValue === value ? formComponent : null}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FormSelector;
