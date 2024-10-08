import { Button, Form } from "antd";
import React from "react";

type Props = {
  submit: string;
};
const VoteFormSubmit = (props: Props) => {
  return (
    <Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        className='w-full '
        style={{ height: "50px", fontWeight: 500 }}
      >
        {props.submit}
      </Button>
    </Form.Item>
  );
};

export default VoteFormSubmit;
