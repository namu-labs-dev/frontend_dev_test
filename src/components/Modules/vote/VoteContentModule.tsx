import React from "react";
import { Select, Upload, DatePicker, Button, Input, UploadProps } from "antd";
import Image from "next/image";

export const VoteContentModule: React.FC = () => {
  const handleBeforeUpload: UploadProps["beforeUpload"] = (file) => {
    // Logic for file validation before upload
    return false;
  };

  const handleUploadChange: UploadProps["onChange"] = (info) => {
    // Logic for handling file upload changes
  };

  return (
    <div className='m-auto w-3/4 pb-10'>
      <div className='p-4 text-center text-xl font-bold'>Vote</div>

      <div
        className='p-6'
        style={{ backgroundColor: "rgba(240, 245, 255, 1)" }}
      >
        <span className='font-bold' style={{ color: "rgba(47, 84, 235, 1)" }}>
          10 FAO
        </span>{" "}
        will be deducted when voting is generated (Amount: 9 FAO)
      </div>

      <form className='flex w-full flex-col gap-5 p-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='category'>Category</label>
          <Select
            id='category'
            options={[{ value: "Birthday AD", label: "Birthday AD" }]}
            placeholder='Birthday AD'
            className='custom-select w-full focus:border-transparent focus:outline-none focus:ring-0'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='vote-title'>Vote Title</label>
          <Input
            id='vote-title'
            placeholder='Title'
            className='custom-select w-full focus:border-transparent focus:outline-none focus:ring-0'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='image'>Image</label>
          <div className='flex h-44 w-full items-center justify-center bg-gray-50'>
            <Upload
              name='avatar'
              showUploadList={false}
              action=''
              beforeUpload={handleBeforeUpload}
              onChange={handleUploadChange}
            >
              <Image
                src='/svgs/camera.svg'
                alt='Option Icon'
                width={18}
                height={18}
              />
            </Upload>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='description'>Description</label>
          <Input.TextArea
            id='description'
            rows={5}
            placeholder='Please write down a description of the event'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='start-date'>Start</label>
          <DatePicker id='start-date' />
        </div>

        <Button type='primary' style={{ fontSize: "16px", height: "40px" }}>
          Create Vote
        </Button>
      </form>
    </div>
  );
};
