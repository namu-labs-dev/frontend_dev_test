import React from "react";
import { Form, Select, Upload, DatePicker, Input } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
const { TextArea } = Input;

const LabelText = ({ text }: { text: string }) => {
  return <p className='text-[1.031rem] font-medium'>{text}</p>;
};
type Props = {
  setFormData: (data: any) => void;
};

const VoteForm = (props: Props) => {
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className='mb-4 w-full px-[1.25rem]'>
      <Form
        form={form}
        labelCol={{ span: 24 }} // Label takes full width
        wrapperCol={{ span: 24 }} // Input element takes full width
        onFieldsChange={(changedFields) => {
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData
            )
          );
        }}
        layout='vertical' // Vertical layout for label on top
        style={{ width: "100%" }}
      >
        <Form.Item
          label={<LabelText text='Category' />}
          name='category'
          className='w-full'
        >
          <Select className='w-full' placeholder='Birthday AD'>
            <Select.Option value='demo'>Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={<LabelText text='Vote Title' />}
          name='voteTitle'
          className='w-full'
        >
          <Input className='w-full' placeholder='Title' />
        </Form.Item>

        <Form.Item
          label={<LabelText text='Image' />}
          valuePropName='fileList'
          getValueFromEvent={normFile}
          className='w-full'
        >
          <Upload
            className='w-full'
            style={{ width: "100%" }}
            beforeUpload={() => {}}
            onChange={() => {}}
            onPreview={() => {}}
            name='file'
          >
            <div className='bg-kneutral-3 flex h-[9rem] w-full min-w-full items-center justify-center md:h-[11.5rem]'>
              <SVGAtom iconName='camera' width={24} height={24} color='black' />
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label={<LabelText text='Description' />} className='w-full'>
          <TextArea
            rows={4}
            className='w-full'
            placeholder='Please write down a description of the event'
          />
        </Form.Item>

        <Form.Item className='w-full' label={<LabelText text='Start' />}>
          <DatePicker className='w-full' placeholder='2024-09-06' />
        </Form.Item>

        <div className='flex w-full items-center justify-center'>
          <button
            type='submit'
            className='bg-kgeekblue-6 font-pretendard flex w-full items-center justify-center rounded-lg py-[0.875rem] text-lg leading-6 text-white'
          >
            Create Vote
          </button>
        </div>
      </Form>
    </div>
  );
};

export default VoteForm;
