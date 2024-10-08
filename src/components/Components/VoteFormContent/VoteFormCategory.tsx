import React from "react";
import { Form, Select, type SelectProps } from "antd";

type Props = {
  label: string;
  category: SelectProps["options"];
  name: string;
};

const VoteFormCategory = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      style={{ fontWeight: 500, fontSize: "1.5rem" }}
      rules={[{ required: false, message: "Please select a category!" }]}
    >
      <Select
        options={props.category}
        style={{ height: "50px" }}
        placeholder='Select a category'
      />
    </Form.Item>
  );
};

export default VoteFormCategory;
