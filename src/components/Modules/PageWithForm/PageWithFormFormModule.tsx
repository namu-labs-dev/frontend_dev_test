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
} from "antd";
import { useState } from "react";
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

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setUploadedImage(e.target.result); 
      };
      reader.readAsDataURL(file);
      message.success(`${file.name} file uploaded successfully`);
    }
  };

  return (
    <>
      <p className="px-[21px] py-[13px] text-[18px] font-bold ">
        <span className="text-[#2F54EB]">10 FAO</span> will be deducted when
        voting is generated (Amount : 9 FAO)
      </p>
      
      
      <div className="flex  items-center justify-center bg-white">
        <Form
          form={form}
          // labelCol={{ span: 6 }}
          // wrapperCol={{ span: 14 }}
          onFieldsChange={(changedFields) => {
            props.setFormData((prevData: any) =>
              changedFields.reduce(
                (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
                prevData
              )
            );
          }}
          layout="vertical"
          style={{ width: "80%", margin: "0 auto", paddingTop: "27px"}} 
          onFinish={onFinish}
        >
          <Form.Item label={<span className="text-[17px] font-medium ">Category</span>} name="Select">
            <Select placeholder="Birthday AD"  style={{ height: '55px' }} 
              >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={<span className="text-[17px] font-medium ">Vote Title</span>} name="Input">
            <Input  placeholder="Title"  style={{ height: '55px' }} />
          </Form.Item>
          <Form.Item label={<span className="text-[17px] font-medium">Image</span>}>
          <div
            onClick={() => document.getElementById("imageInput")?.click()}
            className="flex items-center justify-center bg-gray-200 cursor-pointer"
            style={{
              height: "200px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="h-full w-auto object-contain"
              />
            ) : (
              <img src="/images/cam.png" className="w-[19px] h-[16px]"/>
            )}
          </div>
         
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </Form.Item>

        <Form.Item label={<span className="text-[17px] font-medium ">Description</span>} name="TextArea">
            <TextArea rows={4} placeholder="Please write down a description of the event"/>
          </Form.Item>

          <Form.Item label={<span className="text-[17px] font-medium ">Start Date</span>} name="DatePicker">
            <DatePicker placeholder="2024-09-06" className="w-full" style={{ height: '55px' }}/>
          </Form.Item>

          <div className="flex w-full items-center justify-center my-4 ">
            <Button type="primary" htmlType="submit" className="w-full">
            Create Vote
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
