import { Control, Controller, FieldErrors, RegisterOptions } from "react-hook-form";

interface IProps {
    name: string;
    label: string;
    className?: string;
    control: Control;
    errors?: FieldErrors;
    rules?: RegisterOptions;
    errorMessage?: string;
}

export const Checkbox = ({ className, errorMessage, label, name, control, errors, rules }: IProps) => {
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
                    return <input type="checkbox" value={value} onChange={onChange} onBlur={onBlur} />;
                }}
            />

            {errorMessage && <p className="text-xs mt-2 text-red-500">{errorMessage}</p>}
        </div>
    );
};
