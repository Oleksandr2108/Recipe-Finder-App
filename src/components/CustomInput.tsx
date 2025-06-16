"use client";

interface InputProps {
  type: "text" | "number";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText?: string;
  idInput: string;
  nameInput: string;
}
const CustomInput: React.FC<InputProps> = ({
  type,
  idInput,
  nameInput,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={idInput}
      name={nameInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`h-12 w-full mt-3 p-4 text-base border border-orange-300 rounded-xl focus:outline-none focus:border-orange-500 `}
      {...(type === "number" && { min: 1, max: 300 })}
    />
  );
};

export default CustomInput;
