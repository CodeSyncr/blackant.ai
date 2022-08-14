import React from "react";
interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
}
const Input = ({ type, placeholder, className, style }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      style={{
        ...style,
        padding: "0.5rem 0.2rem",
        fontSize: "1rem",
      }}
    />
  );
};

export default Input;
