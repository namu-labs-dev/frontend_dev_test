import { Form } from "antd";
import { AuthTitle } from "./AuthTitle";

type AuthStepThreeProps = {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
};

export const AuthStepThree = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
}: AuthStepThreeProps) => {
  const onFinish = (values: any) => {
    // Update formData with referral input (if provided)
    updateFormData({ ...formData, referral: values.referral || '' }); // Set referral to an empty string if not provided
    nextStep(); // Move to the next step
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-[#FAFAFA] p-5'>
      <Form
        layout='vertical'
        onFinish={onFinish}
        initialValues={formData}
        className='items-cente mt-16 flex max-w-[800px] flex-col'
      >
        <AuthTitle />

        <p className=' mb-8 mt-10 text-center text-xl font-bold leading-[27px] text-black '>
          Enter your friend's referral code here{" "}
          <span className='text-gray-600'>(Optional)</span>
        </p>

        {/* Referral */}
        <Form.Item
          name='referral'
          className='w-full'
          rules={[{ required: false }]} // No requirement rule as it's optional
        >
          <div className='mb-4 mt-3 flex w-full items-center'>
            <input
              type='text'
              className={`flex-1 rounded-lg border border-black p-2 px-5 py-3`}
              placeholder='Enter code and get 00 points'
            />
          </div>
        </Form.Item>

        {/* Submit Button */}
        <button
          type='submit'
          className='absolute bottom-5 w-[85%] rounded-md border-2 border-black bg-[#00FF00] px-6 py-3 text-black lg:relative lg:mt-32 lg:w-full '
        >
          Next
        </button>
      </Form>
    </div>
  );
};
