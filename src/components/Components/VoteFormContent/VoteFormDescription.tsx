import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
};
const VoteFormDescription = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      style={{ fontWeight: 500 }}
      rules={[{ required: false, message: "Please input the description!" }]}
    >
      <TextArea rows={6} placeholder={props.placeholder} />
    </Form.Item>
  );
};

export default VoteFormDescription;
