"use client";

import { useState } from "react";

interface DateComponentProps {
  label: string;
  defaultValue?: string; // Accept a default value as a prop
}

export const DateAtom: React.FC<DateComponentProps> = ({
  label,
  defaultValue = "2024-09-06",
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
  };

  const [date, setDate] = useState(formatDate(defaultValue));

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    console.log("Selected date:", e.target.value); // Log or use the date value as needed
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type='date'
        value={date}
        onChange={handleDateChange}
        className='mt-2 w-full rounded border p-2'
      />
    </div>
  );
};
