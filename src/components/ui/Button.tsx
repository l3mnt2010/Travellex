import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className="Button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};


export default Button;

