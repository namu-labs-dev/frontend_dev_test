import { Form, DatePicker, Input, Button, message, Select } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
const { TextArea } = Input;

type Props = {
  setFormData: (data: any) => void; // Function to handle form data updates
};

export const PageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm(); // Initialize form

  // Function triggered when form is submitted successfully
  const onFinish = (values: any) => {
    void message.info(JSON.stringify(values)); // Display form values as an info message
  };

  return (
    <div style={{ padding: "0px" }}>
      {/* Info Box displaying details about voting deduction */}
      <div className='rounded-2xl bg-[#F0F5FF] px-9 py-5'>
        <p className='text-left text-lg'>
          <span className='font-semibold text-[#2F54EB]'>10 FAO</span> will be
          deducted when voting is <br /> generated (Amount: 9 FAO)
        </p>
      </div>

      {/* Ant Design Form componen */}
      <Form
        className='h-screen'
        form={form} // Associate form with form state
        labelCol={{ span: 24 }} // Label column size
        wrapperCol={{ span: 24 }} // Input column size
        onFieldsChange={(changedFields) => {
          // Update form data when fields are changed
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }), // Spread previous data and update changed fields
              prevData
            )
          );
        }}
        layout='vertical' // Vertical layout for form labels and inputs
        style={{ maxWidth: 600, padding: "20px" }} // Set form max width
        onFinish={onFinish} // Trigger form submit
      >
        {/* Category Input Field */}
        <Form.Item label='Category' name='Category' className='font-medium'>
          <Select placeholder='Birthday AD' style={{ height: "50px" }}>
            <Select.Option value='category1'>Category 1</Select.Option>
            <Select.Option value='category2'>Category 2</Select.Option>
            <Select.Option value='category3'>Category 3</Select.Option>
          </Select>
        </Form.Item>

        {/* Vote Title Input Field */}
        <Form.Item label='Vote Title' name='Vote Title' className='font-medium'>
          <Input placeholder='Title' style={{ height: "50px" }} />
        </Form.Item>

        {/* Image Input Field */}
        <Form.Item label='Image' name='Image' className='font-medium'>
          <Input
            type='file' // Input type set to file upload
            accept='image/*' // Accept only image files
            id='upload'
            style={{ display: "none" }} // Hide the default input field
          />
          <label
            htmlFor='upload'
            style={{ width: "100%", textAlign: "center" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                textAlign: "center",
                width: "100%",
                height: "200px", // Set height of the clickable area
                paddingLeft: "210px", // Adjust padding for icon positioning
                paddingTop: "130px",
                cursor: "pointer", // Change cursor to pointer
                // Add border
                borderRadius: "10px",
                backgroundColor: "#f5f5f5", // Set background color to white
              }}
            >
              <SVGAtom iconName={"camera"} /> {/* Custom camera icon */}
            </div>
          </label>
        </Form.Item>

        {/* Description Input Field */}
        <Form.Item
          label='Description'
          name='Description'
          className='font-medium'
        >
          <TextArea
            placeholder='Please write down a description of the event'
            rows={7} // Set text area rows to 7
          />
        </Form.Item>

        {/* DatePicker for Start Date */}
        <Form.Item label='Start' name='Start' className='w-full font-medium'>
          <DatePicker
            placeholder='2024-09-06' // Set placeholder date
            style={{ width: "100%", height: "50px" }} // Full width date picker
          />
        </Form.Item>

        {/* Submit Button */}
        <div className='flex w-full items-center justify-center'>
          <Button
            className='w-full'
            type='primary'
            htmlType='submit'
            style={{ height: "40px", backgroundColor: "#2F54EB" }} // Custom button styling
          >
            Create Vote
          </Button>
        </div>
      </Form>
    </div>
  );
};
