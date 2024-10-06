import { DatePicker, Form } from "antd";
import React from "react";

type Props = {
  label: string;
  name: string;
};
const VoteFormDate = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      style={{ fontWeight: 500 }}
      rules={[{ required: false, message: "Please select the start date!" }]}
    >
      <DatePicker style={{ height: "50px", width: "100%" }} />
    </Form.Item>
  );
};

export default VoteFormDate;
