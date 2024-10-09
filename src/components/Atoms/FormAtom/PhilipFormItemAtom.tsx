import { Form } from "antd";
import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  name?: string;
};

export const PhilipFormItemAtom = (props: Props) => {
  return (
    <Form.Item
      label={
        <p className='text-[16.48px] font-medium leading-[19.95px] text-black/85'>
          {props.label}
        </p>
      }
      name={props.name}
    >
      {props.children}
    </Form.Item>
  );
};
