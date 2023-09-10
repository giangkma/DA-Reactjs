import React from "react";
import { IFormLoginValues } from "../../domain/login";
import { Control, Controller, FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

interface IProps {
    name: string;
    type?: string;
    placeholder: string;
    label: string;
    className?: string;
    control: Control;
    rules?: RegisterOptions;
    errorMessage?: any;
}

export const Input = ({ className, type = "text", label, placeholder, name, control, errorMessage, rules }: IProps) => {
    return (
        <div className={className}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => {
                    return (
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    );
                }}
            />

            {errorMessage && <p className="text-xs mt-2 text-red-500">{errorMessage}</p>}
        </div>
    );
};
