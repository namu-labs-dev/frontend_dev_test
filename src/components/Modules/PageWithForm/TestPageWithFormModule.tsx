import { Form, Select, DatePicker, Input, Button, Upload, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useState } from "react";

const { TextArea } = Input;

type Props = {
  setFormData?: (data: any) => void;
  custom?: boolean;
};

export const TestPageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);

  const onFinish = (values: any) => {
    message.info(JSON.stringify(values));
  };

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
    props.setFormData?.((prevData: any) => ({
      ...prevData,
      image: newFileList,
    }));
  };

  return (
    <div className='mt-16 flex h-screen flex-col items-center justify-center'>
      <div className='m-4 flex w-full gap-1 bg-blue-100 p-4'>
        <p className='font-bold text-blue-500'>10 FAO</p>
        <p> will be deducted when voting is generated (Amount : 9 FAO)</p>
      </div>
      <div className='w-full max-w-md'>
        <Form
          form={form}
          onFieldsChange={(changedFields) => {
            props.setFormData!((prevData: any) =>
              changedFields.reduce(
                (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
                prevData
              )
            );
          }}
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Category</span>}
            name='category'
          >
            <Select placeholder='Select Category'>
              <Select.Option value='demo'>Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Vote Title</span>}
            name='title'
          >
            <Input placeholder='Enter Vote Title' />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Image</span>}
            name='image'
          >
            <Upload
              beforeUpload={() => false}
              listType='picture'
              fileList={fileList}
              onChange={handleUploadChange}
            >
              <div
                className='w-full items-center bg-gray-200'
                style={{
                  height: "200px",
                  width: "450px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.375rem",
                  border: "2px dashed #A0AEC0",
                  transition: "background-color 0.3s",
                }}
              >
                <CameraOutlined style={{ fontSize: "18px", color: "black" }} />
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Description</span>}
            name='description'
          >
            <TextArea
              rows={7}
              placeholder='Please write down a description of the event.'
            />
          </Form.Item>

          <div className='w-full'>
            <Form.Item
              label={<span style={{ fontWeight: "bold" }}>Start</span>}
              name='start'
            >
              <DatePicker placeholder='2024-09-06' className='w-full' />
            </Form.Item>
          </div>

          <div className='w-full'>
            <Button type='primary' htmlType='submit' className='w-full'>
              Create Vote
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
