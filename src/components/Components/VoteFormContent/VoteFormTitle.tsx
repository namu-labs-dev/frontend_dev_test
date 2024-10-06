import { Form, Input } from "antd";
import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
};
export const VoteFormTitle = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      style={{ fontWeight: 500 }}
      rules={[{ required: false, message: "Please input the vote title!" }]}
    >
      <Input style={{ height: "50px" }} placeholder={props.placeholder} />
    </Form.Item>
  );
};
