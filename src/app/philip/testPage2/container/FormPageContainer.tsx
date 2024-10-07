"use client";
import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  Layout,
  Select,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content, Header } from "antd/es/layout/layout";
import { PhilipFormItemAtom } from "~/components/Atoms/FormAtom/PhilipFormItemAtom";
import { PhilipImageUploadAtom } from "~/components/Atoms/FormAtom/PhilipImageUploadAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

export const FormPageContainer = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <div className='flex h-full w-full items-center justify-center bg-[white] px-[16.17px]'>
          <p className='text-center text-[18.68px] font-bold leading-[26.67px] text-black/85'>
            Vote
          </p>
        </div>
      </Header>
      <Content
        style={{
          overflow: "scroll",
          padding: 0,
          gap: "25.66px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          rowGap: "19px",
        }}
      >
        <Alert
          style={{
            paddingLeft: "21.98px",
            paddingRight: "21.98px",
            paddingTop: "13.19px",
            paddingBottom: "13.19px",
            border: 0,
            borderRadius: 0,
          }}
          type='info'
          description={
            <p className='text-[17.58px] font-bold leading-[28.57px] text-black/85'>
              <span className='text-[#2F54EB]'>10 FAO</span> will be deducted
              when voting is generated (Amount : 9 FAO)
            </p>
          }
        />
        <div className='flex flex-col px-[25px] py-[25.66px]'>
          <form
            onSubmit={() => alert("You have succesffully submited the form.")}
            className='space-y-[26.67px]'
          ></form>
          <Form
            form={form}
            layout='vertical'
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
          >
            <PhilipFormItemAtom label='Category'>
              <Select
                style={{
                  height: "55.37px",
                }}
                suffixIcon={
                  <SVGAtom iconName='arrowDown' width={8.79} height={5.05} />
                }
                className='text-[18.68px] leading-[28.57px] placeholder:text-[18.68px] placeholder:leading-[28.57px] placeholder:text-black/25'
                placeholder={
                  <p className='text-[18.68px] leading-[28.57px] text-black/25'>
                    Birthday AD
                  </p>
                }
              >
                <Select.Option value='option1'>Option 1</Select.Option>
              </Select>
            </PhilipFormItemAtom>
            <PhilipFormItemAtom label='Vote Title' name='title'>
              <Input
                style={{
                  height: "55.37px",
                }}
                placeholder='Title'
                className='!p-[13.19px] text-[18.68px] leading-[28.57px] placeholder:text-[18.68px] placeholder:leading-[28.57px] placeholder:text-black/25'
              />
            </PhilipFormItemAtom>
            <PhilipFormItemAtom label='Image'>
              <PhilipImageUploadAtom />
            </PhilipFormItemAtom>
            <PhilipFormItemAtom label='Description' name='description'>
              <TextArea
                rows={7}
                placeholder='Please write down a description of the event'
                className='!p-[13.19px] text-[16.48px] leading-[21.98px] placeholder:text-[16.48px] placeholder:leading-[21.98px] placeholder:text-black/25'
              />
            </PhilipFormItemAtom>
            <PhilipFormItemAtom label='Start' name='start'>
              <DatePicker
                placeholder='2024-09-06'
                className='w-full !p-[13.19px] text-[18.68px] leading-[28.57px] placeholder:text-[18.68px] placeholder:leading-[28.57px] placeholder:text-black/25'
              />
            </PhilipFormItemAtom>
            <div className='flex h-[53.37px] w-full items-center justify-center'>
              <Button
                type='primary'
                htmlType='submit'
                className='!h-full w-full !bg-[#2F54EB] !text-[19.78px] !leading-[26.37px]'
              >
                Create Vote
              </Button>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};
