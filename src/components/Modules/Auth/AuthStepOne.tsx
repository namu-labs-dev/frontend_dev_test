import {
  Form,
  Input,
  Upload,
  Button,
  GetProp,
  message,
  UploadProps,
} from "antd";
import { useEffect, useState } from "react";
import { AuthTitle } from "./AuthTitle";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import {
  CameraOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaFontAwesome } from "react-icons/fa";

import "./custom.css";

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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [username, setUsername] = useState(formData.username || ""); // Initialize username state

  useEffect(() => {
    updateFormData({ ...formData, username });
  }, [username, updateFormData]);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  // Username validation
  const validateUsername = (value: string) => {
    if (!/^[a-z0-9-]+$/.test(value)) {
      setUsernameError(
        "Only lowercase letters, numbers, and hyphens are allowed."
      );
      setUsernameAvailable(false);
      return false;
    }
    // Simulate API call to check username availability
    if (value.startsWith("namu")) {
      setUsernameAvailable(true);
      setUsernameError(null);
      return true; // Username is valid and available
    } else {
      setUsernameAvailable(false);
      setUsernameError("This nickname is not available.");
      return false; // Username is valid but not available
    }
  };

  const onFinish = (values: any) => {
    // Validate username from current state instead of values
    const isValid = validateUsername(username);
    if (!isValid) {
      return; // Stop form submission if the username is not valid
    }
    updateFormData({ ...values, username }); // Update formData with step 1 data
    nextStep(); // Go to next step only if username is valid
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-[#FAFAFA] p-5'>
      <Form
        layout='vertical'
        onFinish={onFinish}
        initialValues={formData}
        className='mt-16 flex max-w-[600px] flex-col items-center'
      >
        <AuthTitle />

        {/* Avatar Upload */}
        <Form.Item name='avatar' valuePropName='fileList'>
          <div className='relative mb-4 mt-10'>
            <Upload
              name='avatar'
              listType='picture-circle'
              className='avatar-uploader'
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt='avatar'
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              ) : (
                <button
                  className='text-white'
                  style={{ border: 0, background: "none" }}
                  type='button'
                >
                  {loading ? <LoadingOutlined /> : <UserOutlined size={64} />}
                </button>
              )}
            </Upload>

            <button
              type='button'
              className='upload-button absolute h-[32px] w-[32px] rounded-full bg-[#00FF00] text-black'
            >
              <CameraOutlined />{" "}
            </button>
          </div>
          <p className='mb-6 text-[14px] font-medium leading-[21px] text-black'>
            Image size : 600x600px
          </p>
        </Form.Item>

        {/* Username */}
        <Form.Item
          name='username'
          className='w-full'
          validateStatus={usernameAvailable === true ? "success" : "error"}
          rules={[{ required: true, message: "Username is required" }]}
        >
          <div className='mb-4 flex w-full items-center'>
            <input
              type='text'
              onChange={(e) => {
                const value = e.target.value;
                setUsername(value); // Update state on input change
                validateUsername(value); // Validate on input change
              }}
              className={`flex-1 rounded-lg border ${
                usernameError
                  ? "border-red-500"
                  : usernameAvailable
                    ? "border-blue-500"
                    : "border-black"
              } p-2 px-5 py-3`}
              placeholder='Username'
            />
            <button
              className='ml-2 rounded-[10px] bg-black p-2 px-5 py-3 text-white'
              onClick={(e) => {
                e.preventDefault(); // Prevents the form from submitting when clicking "Search"
                validateUsername(username); // Validate username again
              }}
            >
              Search
            </button>
          </div>
          {usernameError ? (
            <div className='text-red-500'>{usernameError}</div>
          ) : usernameAvailable ? (
            <div className='text-blue-500'>Username is available!</div>
          ) : null}
        </Form.Item>

        <p className='mb-6 text-left text-[14px] font-medium leading-[21px] text-[#8C8C8C]'>
          Use only lowercase letters, numbers, and hyphens. Max 16 characters.
          Inappropriate or rights-infringing names may result in penalties on
          FAN-QUEST.
        </p>

        {/* Submit Button */}
        <button className='absolute bottom-5 w-[85%] rounded-md border-2 border-black bg-[#00FF00] px-6 py-3 text-black lg:relative lg:mt-20 lg:w-full'>
          Next
        </button>
      </Form>
    </div>
  );
};
