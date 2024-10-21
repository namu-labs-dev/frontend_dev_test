import { CameraOutlined } from "@ant-design/icons";
import { Button, Form, GetProp, Input, Upload, UploadProps, message } from "antd";
import { useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    void message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    void message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type Props = {
  setFormData: (data: any) => void;
};

export const AuthContentModule = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);

  const [form] = Form.useForm();

  // Username validation (example: only lower-case letters, numbers, hyphens)
  const validateUsername = (rule: any, value: string) => {
    if (!/^[a-z0-9-]+$/.test(value)) {
        return Promise.reject("Only lowercase letters, numbers, and hyphens are allowed.");
    }
    // Check if username is available (simulate API call or logic)
    // Assume it's available if it starts with "valid", for demo purposes
    if (value.startsWith("valid")) {
        setUsernameAvailable(true);
        return Promise.resolve();
    } else {
        setUsernameAvailable(false);
        return Promise.reject("Username is not available.");
    }
};

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onFinish}
      className='flex min-h-screen max-w-[600] flex-col items-center justify-center bg-[#FAFAFA] px-5 py-5'
    >
      <Form.Item>
        <Form.Item name='avatar' valuePropName='fileList'>
          <Upload
            className='relative flex items-center justify-center'
            listType='picture-circle'
            showUploadList={false}
            beforeUpload={() => false} // Prevent upload and handle manually
          >
            <div className='relative flex h-[176] w-[176] items-center justify-center overflow-hidden bg-gray-200'>
              <SVGAtom iconName="user" />
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          name='username'
          label='Username'
          rules={[{ required: true, validator: validateUsername }]}
          hasFeedback
          validateStatus={
            usernameAvailable === null
              ? undefined
              : usernameAvailable
                ? "success"
                : "error"
          }
        >
          <div className='flex items-center space-x-2'>
            <Input
              placeholder='Enter your username'
              className={`w-full ${usernameAvailable ? "border-blue-500" : ""}`}
            />
            <Button type='primary' htmlType='button' className='black-button' style={{backgroundColor: "#000000"}}>
              Search
            </Button>
          </div>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};
