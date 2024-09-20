import { Form, Select, Input, DatePicker, Button } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

const { TextArea } = Input;

type Props = {
  setFormData: (data: any) => void;
};

export const VoteFormFormModule = (props: Props) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout='vertical' className='p-5'>
      <Form.Item label='Category' name='Category' className='font-medium'>
        <Select placeholder='Bithday AD' style={{ height: "55px" }}>
          <Select.Option value='demo'>Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Vote Title' name='Vote_Title' className='font-medium'>
        <Input placeholder='Title' style={{ height: "55px" }} />
      </Form.Item>
      <Form.Item label='TextArea' className='font-medium' name='TextArea'>
        <TextArea
          rows={6}
          placeholder='Please write down description of event'
        />
      </Form.Item>
      <Form.Item label='Image' name='Image' className='font-medium'>
        <div className='flex h-[184px] items-center justify-center bg-[#F5F5F5]'>
          <SVGAtom iconName='camera' width={21.98} height={21.98} />
        </div>
      </Form.Item>
      <Form.Item label='DatePicker' name='DatePicker' className='font-medium'>
        <DatePicker className='w-full' style={{ height: "55px" }} />
      </Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        className='w-full bg-[#2F54EB] p-6 text-xl'
      >
        Create Vote
      </Button>
    </Form>
  );
};
