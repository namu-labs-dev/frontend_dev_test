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
  Image,
  Upload,
} from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {
  setVoteFormData: (data: any) => void;
};

export const PageWithVoteFormFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <div>
      <div className="flex h-[84.37px] justify-left items-center px-4 text-lg bg-[#F0F5FF]">
        <p className="font-medium">
          <strong className="text-[#2F54EB]">10 FAO</strong> will be deducted when voting is generated (Amount : 9 FAO)
        </p>
      </div>
      <Form
        form={form}
        labelCol={{ span: "auto" }}
        wrapperCol={{ span: "auto" }}
        onFieldsChange={(changedFields) => {
          props.setVoteFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData,
            ),
          );
        }}
        layout="vertical"
        style={{ maxWidth: "auto", padding: 20, }}
        onFinish={onFinish}
        className="font-medium" //The font size does not change, even after going through internal packages like antd.
      > 
        <Form.Item label="Category" name="Category">
          <Select placeholder="Birthday AD" style={{ height: "55px" }}>
            <Select.Option value="birthdayAD">Birthday AD</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Vote title" name="Vote Title">
          <Input className="h-[55px] font-normal" placeholder="Title"/>
        </Form.Item>
        <Form.Item label='Image' name='image' className="font-medium">
          <div className='flex h-[184px] items-center justify-center rounded-lg bg-[#F5F5F5]'>
            <Upload 
              name='file'
              listType='picture'
              accept="image/*" //This ensures what can be uploaded will be an image.
              showUploadList={true} //This ensures the user see what was uploaded.
              >
              <SVGAtom iconName='Camera' height={22} width={22} />
            </Upload>
          </div>
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <TextArea 
            rows={7} 
            placeholder="Please write down a description of the event" 
            style={{ fontSize: "17px", padding: 13, fontWeight: "normal" }} 
          />
        </Form.Item>
        <Form.Item label="Start" name="Start">
          <DatePicker
           className="h-[55px] w-full text-3xl font-normal" 
           placeholder="2024-09-06"
           /*style={{ fontSize: "18px" }} Font size cannot be changed in this component*/ 
           />
        </Form.Item>
        <div className="flex w-full h-[54px] items-center justify-center">
        <Button className="w-full" style={{ height: "54px", fontSize: "16px", fontWeight: "normal" }} type="primary" htmlType="submit">
          Create Vote
        </Button>
      </div>
      </Form>
    </div>
  );
}