import React from 'react';
import { Form, Input, Button, Select, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

export default function TestPage2Container() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        message.success('Vote Created Successfully!');
        console.log('Form Values:', values);
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-xl font-bold text-center mb-4 pt-4">Vote</h1>

            <div className="bg-[#F0F5FF] text-black px-7 py-4 mb-6">
                <span className='font-bold text-[#2F54EB]'>10 FAO</span> will be deducted when voting is
                generated (Amount: 9 FAO)
            </div>

            <div className='p-5'>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="max-w-lg mx-auto"
                >
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select placeholder="Birthday AD">
                            <Select.Option value="birthday">Birthday AD</Select.Option>
                            <Select.Option value="wedding">Wedding AD</Select.Option>
                            <Select.Option value="event">Event AD</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Vote Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input placeholder="Title" />
                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false}
                            className='h-[100px]'
                        >
                            <Button icon={<UploadOutlined />} className='w-[460px] h-[100px]'>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input the description!' }]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Please write down a description of the event"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Start Date"
                        name="startDate"
                        rules={[{ required: true, message: 'Please select the start date!' }]}
                    >
                        <DatePicker className="w-full" />
                    </Form.Item>

                    <Form.Item className="text-center w-full">
                        <Button type="primary" htmlType="submit" className='w-full'>
                            Create Vote
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}