"use client";

import { useState } from "react";

interface SelectComponentProps {
  options: string[];
  label: string;
}

export const SelectAtom: React.FC<SelectComponentProps> = ({
  options,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    console.log("Selected option:", e.target.value); // Log or use the selected value as needed
  };

  return (
    <div>
      <label>{label}</label>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className='mt-2 w-full rounded border p-2'
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
