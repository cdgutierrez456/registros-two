import React from "react";

export interface SelectProps {
  value?: string;
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string; id: string }[];
}

function Select({ options, id, label, required, name }: SelectProps) {
  return (
    <div className="w-auto flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className={`text-darkBlue text-md font-bold ${
            required
              ? 'after:content-["*"] after:text-red-400 after:ml-0.5'
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <select
        className="px-2 py-3 rounded-lg w-full bg-inputBackground"
        name={name}
      >
        {options.map(({ value, label, id }) => (
          <option key={id} value={value} id={id}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
