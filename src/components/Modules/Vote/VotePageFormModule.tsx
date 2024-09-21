import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Slider,
  ColorPicker,
  Input,
  message,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
const { TextArea } = Input;
import type { GetProp, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

type Props = {
  setFormData: (data: any) => void;
};

export const VotePageFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      alert("You can only upload JPG/PNG file!");
    }

    return isJpgOrPng;
  };

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <div className='h-full overflow-y-auto'>
      <Form
        form={form}
        layout={`vertical`}
        size='large'
        onFieldsChange={(changedFields) => {
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData
            )
          );
        }}
        onFinish={onFinish}
        className='!p-6'
      >
        <Form.Item className='font-semibold' label='Category' name='Category'>
          <Select placeholder={"Birthday AD"}>
            <Select.Option value='demo'>Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          className='font-semibold'
          label='Vote Title'
          name='VoteTitle'
        >
          <Input placeholder='Title' />
        </Form.Item>

        <Form.Item
          label={"Image"}
          valuePropName='fileList'
          className='w-full font-semibold'
        >
          <Upload
            className='w-full'
            name='file'
            beforeUpload={beforeUpload}
            listType='picture-card'
          >
            <div className='bg-kneutral-3 flex w-full min-w-full items-center justify-center'>
              <SVGAtom iconName='camera' width={24} height={24} color='black' />
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          className='font-semibold'
          label='Description'
          name='Description'
        >
          <TextArea
            placeholder='Please write down a description of the event'
            className='w-full'
            style={{
                height: "25vh",
            }}
          />
        </Form.Item>

        <Form.Item className='font-semibold' label='Start' name='StartDate'>
          <DatePicker placeholder='2024-09-06' className='w-full' />
        </Form.Item>

        <div className='flex w-full items-center justify-center'>
          <Button className='flex-grow' type='primary' htmlType='submit'>
            Create Vote
          </Button>
        </div>
      </Form>
    </div>
  );
};
