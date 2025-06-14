enum Color {
  blue = "accent-baseBlue",
  purple = "accent-basePurple",
}

export type RadioButtonProps = {
  id: string;
  name?: string;
  color: "blue" | "purple";
  value?: any;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const RadioButton = ({
  id,
  name,
  color,
  defaultChecked,
  disabled,
  value,
  onChange,
  required = false,
}: RadioButtonProps) => {
  return (
    <input
      id={id}
      name={name}
      type="radio"
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      required={required}
      value={value}
      className={`cursor-pointer relative w-[16px] h-[16px] rounded-full before:rounded-full ${Color[color]}`}
    />
  );
};

export default RadioButton;
