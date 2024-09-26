import { Upload, Form, DatePicker, Button, Input, message } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
import * as svgs from "public/svgs";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { CameraFilled } from "@ant-design/icons";

type Props = {
  setFormData: (data: any) => void;
};

const labelStyle = {
  fontSize: "16.48px",
  fontWeight: 500,
  lineHeight: "19.95px",
};

const voteInputStyle = {
  height: "55px",
  width: "360px",
};

export const VoteFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  const uploadButton = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "360px",
        height: "100%",
      }}
    >
      <CameraFilled style={{ fontSize: "18px", color: "#00000073" }} />
    </div>
  );

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
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
      style={{ maxWidth: 600, margin: "0 auto" }}
      onFinish={onFinish}
      className='bg-white'
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          paddingTop: "18px",
        }}
      >
        <Form.Item label='Category' name='category' style={labelStyle}>
          <Input style={voteInputStyle} placeholder='Birthday AD' />
        </Form.Item>
        <Form.Item label='Vote Title' name='title' style={labelStyle}>
          <Input style={voteInputStyle} placeholder='Title' />
        </Form.Item>
        <Form.Item
          label='Image'
          name='upload'
          className='text-left'
          style={labelStyle}
        >
          <Upload
            name='avatar'
            showUploadList={true}
            style={{ width: "360px" }}
          >
            <div
              style={{
                width: "360px",
                height: "150px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                // alignItems: "",
              }}
            >
              {uploadButton}
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label='Description' name='TextArea' style={labelStyle}>
          <TextArea
            rows={4}
            style={{
              width: "360px",
              height: "196px",
            }}
            placeholder='Please write down a description of the event'
          />
        </Form.Item>
        <Form.Item label='Start' name='DatePicker' style={labelStyle}>
          <DatePicker style={voteInputStyle} />
        </Form.Item>
      </div>
      <div className='mb-3 flex w-full items-center justify-center'>
        <Button
          type='primary'
          htmlType='submit'
          style={{
            height: "53.37px",
            width: "360px",
            backgroundColor: "#2F54EB",
          }}
        >
          Create Vote
        </Button>
      </div>
    </Form>
  );
};
