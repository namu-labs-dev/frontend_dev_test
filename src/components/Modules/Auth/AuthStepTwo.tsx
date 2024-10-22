import { Form } from "antd";
import { AuthTitle } from "./AuthTitle";

type AuthStepTwoProps = {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
};

export const AuthStepTwo = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
}: AuthStepTwoProps) => {
  const onFinish = (values: any) => {
    updateFormData(values); // Update formData with step 2 data
    nextStep(); // Go to next step (or success page)
  };

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      initialValues={formData}
      className='flex min-h-screen max-w-[600] flex-col items-center justify-center bg-[#FAFAFA] px-5 py-5'
    >
      <AuthTitle />
    </Form>
  );
};
