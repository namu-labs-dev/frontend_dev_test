"use client";

import { useState } from "react";

interface InputComponentProps {
  label: string;
  placeholder?: string;
}

export const InputAtom: React.FC<InputComponentProps> = ({
  label,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("Input value:", e.target.value); // Log or use the input value as needed
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className='mt-2 w-full rounded border p-2'
      />
    </div>
  );
};
