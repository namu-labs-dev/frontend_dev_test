import { Button, DatePicker, Form, Input, message, Select } from "antd";
import { CameraFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

type Props = {
  setFormData: (data: any) => void;
};

export const FormTestPageFormModule = (props: Props) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      onFieldsChange={(changedFields) => {
        props.setFormData((prevData: any) =>
          changedFields.reduce(
            (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
            prevData
          )
        );
      }}
      labelCol={{
        style: { fontFamily: "Inter", fontWeight: 500 },
      }}
    >
      <Form.Item label='Category' name={"Category"}>
        <Select placeholder='Birthday AD' size='large'>
          <Select.Option value='Birthday'>Birthday AD</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Vote Title' name={"Vote Title"}>
        <Input placeholder='Title' size='large' />
      </Form.Item>
      <Form.Item label='Image' name={"Image"}>
        <div className='width-[360px] flex h-[184px] cursor-pointer items-center justify-center rounded-lg bg-[#F5F5F5]'>
          <button className='text-[18px] opacity-45'>
            <CameraFilled />
          </button>
        </div>
      </Form.Item>
      <Form.Item label='Description' name={"Description"}>
        <TextArea
          rows={6}
          size='large'
          placeholder='Please write down a description of the event'
        />
      </Form.Item>
      <Form.Item label='Start' name={"Start date"}>
        <DatePicker size='large' className='w-full' />
      </Form.Item>
      <div className='flex w-full items-center justify-center'>
        <Button
          size='large'
          className='w-full'
          type='primary'
          htmlType='submit'
        >
          Create Vote
        </Button>
      </div>
    </Form>
  );
};
