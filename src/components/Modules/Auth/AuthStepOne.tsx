import { Form, Input, Upload, Button } from "antd";
import { useState } from "react";
import { AuthTitle } from "./AuthTitle";

type AuthStepOneProps = {
  nextStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
};

export const AuthStepOne = ({
  nextStep,
  formData,
  updateFormData,
}: AuthStepOneProps) => {
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null
  );
  // Username validation (example: only lower-case letters, numbers, hyphens)
  const validateUsername = (rule: any, value: string) => {
    if (!/^[a-z0-9-]+$/.test(value)) {
      return Promise.reject(
        "Only lowercase letters, numbers, and hyphens are allowed."
      );
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
    updateFormData(values); // Update formData with step 1 data
    nextStep(); // Go to next step
  };

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      initialValues={formData}
      className='flex min-h-screen max-w-[600] flex-col items-center justify-center bg-[#FAFAFA] px-5 py-5'
    >
      <AuthTitle />

      <Form.Item name='avatar' valuePropName='fileList'>
        <Upload
          listType='picture-circle'
          showUploadList={false}
          beforeUpload={() => false}
          maxCount={1}
        >
          <div className='relative flex items-center justify-center rounded-full bg-gray-200'>
            <span>Upload</span>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item
        name='username'
        rules={[{ required: true, message: "Username is required" }]}
      >
        <div className='flex items-center space-x-2'>
          <Input
            placeholder='Enter your username'
            className={`w-full ${usernameAvailable ? "border-blue-500" : ""}`}
          />
          <Button
            type='primary'
            htmlType='button'
            className='black-button'
            style={{ backgroundColor: "#000000" }}
          >
            Search
          </Button>
        </div>
      </Form.Item>
      <span>
        Use only lowercase letters, numbers, and hyphens. Max 16 characters.
        Inappropriate or rights-infringing names may result in penalties on
        FAN-QUEST.
      </span>

      <Button type='primary' htmlType='submit'>
        Next
      </Button>
    </Form>
  );
};
