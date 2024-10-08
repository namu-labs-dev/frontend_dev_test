"use client";

import { useState } from "react";

interface DescriptionComponentProps {
  label: string;
  placeholder?: string;
}

export const DescriptionAtom: React.FC<DescriptionComponentProps> = ({
  label,
  placeholder,
}) => {
  const [description, setDescription] = useState<string>("");

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    console.log("Description value:", e.target.value); // Log or use the description value as needed
  };

  return (
    <div>
      <label>{label}</label>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder={placeholder}
        className='mt-2 w-full rounded border p-2'
        rows={8}
      />
    </div>
  );
};
