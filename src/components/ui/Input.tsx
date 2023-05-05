import React from "react";

type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  );
};

export default Input;
