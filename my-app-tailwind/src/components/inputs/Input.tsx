import React from "react";
import { IFormLoginValues } from "../../domain/login";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

interface IProps {
  name: keyof IFormLoginValues;
  type?: "text" | "password";
  placeholder: string;
  label: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<IFormLoginValues>;
  errors?: FieldErrors<IFormLoginValues>;
  rules?: RegisterOptions<IFormLoginValues>;
}

export const Input = ({
  className,
  type = "text",
  label,
  placeholder,
  name,
  value,
  onChange,
  register,
  errors,
  rules,
}: IProps) => {
  const errorMessage = errors && errors[name]?.message;
  return (
    <div className={className}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name, rules)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorMessage && (
        <p className="text-xs mt-2 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};
