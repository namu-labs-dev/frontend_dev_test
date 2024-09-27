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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const { RangePicker } = DatePicker;
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
    <Form
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
      style={{
        maxWidth: 600,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
      onFinish={onFinish}
      className='bg-white font-medium'
    >
      <Form.Item label='Category' name='category'>
        <Select placeholder='Birthday AD' style={{ height: "55px" }}>
          <Select.Option value='demo'>Birthday AD</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Vote Title' name='title'>
        <Input placeholder='Title' className='h-14' />
      </Form.Item>
      <Form.Item label='Image' name='image'>
        <div className='flex h-44 w-full items-center justify-center rounded-lg bg-[#F5F5F5]'>
          <Upload name='file' listType='picture-card' showUploadList={false}>
            <FontAwesomeIcon
              icon={faCamera}
              className='text-xl text-gray-400'
            />
          </Upload>
        </div>
      </Form.Item>
      <Form.Item label='Description' name='description'>
        <TextArea
          placeholder='Please write down a description of the event'
          rows={8}
        />
      </Form.Item>
      <Form.Item label='Start' name='date'>
        <DatePicker
          format='YYYY-MM-DD'
          placeholder='2024-09-06'
          className='h-14 w-full'
        />
      </Form.Item>

      {/* Spacer to push the button down */}
      <div className='flex-grow'></div>

      <div className='mb-4 flex w-full items-center justify-center'>
        <Button
          className='min-h-14 w-full bg-[#2F54EB]'
          type='primary'
          htmlType='submit'
        >
          <p className='text-xl'>Create Vote</p>
        </Button>
      </div>
    </Form>
  );
};
