"use client";

import React, { FC } from "react";

enum PrimaryButtonColor {
  blue = "bg-darkBlue active:bg-blue-700 text-white",
  green = "bg-lightGreen active:bg-green-700 text-white",
}

enum ButtonSize {
  lg = "h-10 px-6 text-base",
  md = "h-[35px] px-5 text-sm",
  full = "h-10 px-6 text-base w-full",
}

enum SecondaryButtonColor {
  blue = "bg-white hover:bg-blue-50 text-blue-600 border-blue-600 border hover:border-blue-50 active:text-blue-800 active:bg-white",
  green = "bg-lightGreen active:bg-green-700 text-white",
}

type PrimaryButtonProps = {
  id: string;
  children?: React.ReactNode;
  color?: "blue" | "green";
  fullWidth?: boolean;
  icon?: React.JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  size?: "lg" | "md" | "full";
  type: "primary";
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
};

type SecondaryButtonProps = {
  id: string;
  children?: React.ReactNode;
  color?: "blue" | "green";
  fullWidth?: boolean;
  icon?: React.JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  size?: "lg" | "md" | "full";
  type: "secondary";
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
};

type TextButtonProps = {
  id: string;
  children?: React.ReactNode;
  color?: "blue" | "green";
  fullWidth?: boolean;
  icon?: React.JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  size?: "lg" | "md" | "full";
  type: "text";
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
};

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps | TextButtonProps;

const Button: FC<ButtonProps> = ({
  id,
  children,
  color = "blue",
  disabled,
  fullWidth,
  icon,
  iconPosition,
  onClick = () => {},
  size = "md",
  type = "primary",
  htmlType = "button",
}) => {
  if (type === "primary" || type === "secondary") {
    return (
      <button
        id={id}
        onClick={onClick}
        disabled={disabled}
        type={htmlType}
        className={`inline-flex items-center justify-center gap-2 px-[10px] py-[18px] font-medium tracking-wide
        transition duration-300 rounded-[15px]
        focus-visible:outline-none
        whitespace-nowrapdisabled:cursor-not-allowed
        disabled:border-none disabled:shadow-none
        disabled:bg-slate-300 disabled:text-white
        ${
          type === "primary"
            ? PrimaryButtonColor[color]
            : color === "blue" || color === "green"
              ? SecondaryButtonColor[color]
              : ""
        }
        ${fullWidth ? "w-full" : "w-auto"}
        ${ButtonSize[size]}
        `}
      >
        {icon && iconPosition === "left" && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
      </button>
    );
  }
};

export default Button;
