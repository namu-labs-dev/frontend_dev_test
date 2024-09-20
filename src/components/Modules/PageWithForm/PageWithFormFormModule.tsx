import { Form, DatePicker, Input, Button, message, Select } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
const { TextArea } = Input;

type Props = {
  setFormData: (data: any) => void;
};

export const PageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className='rounded-2xl bg-[#F0F5FF] px-9 py-5'>
        <p className='text-left text-lg'>
          <span className='text-[#2F54EB] font-semibold'>10 FAO</span> will be deducted when
          voting is <br /> generated (Amount: 9 FAO)
        </p>
      </div>
      <Form
        className='h-screen'
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFieldsChange={(changedFields) => {
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData
            )
          );
        }}
        layout='vertical'
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item label='Category' name='Category' className='font-medium'>
          <Select
            placeholder='Birthday DC' // Placeholder text here
            style={{ height: "50px" }}
          >
            <Select.Option value='category1'>Category 1</Select.Option>
            <Select.Option value='category2'>Category 2</Select.Option>
            <Select.Option value='category3'>Category 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Vote Title' name='Vote Title' className='font-medium'>
          <Input placeholder='Title' style={{ height: "50px" }} />
        </Form.Item>
        <Form.Item label='Image' name='Image' className='font-medium'>
          <Input
            prefix={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <SVGAtom iconName={"camera"} />
              </div>
            }
            style={{ textAlign: "center" }}
          />
        </Form.Item>
        <Form.Item
          label='Description'
          name='Description'
          className='font-medium'
        >
          <TextArea
            placeholder='Please write down a description of the event'
            rows={7}
          />
        </Form.Item>
        <Form.Item label='Start' name='Start' className='w-full font-medium'>
          <DatePicker
            placeholder='2024-09-06'
            style={{ width: "100%", height: "50px" }}
          />
        </Form.Item>
        <div className='flex w-full items-center justify-center'>
          <Button
            className='w-full'
            type='primary'
            htmlType='submit'
            style={{ height: "40px", backgroundColor: "#2F54EB" }}
          >
            Create Vote
          </Button>
        </div>
      </Form>
    </div>
  );
};
