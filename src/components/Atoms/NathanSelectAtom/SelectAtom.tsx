import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectAtom: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: "100%" }}
    placeholder="Birthday AD"
    onChange={handleChange}
    options={options}
  />
);

export default SelectAtom;
