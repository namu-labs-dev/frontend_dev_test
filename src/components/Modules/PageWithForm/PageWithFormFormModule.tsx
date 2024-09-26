import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Upload,
  Button,
  Slider,
  ColorPicker,
  Input,
  message,
} from "antd";
import { useState } from "react";
// import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import type { UploadProps } from "antd";
import Image from "next/image";

const { TextArea } = Input;
const { Option } = Select;

type Props = {
  setFormData: (data: any) => void;
};

export const PageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Form Values:", values);
    // Simulate API call
    setTimeout(() => {
      void message.success("Vote created successfully!");
      setLoading(false);
    }, 1000);
  };
  const uploadProps: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        void message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        void message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className='form-scroll mx-auto h-[80vh] w-full overflow-y-scroll rounded-md text-lg'>
      <div className=' bg-[#F0F5FF] px-5 py-5 '>
        <span className='font-bold text-blue-600'>10 FAO</span> will be deducted
        when voting is generated (Amount: 9 FAO)
      </div>

      <Form
        layout='vertical'
        onFinish={onFinish}
        style={{
          // maxHeight: "80%",
          maxWidth: "80%",
          margin: "auto",
        }}
        initialValues={{
          start: moment("2024-09-06"),
          category: "Birthday AD",
        }}
      >
        {/* Category */}
        <Form.Item
          label='Category'
          name='category'
          style={{ fontWeight: 500, fontSize: "1.5rem" }}
          rules={[{ required: false, message: "Please select a category!" }]}
        >
          <Select style={{ height: "50px" }} placeholder='Select a category'>
            <Option value='Birthday AD'>Birthday AD</Option>
            <Option value='Announcement'>Announcement</Option>
            <Option value='Event'>Event</Option>
          </Select>
        </Form.Item>

        {/* Vote Title */}
        <Form.Item
          label='Vote Title'
          name='title'
          style={{ fontWeight: 500 }}
          rules={[{ required: false, message: "Please input the vote title!" }]}
        >
          <Input style={{ height: "50px" }} placeholder='Title' />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item label='Image' style={{ fontWeight: 500 }} name='image'>
          <Upload {...uploadProps}>
            <Button
              style={{
                height: "150px",
                backgroundColor: "#00000015",
                minWidth: "390px",
                borderStyle: "solid",
              }}
            >
              <Image src='/svgs/camera.svg' width={20} height={20} alt='' />
            </Button>
          </Upload>
        </Form.Item>

        {/* Description */}
        <Form.Item
          label='Description'
          name='description'
          style={{ fontWeight: 500 }}
          rules={[
            { required: false, message: "Please input the description!" },
          ]}
        >
          <TextArea
            rows={6}
            placeholder='Please write down a description of the event'
          />
        </Form.Item>

        {/* Start Date */}
        <Form.Item
          label='Start'
          name='start'
          style={{ fontWeight: 500 }}
          rules={[
            { required: false, message: "Please select the start date!" },
          ]}
        >
          <DatePicker style={{ height: "50px", width: "100%" }} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='w-full '
            loading={loading}
            style={{ height: "50px", fontWeight: 500 }}
          >
            Create Vote
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
